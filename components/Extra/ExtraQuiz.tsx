"use client";

import { useAnimate } from "framer-motion";
import React, { useRef, useState } from "react";
import { extraBodyVariants } from "./static";

export default function ExtraQuiz({
    children,
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    extraBodyClassName = "",
    flip = false,
    extraBodyVariant = "",
    explaination,
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    flip?: boolean;
    extraBodyVariant?: "instance" | "" | "content";
    explaination: React.JSX.Element;
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

    const handleOpenExplaination = () => {
        animate("#explainationButton", {
            height: "0px",
        });

        animate("#explaination", {
            height: "fit-content",
        });
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
            className={`${containerClassName ?? containerClassName} ${
                flip ? "md1:mr-0 mr-5 my-4 flex" : "md1:mr-0 mr-5 my-4"
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${
                    buttonClassName ?? buttonClassName
                } hover:bg-[#b8ff94] transition-all duration-2 ease-in text-[#319400] border border-[#319400] font-[500] px-4 pt-2 pb-[10px] md:text-[1.05rem] text-[0.9rem] ${
                    openExtra
                        ? flip
                            ? "bg-[#b8ff94] rounded-[0px_0px_15px_15px]"
                            : "bg-[#b8ff94] rounded-[15px_15px_0px_0px]"
                        : "bg-[#daffc7] rounded-[15px_15px_15px_15px]"
                } relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="button"
            >
                <div className="relative w-full">
                    <div>{buttonContent}</div>
                    <div className="h-[2px] w-full absolute bottom-[-2px] left-0 grid grid-cols-1 grid-rows-1 *:justify-self-center">
                        <div className="bg-[rgba(153,255,102,0.75)] h-full col-[1/-1] row-[1/-1] w-full" />
                        <div
                            className="bg-[rgba(71,214,0,0.75)] w-0 h-full z-10 col-[1/-1] row-[1/-1]"
                            id="line"
                        />
                    </div>
                </div>
                <div
                    className={`absolute hidden ${
                        flip ? "top-[-15px]" : "bottom-[-15px]"
                    } left-0 h-[15px] w-full bg-[#b8ff94] z-30`}
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
                <div
                    className={`${extraBodyVariants[extraBodyVariant]} ${extraBodyClassName} rounded-[0px_15px_15px_15px] md1:pb-8 pt-3 pb-6 md1:px-10 px-6 border border-[#319400] bg-[#b8ff94] text-[#327e0c]`}
                >
                    <div>{children}</div>
                    <div className="h-0 overflow-hidden" id="explaination">
                        {explaination}
                    </div>
                    <div
                        onClick={handleOpenExplaination}
                        className="cursor-pointer overflow-hidden"
                        id="explainationButton"
                    >
                        Xem giải thích
                    </div>
                    <button
                        className="border md:text-[1.1rem] text-sm mt-3 py-2 border-[#319400] font-semibold px-6 rounded-full"
                        onClick={handleOpenClose}
                    >
                        Đóng
                    </button>
                </div>

                <div
                    className="absolute left-0 w-full h-full -z-10"
                    onClick={handleOpenClose}
                />
            </div>
        </div>
    );
}
