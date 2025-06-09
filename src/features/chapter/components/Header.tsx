"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { capitalizeFirst } from "@/utils/capitalizeFirst";
import { QuesExcla, Noticed, Sparkle, Quill } from "../assets";
import { cn } from "@/lib/tailwind/tailwindMerge";

const decoration: Record<string, { className: string; left: any; right: any }> =
    {
        legacy: {
            className:
                "min-[48rem]:text-6xl min-[26.5rem]:text-5xl text-[2.5rem]",
            left: () => <></>,
            right: () => (
                <Quill className="absolute min-[26.5rem]:h-[120%] h-[90%] left-full min-[26.5rem]:-top-2 -top-1 transform-[scale(-1,1)]" />
            ),
        },
        funfacts: {
            className:
                "min-[48rem]:text-6xl min-[26.5rem]:text-5xl text-[2.5rem] ",
            left: () => (
                <Sparkle className="absolute min-[26.5rem]:h-[90%] h-[55%] min-[26.5rem]:right-[calc(100%-0.4rem)] right-[calc(100%-0.2rem)] min-[26.5rem]:top-5 top-6 transform-[scale(-1,1)]" />
            ),
            right: () => (
                <Noticed className="absolute min-[26.5rem]:h-[140%] h-[80%] min-[26.5rem]:left-[calc(100%-2rem)] left-[calc(100%-1rem)] min-[26.5rem]:-top-8 -top-2" />
            ),
        },
        quizzes: {
            className:
                "min-[48rem]:text-6xl min-[26.5rem]:text-5xl text-[2.25rem] ",
            left: () => (
                <QuesExcla className="absolute min-[75rem]:h-[140%] min-[26.5rem]:h-[120%] h-[80%] right-full min-[75rem]:-top-1 min-[26.5rem]:top-1 top-3 transform-[scale(-1,1)]" />
            ),
            right: () => (
                <QuesExcla className="absolute min-[75rem]:h-[140%] min-[26.5rem]:h-[120%] h-[80%] left-full min-[75rem]:-top-1 min-[26.5rem]:top-1 top-3" />
            ),
        },
    };

export default function Header() {
    const pathname = usePathname().split("/")[3];

    const {
        left: LeftDeco,
        right: RightDeco,
        className,
    } = decoration[pathname];

    return (
        <header
            className={cn(
                className,
                "font-bold relative font-['Chakra_Petch']",
            )}
        >
            <LeftDeco />
            {capitalizeFirst(pathname)}
            <RightDeco />
        </header>
    );
}
