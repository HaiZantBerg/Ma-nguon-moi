import { getCurrentUser } from "@/auth/getCurUser";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

type AuthLayoutProps = {
    children: ReactNode;
};

export default async function AuthLayout({ children }: AuthLayoutProps) {
    const user = await getCurrentUser();

    if (user) redirect("/home");

    return <>{children}</>;
}
