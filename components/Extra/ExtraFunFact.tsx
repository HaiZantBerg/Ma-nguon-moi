"use client";

import { useAnimate } from "framer-motion";
import React, { useState } from "react";
import { storyContent } from "../static/funfactsStatic";
import { FlipCard } from "../FunFacts";

export default function ExtraFunFact({
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    ffidx,
}: {
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
    extraBodyVariant?: "instance" | "" | "content";
    ffidx: number[];
}) {
    const [scope, animate] = useAnimate();

    const [openExtra, setOpenExtra] = useState(false);

    const handleOpenClose = async () => {
        if (!openExtra) {
            setOpenExtra(true);
        } else {
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
            className={`${containerClassName && containerClassName} inline`}
        >
            <button
                onClick={handleOpenClose}
                className={`${buttonClassName && buttonClassName} ${
                    openExtra ? "bg-[#0092e0]" : "bg-[#05a8ff]"
                } relative hover:bg-[#0092e0] transition-all duration-2 ease-in text-white py-[3px] px-[5px] rounded-[8px]`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="button"
            >
                <div className="relative w-full">
                    <div>{buttonContent}</div>
                    <div className="h-[2px] bottom-[-0.5px] w-full absolute left-0 grid grid-cols-1 grid-rows-1 *:justify-self-center">
                        <div className="bg-[rgba(138,190,255,0.75)] h-full col-[1/-1] row-[1/-1] w-[95%]" />
                        <div
                            className="bg-[rgba(246,246,255,0.75)] w-0 h-full z-10 col-[1/-1] row-[1/-1]"
                            id="line"
                        />
                    </div>
                </div>
            </button>
            {openExtra && (
                <>
                    <FlipCard
                        idx={ffidx[2]}
                        title={"Kẻ giết người mang tên Pythagoras?!"}
                        idxs={ffidx[3]}
                        idxc={ffidx[0]}
                        idxf={ffidx[1]}
                        triggerCloseCard={handleOpenClose}
                    >
                        {storyContent[ffidx[0]][ffidx[1]][ffidx[2]][ffidx[3]]
                            .split("//")
                            .map((text, idxt) => (
                                <p key={idxt}>{text}</p>
                            ))}
                    </FlipCard>
                </>
            )}
        </div>
    );
}
