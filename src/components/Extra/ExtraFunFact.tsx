"use client";

import { useAnimate } from "motion/react";
import React, { useState } from "react";
import { storyContent, storyList } from "../../data/funfactsStatic";
import { FlipCard } from "../Main/FunFacts";

export default function ExtraFunFact({
    buttonContent,
    buttonClassName = "",
    containerClassName = "",
    ffidx,
}: {
    buttonContent: string;
    buttonClassName?: string;
    containerClassName?: string;
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
                } relative rounded-[8px] px-[5px] py-[3px] text-white transition-all duration-2 ease-in hover:bg-[#0092e0]`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                id="button"
            >
                <div className="relative w-full">
                    <div>{buttonContent}</div>
                    <div className="absolute bottom-[-0.5px] left-0 grid h-[2px] w-full grid-cols-1 grid-rows-1 *:justify-self-center">
                        <div className="col-[1/-1] row-[1/-1] h-full w-[95%] bg-[rgba(138,190,255,0.75)]" />
                        <div
                            className="z-10 col-[1/-1] row-[1/-1] h-full w-0 bg-[rgba(246,246,255,0.75)]"
                            id="line"
                        />
                    </div>
                </div>
            </button>
            {openExtra && (
                <>
                    <FlipCard
                        idx={ffidx[2]}
                        title={
                            storyList[ffidx[0]][ffidx[1]][ffidx[2]][ffidx[3]]
                        }
                        idxs={ffidx[3]}
                        idxg={ffidx[0]}
                        idxc={ffidx[1]}
                        triggerCloseCard={handleOpenClose}
                    >
                        {storyContent[ffidx[0]][ffidx[1]][ffidx[2]][ffidx[3]]}
                    </FlipCard>
                </>
            )}
        </div>
    );
}
