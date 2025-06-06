import crypto from "crypto";

export function generateResetToken() {
    return crypto.randomBytes(32).toString("base64url").normalize();
}

export function generateExpireDate() {
    const today = new Date();
    const expired = new Date(today.setDate(today.getDate() + 1));

    return expired;
}
