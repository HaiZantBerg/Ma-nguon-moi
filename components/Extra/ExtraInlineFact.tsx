"use client";

import { useAnimate } from "framer-motion";
import React, { useRef, useState } from "react";
import { extraBodyVariants } from "./static";

export default function Extra({
    children,
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    extraBodyClassName = "",
    flip = false,
    extraBodyVariant = "",
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    flip?: boolean;
    extraBodyVariant?: "instance" | "" | "content";
}) {
    const [scope, animate] = useAnimate();

    const [openExtra, setOpenExtra] = useState(false);

    const sneakyRef = useRef<HTMLDivElement | null>(null);
    const extraBodyContainerRef = useRef<HTMLDivElement | null>(null);

    const handleOpenClose = async () => {
        if (!openExtra && sneakyRef.current) {
            sneakyRef.current.style.display = "block";

            animate(
                "#extraBody",
                {
                    height: "fit-content",
                },
                {
                    type: "spring",
                    stiffness: 450,
                    damping: 40,
                    mass: 1.5,
                }
            );

            setOpenExtra(true);
        } else if (extraBodyContainerRef.current) {
            setTimeout(() => {
                if (sneakyRef.current) sneakyRef.current.style.display = "none";
            }, extraBodyContainerRef.current.offsetHeight / 2);

            await animate("#extraBody", {
                height: "0px",
            });

            setOpenExtra(false);
        }
    };

    const handleMouseEnter = () => {
        animate("#line", {
            width: "95%",
        });
    };

    const handleMouseLeave = () => {
        animate("#line", {
            width: "0px",
        });
    };

    return (
        <div
            ref={scope}
            className={`${containerClassName && containerClassName} ${
                flip ? "inline-flex" : "inline"
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${
                    buttonClassName && buttonClassName
                } hover:bg-[#f58700] transition-all duration-2 ease-in text-white py-[3px] px-[5px] ${
                    openExtra
                        ? flip
                            ? "bg-[#f58700] rounded-[0px_0px_8px_8px]"
                            : "bg-[#f58700] rounded-[8px_8px_0px_0px]"
                        : "bg-[#ff981a] rounded-[8px_8px_8px_8px]"
                } relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="button"
            >
                <div className="relative w-full">
                    <div>{buttonContent}</div>
                    <div className="h-[2px] w-full absolute bottom-[-0.5px] left-0 grid grid-cols-1 grid-rows-1 *:justify-self-center">
                        <div className="bg-[rgba(255,210,152,0.75)] h-full col-[1/-1] row-[1/-1] w-[95%]" />
                        <div
                            className="bg-[rgba(255,251,246,0.75)] w-0 h-full z-10 col-[1/-1] row-[1/-1]"
                            id="line"
                        />
                    </div>
                </div>
                <div
                    className={`absolute hidden ${
                        flip ? "top-[-15px]" : "bottom-[-15px]"
                    } left-0 h-[15px] w-full bg-[#e67e00]`}
                    ref={sneakyRef}
                />
            </button>
            {openExtra && (
                <div
                    className="absolute w-full h-full top-0 left-0 z-10"
                    onClick={handleOpenClose}
                />
            )}
            <div
                className={`h-0 absolute left-0 md1:pl-[81px] pl-[30px] md1:pr-2 pr-5 overflow-hidden w-full z-20 flex ${
                    flip ? "-translate-y-full items-end" : ""
                }`}
                id="extraBody"
                ref={extraBodyContainerRef}
            >
                {openExtra && (
                    <div
                        className={`${extraBodyVariants[extraBodyVariant]} ${extraBodyClassName} rounded-[15px] text-white md:py-4 py-3 md:px-6 px-4 bg-[#e67e00]`}
                    >
                        <div>{children}</div>
                        <button
                            className="border-2 md:text-[0.9rem] text-sm mt-3 border-white py-2 font-semibold px-6 rounded-full"
                            onClick={handleOpenClose}
                        >
                            Đóng
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
