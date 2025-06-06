import { getCurrentUser } from "@/auth/getCurUser";
import { Hero } from "@/features/landing";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
    const user = await getCurrentUser();

    if (user) redirect("/home");

    return (
        <main className="w-full">
            <Hero />
        </main>
    );
}
