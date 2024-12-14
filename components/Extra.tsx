"use client";

import { useAnimate } from "framer-motion";
import React, { useRef, useState } from "react";

const svgIcons: { [key: string]: React.JSX.Element } = {
    aloneFact: <></>,
    inlineFact: <></>,
    learnMore: (
        <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 319.05 305.07"
            className="h-[30px] aspect-square"
        >
            <path
                d="M334.83,385.19A94.94,94.94,0,1,1,296.19,345"
                transform="translate(-112.47 -310.55)"
                fill="none"
                stroke="#136907"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={14}
            />
            <circle cx="207.17" cy="52.83" r={7} fill="#136907" />
            <circle
                cx="137.53"
                cy="117.45"
                r="63.77"
                fill="none"
                stroke="#136907"
                strokeMiterlimit={10}
                strokeWidth="11.88"
            />
            <path
                d="M367.56,587.37c3.78,6,.93,14.57-6.37,19.19s-16.28,3.51-20.06-2.48l-3.05-4.81L286.6,517.86,313,501.14l51.49,81.42Z"
                transform="translate(-112.47 -310.55)"
                fill="none"
                stroke="#136907"
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
                fill="#136907"
                stroke="#136907"
                strokeMiterlimit={10}
                strokeWidth={6}
            />
            <line
                x1={5}
                y1={244}
                x2="20.83"
                y2={244}
                fill="#fff"
                stroke="#136907"
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
                stroke="#136907"
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
                stroke="#136907"
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
                stroke="#136907"
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
                stroke="#136907"
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
                stroke="#136907"
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
                stroke="#136907"
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
                stroke="#136907"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={10}
            />
        </svg>
    ),
};

const variants: { [key: string]: string } = {
    aloneFact:
        "hover:bg-[#f13827] transition-all duration-2 ease-in text-white font-[500] px-4 pt-2 pb-[10px] md:text-[1.05rem] text-[0.9rem]",
    aloneFact1: "bg-[#f13827] rounded-[15px_15px_0px_0px]",
    aloneFactFlip: "bg-[#ff6338] rounded-[0px_0px_15px_15px]",
    aloneFact2: "bg-[#ff6338] rounded-[15px_15px_15px_15px]",
    inlineFact:
        "hover:bg-[#f58700] transition-all duration-2 ease-in text-white py-[3px] px-[5px]",
    inlineFact1: "bg-[#f58700] rounded-[8px_8px_0px_0px]",
    inlineFactFlip: "bg-[#f58700] rounded-[0px_0px_8px_8px]",
    inlineFact2: "bg-[#ff981a] rounded-[8px_8px_8px_8px]",
    learnMore:
        "hover:bg-[#b0f6a7] transition-all duration-2 ease-in font-[500] px-4 pt-2 pb-[10px] md:text-[1.05rem] text-[0.9rem] bg-[#d6ffd1] rounded-[20px] border text-[#136907] border-[#136907]",
    learnMore1: "bg-[#b0f6a7]",
    learnMore2: "bg-[#d6ffd1]",
};

const line: { [key: string]: string } = {
    aloneFact: "bottom-[-2px]",
    aloneFactWidth: "100%",
    aloneFactLineColor1: "bg-[rgba(255,190,179,0.75)]",
    aloneFactLineColor2: "bg-[rgba(255,246,246,0.75)]",
    inlineFact: "bottom-[-0.5px]",
    inlineFactWidth: "95%",
    inlineFactLineColor1: "bg-[rgba(255,210,152,0.75)]",
    inlineFactLineColor2: "bg-[rgba(255,251,246,0.75)]",
    learnMore: "",
    learnMoreWidth: "",
    learnMoreLineColor1: "",
    learnMoreLineColor2: "",
};

const button: { [key: string]: string } = {
    aloneFact: "border-2 md:text-[1.1rem] text-sm mt-6 border-white py-2",
    inlineFact: "border-2 md:text-[0.9rem] text-sm mt-3 border-white py-2",
    learnMore: "border md:text-[1.1rem] text-sm mt-6 border-[#136907] py-3",
};

const extraBody: { [key: string]: string } = {
    aloneFact: "rounded-[15px] text-white md:py-8 py-4 md:px-10 px-6",
    aloneFactBgColor: "bg-[#e43707]",
    inlineFact: "rounded-[15px] text-white md:py-4 py-3 md:px-6 px-4",
    inlineFactBgColor: "bg-[#e67e00]",
    learnMore:
        "md:pt-8 md:pb-6 pt-4 pb-3 md:px-10 px-6 bg-[#b0f6a7] text-[#136907] border-[#136907] border rounded-[20px]",
    learnMoreBgColor: "",
};

