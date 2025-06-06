"use server";

import {
    changePasswordSchema,
    resetPasswordSchema,
    signInSchema,
    signUpSchema,
} from "./schemas";
import { redirect } from "next/navigation";
import {
    comparePasswords,
    generateSalt,
    hashPassword,
} from "./core/passwordHasher";
import db from "@/lib/prisma/prisma";
import createUserSession, { removeUserFromSession } from "./core/session";
import { cookies } from "next/headers";
import z from "zod/v4";
import { generateExpireDate, generateResetToken } from "./email/resetPassword";
import { sendEmail } from "@/auth/email/sendEmail";
import ResetPassword from "@/../emails/ResetPasswordTemplate";
import { render, pretty } from "@react-email/render";
import { ReactElement } from "react";

export async function signUp(_previous: unknown, unsafeData: FormData) {
    const formUsername = unsafeData.get("username") as string;
    const formEmail = unsafeData.get("email") as string;
    const formPassword = unsafeData.get("password");

    const formField = {
        username: formUsername,
        email: formEmail,
    };

    const safeData = signUpSchema.safeParse({
        username: formUsername,
        email: formEmail,
        password: formPassword,
    });

    if (!safeData.success) {
        const tree = z.treeifyError(safeData.error);

        return {
            error: {
                username: tree.properties?.username?.errors,
                password: tree.properties?.password?.errors,
                email: tree.properties?.email?.errors,
            },
            formField,
        };
    }

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

        const user = await db.user.create({
            data: {
                username: safeData.data.username,
                password: hashedPassword,
                email: safeData.data.email,
                salt,
            },
        });

        if (user === null)
            return {
                error: { general: "Không thể tạo tài khoản." },
                formField,
            };

        await createUserSession(user, await cookies());
    } catch {
        return {
            error: { general: "Không thể tạo tài khoản." },
            formField,
        };
    }

    redirect("/home");
}

export async function signIn(_previous: unknown, unsafeData: FormData) {
    const formEmail = unsafeData.get("email") as string;
    const formPassword = unsafeData.get("password");

    const formField = {
        email: formEmail,
    };

    const { success, data } = signInSchema.safeParse({
        email: formEmail,
        password: formPassword,
    });

    if (!success)
        return { error: "Email hoặc mật khẩu không hợp lệ.", formField };

    const user = await db.user.findUnique({
        where: {
            email: data.email,
        },
        select: {
            username: true,
            password: true,
            salt: true,
            id: true,
            email: true,
            role: true,
        },
    });

    if (!user)
        return {
            error: "Tài khoản không tồn tại, hãy tạo một tài khoản mới.",
            formField,
        };

    const isCorrectPassword = await comparePasswords({
        hashedPassword: user.password,
        password: data.password,
        salt: user.salt,
    });

    if (!isCorrectPassword)
        return { error: "Email hoặc mật khẩu không đúng.", formField };

    await createUserSession(user, await cookies());

    redirect("/home");
}

export async function logOut() {
    await removeUserFromSession(await cookies());

    redirect("/");
}

export async function resetPassword(_previous: unknown, unsafeData: FormData) {
    const formEmail = unsafeData.get("email") as string;

    const formField = {
        email: formEmail,
    };

    const { success, data } = resetPasswordSchema.safeParse({
        email: formEmail,
    });

    if (!success)
        return { error: "Email không hợp lệ.", success: false, formField };

    const user = await db.user.findUnique({
        where: {
            email: data.email,
        },
    });

    if (!user)
        return {
            error: "Tài khoản không tồn tại, hãy tạo một tài khoản mới.",
            success: false,
            formField,
        };

    const resetPasswordToken = generateResetToken();
    const expiredDate = generateExpireDate();

    await db.user.update({
        where: {
            id: user.id,
        },
        data: {
            resetPasswordToken,
            resetPasswordTokenExpiry: expiredDate,
        },
    });

    const html = await pretty(
        await render(
            ResetPassword({
                email: formEmail,
                resetPasswordToken,
            }) as ReactElement,
        ),
    );

    sendEmail({
        from: "Ethems <info@ethems.com>",
        to: [formEmail],
        subject: "Đặt lại mật khẩu",
        html,
    });

    return {
        error: undefined,
        success: true,
        formField,
    };
}

export async function changePassword(
    _previous: unknown,
    unsafeData: FormData,
    userId: string,
) {
    const formPassword = unsafeData.get("password");

    const safeData = changePasswordSchema.safeParse({
        password: formPassword,
    });

    if (!safeData.success) {
        const tree = z.treeifyError(safeData.error);

        return {
            error: tree.properties?.password?.errors,
        };
    }

    try {
        const salt = generateSalt();
        const hashedPassword = await hashPassword(safeData.data.password, salt);

        const user = await db.user.update({
            where: {
                id: userId,
            },
            data: {
                password: hashedPassword,
            },
        });

        if (user === null)
            return {
                error: "Không thể đặt mật khẩu",
            };

        await createUserSession(user, await cookies());
    } catch {
        return {
            error: "Không thể đặt mật khẩu",
        };
    }
}
