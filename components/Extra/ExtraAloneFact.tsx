"use client";

import { useAnimate } from "motion/react";
import React, { useRef, useState } from "react";
import { extraBodyVariants, extraPaddingLeft } from "./static";

export default function ExtraAloneFact({
    children,
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    extraBodyClassName = "",
    flip = false,
    extraBodyVariant = "normal",
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    flip?: boolean;
    extraBodyVariant?: "instance" | "normal" | "content";
}) {
    const [scope, animate] = useAnimate();

    const [openExtra, setOpenExtra] = useState(false);

    const sneakyRef = useRef<HTMLDivElement | null>(null);
    const extraBodyContainerRef = useRef<HTMLDivElement | null>(null);

    const handleOpenClose = async () => {
        if (!openExtra) {
            setTimeout(() => {
                if (sneakyRef.current)
                    sneakyRef.current.style.display = "block";
            }, 10);

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
            const delayTime =
                Math.sqrt(
                    extraBodyContainerRef.current.getBoundingClientRect().height
                ) / 90;

            setTimeout(() => {
                if (sneakyRef.current) sneakyRef.current.style.display = "none";
            }, delayTime * 1000 - 50);

            await animate(
                "#extraBody",
                {
                    height: "0px",
                },
                { duration: delayTime }
            );

            setOpenExtra(false);
        }
    };

    const handleMouseEnter = () => {
        animate("#line", {
            width: "100%",
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
            className={`${containerClassName} md1:mr-0 mr-5 my-4 ${
                flip && "flex"
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${buttonClassName} hover:bg-[#f13827] transition-all duration-2 ease-in text-white font-[500] px-4 pt-2 pb-[10px] md:text-[1.05rem] text-[0.9rem] ${
                    openExtra
                        ? flip
                            ? "bg-[#ff6338] rounded-[0px_0px_15px_15px]"
                            : "bg-[#f13827] rounded-[15px_15px_0px_0px]"
                        : "bg-[#ff6338] rounded-[15px_15px_15px_15px]"
                } relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="button"
            >
                <div className="relative w-full">
                    <div>{buttonContent}</div>
                    <div className="h-[2px] bottom-[-2px] w-full absolute left-0 grid grid-cols-1 grid-rows-1 *:justify-self-center">
                        <div className="bg-[rgba(255,190,179,0.75)] h-full col-[1/-1] row-[1/-1] w-full" />
                        <div
                            className="bg-[rgba(255,246,246,0.75)] w-0 h-full z-10 col-[1/-1] row-[1/-1]"
                            id="line"
                        />
                    </div>
                </div>
                <div
                    className={`absolute hidden ${
                        flip ? "top-[-15px]" : "bottom-[-15px]"
                    } left-0 h-[15px] w-full bg-[#e43707]`}
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
                className={`h-0 absolute left-0 ${extraPaddingLeft} md1:pr-2 pr-5 overflow-hidden w-full z-20 flex ${
                    flip ? "-translate-y-full items-end" : ""
                }`}
                id="extraBody"
                ref={extraBodyContainerRef}
            >
                {openExtra && (
                    <>
                        <div
                            className={`${extraBodyVariants[extraBodyVariant]} ${extraBodyClassName} rounded-[15px] text-white md:py-8 py-4 md:px-10 px-6 bg-[#e43707]`}
                        >
                            <div>{children}</div>
                            <button
                                className="border-2 md:text-[1.1rem] text-sm mt-6 border-white py-2 font-semibold px-6 rounded-full"
                                onClick={handleOpenClose}
                            >
                                Đóng
                            </button>
                        </div>
                        <div
                            className="absolute left-0 w-full h-full -z-10"
                            onClick={handleOpenClose}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
