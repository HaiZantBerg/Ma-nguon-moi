"use server";

import { setAccessToken, setRefreshToken } from "@/lib/auth/cookiesManagement";
import { NextResponse } from "next/server";

const DJANGO_LOGIN_API = "http://localhost:8000/api/token/pair";

export async function POST(request: Request) {
    const requestData = await request.json();

    const jsonData = JSON.stringify(requestData);

    const requestDjangoApi = await fetch(DJANGO_LOGIN_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonData,
    });

    const responseData = await requestDjangoApi.json();

    if (requestDjangoApi.ok) {
        const { access, refresh } = responseData;

        setAccessToken(access);
        setRefreshToken(refresh);

        return NextResponse.json({}, { status: 200 });
    }

    return NextResponse.json({}, { status: 400 });
}
