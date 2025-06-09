import db from "@/lib/prisma/prisma";

export async function checkExpiry(resetToken: string) {
    const user = await db.user.findUnique({
        where: {
            resetPasswordToken: resetToken,
        },
        select: {
            resetPasswordTokenExpiry: true,
            salt: true,
            password: true,
        },
    });

    if (!user) return { error: "Người dùng không tồn tại" };

    const { resetPasswordTokenExpiry } = user;

    if (!resetPasswordTokenExpiry) return { error: "Token đã hết hạn" };

    const today = new Date();

    if (today > resetPasswordTokenExpiry) return { error: "Token đã hết hạn" };
}
