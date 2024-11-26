"use client";

import React, { useEffect, useRef } from "react";
import { Chakra_Petch } from "next/font/google";
import { useAnimate } from "framer-motion";
import { Lessons } from "./Lesson";
import { FunFact } from "./FunFacts";
import { Quizzes } from "./Quizzes";
import { colorStop, svgIcon } from "./static/static";
import QuesExcla from "@/Svg/QuesExcla.svg";
import BookandQuill from "@/Svg/Book&Quill.svg";
import Sparkle from "@/Svg/Sparkle.svg";
import Noticed from "@/Svg/Noticed.svg";
import Image from "next/image";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

const LHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} h-[72px] md:pt-6 pt-2 md:text-[40px] text-[35px] leading-[42.5px] items-center gap-4 flex text-nowrap`}
        >
            Câu chuyện lịch sử
            <div className="h-[64px] aspect-square">
                <Image src={BookandQuill} alt="" />
            </div>
        </div>
    );
};

const FFHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} h-[72px] md:pt-6 pt-2 md:text-[40px] text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div className="w-[40px] aspect-square mr-3">
                <Image src={Sparkle} alt="" />
            </div>
            Fun facts
            <div className="w-[64px] aspect-square -translate-x-6 -translate-y-7">
                <Image src={Noticed} alt="" />
            </div>
            <div className="md:-translate-x-6 -translate-x-9 w-[40px] aspect-square ml-3">
                <Image src={Sparkle} alt="" />
            </div>
        </div>
    );
};

const QHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} h-[72px] md:pt-6 pt-2 md:text-[40px] text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div
                className="mr-2 w-[90px] aspect-square"
                style={{
                    transform: "scale(-1, 1) translateY(-20px)",
                }}
            >
                <div className="w-[90px] aspect-square">
                    <Image src={QuesExcla} alt="" />
                </div>
            </div>
            Quizzes
            <div
                className="ml-2 w-[90px] aspect-square"
                style={{
                    transform: "translateY(-20px)",
                }}
            >
                <div className="w-[90px] aspect-square">
                    <Image src={QuesExcla} alt="" />
                </div>
            </div>
        </div>
    );
};

export default function ChapterDialog({
    chapterContent,
    description,
    id,
    idx,
    isDesktop,
    playAnimation,
    handleCloseDialog,
}: {
    chapterContent: string;
    description: string[][];
    id: number;
    idx: number;
    isDesktop: boolean;
    playAnimation: boolean;
    handleCloseDialog: () => void;
}) {
    const [scope, animate] = useAnimate();

    let isActive = idx * 3;
    const containerRef = useRef<(HTMLDivElement | null)[]>([]);

    let isDialogEnter = true;
    let isClosing = false;

    useEffect(() => {
        const openDialogAnimation = async () => {
            if (playAnimation) {
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
            }

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

            await animate(
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
                    className="w-[25vw] h-[15vh] bg-white rounded-xl relative"
                    id="box"
                    onMouseLeave={handleMouseLeave}
                    onMouseEnter={handleMouseEnter}
                >
                    <div className="w-full h-full grid md:grid-rows-[1fr_1fr_auto] grid-rows-[1fr_auto] grid-cols-1 lg:px-12 sm:px-8 px-3 py-8 overflow-x-hidden">
                        <div className="md:row-[1/-1] md:col-[1/-1] flex md:flex-row flex-col md:overflow-y-hidden overflow-y-auto overflow-x-hidden h-full w-full">
                            <div className="text-start font-bold md:pl-[28px] md:pr-8 px-2 md:max-h-none max-h-[25vh] min-w-[200px] flex-[1_0_25%] gap-2">
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
                            <div className="w-full h-[2px] bg-[rgba(0,0,0,0.25)] block md:hidden flex-[1_0_auto]" />
                            <div className="flex h-full w-full grow">
                                <div className="bg-slate-500 h-full w-[2px] opacity-40 md:block hidden" />
                                <div className="md:pt-0 pt-3 md:grow w-full">
                                    <div
                                        className="block h-full w-full"
                                        ref={(el) => {
                                            containerRef.current[0] = el;
                                        }}
                                    >
                                        <div className="md:pl-4 md:pt-0 pt-2 md:pr-5 md:px-0 px-3 h-full flex flex-col w-full">
                                            <LHeader />
                                            {Lessons[id][idx]}
                                        </div>
                                    </div>
                                    <div
                                        className="hidden h-full w-full"
                                        ref={(el) => {
                                            containerRef.current[1] = el;
                                        }}
                                    >
                                        <div className="md:pl-4 md:pt-0 pt-2 md:pr-5 md:px-0 px-3 h-full flex flex-col w-full">
                                            <FFHeader />
                                            {FunFact[id][idx]}
                                        </div>
                                    </div>
                                    <div
                                        className="hidden h-full w-full"
                                        ref={(el) => {
                                            containerRef.current[2] = el;
                                        }}
                                    >
                                        <div className="md:pl-4 md:pt-0 pt-2 md:pr-5 md:px-0 px-3 h-full flex flex-col w-full">
                                            <QHeader />
                                            {Quizzes[id][idx]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-[1/-1] md:row-[3/-1] row-[2/-1] col-[1/-1] w-[91px]">
                            <button
                                onClick={closeDialogAnimation}
                                className="rounded-full border-2 border-black font-semibold px-5 py-2 bg-white md:my-0 my-1"
                            >
                                Trở lại
                            </button>
                        </div>
                        <div className="flex md:gap-10 gap-4 md:h-[120px] h-[54px] items-end overflow-x-hidden z-50 md:row-[1/2] md:col-[1/-1] row-[2/-1] col-[1/-1] md:translate-y-[-32px] w-full justify-end">
                            {[0, 1, 2].map((idxs) => (
                                <div key={idxs}>
                                    <svg
                                        viewBox="-27 -60 54 120"
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
                                        } md:w-[54px] md:h-[120px] w-[49px] h-[130px] md:translate-y-0 translate-y-[24px]`}
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
                                            y="-10"
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
