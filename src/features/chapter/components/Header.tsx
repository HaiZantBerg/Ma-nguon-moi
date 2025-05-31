"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { capitalizeFirst } from "../utils/capitalizeFirst";

export default function Header() {
    const pathname = usePathname().split("/")[3];

    return (
        <header className="md:text-6xl text-5xl font-bold font-['Chakra_Petch']">
            {capitalizeFirst(pathname)}
        </header>
    );
}
