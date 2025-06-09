import { getCurrentUser } from "@/auth/getCurUser";
import React, { ReactNode } from "react";

type ProtectedLayoutProps = {
    children: ReactNode;
};

export default async function ProtectedLayout({
    children,
}: ProtectedLayoutProps) {
    await getCurrentUser({ redirectIfNotFound: true });

    return <>{children}</>;
}
