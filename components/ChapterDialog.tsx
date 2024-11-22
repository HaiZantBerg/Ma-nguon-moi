"use client";

import React, { useEffect, useRef, useState } from "react";
import { Chakra_Petch } from "next/font/google";
import { useAnimate } from "framer-motion";
import { Lessons } from "./Lesson";
import { FunFact } from "./FunFacts";
import { Quizzes } from "./Quizzes";
import { colorStop, svgIcon } from "./static/static";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function ChapterDialog({
    chapterContent,
    description,
    id,
    idx,
    isDesktop,
    handleCloseDialog,
}: {
    chapterContent: string;
    description: string[][];
    id: number;
    idx: number;
    isDesktop: boolean;
    handleCloseDialog: () => void;
}) {
    const [scope, animate] = useAnimate();

    let isActive = idx * 3;
    const containerRef = useRef<(HTMLDivElement | null)[]>([]);

    let isDialogEnter = true;
    let isClosing = false;

    const openDialogAnimation = async () => {
        animate(
            "#backdrop",
            {
                opacity: [0, 1],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        await animate(
            "#box",
            {
                opacity: [0, 1],
                height: ["15vh", "95vh"],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        animate(
            "#box",
            {
                width: ["25vw", "95vw"],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );
    };

    useEffect(() => {
        openDialogAnimation();
    }, []);

    const closeDialogAnimationViaBackdrop = async () => {
        if (isDialogEnter || !isDesktop || isClosing) return;

        isClosing = true;

        await animate(
            "#box",
            {
                height: ["95vh", "15vh"],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        animate(
            "#backdrop",
            {
                opacity: [1, 0],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        await animate(
            "#box",
            {
                width: ["95vw", "25vw"],
                opacity: [1, 0],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        handleCloseDialog();
    };

    const handleMouseEnter = () => {
        isDialogEnter = true;
    };

    const handleMouseLeave = () => {
        isDialogEnter = false;
    };

    const closeDialogAnimation = async () => {
        if (isClosing) return;

        isClosing = true;

        await animate(
            "#box",
            {
                height: ["95vh", "15vh"],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        animate(
            "#backdrop",
            {
                opacity: [1, 0],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        await animate(
            "#box",
            {
                width: ["95vw", "25vw"],
                opacity: [1, 0],
            },
            {
                duration: 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100,
                mass: 0.1,
            }
        );

        handleCloseDialog();
    };

    const handleMouseEnterMark = (idxs: number) => {
        if (isDesktop)
            if (isActive !== idx * 3 + idxs) {
                animate(
                    `#mark${idx * 3 + idxs}`,
                    {
                        top: "-50px",
                    },
                    {
                        ease: "easeOut",
                    }
                );
            } else {
                animate(
                    `#mark${isActive}`,
                    {
                        top: "-10px",
                    },
                    { ease: "easeOut" }
                );
            }
    };

    const handleMouseLeaveMark = (idxs: number) => {
        if (isDesktop)
            if (isActive !== idx * 3 + idxs) {
                animate(
                    `#mark${idx * 3 + idxs}`,
                    {
                        top: "-55px",
                    },
                    { ease: "easeOut" }
                );
            } else {
                animate(
                    `#mark${isActive}`,
                    {
                        top: "-15px",
                    },
                    { ease: "easeOut" }
                );
            }
    };

    const handleClickMark = (idxs: number) => {
        if (isActive !== idx * 3 + idxs) {
            const prevContainerRefIndex = isActive - idx * 3;

            if (
                containerRef.current[idxs] &&
                containerRef.current[prevContainerRefIndex]
            ) {
                containerRef.current[idxs].style.display = "block";
                containerRef.current[prevContainerRefIndex].style.display =
                    "none";
            }

            if (isDesktop) {
                animate(
                    `#mark${isActive}`,
                    {
                        top: "-55px",
                    },
                    { ease: "easeOut" }
                );
                animate(
                    `#mark${idx * 3 + idxs}`,
                    {
                        top: "-15px",
                    },
                    { ease: "easeOut" }
                );
            }

            isActive = idx * 3 + idxs;
        }
    };

    return (
        <div
            key={idx}
            onClick={closeDialogAnimationViaBackdrop}
            className="top-0 left-0 fixed w-full h-full z-30"
            ref={scope}
        >
            <div
                className="w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.75)]"
                id="backdrop"
            >
                <div
                    className="w-[25vw] h-[95vh] bg-white rounded-xl relative"
                    id="box"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                >
                    <div className="w-full h-full flex md:flex-row flex-col lg:px-12 sm:px-8 px-3 py-8">
                        <div className="md:flex grid grid-cols-1 md:overflow-hidden overflow-y-auto">
                            <div className="text-start font-bold md:pl-[28px] md:pr-8 px-2 flex-[0.3_0.5_0%] min-w-[200px] md:h-[calc(100vh-165px)] md:max-h-none max-h-[25vh]">
                                <div className="md:pt-6 pt-2 h-full grid grid-cols-1 md:grid-rows-[auto_22px_2fr] grid-rows-[auto_2fr]">
                                    <div
                                        className={`${chakraPetch.className} md:text-[35px] text-[27.5px] md:max-h-[250px] max-h-[100px] overflow-y-auto md:leading-[1.26] leading-[1.25] text-balance`}
                                    >
                                        {chapterContent}
                                    </div>
                                    <div className="w-full h-[2px] bg-[rgba(0,0,0,0.25)] mt-5 md:block hidden" />
                                    <div className="overflow-y-auto md:mt-0 mt-5">
                                        {description[id][idx]
                                            .split("\n")
                                            .map((text, idxt) => (
                                                <p
                                                    key={idxt}
                                                    className="font-light text-[15px] md:mt-5"
                                                >
                                                    {text}
                                                </p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-[2px] bg-[rgba(0,0,0,0.25)] mt-5 block md:hidden" />
                            <div className="flex flex-1">
                                <div className="bg-slate-500 h-full w-[2px] opacity-40 md:block hidden" />
                                <div className="grid grid-cols-1 md:pt-0 pt-3 grow md:pb-0 mb-16">
                                    <div
                                        className="block"
                                        ref={(el) => {
                                            containerRef.current[0] = el;
                                        }}
                                    >
                                        {Lessons[id][idx]}
                                    </div>
                                    <div
                                        className="hidden"
                                        ref={(el) => {
                                            containerRef.current[1] = el;
                                        }}
                                    >
                                        {FunFact[id][idx]}
                                    </div>
                                    <div
                                        className="hidden"
                                        ref={(el) => {
                                            containerRef.current[2] = el;
                                        }}
                                    >
                                        {Quizzes[id][idx]}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:mt-5 mt-2 absolute bottom-10 md:left-16 sm:left-8 left-3">
                                <button
                                    onClick={closeDialogAnimation}
                                    className="rounded-full border-2 border-black font-semibold px-5 py-2 bg-white"
                                >
                                    Trở lại
                                </button>
                            </div>
                            <div className="absolute flex md:gap-10 gap-4 md:right-10 right-3 md:top-0 bottom-[7.5px] h-[120px] items-end overflow-hidden z-50">
                                {[0, 1, 2].map((idxs) => (
                                    <svg
                                        viewBox="-27 -60 54 120"
                                        key={idxs}
                                        id={`mark${idx * 3 + idxs}`}
                                        onMouseEnter={() =>
                                            handleMouseEnterMark(idxs)
                                        }
                                        onMouseLeave={() =>
                                            handleMouseLeaveMark(idxs)
                                        }
                                        onClick={() => handleClickMark(idxs)}
                                        className={`cursor-pointer relative ${
                                            isDesktop
                                                ? idxs
                                                    ? "-top-[55px]"
                                                    : "-top-[15px]"
                                                : "top-0"
                                        } md:w-[54px] md:h-[120px] w-[49px] h-[130px]`}
                                    >
                                        <defs>
                                            <linearGradient
                                                x1="0%"
                                                x2="0%"
                                                y1="0%"
                                                y2="100%"
                                                id={`gradient${idx * 3 + idxs}`}
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor={
                                                        colorStop[idxs][0]
                                                    }
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor={
                                                        colorStop[idxs][1]
                                                    }
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M-27 -60 L-27 60 L0 40 L27 60 L27 -60 Z"
                                            fill={`url(#gradient${
                                                idx * 3 + idxs
                                            })`}
                                            className="md:block hidden"
                                        />
                                        <rect
                                            x="-27"
                                            y="-15"
                                            width="54"
                                            height="54"
                                            rx="15"
                                            fill={`url(#gradient${
                                                idx * 3 + idxs
                                            })`}
                                            className="md:hidden block"
                                        />
                                        {svgIcon[idxs]}
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="h-16 w-full flex-shrink-0 md:hidden block" />
                    </div>
                </div>
            </div>
        </div>
    );
}
