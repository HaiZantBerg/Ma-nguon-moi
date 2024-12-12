"use client";

import { useAnimate } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import aristotle from "@/public/Image/aristotlecantdopoetic.png";

const variants: { [key: string]: string } = {
    aloneFact:
        "bg-[#ff981a] hover:bg-[#f58700] transition-all duration-2 ease-in text-white font-[500] px-4 pt-2 pb-[10px] md:text-[1rem] text-[0.9rem]",
    aloneFact1: "bg-[#f58700] rounded-[15px_15px_0px_0px]",
    aloneFact2: "bg-[#ff981a] rounded-[15px_15px_15px_15px]",
    inlineFact:
        "bg-[#ff981a] hover:bg-[#f58700] transition-all duration-2 ease-in text-white py-[3px] px-[5px] rounded-lg",
    inlineFact1: "bg-[#f58700] rounded-[8px_8px_0px_0px]",
    inlineFact2: "bg-[#ff981a] rounded-[8px_8px_8px_8px]",
};

const line: { [key: string]: string } = {
    aloneFact: "bottom-[-2px]",
    inlineFact: "bottom-[-0.5px]",
    aloneFactWidth: "100%",
    inlineFactWidth: "95%",
};

const button: { [key: string]: string } = {
    aloneFact: "md:text-[1.1rem] text-sm mt-6",
    inlineFact: "md:text-[0.9rem] text-sm mt-3",
};

const extraBody: { [key: string]: string } = {
    aloneFact: "md:py-8 py-4 md:px-10 px-6",
    inlineFact: "md:py-4 py-3 md:px-6 px-4",
};

export default function Extra({
    children,
    buttonContent,
    buttonClassName,
    containerClassName,
    variant,
}: {
    children?: React.ReactNode;
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    variant: string;
}) {
    const [scope, animate] = useAnimate();

    const [openExtra, setOpenExtra] = useState(false);

    const sneakyRef = useRef<HTMLDivElement | null>(null);

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
        } else {
            setTimeout(() => {
                if (sneakyRef.current) sneakyRef.current.style.display = "none";
            }, 220);

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
        <div ref={scope} className={`${containerClassName} inline`}>
            <button
                onClick={handleOpenClose}
                className={`${buttonClassName} ${variantExtra} relative`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative w-full">
                    {buttonContent}
                    <div
                        className={`h-[2px] ${line[variant]} w-full absolute bottom-[-1px] left-0 grid grid-cols-1 grid-rows-1 *:justify-self-center`}
                    >
                        <div
                            className="bg-[rgba(255,210,152,0.75)] h-full col-[1/-1] row-[1/-1]"
                            style={{
                                width: line[variant + "Width"],
                            }}
                        />
                        <div
                            className="bg-[rgba(255,251,246,0.75)] w-0 h-full z-10 col-[1/-1] row-[1/-1]"
                            id="line"
                        />
                    </div>
                </div>
                <div
                    className="absolute hidden bottom-[-15px] left-0 h-[15px] w-full bg-[#e67e00]"
                    ref={sneakyRef}
                />
            </button>
            <div
                className="bg-[#e67e00] h-0 absolute mr-5 rounded-[15px] overflow-hidden z-50"
                id="extraBody"
            >
                <div className={`text-white ${extraBody[variant]}`}>
                    <div>{children}</div>
                    <button
                        className={`${button[variant]} font-semibold py-2 px-6 border-white border-2 rounded-full`}
                        onClick={handleOpenClose}
                    >
                        Đóng
                    </button>
                </div>
            </div>
        </div>
    );
}
