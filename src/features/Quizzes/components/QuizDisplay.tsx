"use client";

import React, { useRef } from "react";
import { ContentType } from "../content/ContentArray";
import { useAnimate } from "motion/react";

import CrossIcon from "@/assets/Svg/Cross.svg";
import TickIcon from "../assets/Tick.svg";
import { cn } from "@/lib/tailwind/tailwindMerge";
import { ArrowIcon } from "@/assets";

const uppLetter = ["A", "B", "C", "D"];

const colorPalette = [
    { border: "#7c1806", bg: "#ffd6d6", text: "#3c0900" },
    { border: "#06127c", bg: "#dbebff", text: "#000538" },
    { border: "#7c5606", bg: "#fff5da", text: "#543400" },
    { border: "#5e067c", bg: "#fddcff", text: "#280030" },
];

export default function QuizDisplay({ content }: { content: ContentType }) {
    const {
        quiz,
        choices: { array, answerId },
        explaination,
        title,
    } = content;

    const [scope, animate] = useAnimate();

    const isOpenedExplaination = useRef(false);

    const handleClickChoice = (idx: number) => {
        animate(
            `#choice${idx}`,
            {
                y: [4, 0],
            },
            {
                type: "spring",
                stiffness: 800,
                damping: 20,
                mass: 3,
            },
        );

        if (answerId !== idx) {
            animate(`#choice${idx}`, {
                background: "#f4f4f4",
                color: "#1a1a1a",
                borderColor: "#454545",
            });

            animate(`#shadow${idx}`, {
                background: "#454545",
            });
        } else {
            animate(`#choice${idx}`, {
                background: "#e4ffda",
                color: "#091700",
                borderColor: "#1e6c00",
            });

            animate(`#shadow${idx}`, {
                background: "#1e6c00",
            });

            const btn = document.getElementById("btnExp");

            if (!btn) return;

            btn.style.pointerEvents = "auto";

            animate("#btnExp", { opacity: 1 });
        }

        animate(`#deco${idx}`, {
            opacity: 1,
        });
    };

    const handleOpenExplaination = async () => {
        if (isOpenedExplaination.current) {
            animate("#arrow", { transform: "rotateZ(180deg)" });

            animate("#exp", { gridTemplateRows: "0fr" });

            isOpenedExplaination.current = false;

            return;
        }

        animate("#arrow", { transform: "rotateZ(0deg)" });

        await animate("#exp", { gridTemplateRows: "1fr" });

        document.getElementById("exp")?.scrollIntoView({ behavior: "smooth" });

        isOpenedExplaination.current = true;
    };

    return (
        <div
            className="min-[41rem]:px-[3.25rem] px-[2.25rem] pt-[1rem] h-full overflow-x-hidden"
            style={{
                scrollbarGutter: "stable both-edges",
                overflowY: "hidden",
            }}
            id="scroll"
            ref={scope}
        >
            <div className="flex flex-col min-h-[calc(100%-3rem)] w-full justify-between">
                <div className="w-full flex justify-center mb-[0.25rem]">
                    <p className="w-[22rem] min-[41rem]:text-3xl text-2xl font-semibold font-['Chakra_Petch'] text-center">
                        {title}
                    </p>
                </div>
                <div className="max-h-[50%] min-[41rem]:text-lg overflow-hidden mb-[1rem]">
                    {quiz}
                </div>
                <div className="grid min-[41rem]:text-lg min-[48rem]:grid-cols-2 grid-cols-1 min-[48rem]:grid-rows-2 grid-rows-4 min-[57rem]:*:w-[17rem] min-[53rem]:*:w-[14rem] min-[48rem]:*:w-[12rem] *:w-full min-[48rem]:gap-y-8 gap-y-4">
                    {Array.from({ length: 4 }).map((_, id) => {
                        return (
                            <button
                                key={id}
                                onClick={() => handleClickChoice(id)}
                                className="relative w-full h-full *:rounded-2xl justify-self-center"
                            >
                                <div
                                    className="leading-[1.35rem] h-full text-start min-[57rem]:px-8 px-4 min-[41rem]:py-3 py-2 border relative z-10 flex gap-1 justify-center overflow-hidden"
                                    id={`choice${id}`}
                                    style={{
                                        borderColor: colorPalette[id].border,
                                        background: colorPalette[id].bg,
                                        color: colorPalette[id].text,
                                    }}
                                >
                                    <div
                                        className={cn(
                                            id !== answerId
                                                ? "-top-[15%]"
                                                : "-top-[50%]",
                                            "absolute -z-10 -translate-x-1/2 left-1/2 h-full w-fit opacity-0",
                                        )}
                                        id={`deco${id}`}
                                    >
                                        {id !== answerId ? (
                                            <CrossIcon
                                                className="h-[130%] aspect-square"
                                                fill="#d7d7d7"
                                            />
                                        ) : (
                                            <TickIcon
                                                className="h-[200%] aspect-square"
                                                fill="#cbf4bd"
                                            />
                                        )}
                                    </div>
                                    {uppLetter[id]}. {array[id]}
                                </div>
                                <div
                                    className="absolute size-full top-1 left-0"
                                    id={`shadow${id}`}
                                    style={{
                                        background: colorPalette[id].border,
                                    }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="flex min-[41rem]:text-lg flex-col items-center h-fit">
                <button
                    className="mt-2 mb-1 font-[425] flex items-center flex-col leading-[1.1rem] opacity-0 pointer-events-none"
                    onClick={() => handleOpenExplaination()}
                    id="btnExp"
                >
                    Xem giải thích
                    <div
                        style={{
                            transform: "rotateZ(180deg)",
                        }}
                        id="arrow"
                    >
                        <ArrowIcon stroke="#00330f" width="16" height="16" />
                    </div>
                </button>
                <div
                    className="grid"
                    id="exp"
                    style={{
                        gridTemplateRows: "0fr",
                    }}
                >
                    <div className="overflow-hidden *:mb-4">
                        <hr className="" />
                        {explaination}
                    </div>
                </div>
            </div>
        </div>
    );
}
