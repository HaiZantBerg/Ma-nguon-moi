"use client";

import { useAnimate } from "framer-motion";
import React, { useRef, useState } from "react";

const variants: { [key: string]: string } = {
    aloneFact:
        "hover:bg-[#f13827] transition-all duration-2 ease-in text-white font-[500] px-4 pt-2 pb-[10px] md:text-[1rem] text-[0.9rem]",
    aloneFact1: "bg-[#f13827] rounded-[15px_15px_0px_0px]",
    aloneFact2: "bg-[#ff6338] rounded-[15px_15px_15px_15px]",
    inlineFact:
        "hover:bg-[#f58700] transition-all duration-2 ease-in text-white py-[3px] px-[5px]",
    inlineFact1: "bg-[#f58700] rounded-[8px_8px_0px_0px]",
    inlineFact2: "bg-[#ff981a] rounded-[8px_8px_8px_8px]",
};

const line: { [key: string]: string } = {
    aloneFact: "bottom-[-2px]",
    inlineFact: "bottom-[-0.5px]",
    aloneFactWidth: "100%",
    inlineFactWidth: "95%",
    aloneFactLineColor1: "bg-[rgba(255,190,179,0.75)]",
    aloneFactLineColor2: "bg-[rgba(255,246,246,0.75)]",
    inlineFactLineColor1: "bg-[rgba(255,210,152,0.75)]",
    inlineFactLineColor2: "bg-[rgba(255,251,246,0.75)]",
};

const button: { [key: string]: string } = {
    aloneFact: "md:text-[1.1rem] text-sm mt-6",
    inlineFact: "md:text-[0.9rem] text-sm mt-3",
};

const extraBody: { [key: string]: string } = {
    aloneFact: "md:py-8 py-4 md:px-10 px-6",
    inlineFact: "md:py-4 py-3 md:px-6 px-4",
    aloneFactBgColor: "bg-[#e43707]",
    inlineFactBgColor: "bg-[#e67e00]",
};

const container: { [key: string]: string } = {
    aloneFact: "md1:mr-0 mr-5 my-4",
    inlineFact: "",
};

const extraBodyVariants: { [key: string]: string } = {
    instance: "sm:ml-[40px] ml-[28px]",
    content: "ml-[1rem]",
};

export default function Extra({
    children,
    buttonContent,
    buttonClassName,
    containerClassName,
    extraBodyClassName,
    variant,
    extraBodyVariant,
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyClassName?: string;
    variant: "aloneFact" | "inlineFact";
    extraBodyVariant: "instance" | "" | "content";
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
            width: line[variant + "Width"],
        });
    };

    const handleMouseLeave = () => {
        animate("#line", {
            width: "0px",
        });
    };

    const variantExtra = `${variants[variant]} ${
        openExtra ? variants[variant + "1"] : variants[variant + "2"]
    }`;

    return (
        <div
            ref={scope}
            className={`${containerClassName ? containerClassName : ""} ${
                container[variant]
            }`}
        >
            <button
                onClick={handleOpenClose}
                className={`${
                    buttonClassName ? buttonClassName : ""
                } ${variantExtra} relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative w-full">
                    {buttonContent}
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
                    className={`absolute hidden bottom-[-15px] left-0 h-[15px] w-full ${
                        extraBody[variant + "BgColor"]
                    }`}
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
                className="h-0 absolute left-0 md1:pl-[81px] pl-[30px] md1:pr-2 pr-5 overflow-hidden w-full z-10"
                id="extraBody"
                ref={extraBodyContainerRef}
            >
                <div
                    className={`text-white ${
                        extraBodyVariants[extraBodyVariant]
                    } ${extraBodyClassName} rounded-[15px] ${
                        extraBody[variant]
                    } ${extraBody[variant + "BgColor"]}`}
                >
                    <div>{children}</div>
                    <button
                        className={`${button[variant]} font-semibold py-2 px-6 border-white border-2 rounded-full`}
                        onClick={handleOpenClose}
                    >
                        Đóng
                    </button>
                </div>
                <div
                    className="absolute w-full h-full top-0 left-0 -z-10"
                    onClick={handleOpenClose}
                />
            </div>
        </div>
    );
}
