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
    extraBodyVariant = "",
    flip = false,
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    extraBodyVariant?: string;
    flip?: boolean;
}) {
    const [scope, animate] = useAnimate();

    const [openExtra, setOpenExtra] = useState(false);

    const sneakyRef = useRef<HTMLDivElement | null>(null);
    const extraBodyContainerRef = useRef<HTMLDivElement | null>(null);

    const handleOpenClose = async () => {
        if (!openExtra && sneakyRef.current) {
            sneakyRef.current.style.display = "block";

            await animate(
                "#button",
                {
                    width: "100%",
                },
                { type: "spring", stiffness: 250, damping: 20, mass: 0.5 }
            );

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

            animate("#buttonContent", {
                opacity: 0,
            });

            setOpenExtra(true);
        } else if (extraBodyContainerRef.current) {
            setTimeout(() => {
                if (sneakyRef.current) sneakyRef.current.style.display = "none";
            }, extraBodyContainerRef.current.offsetHeight / 2);

            await animate("#extraBody", {
                height: "0px",
            });

            animate(
                "#button",
                {
                    width: "fit-content",
                },
                { type: "spring", stiffness: 250, damping: 20, mass: 0.5 }
            );

            animate("#buttonContent", {
                opacity: 1,
            });

            setOpenExtra(false);
        }
    };

    return (
        <div
            ref={scope}
            className={`${containerClassName && containerClassName} ${
                flip ? "md1:mr-0 mr-5 my-4" : "md1:mr-0 mr-5 my-4 flex"
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${
                    buttonClassName && buttonClassName
                } hover:bg-[#fdff8a] ${
                    openExtra ? "bg-[#fdff8a]" : "bg-[#feffbd]"
                } transition-colors duration-2 ease-in font-[500] md:text-[1.05rem] text-[0.9rem] bg-[#feffbd] md1:rounded-[20px] rounded-[16px] border text-[#6b6c0e] border-[#6b6c0e] relative`}
                id="button"
            >
                <div className="relative w-full">
                    <div
                        className="flex text-nowrap items-center md1:gap-3 gap-1 w-fit mx-4 my-2"
                        id="buttonContent"
                    >
                        <div>{buttonContent}</div>
                        <div className="md1:w-[30px] w-[20px] aspect-square">
                            <svg
                                id="Layer_1"
                                data-name="Layer 1"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 319.05 305.07"
                            >
                                <path
                                    d="M334.83,385.19A94.94,94.94,0,1,1,296.19,345"
                                    transform="translate(-112.47 -310.55)"
                                    fill="none"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={14}
                                />
                                <circle
                                    cx="207.17"
                                    cy="52.83"
                                    r={7}
                                    fill="#6b6c0e"
                                />
                                <circle
                                    cx="137.53"
                                    cy="117.45"
                                    r="63.77"
                                    fill="none"
                                    stroke="#6b6c0e"
                                    strokeMiterlimit={10}
                                    strokeWidth="11.88"
                                />
                                <path
                                    d="M367.56,587.37c3.78,6,.93,14.57-6.37,19.19s-16.28,3.51-20.06-2.48l-3.05-4.81L286.6,517.86,313,501.14l51.49,81.42Z"
                                    transform="translate(-112.47 -310.55)"
                                    fill="none"
                                    stroke="#6b6c0e"
                                    strokeMiterlimit={10}
                                    strokeWidth="12.43"
                                />
                                <rect
                                    x="288.41"
                                    y="529.19"
                                    width="53.74"
                                    height="9.53"
                                    rx="4.77"
                                    transform="translate(-349.05 -59.37) rotate(-32.31)"
                                    fill="#6b6c0e"
                                    stroke="#6b6c0e"
                                    strokeMiterlimit={10}
                                    strokeWidth={6}
                                />
                                <line
                                    x1={5}
                                    y1={244}
                                    x2="20.83"
                                    y2={244}
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="38.04"
                                    y1={244}
                                    x2="53.87"
                                    y2={244}
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="29.68"
                                    y1="253.96"
                                    x2="29.68"
                                    y2="269.79"
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="29.68"
                                    y1="218.66"
                                    x2="29.68"
                                    y2="234.49"
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="265.18"
                                    y1="30.34"
                                    x2="281.01"
                                    y2="30.34"
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="298.22"
                                    y1="30.34"
                                    x2="314.05"
                                    y2="30.34"
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="289.86"
                                    y1="40.3"
                                    x2="289.86"
                                    y2="56.13"
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                                <line
                                    x1="289.86"
                                    y1={5}
                                    x2="289.86"
                                    y2="20.83"
                                    fill="#fff"
                                    stroke="#6b6c0e"
                                    strokeLinecap="round"
                                    strokeMiterlimit={10}
                                    strokeWidth={10}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
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
                        className={`${extraBodyVariants[extraBodyVariant]} ${extraBodyClassName} md:pt-8 md:pb-6 pt-4 pb-3 md:px-10 px-6 bg-[#feffbd] text-[#6b6c0e] border-[#6b6c0e] border md1:rounded-[20px] rounded-[16px]`}
                    >
                        <div>{children}</div>
                        <button
                            className="border md:text-[1.1rem] text-sm mt-6 border-[#6b6c0e] py-3 font-semibold px-6 rounded-full"
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
