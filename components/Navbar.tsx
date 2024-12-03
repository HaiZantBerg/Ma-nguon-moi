"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const lastSegment = pathname.split("/").at(-2)?.split("-")[0];

    const noNavBarRoutes = ["khoi"];

    if (lastSegment && noNavBarRoutes.includes(lastSegment)) {
        return null;
    }

    return (
        <div className="bg-[rgba(0,0,0,0.9)] text-white h-16 flex items-center px-10 sm:justify-between justify-center relative z-[20]">
            {/* <Image src="" alt="" /> */}
            <Link href="/" className="flex items-center">
                {/* <div className="bg-white w-10 h-10 mr-2"></div> */}
                <div className="font-bold text-xl">EThems</div>
            </Link>
            {/* <div className="text-sm text-end sm:block hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, reprehenderit?
            </div> */}
        </div>
    );
}
