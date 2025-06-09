"use client";

import React, { HTMLAttributes, ReactNode, useId } from "react";
import {
    IPContext,
    useIPContext,
    useIPContextValues,
} from "../../context/IPContext";
import { motion } from "motion/react";
import { cn } from "@/lib/tailwind/tailwindMerge";
import Link, { LinkProps } from "next/link";
import Image, { StaticImageData } from "next/image";

type IPProps = {
    children: ReactNode;
};

export default function IP({
    children,
    li,
    am = 1,
}: IPProps & { li?: boolean; am?: number }) {
    return (
        <div
            className="min-[1000px]:mb-[1rem] mb-[0.5rem] text-pretty relative text-sm min-[768px]:text-base min-[1000px]:text-[1.05rem]"
            style={li ? { paddingLeft: `${1.5 * am}rem` } : undefined}
        >
            {children}
        </div>
    );
}

function IPWrappedByCtx({ children }: IPProps) {
    const { handleTrigger, scope, openP } = useIPContext();

    return (
        <div ref={scope} className="inline text-white">
            {openP && (
                <>
                    <div
                        className="fixed top-0 left-0 z-10 w-screen h-dvh test"
                        onClick={() => handleTrigger(false)}
                    />
                    <div className="fixed top-0 left-0 w-screen h-dvh bg-[#fafafa] -z-10 pointer-events-none" />
                </>
            )}
            {children}
        </div>
    );
}

IP.Main = function IPMain({ children }: IPProps) {
    const id = useId();

    const { values } = useIPContextValues(id);

    return (
        <IPContext.Provider value={values}>
            <IPWrappedByCtx>{children}</IPWrappedByCtx>
        </IPContext.Provider>
    );
};

const lineVariants = {
    hover: {
        width: "100%",
    },
};

IP.Trigger = function IPTrigger({ children }: IPProps) {
    const { handleTrigger, openP, id } = useIPContext();

    return (
        <motion.div
            className={cn(
                openP ? "z-20" : "z-0",
                "text-nowrap rounded-[8px] leading-[2rem] hover:bg-[#ff8b38] inline relative px-2 pt-1 pb-1.5 transition-all duration-200 ease-in cursor-pointer select-none",
            )}
            style={{
                scrollMargin: "25dvh",
            }}
            onClick={() => {
                handleTrigger(true);
            }}
            initial={{
                background: "#ff6430",
            }}
            animate={{
                background: openP ? "#ff8b38" : "#ff6430",
            }}
            whileHover="hover"
            id={`trigger${id}`}
            transition={{
                ease: "easeIn",
                duration: 0.1,
            }}
        >
            {children}
            <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[75%] h-[2px] bg-[#ffd298bf] flex justify-center">
                <motion.div
                    className="w-full h-full bg-[#fffbf6bf]"
                    initial={{ width: "0%" }}
                    variants={openP ? {} : lineVariants}
                    animate={{ width: openP ? "100%" : "0%" }}
                />
            </div>
        </motion.div>
    );
};

IP.Content = function IPContent({
    children,
    className,
}: HTMLAttributes<HTMLDivElement>) {
    const { openP, handleTrigger } = useIPContext();

    return (
        <div
            id="contentTable"
            className="absolute h-0 w-full z-20 overflow-hidden -translate-y-[2px] min-[768px]:-translate-y-base-[1px] min-[1000px]:translate-y-0"
        >
            <div className="pb-[3rem] h-full">
                {openP && (
                    <div className="h-full rounded-[15px] bg-[#ff8b38] w-full px-5 pt-3 pb-5">
                        <div
                            className={cn(
                                className,
                                "[&_p]:!mb-0 [&_ul]:!mb-0 [&_ol]:!mb-0 flex flex-col gap-4",
                            )}
                        >
                            {children}
                        </div>
                        <button
                            className="border-2 mt-3 border-white py-1 font-semibold px-5 rounded-full"
                            onClick={() => {
                                handleTrigger(false);
                            }}
                        >
                            Đóng
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

IP.Image = function IPImage({
    className,
    src,
    fi,
}: {
    className?: string;
    src: StaticImageData;
    fi: boolean;
}) {
    return (
        <div className={cn(className, fi ? "min-w-[30%]" : "", "mx-auto my-4")}>
            <Image src={src} alt="" className="w-full" />
        </div>
    );
};

IP.Link = function IPLink({
    className,
    ff,
    ...props
}: { ff: boolean } & LinkProps & HTMLAttributes<HTMLAnchorElement>) {
    if (ff)
        return (
            <motion.div
                className="inline-block relative bg-indigo-500 hover:bg-indigo-600 rounded-[8px] transition-all duration-200 ease-in"
                whileHover="hover"
            >
                <Link
                    className="text-nowrap text-white leading-[2rem] px-2 pt-1 pb-1.5 cursor-pointer select-none"
                    {...props}
                />
                <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-[75%] h-[2px] bg-[#98a7ffbf] flex justify-center">
                    <motion.div
                        className="w-full h-full bg-[#f6f7ffbf]"
                        initial={{ width: "0%" }}
                        variants={lineVariants}
                    />
                </div>
            </motion.div>
        );

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

IP.Ps = function IPPs({ children }: IPProps) {
    return (
        <div className="flex max-[600px]:flex-col gap-5 [&>div]:!my-0">
            {children}
        </div>
    );
};
