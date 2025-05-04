import { deleteTokens } from "@/utils/cookies/cookiesManagement";
import { NextResponse } from "next/server";

export async function POST() {
    deleteTokens([]);

    return NextResponse.json({}, { status: 200 });
}
