"use server";

import { z } from "zod";
import { sessionSchema } from "../schemas";
import crypto from "crypto";
import { redisClient } from "@/redis/redis";

const SESSION_EXP = 60 * 60 * 24 * 7;
const SESSION_COOKIE = "auth-session-id";

type Cookies = {
    set: (
        key: string,
        value: string,
        options: {
            secure?: boolean;
            httpOnly?: boolean;
            sameSite?: "strict" | "lax";
            expires?: number;
        },
    ) => void;
    get: (key: string) => { name: string; value: string } | undefined;
    delete: (key: string) => void;
};

export default async function createUserSession(
    user: z.infer<typeof sessionSchema>,
    cookies: Pick<Cookies, "set">,
) {
    const sessionId = crypto.randomBytes(512).toString("hex").normalize();

    await redisClient.set(`session:${sessionId}`, sessionSchema.parse(user), {
        ex: SESSION_EXP,
    });

    setCookie(sessionId, cookies);
}

async function setCookie(sessionId: string, cookies: Pick<Cookies, "set">) {
    cookies.set(SESSION_COOKIE, sessionId, {
        secure: true,
        httpOnly: true,
        sameSite: "lax",
        expires: Date.now() + SESSION_EXP * 1000,
    });
}

export async function getUserFromSession(cookies: Pick<Cookies, "get">) {
    const seesionId = cookies.get(SESSION_COOKIE)?.value;

    return seesionId ? getUserSessionById(seesionId) : null;
}

async function getUserSessionById(sessionId: string) {
    const rawUser = await redisClient.get(`session:${sessionId}`);

    const { success, data } = sessionSchema.safeParse(rawUser);

    return success ? data : null;
}
