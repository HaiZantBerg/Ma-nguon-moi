"use server";

import { z } from "zod";
import { sessionSchema } from "../schemas";
import crypto from "crypto";
import { redisClient } from "@/redis/redis";
import { cookies } from "next/headers";

const SESSION_EXP = 60 * 60 * 24 * 7;
const SESSION_COOKIE = "auth-session-id";

export async function createUserSession(user?: z.infer<typeof sessionSchema>) {
    const sessionId = crypto.randomBytes(512).toString("hex").normalize();

    // await redisClient.set(`session:${sessionId}`, sessionSchema.parse(user), {
    //     ex: SESSION_EXP,
    // });

    setCookie(sessionId);
}

async function setCookie(sessionId: string) {
    console.log(sessionId);

    const cookieStore = await cookies();

    cookieStore.set(SESSION_COOKIE, sessionId, {
        secure: true,
        httpOnly: true,
        sameSite: "lax",
        expires: Date.now() + SESSION_EXP * 1000,
    });
}
