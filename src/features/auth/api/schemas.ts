import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
});

export const signUpSchema = z.object({
    username: z
        .string()
        .min(6, "Tên người dùng phải có ít nhất 6 kí tự")
        .max(20, "Tên người dùng chỉ nên chứa tối đa 20 kí tự")
        .superRefine((val, ctx) => {
            if (!val.length)
                ctx.addIssue({
                    code: z.ZodIssueCode.invalid_type,
                    expected: "string",
                    received: "null",
                    message: "Tên người dùng không được để trống",
                });

            if (!/[a-zA-Z]+$/.test(val)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Tên người dùng chỉ nên chứa chữ cái",
                });
            }
        }),
    email: z.string().email("Email không hợp lệ hoặc đã tồn tại"),
    password: z
        .string()
        .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
        .max(20, "Mật khẩu chỉ nên chứa tối đa 20 kí tự"),
});

export const sessionSchema = z.object({
    id: z.string(),
    role: z.enum(["USER", "ADMIN"]),
});
