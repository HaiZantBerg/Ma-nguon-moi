"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { capitalizeFirst } from "../utils/capitalizeFirst";

export default function Header() {
    const pathname = usePathname().split("/")[3];

    return (
        <header className="text-6xl font-bold font-['Chakra_Petch']">
            {capitalizeFirst(pathname)}
        </header>
    );
}
