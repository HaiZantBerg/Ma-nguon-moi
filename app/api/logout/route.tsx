import { deleteTokens } from "@/lib/auth/cookiesManagement";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    deleteTokens();

    return NextResponse.json({}, { status: 200 });
}
