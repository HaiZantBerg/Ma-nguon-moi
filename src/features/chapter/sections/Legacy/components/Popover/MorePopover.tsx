"use client";

import React, { HTMLAttributes, ReactNode, useId } from "react";
import {
    MPContext,
    useMPContext,
    useMPContextValues,
} from "../../context/MPContext";
import { motion } from "motion/react";
import { cn } from "@/lib/tailwind/tailwindMerge";
import Link, { LinkProps } from "next/link";
import Image, { StaticImageData } from "next/image";

type MPProps = {
    children: ReactNode;
};

export default function MP({ children, li }: MPProps & { li?: boolean }) {
    const id = useId();

    const { values } = useMPContextValues(id);

    return (
        <MPContext.Provider value={values}>
            <MPWrappedByCtx>
                <div
                    className={cn(
                        li
                            ? "min-[1100px]:!ml-[11.5rem] !ml-[1.5rem] min-[1100px]:!mr-[10rem]"
                            : "min-[1100px]:!mx-[10rem]",
                        "min-[1000px]:mb-[2rem] mb-[1rem] text-pretty relative text-sm min-[768px]:text-base min-[1000px]:text-[1.05rem]",
                    )}
                >
                    {children}
                </div>
            </MPWrappedByCtx>
        </MPContext.Provider>
    );
}

function MPWrappedByCtx({ children }: MPProps) {
    const { handleTrigger, scope, openP } = useMPContext();

    return (
        <div ref={scope} className="text-[#6a6a0b] inline">
            {openP && (
                <div
                    className="fixed top-0 left-0 z-10 w-screen h-dvh"
                    onClick={() => handleTrigger(false)}
                />
            )}
            {children}
        </div>
    );
}

MP.Trigger = function MPTrigger({ children }: MPProps) {
    const { handleTrigger, openP, id } = useMPContext();

    return (
        <motion.div
            className={cn(
                openP ? "z-30" : "z-0",
                "border border-[#6a6a0b] font-medium w-fit hover:bg-[#feffa8] relative mr-[15px] px-4 py-2 transition-all duration-200 ease-in cursor-pointer select-none",
            )}
            style={{
                scrollMargin: "10dvh",
            }}
            onClick={() => {
                handleTrigger(true);
            }}
            initial={{
                background: "#fdfbdf",
                borderRadius: "15px 15px 15px 15px",
                borderBottomColor: "#6a6a0b",
            }}
            animate={{
                background: openP ? "#ffffc7" : "#fdfbdf",
            }}
            id={`trigger${id}`}
        >
            <span>{children}</span>
        </motion.div>
    );
};

MP.Content = function MPContent({
    children,
    className,
}: HTMLAttributes<HTMLDivElement>) {
    const { openP, handleTrigger } = useMPContext();

    return (
        <div
            id="contentTable"
            className="absolute h-0 w-full z-20 overflow-hidden translate-y-[-2px]"
        >
            {openP && (
                <div className="bg-[#ffffc7] border border-[#6a6a0b] h-full rounded-[0px_15px_15px_15px] w-full px-5 pt-4 pb-5">
                    <div
                        className={cn(
                            className,
                            "[&_p]:!mb-0 [&_ul]:!mb-0 [&_ol]:!mb-0 flex flex-col gap-4",
                        )}
                    >
                        {children}
                    </div>
                    <button
                        className="border text-lg mt-3 border-[#6a6a0b] py-1 font-semibold px-5 rounded-full"
                        onClick={() => {
                            handleTrigger(false);
                        }}
                    >
                        Đóng
                    </button>
                </div>
            )}
        </div>
    );
};

MP.Image = function MPImage({
    className,
    src,
}: {
    className: string;
    src: StaticImageData;
}) {
    return (
        <div className={cn(className, "mx-auto my-4")}>
            <Image src={src} alt="" className="w-full" />
        </div>
    );
};

MP.Link = function IPLink({
    className,
    ...props
}: LinkProps & HTMLAttributes<HTMLAnchorElement>) {
    return (
        <Link
            className={cn(
                className,
                "underline underline-offset-2 font-medium inline",
            )}
            {...props}
        />
    );
};
