import { z } from "zod/v4";

export const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(6).max(30),
});

export const resetPasswordSchema = z.object({
    email: z.email(),
});

export const changePasswordSchema = z.object({
    password: z.string().min(6).max(30),
});

export const signUpSchema = z.object({
    username: z
        .string({
            error: (iss) =>
                iss === undefined ? "Tên người dùng không được để trống." : "",
        })
        .min(6, "Tên người dùng phải có ít nhất 6 kí tự.")
        .max(20, "Tên người dùng chỉ nên chứa tối đa 20 kí tự.")
        .check((ctx) => {
            const { value, issues } = ctx;

            if (!/^[a-zA-Z0-9]+$/.test(value))
                issues.push({
                    code: "custom",
                    message:
                        "Tên người dùng không hợp lệ (không sử dụng các kí tự đặc biệt)",
                    input: value,
                });
        }),
    email: z.email({
        error: (iss) =>
            iss.input === undefined
                ? "Email không được để trống."
                : "Email không hợp lệ hoặc đã tồn tại.",
    }),
    password: z
        .string()
        .max(30, "Mật khẩu chỉ nên chứa tối đa 30 kí tự.")
        .check((ctx) => {
            const { value, issues } = ctx;

            if (!value.length)
                issues.push({
                    code: "invalid_type",
                    expected: "string",
                    received: "null",
                    message: "Mật khẩu không được để trống",
                    input: value,
                });
            else if (value.length < 6)
                issues.push({
                    code: "too_small",
                    minimum: 6,
                    origin: "string",
                    message: "Mật khẩu phải có ít nhất 6 kí tự.",
                    input: value,
                });
        }),
});

export const sessionSchema = z.object({
    id: z.string(),
    role: z.enum(["USER", "ADMIN"]),
});
