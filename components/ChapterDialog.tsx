"use client";

import React, { useEffect, useRef } from "react";
import { Chakra_Petch } from "next/font/google";
import { useAnimate } from "framer-motion";
import LessonLayout from "./Lesson";
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
            className={`${chakraPetch.className} h-[72px] md1:text-[40px] text-[35px] leading-[42.5px] items-center gap-4 flex text-nowrap`}
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
            className={`${chakraPetch.className} h-[72px] md1:text-[40px] items-end text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div className="w-[40px] aspect-square mr-3">
                <Image src={Sparkle} alt="" />
            </div>
            Fun facts
            <div className="w-[64px] aspect-square -translate-x-6 -translate-y-2">
                <Image src={Noticed} alt="" />
            </div>
            <div className="md1:-translate-x-6 -translate-x-9 w-[40px] aspect-square ml-3">
                <Image src={Sparkle} alt="" />
            </div>
        </div>
    );
};

const QHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} h-[72px] md1:text-[40px] items-end text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div
                className="mr-2 w-[90px] aspect-square"
                style={{
                    transform: "scale(-1, 1) translateY(30px)",
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
                    transform: "translateY(30px)",
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

    let isActive = idx * 4;
    const containerRef = useRef<(HTMLDivElement | null)[]>([]);

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
        if (!isDesktop || isClosing) return;

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
            if (isActive !== idx * 4 + idxs) {
                animate(
                    `#mark${idx * 4 + idxs}`,
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
            if (isActive !== idx * 4 + idxs) {
                animate(
                    `#mark${idx * 4 + idxs}`,
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
        if (isActive !== idx * 4 + idxs) {
            const prevContainerRefIndex = isActive - idx * 4;

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
                    `#mark${idx * 4 + idxs}`,
                    {
                        top: "-15px",
                    },
                    { ease: "easeOut" }
                );
            }

            isActive = idx * 4 + idxs;
        }
    };

    const handleCollapseSummary = () => {};

    return (
        <div
            key={idx}
            className="top-0 left-0 fixed w-full h-full z-30 flex items-center justify-center"
            ref={scope}
        >
            <div
                onClick={closeDialogAnimationViaBackdrop}
                className="w-full h-full bg-[rgba(0,0,0,0.75)] absolute top-0 left-0 -z-10"
                id="backdrop"
            />
            <div
                className="w-[25vw] h-[15vh] bg-white rounded-xl relative z-10"
                id="box"
            >
                <div className="w-full h-full lg:px-9 sm:px-7 px-3 py-6 overflow-hidden relative grid md1:grid-rows-[auto_1fr] grid-rows-[1fr_auto] grid-cols-1">
                    <div className="col-[1/-1] md1:row-[1/2] row-[2/-1] flex md1:flex-row flex-row-reverse md1:justify-end justify-between md1:gap-3 gap-4 md1:h-[120px] h-[54px] w-full items-end overflow-hidden z-50 md1:translate-y-[-24px]">
                        <div className="flex md1:gap-3 gap-4">
                            {[0, 1, 2].map((idxs) => (
                                <div key={idxs}>
                                    <svg
                                        viewBox="-27 -60 54 120"
                                        id={`mark${idx * 4 + idxs}`}
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
                                        } md1:w-[54px] md1:h-[120px] w-[49px] h-[130px] md1:translate-y-0 translate-y-[24px]`}
                                    >
                                        <defs>
                                            <linearGradient
                                                x1="0%"
                                                x2="0%"
                                                y1="0%"
                                                y2="100%"
                                                id={`gradient${idx * 4 + idxs}`}
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
                                                idx * 4 + idxs
                                            })`}
                                            className="md1:block hidden"
                                        />
                                        <rect
                                            x="-27"
                                            y="-10"
                                            width="54"
                                            height="54"
                                            rx="15"
                                            fill={`url(#gradient${
                                                idx * 4 + idxs
                                            })`}
                                            className="md1:hidden block"
                                        />
                                        {svgIcon[idxs]}
                                    </svg>
                                </div>
                            ))}
                        </div>
                        <div>
                            <svg
                                viewBox="-27 -60 54 120"
                                id={`mark${idx * 4 + 3}`}
                                onMouseEnter={() => handleMouseEnterMark(3)}
                                onMouseLeave={() => handleMouseLeaveMark(3)}
                                onClick={closeDialogAnimation}
                                className={`cursor-pointer relative ${
                                    isDesktop ? "-top-[55px]" : "top-0"
                                } md1:w-[54px] md1:h-[120px] w-[49px] h-[130px] md1:translate-y-0 translate-y-[24px]`}
                            >
                                <defs>
                                    <linearGradient
                                        x1="0%"
                                        x2="0%"
                                        y1="0%"
                                        y2="100%"
                                        id={`gradient${idx * 4 + 3}`}
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor={colorStop[3][0]}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor={colorStop[3][1]}
                                        />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M-27 -60 L-27 60 L0 40 L27 60 L27 -60 Z"
                                    fill={`url(#gradient${idx * 4 + 3})`}
                                    className="md1:block hidden"
                                />
                                <rect
                                    x="-27"
                                    y="-10"
                                    width="54"
                                    height="54"
                                    rx="15"
                                    fill={`url(#gradient${idx * 4 + 3})`}
                                    className="md1:hidden block"
                                />
                                {svgIcon[3]}
                            </svg>
                        </div>
                    </div>
                    <div className="col-[1/-1] md1:row-[1/-1] row-[1/2] flex md1:flex-row flex-col md1:overflow-y-hidden overflow-y-auto overflow-x-hidden h-full w-full">
                        <div className="text-start font-bold md1:pr-2 md1:px-0 md1:pb-0 pb-6 px-2 md1:max-h-none max-h-[25vh] min-w-[200px] md1:flex-[1_0_25%] gap-2">
                            <div className="md1:pt-0 pt-2 h-full grid grid-cols-1 md1:grid-rows-[auto_22px_2fr] grid-rows-auto">
                                <div
                                    className={`${chakraPetch.className} md1:text-[35px] text-[27.5px] md1:max-h-[250px] max-h-[100px] overflow-y-auto md1:leading-[1.26] leading-[1.25] text-balance`}
                                >
                                    {chapterContent}
                                </div>
                                <div className="w-full h-[2px] bg-[rgba(0,0,0,0.25)] mt-5 md1:block hidden" />
                                <div className="overflow-y-auto h-full md1:pr-2 mt-5">
                                    {description[id][idx]
                                        .split("\n")
                                        .map((text, idxt) => (
                                            <p
                                                key={idxt}
                                                className="font-light text-[15px]"
                                            >
                                                {text}
                                            </p>
                                        ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center md1:flex-row flex-col">
                            <div className="md1:h-[50%] flex items-center">
                                <svg
                                    viewBox="-100 -100 200 200"
                                    className="w-[20px] h-[20px] md1:rotate-0 rotate-90"
                                >
                                    <path
                                        d="M0 92.5 L-92.5 0 L0 -92.5 M60 92.5 L-27.5 0 L60 -92.5"
                                        stroke="rgba(0,0,0,0.25)"
                                        strokeWidth={15}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div className="md1:w-[2px] w-full md1:h-full h-[2px] bg-[rgba(0,0,0,0.25)] flex-[1_0_auto]" />
                        </div>
                        <div className="flex h-full w-full grow">
                            <div className="md1:pt-0 pt-3 md1:grow w-full">
                                <div
                                    className="block h-full w-full"
                                    ref={(el) => {
                                        containerRef.current[0] = el;
                                    }}
                                >
                                    <div className="md1:pl-4 md1:pt-0 pt-2 md1:pr-5 md1:px-0 px-3 h-full flex flex-col w-full">
                                        <LHeader />
                                        <div className="h-full md1:overflow-y-auto md1:overflow-x-hidden w-full pt-4">
                                            <LessonLayout id={id} idx={idx} />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hidden h-full w-full"
                                    ref={(el) => {
                                        containerRef.current[1] = el;
                                    }}
                                >
                                    <div className="md1:pl-4 md1:pt-0 pt-2 md1:pr-5 md1:px-0 px-3 h-full flex flex-col w-full">
                                        <FFHeader />
                                        <div className="h-full md1:overflow-y-auto md1:overflow-x-hidden w-full pt-4">
                                            {FunFact[id][idx]}
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="hidden h-full w-full"
                                    ref={(el) => {
                                        containerRef.current[2] = el;
                                    }}
                                >
                                    <div className="md1:pl-4 md1:pt-0 pt-2 md1:pr-5 md1:px-0 px-3 h-full flex flex-col w-full">
                                        <QHeader />
                                        <div className="h-full md1:overflow-y-auto md1:overflow-x-hidden w-full pt-4">
                                            {Quizzes[id][idx]}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
