import { cookies } from "next/headers";

const TOKEN_AGE = 3600;
const ACCESS_TOKEN = "access-token";
const REFRESH_TOKEN = "refresh-token";

export async function getAccessToken() {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get(ACCESS_TOKEN);

    return accessToken?.value;
}

export async function getRefreshToken() {
    const cookieStore = await cookies();

    const refreshToken = cookieStore.get(REFRESH_TOKEN);

    return refreshToken?.value;
}

export async function setAccessToken(accessTokenData: string) {
    const cookieStore = await cookies();

    cookieStore.set({
        name: ACCESS_TOKEN,
        httpOnly: true,
        value: accessTokenData,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: TOKEN_AGE,
    });
}

export async function setRefreshToken(refreshTokenData: string) {
    const cookieStore = await cookies();

    cookieStore.set({
        name: REFRESH_TOKEN,
        httpOnly: true,
        value: refreshTokenData,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: TOKEN_AGE,
    });
}

export async function deleteTokens() {
    const cookieStore = await cookies();

    cookieStore.delete(ACCESS_TOKEN);
    cookieStore.delete(REFRESH_TOKEN);
}
