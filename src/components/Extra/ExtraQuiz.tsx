"use client";

import { useAnimate } from "motion/react";
import React, { useRef, useState } from "react";
import { extraBodyVariants, extraPaddingLeft } from "./static";

export default function ExtraQuiz({
    children,
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    extraBodyClassName = "",
    flip = false,
    line = false,
    extraBodyVariant = "normal",
    explaination,
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    flip?: boolean;
    line?: boolean;
    extraBodyVariant?: "instance" | "normal" | "content";
    explaination?: React.JSX.Element;
}) {
    const [scope, animate] = useAnimate();

    const [openExtra, setOpenExtra] = useState(false);

    const sneakyRef = useRef<HTMLDivElement | null>(null);
    const extraBodyContainerRef = useRef<HTMLDivElement | null>(null);
    const delayTime = useRef<number>(0);

    const handleOpenClose = async () => {
        if (!delayTime.current && extraBodyContainerRef.current)
            delayTime.current =
                Math.sqrt(
                    extraBodyContainerRef.current.getBoundingClientRect()
                        .height,
                ) / 90;

        if (!openExtra) {
            setTimeout(() => {
                if (sneakyRef.current) sneakyRef.current.style.display = "flex";
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
                },
            );

            setOpenExtra(true);
        } else {
            setTimeout(
                () => {
                    if (sneakyRef.current)
                        sneakyRef.current.style.display = "none";
                },
                delayTime.current * 1000 - 50,
            );

            await animate(
                "#extraBody",
                {
                    height: "0px",
                },
                { duration: delayTime.current },
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
                flip ? "md1:mr-0 mr-2 my-4 flex" : "md1:mr-0 mr-2 my-4"
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${
                    buttonClassName ?? buttonClassName
                } hover:bg-[#d3ffbd] transition-all duration-2 ease-in text-[#2f730c] border border-[#2f730c] font-[500] px-4 pt-2 pb-[10px] md:text-[1.05rem] text-[0.9rem] ${
                    openExtra
                        ? flip
                            ? "bg-[#d3ffbd] rounded-[0px_0px_15px_15px]"
                            : "bg-[#d3ffbd] rounded-[15px_15px_0px_0px]"
                        : "bg-[#ddffcc] rounded-[15px_15px_15px_15px]"
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
                    } h-[15px] z-[5] w-full left-0`}
                    ref={sneakyRef}
                >
                    <div className="bg-[#d3ffbd] relative z-30 w-full h-full" />
                    <div className="bg-[#2f730c] absolute w-[1px] h-full right-[-1px]" />
                </div>
            </button>
            {openExtra && (
                <div
                    className="absolute w-full h-full top-0 left-0 z-10"
                    onClick={handleOpenClose}
                />
            )}
            <div
                className={`h-0 absolute left-0 ${extraPaddingLeft} md1:pr-2 pr-7 overflow-hidden w-full flex ${
                    flip ? "-translate-y-full items-end z-10" : ""
                }`}
                id="extraBody"
                ref={extraBodyContainerRef}
            >
                <div
                    className={`${extraBodyVariants[extraBodyVariant]} ${extraBodyClassName} relative z-20 rounded-[0px_15px_15px_15px] md1:pb-8 pt-3 pb-6 md1:px-10 px-6 border border-[#2f730c] bg-[#d3ffbd] text-[#327e0c]`}
                >
                    <div>{openExtra && <>{children}</>}</div>
                    <div className="h-0 overflow-hidden" id="explaination">
                        {openExtra && <>{explaination}</>}
                    </div>
                    {explaination && (
                        <div
                            onClick={handleOpenExplaination}
                            className="cursor-pointer overflow-hidden"
                            id="explainationButton"
                        >
                            Xem giải thích
                        </div>
                    )}
                    <button
                        className="border md:text-[1.1rem] text-sm mt-3 py-2 border-[#2f730c] font-semibold px-6 rounded-full"
                        onClick={handleOpenClose}
                    >
                        Đóng
                    </button>
                    {line && (
                        <div className="bg-white w-[3px] h-full absolute md1:left-[48px] md:left-[12px] left-[8px] top-0">
                            <div className="bg-black w-[1px] h-full translate-x-[1px]" />
                        </div>
                    )}
                </div>
                <div
                    className="absolute left-0 w-full h-full -z-10"
                    onClick={handleOpenClose}
                />
            </div>
        </div>
    );
}
