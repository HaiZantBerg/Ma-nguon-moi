"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/tailwind/tailwindMerge";
import style from "@/features/chapter/sections/Legacy/assets/renderedContentContainer.module.css";

export function ToggleLesson() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPart = searchParams.get("part");

    const toggleItems = [
        { value: "menh-de", label: "Mệnh đề" },
        { value: "tap-hop", label: "Tập hợp" },
    ];

    return (
        <div
            className={cn(
                style.toggle,
                "absolute left-0 bottom-[calc(100%+1rem)] w-full flex gap-2",
            )}
        >
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
                className="rounded-2xl px-7 py-2 bg-white relative z-10 font-medium text-lg"
                initial={
                    isActive
                        ? { top: "5px", background: "rgb(200, 200, 200)" }
                        : { top: "0px", background: "rgb(255, 255, 255)" }
                }
                animate={
                    isActive
                        ? { background: "rgb(255, 255, 255)", top: "0px" }
                        : { background: "rgb(200, 200, 200)", top: "5px" }
                }
            >
                {label}
            </motion.div>
            <div className="bg-[#a1a1a1] rounded-2xl absolute top-[5px] left-0 size-full" />
        </Link>
    );
}
