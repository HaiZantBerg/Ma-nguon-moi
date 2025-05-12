"use server";

import { signUpSchema } from "./schemas";
import { redirect } from "next/navigation";
import { generateSalt, hashPassword } from "./core/passwordHasher";
import db from "@/lib/prisma/prisma";
import { createUserSession } from "./core/session";

export async function signUp(previous: unknown, unsafeData: FormData) {
    const formUsername = unsafeData.get("username") as string;
    const formEmail = unsafeData.get("email") as string;
    const formPassword = unsafeData.get("password");

    const safeData = signUpSchema.safeParse({
        username: formUsername,
        email: formEmail,
        password: formPassword,
    });

    if (!safeData.success) {
        const { username, password, email } = safeData.error.format();

        return {
            error: {
                username: username?._errors,
                password: password?._errors,
                email: email?._errors,
            },
            formField: {
                username: formUsername,
                email: formEmail,
            },
        };
    }

    const formField = {
        username: safeData.data.username,
        email: safeData.data.email,
    };

    const existingUser = await db.user.findUnique({
        where: {
            email: safeData.data.email,
        },
    });

    if (existingUser)
        return {
            error: {
                email: ["Email đã được sử dụng"],
            },
            formField,
        };

    try {
        const salt = generateSalt();
        const hashedPassword = await hashPassword(safeData.data.password, salt);

        // const user = await db.user.create({
        //     data: {
        //         username: safeData.data.username,
        //         password: hashedPassword,
        //         email: safeData.data.email,
        //         salt,
        //     },
        // });

        // if (user === null)
        //     return {
        //         error: { general: "Không thể tạo tài khoản" },
        //         formField,
        //     };

        await createUserSession();
    } catch {
        return {
            error: { general: "Không thể tạo tài khoản" },
            formField,
        };
    }

    redirect("/home");
}