const container: { [key: string]: string } = {
    aloneFactNormal: "md1:mr-0 mr-5 my-4",
    inlineFactNormal: "inline",
    inlineFactFlip: "inline-flex",
    learnMoreNormal: "md1:mr-0 mr-5 my-4 flex",
    learnMoreFlip: "md1:mr-0 mr-5 my-4",
};

const extraBodyVariants: { [key: string]: string } = {
    instance: "sm:ml-[40px] ml-[28px]",
    content: "ml-[1rem]",
    learnMore: "",
};

const buttonContentVariants: { [key: string]: string } = {
    instance: "",
    content: "",
    learnMore: "flex text-nowrap items-center gap-3",
};

const extraBodyAnimation: { [key: string]: { [key: string]: any } } = {
    aloneFact: {
        type: "spring",
        stiffness: 450,
        damping: 40,
        mass: 1.5,
    },
    inlineFact: {
        type: "spring",
        stiffness: 450,
        damping: 40,
        mass: 1.5,
    },
    learnMore: {
        delay: 2,
        type: "spring",
        stiffness: 450,
        damping: 40,
        mass: 1.5,
    },
};

export default function Extra({
    children,
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    extraBodyClassName = "",
    variant,
    flip = false,
    extraBodyVariant = "",
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    flip?: boolean;
    variant: "aloneFact" | "inlineFact" | "learnMore";
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
                extraBodyAnimation[variant]
            );

            if (variant === "learnMore") {
                // animate(
                //     "#button",
                //     {
                //         width: "100%",
                //     },
                //     { type: "spring" }
                // );
            }

            setOpenExtra(true);
        } else if (extraBodyContainerRef.current) {
            setTimeout(() => {
                if (sneakyRef.current) sneakyRef.current.style.display = "none";
            }, extraBodyContainerRef.current.offsetHeight / 2);

            await animate("#extraBody", {
                height: "0px",
            });

            if (variant === "learnMore") {
                // animate("#button", {
                //     width: "fit-content",
                // });
            }

            setOpenExtra(false);
        }
    };

    const handleMouseEnter = () => {
        animate("#line", {
            width: line[variant + "Width"],
        });
    };

    const handleMouseLeave = () => {
        animate("#line", {
            width: "0px",
        });
    };

    const variantExtra = `${variants[variant]} ${
        openExtra
            ? variants[variant + (flip ? "Flip" : "1")]
            : variants[variant + "2"]
    }`;

    return (
        <div
            ref={scope}
            className={`${containerClassName ?? containerClassName} ${
                container[variant + (flip ? "Flip" : "Normal")]
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${
                    buttonClassName ?? buttonClassName
                } ${variantExtra} relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="button"
            >
                <div className="relative w-full">
                    <div className={`${buttonContentVariants[variant]}`}>
                        <div>{buttonContent}</div>
                        {svgIcons[variant]}
                    </div>
                    <div
                        className={`h-[2px] ${line[variant]} w-full absolute bottom-[-1px] left-0 grid grid-cols-1 grid-rows-1 *:justify-self-center`}
                    >
                        <div
                            className={`${
                                line[variant + "LineColor1"]
                            } h-full col-[1/-1] row-[1/-1]`}
                            style={{
                                width: line[variant + "Width"],
                            }}
                        />
                        <div
                            className={`${
                                line[variant + "LineColor2"]
                            } w-0 h-full z-10 col-[1/-1] row-[1/-1]`}
                            id="line"
                        />
                    </div>
                </div>
                <div
                    className={`absolute hidden ${
                        flip ? "top-[-15px]" : "bottom-[-15px]"
                    } left-0 h-[15px] w-full ${extraBody[variant + "BgColor"]}`}
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
                    <>
                        <div
                            className={`${
                                extraBodyVariants[extraBodyVariant]
                            } ${extraBodyClassName} ${extraBody[variant]} ${
                                extraBody[variant + "BgColor"]
                            }`}
                        >
                            <div>{children}</div>
                            <button
                                className={`${button[variant]} font-semibold px-6 rounded-full`}
                                onClick={handleOpenClose}
                            >
                                Đóng
                            </button>
                        </div>
                        <div
                            className="absolute w-full h-full top-0 left-0 -z-10"
                            onClick={handleOpenClose}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
