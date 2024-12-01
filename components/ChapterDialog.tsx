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
    playAnimation,
    handleCloseDialog,
}: {
    chapterContent: string;
    description: string[][];
    id: number;
    idx: number;
    playAnimation: boolean;
    handleCloseDialog: () => void;
}) {
    const [scope, animate] = useAnimate();

    let isActive = idx * 4;
    const containerRef = useRef<(HTMLDivElement | null)[]>([]);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    let isClosing = false;
    let isCollapse = false;

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

            [0, 1, 2, 3].forEach((idxm) => {
                animate(
                    `#mark${idx * 4 + idxm}`,
                    {
                        top: idxm ? "-75px" : "-35px",
                    },
                    {
                        delay: 0.05 * idxm,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 700,
                        damping: 40,
                        mass: 3,
                    }
                );
            });

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

        openDialogAnimation();
    }, []);

    const closeDialogAnimation = async () => {
        if (isClosing) return;

        isClosing = true;

        [0, 1, 2, 3].forEach((idxm) => {
            setTimeout(
                () =>
                    animate(
                        `#mark${idx * 4 + idxm}`,
                        {
                            top: "-140px",
                        },
                        {
                            duration: 0.2,
                        }
                    ),
                50 * idxm
            );
        });

        animate(
            "#collapseBtnLeft",
            {
                opacity: 0,
            },
            { duration: 0.1 }
        );

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
        if (isClosing) return;

        if (isActive !== idx * 4 + idxs) {
            animate(
                `#mark${idx * 4 + idxs}`,
                {
                    top: "-65px",
                },
                {
                    ease: "easeOut",
                }
            );
        } else {
            animate(
                `#mark${isActive}`,
                {
                    top: "-25px",
                },
                { ease: "easeOut" }
            );
        }
    };

    const handleMouseLeaveMark = (idxs: number) => {
        if (isActive !== idx * 4 + idxs) {
            animate(
                `#mark${idx * 4 + idxs}`,
                {
                    top: "-75px",
                },
                { ease: "easeOut" }
            );
        } else {
            animate(
                `#mark${isActive}`,
                {
                    top: "-35px",
                },
                { ease: "easeOut" }
            );
        }
    };

    const handleClickMark = (idxs: number, playAnimation2: boolean) => {
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

            if (playAnimation2) {
                animate(
                    `#mark${isActive}`,
                    {
                        top: "-75px",
                    },
                    { ease: "easeOut" }
                );
                animate(
                    `#mark${idx * 4 + idxs}`,
                    {
                        top: "-35px",
                    },
                    { ease: "easeOut" }
                );
            }

            isActive = idx * 4 + idxs;
        }
    };

    const handleCollapseAndExtendSummary = async (horizontal: boolean) => {
        if (!isCollapse) {
            isCollapse = true;

            if (descriptionRef.current)
                descriptionRef.current.style.overflowY = "hidden";

            animate(
                horizontal ? "#blockage" : "#chapterTitle",
                horizontal ? { flex: "1 0 0%" } : { height: "0px" },
                {
                    duration: 0.3,
                    ease: "circOut",
                }
            );

            animate(
                horizontal ? "#collapseBtnLeft" : "#collapseBtnUp",
                {
                    transform: `${
                        horizontal ? "translateX(10px)" : "translateY(10px)"
                    } rotate(180deg)`,
                },
                {
                    duration: 0.5,
                    type: "spring",
                }
            );

            animate(
                "#hLine",
                {
                    transform: horizontal
                        ? "translateX(-10px)"
                        : "translateY(-10px)",
                },
                {
                    duration: 0.5,
                    type: "spring",
                }
            );
        } else {
            isCollapse = false;

            animate(
                horizontal ? "#collapseBtnLeft" : "#collapseBtnUp",
                {
                    transform: `${
                        horizontal ? "translateX(0px)" : "translateY(0px)"
                    } rotate(0deg)`,
                },
                {
                    duration: 0.5,
                    type: "spring",
                }
            );

            animate(
                "#hLine",
                {
                    transform: horizontal
                        ? "translateX(0px)"
                        : "translateY(0px)",
                },
                {
                    duration: 0.5,
                    type: "spring",
                }
            );

            await animate(
                horizontal ? "#blockage" : "#chapterTitle",
                horizontal ? { flex: "1 0 20%" } : { height: "fit-content" },
                {
                    duration: 0.3,
                    ease: "circOut",
                }
            );

            if (descriptionRef.current)
                descriptionRef.current.style.overflowY = "auto";
        }
    };

    return (
        <div
            key={idx}
            className="top-0 left-0 fixed w-full h-full z-30 flex items-center justify-center"
            ref={scope}
        >
            <div
                onClick={closeDialogAnimation}
                className="w-full h-full bg-[rgba(0,0,0,0.75)] absolute top-0 left-0 -z-10 md1:pointer-events-auto pointer-events-none"
                id="backdrop"
            />
            <div
                className="w-[25vw] h-[15vh] bg-white rounded-xl relative z-10"
                id="box"
            >
                <div className="w-full h-full lg:px-9 sm:px-7 px-3 py-6 overflow-hidden relative grid md1:grid-rows-[auto_1fr] grid-rows-[1fr_8px_auto] grid-cols-1">
                    <div className="col-[1/-1] md1:row-[1/2] row-[3/-1] md1:h-[140px] h-[54px] w-full overflow-hidden z-10 md1:translate-y-[-24px] pointer-events-none">
                        <div className="hidden md1:flex justify-end gap-3">
                            <div className="gap-3 flex *:pointer-events-auto">
                                {[0, 1, 2].map((idxm) => (
                                    <div key={idxm}>
                                        <svg
                                            viewBox="-27 -60 54 120"
                                            id={`mark${idx * 4 + idxm}`}
                                            onMouseEnter={() =>
                                                handleMouseEnterMark(idxm)
                                            }
                                            onMouseLeave={() =>
                                                handleMouseLeaveMark(idxm)
                                            }
                                            onClick={() =>
                                                handleClickMark(idxm, true)
                                            }
                                            className="cursor-pointer relative -top-[140px] w-[54px] h-[140px]"
                                        >
                                            <defs>
                                                <linearGradient
                                                    x1="0%"
                                                    x2="0%"
                                                    y1="0%"
                                                    y2="100%"
                                                    id={`gradient${
                                                        idx * 4 + idxm
                                                    }`}
                                                >
                                                    <stop
                                                        offset="0%"
                                                        stopColor={
                                                            colorStop[idxm][0]
                                                        }
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor={
                                                            colorStop[idxm][1]
                                                        }
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <path
                                                d="M-27 -70 L-27 70 L0 50 L27 70 L27 -70 Z"
                                                fill={`url(#gradient${
                                                    idx * 4 + idxm
                                                })`}
                                            />
                                            {svgIcon[idxm]}
                                        </svg>
                                    </div>
                                ))}
                            </div>
                            <svg
                                viewBox="-27 -60 54 120"
                                id={`mark${idx * 4 + 3}`}
                                onMouseEnter={() => handleMouseEnterMark(3)}
                                onMouseLeave={() => handleMouseLeaveMark(3)}
                                onClick={closeDialogAnimation}
                                className="pointer-events-auto cursor-pointer relative -top-[140px] md1:w-[54px] md1:h-[140px] w-[49px] h-[130px] md1:translate-y-0 translate-y-[15px]"
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
                                    d="M-27 -70 L-27 70 L0 50 L27 70 L27 -70 Z"
                                    fill={`url(#gradient${idx * 4 + 3})`}
                                />
                                {svgIcon[3]}
                            </svg>
                        </div>
                        <div className="flex md1:hidden justify-between h-full">
                            <svg
                                viewBox="-28 -27 54 54"
                                className="cursor-pointer w-[55px] h-[54px] pointer-events-auto"
                                onClick={closeDialogAnimation}
                            >
                                <defs>
                                    <linearGradient
                                        x1="0%"
                                        x2="0%"
                                        y1="0%"
                                        y2="100%"
                                        id={`gradient${idx * 4 + 7}`}
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
                                <rect
                                    x="-28"
                                    y="-27"
                                    width="54"
                                    height="54"
                                    rx="15"
                                    fill={`url(#gradient${idx * 4 + 7})`}
                                />
                                <g className="-translate-y-[26px]">
                                    {svgIcon[3]}
                                </g>
                            </svg>
                            <div className="flex gap-4 *:pointer-events-auto">
                                {[0, 1, 2].map((idxm) => (
                                    <div key={idxm}>
                                        <svg
                                            viewBox="-27 -27 54 54"
                                            className="cursor-pointer w-[54px] h-[54px]"
                                            onClick={() =>
                                                handleClickMark(idxm, false)
                                            }
                                        >
                                            <defs>
                                                <linearGradient
                                                    x1="0%"
                                                    x2="0%"
                                                    y1="0%"
                                                    y2="100%"
                                                    id={`gradient${
                                                        idx * 4 + idxm + 4
                                                    }`}
                                                >
                                                    <stop
                                                        offset="0%"
                                                        stopColor={
                                                            colorStop[idxm][0]
                                                        }
                                                    />
                                                    <stop
                                                        offset="100%"
                                                        stopColor={
                                                            colorStop[idxm][1]
                                                        }
                                                    />
                                                </linearGradient>
                                            </defs>
                                            <rect
                                                x="-27"
                                                y="-27"
                                                width="54"
                                                height="54"
                                                rx="15"
                                                fill={`url(#gradient${
                                                    idx * 4 + idxm + 4
                                                })`}
                                                className="md1:hidden block"
                                            />
                                            <g className="-translate-y-[26px]">
                                                {svgIcon[idxm]}
                                            </g>
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-[1/-1] md1:row-[1/-1] row-[1/2] md1:grid flex flex-col md1:grid-cols-[20%_1fr] md1:grid-rows-1 md1:overflow-y-hidden overflow-x-hidden overflow-y-auto h-full w-full">
                        <div
                            className="md1:col-[1/2] md1:row-[1/-1] text-start font-bold h-fit md1:pr-2 md1:px-0 px-2 md1:max-h-none max-h-[30vh] flex flex-col"
                            id="chapterTitle"
                        >
                            <div
                                className={`${chakraPetch.className} md1:pt-0 pt-2 md1:text-[35px] text-[27.5px] md1:max-h-[250px] md1:overflow-x-hidden md1:overflow-y-auto flex-grow md1:flex-none md1:leading-[1.26] leading-[1.25] md1:text-balance`}
                            >
                                {chapterContent}
                            </div>
                            <div className="w-full h-[1.5px] bg-[rgba(0,0,0,0.25)] mt-5 md1:block hidden" />
                            <div
                                className="overflow-y-auto font-light text-[15px] md1:mb-0 mb-4 md1:pt-4 pt-2"
                                ref={descriptionRef}
                            >
                                {description[id][idx]
                                    .split("\n")
                                    .map((text, idxt) => (
                                        <React.Fragment key={idxt}>
                                            {text}
                                        </React.Fragment>
                                    ))}
                            </div>
                        </div>
                        <div className="flex md1:flex-row flex-col md1:col-[1/-1] md1:row-[1/-1] pointer-events-none grow">
                            <div
                                className="flex-[1_0_20%] md1:block hidden"
                                id="blockage"
                            />
                            <div className="bg-white flex md1:flex-row flex-col w-full h-full pointer-events-auto">
                                <div className="flex items-center md1:flex-row flex-col">
                                    <button
                                        className="w-[50%] md1:hidden flex flex-col items-center"
                                        onClick={() =>
                                            handleCollapseAndExtendSummary(
                                                false
                                            )
                                        }
                                        id="collapseBtnUp"
                                    >
                                        <div className="w-[20px] h-[20px]">
                                            <svg viewBox="-100 -100 200 200">
                                                <path
                                                    d="M92.5 0 L0 -92.5 L-92.5 0 M92.5 60 L0 -27.5 L-92.5 60"
                                                    stroke="rgba(0,0,0,0.25)"
                                                    strokeWidth={15}
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    </button>
                                    <button
                                        className="h-[50%] items-center md1:flex hidden"
                                        onClick={() =>
                                            handleCollapseAndExtendSummary(true)
                                        }
                                        id="collapseBtnLeft"
                                    >
                                        <div className="w-[20px] h-[20px]">
                                            <svg viewBox="-100 -100 200 200">
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
                                    </button>
                                    <div
                                        className="md1:w-[1.5px] w-full md1:h-full h-[1.5px] bg-[rgba(0,0,0,0.25)]"
                                        id="hLine"
                                    />
                                </div>
                                <div className="flex h-full md1:pt-0 pt-3 grow">
                                    <div
                                        className="block h-full w-full"
                                        ref={(el) => {
                                            containerRef.current[0] = el;
                                        }}
                                    >
                                        <div className="md1:pl-4 md1:pt-0 pt-2 h-full flex flex-col w-full">
                                            <LHeader />
                                            <div className="h-full md1:overflow-y-auto md1:overflow-x-hidden w-full mt-5">
                                                <LessonLayout
                                                    id={id}
                                                    idx={idx}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="hidden h-full w-full"
                                        ref={(el) => {
                                            containerRef.current[1] = el;
                                        }}
                                    >
                                        <div className="md1:pl-4 md1:pt-0 pt-2 h-full flex flex-col w-full">
                                            <FFHeader />
                                            <div className="h-full md1:overflow-y-auto md1:overflow-x-hidden w-full mt-5">
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
                                        <div className="md1:pl-4 md1:pt-0 pt-2 h-full flex flex-col w-full">
                                            <QHeader />
                                            <div className="h-full md1:overflow-y-auto md1:overflow-x-hidden w-full mt-5">
                                                <div className="md:pt-5 md:pl-5 md:pb-0 flex flex-wrap lg:gap-10 md:gap-2 gap-6 md:justify-normal justify-center pb-5 pt-2">
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
            </div>
        </div>
    );
}
