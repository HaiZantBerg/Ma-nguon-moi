"use client";

import React from "react";
// import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    // const pathname = usePathname();
    // const lastSegment = pathname.split("/").at(-1);

    // Ktra nếu có lastSegment thì không render navBar
    // const noNavBarRoutes = ["login", "", "register"];

    return (
        <div
            className="fixed top-0 left-0 z-[100] flex h-16 w-full items-center justify-center px-10 text-white backdrop-blur-xl sm:justify-between"
            style={{
                backgroundColor: "rgba(0,0,0,0.85)",
            }}
        >
            <div className="flex items-center gap-5">
                <Link href="/" className="flex items-center">
                    <span className="text-xl font-bold">EThems</span>
                </Link>
                {/* Thêm các đường dẫn tới các trang khác */}
            </div>
        </div>
    );
}
