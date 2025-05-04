import { cn } from "@/lib/tailwind/tailwindMerge";
import Link, { LinkProps } from "next/link";
import React, { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProp = {
    children: ReactNode;
    className?: string;
    variant: "blue" | "purple";
} & LinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CoolLookingBtn({
    children,
    variant,
    className,
    ...props
}: ButtonProp) {
    const variants = {
        blue: "bg-[linear-gradient(270deg,rgba(200,231,255,0)87%,rgba(84,139,255,1)100%),linear-gradient(90deg,rgba(74,34,93,0)87%,rgba(84,139,255,1)100%),linear-gradient(180deg,rgba(200,231,255,0)60%,rgba(84,139,255,1)100%)] border-[#5c6bc0] text-[#c1d4ff] hover:border-[#7b87cc] hover:text-[#eff4ff] hover:shadow-[inset_0px_0px_12px_rgba(238,243,255,0.5),0px_0px_8px_rgba(238,243,255,0.4)]",
        purple: "bg-[linear-gradient(270deg,rgba(145,0,189,0)87%,rgba(218,97,255,1)100%),linear-gradient(90deg,rgba(145,0,189,0)87%,rgba(218,97,255,1)100%),linear-gradient(180deg,rgba(145,0,189,0)60%,rgba(218,97,255,1)100%)] border-[#b26fcc] text-[#e1caff] shadow-[inset_0px_0px_0px_rgba(247,238,255,0.5),0px_0px_3px_rgba(247,238,255,0.4)] hover:border-[#ac7bcc] hover:text-[#f9efff] hover:shadow-[inset_0px_0px_12px_rgba(247,238,255,0.5),0px_0px_12px_rgba(247,238,255,0.4)] sm:shadow-[inset_0px_0px_0px_rgba(247,238,255,0.5),0px_0px_4px_rgba(247,238,255,0.5)]",
    };

    return (
        <Link
            className={cn(
                variants[variant],
                className,
                "relative z-10 mt-5 flex h-fit w-fit items-center justify-center overflow-hidden rounded-xl border px-[1.3rem] py-[0.6rem] text-base text-[0.9rem] text-nowrap transition-all duration-200 ease-in select-none sm:mt-8 sm:px-[1.5rem] sm:py-[0.75rem] sm:text-[1.2rem]",
            )}
            {...props}
        >
            <div className="absolute top-0 left-0 z-[-1] h-full w-full backdrop-blur-lg" />
            {children}
        </Link>
    );
}
