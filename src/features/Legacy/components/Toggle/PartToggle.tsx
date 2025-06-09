"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

type PartToggleProps = {
    toggle: { value: string; label: string }[];
};

export default function PartToggle({ toggle }: PartToggleProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPart = searchParams.get("part");

    return (
        <div className="absolute left-0 bottom-[calc(100%+1rem)] text-nowrap max-w-full overflow-x-auto overflow-y-hidden flex gap-2">
            {toggle.map(({ value, label }, id) => (
                <ToggleButton
                    key={id}
                    label={label}
                    isActive={currentPart === value}
                    href={{
                        pathname,
                        query: { part: value },
                    }}
                />
            ))}
        </div>
    );
}

function ToggleButton({
    label,
    isActive,
    href,
}: {
    label: string;
    isActive: boolean;
    href: { pathname: string; query: { part: string } };
}) {
    return (
        <Link href={href} replace className="relative pb-[5px]">
            <motion.div
                className="rounded-2xl sm:px-7 sm:py-2 py-2 px-5 text-white relative top-[5px] z-10 font-medium sm:text-lg bg-[#606060]"
                animate={{
                    background: isActive ? "#737373" : "#606060",
                    y: isActive ? -5 : 0,
                }}
            >
                {label}
            </motion.div>
            <div className="bg-[#474747] rounded-2xl absolute top-[5px] left-0 w-full h-[calc(100%-5px)]" />
        </Link>
    );
}
