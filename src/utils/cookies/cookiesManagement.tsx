import { cookies } from "next/headers";

export async function getToken(tokenName: string) {
    const cookieStore = await cookies();

    const token = cookieStore.get(tokenName);

    return token?.value;
}

export async function setToken(
    tokenData: string,
    tokenName: string,
    tokenAge: number,
) {
    const cookieStore = await cookies();

    cookieStore.set({
        name: tokenName,
        httpOnly: true,
        value: tokenData,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
        maxAge: tokenAge,
    });
}

export async function deleteTokens(lsOfToken: string[]) {
    const cookieStore = await cookies();

    lsOfToken.forEach((token) => {
        cookieStore.delete(token);
    });
}
