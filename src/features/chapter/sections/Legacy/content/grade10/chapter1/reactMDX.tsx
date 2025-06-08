"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { motion } from "motion/react";

export function ToggleLesson() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPart = searchParams.get("part");

    const toggleItems = [
        { value: "menh-de", label: "Mệnh đề" },
        { value: "tap-hop", label: "Tập hợp" },
    ];

    return (
        <div className="absolute left-0 bottom-[calc(100%+1rem)] w-fit flex gap-2">
            {toggleItems.map(({ value, label }, id) => (
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
        <Link href={href} replace className="relative">
            <motion.div
                className="rounded-2xl sm:px-7 sm:py-2 py-2 px-5 text-white relative z-10 font-medium sm:text-lg"
                initial={
                    isActive
                        ? { top: "5px", background: "#606060" }
                        : { top: "0px", background: "#737373" }
                }
                animate={
                    isActive
                        ? { background: "#737373", top: "0px" }
                        : { background: "#606060", top: "5px" }
                }
            >
                {label}
            </motion.div>
            <div className="bg-[#474747] rounded-2xl absolute top-[5px] left-0 size-full" />
        </Link>
    );
}
