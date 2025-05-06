import { Navbar } from "@/components";
import React, { ReactNode } from "react";

type UserLayoutProps = {
    children: ReactNode;
};

export default function UserLayout({ children }: UserLayoutProps) {
    return (
        <>
            <Navbar></Navbar>
            {children}
        </>
    );
}
