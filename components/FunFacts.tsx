"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    images,
    storyList,
    historyFigureName,
    storyContent,
} from "./static/funfactsStatic";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import cross from "@/Svg/Cross.svg";

const FunFact1 = ({ idxf, idxc }: { idxf: number; idxc: number }) => {
    const [openFlipCard, setOpenFlipCard] = useState<[number, number]>([
        -1, -1,
    ]);

    const triggerCloseCard = () => {
        setOpenFlipCard([-1, -1]);
    };

    return (
        <>
            {storyList[idxc][idxf].map((section, idx) => (
                <div key={idx} className="mb-5">
                    <span className="font-semibold text-2xl">
                        {historyFigureName[idxc][idxf][idx]}
                    </span>
                    <div className="md1:ml-7 flex flex-wrap mt-5">
                        {section.map((title, idxs) => (
                            <FunFactCard
                                key={idxs}
                                idxf={idxf}
                                idxc={idxc}
                                idx={idx}
                                setOpenFlipCard={setOpenFlipCard}
                                idxs={idxs}
                                title={title}
                            >
                                {openFlipCard[0] === idx &&
                                    openFlipCard[1] === idxs && (
                                        <FlipCard
                                            idx={idx}
                                            title={title}
                                            idxs={idxs}
                                            idxc={idxc}
                                            idxf={idxf}
                                            triggerCloseCard={triggerCloseCard}
                                        >
                                            {storyContent[idxc][idxf][idx][idxs]
                                                .split("//")
                                                .map((text, idxt) => (
                                                    <p key={idxt}>{text}</p>
                                                ))}
                                        </FlipCard>
                                    )}
                            </FunFactCard>
                        ))}
                    </div>
                    <hr className="mr-10" />
                </div>
            ))}
        </>
    );
};

export const FunFact = [
    [<FunFact1 key="funfact1" idxc={0} idxf={0} />],
    [],
    [],
];

const FunFactCard = ({
    children,
    setOpenFlipCard,
    idx,
    idxs,
    idxf,
    idxc,
    title,
}: {
    children?: React.ReactNode;
    setOpenFlipCard: React.Dispatch<React.SetStateAction<[number, number]>>;
    idx: number;
    idxs: number;
    idxf: number;
    idxc: number;
    title: string;
}) => {
    return (
        <>
            <div
                className="cursor-pointer relative md1:mr-5 mr-[6px] md1:mb-5 md1:h-[180px] h-[150px] mb-[6px]"
                style={{
                    aspectRatio: 8 / 9,
                }}
                onClick={() => {
                    setOpenFlipCard([idx, idxs]);
                }}
            >
                <svg viewBox="-160 -180 320 360" className="h-full w-full">
                    <path
                        d="M-120 -177.5 L120 -177.5 L157.5 -140 L157.5 130 L120 167.5 L-120 167.5 L-157.5 130 L-157.5 -140 Z"
                        strokeWidth="5"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        className="stroke-black"
                        fill="white"
                    />
                </svg>
                <div className="absolute top-0 left-0 w-full h-full grid grid-cols-1 grid-rows-2 select-none">
                    <div className="h-full aspect-square justify-self-center col-[1/-1] row-[1/2]">
                        {images[idxc][idxf][idx][idxs]}
                    </div>
                    <div className="text-[15px] leading-[17.5px] w-full font-semibold px-[7px] text-center col-[1/-1] row-[2/-1]">
                        {idxs + 1}.
                        <br />
                        {title}
                    </div>
                </div>
            </div>
            {children}
        </>
    );
};

const FlipCard = ({
    children,
    idx,
    title,
    idxs,
    idxc,
    idxf,
    triggerCloseCard,
}: {
    children: React.ReactNode;
    title: string;
    idx: number;
    idxs: number;
    idxf: number;
    idxc: number;
    triggerCloseCard: () => void;
}) => {
    const [scope, animate] = useAnimate();

    const flipCardContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        animate(
            "#backdrop",
            {
                opacity: [0, 1],
            },
            { duration: 0.5 }
        );

        setTimeout(() => {
            if (flipCardContentRef.current)
                flipCardContentRef.current.style.display = "flex";
        }, 200);

        animate(
            "#flipCardBody",
            {
                opacity: [0, 1],
            },
            {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
            }
        );

        animate(
            "#flipCardTitle",
            {
                opacity: [0, 1],
            },
            {
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
            }
        );

        animate(
            "#flipCard",
            {
                transform: [
                    "rotateY(180deg) scale(0.35)",
                    "rotateY(0deg) scale(1)",
                ],
            },
            {
                duration: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 2,
            }
        );
    }, []);

    const closeCardAnimation = async () => {
        animate(
            "#backdrop",
            {
                opacity: [1, 0],
            },
            { duration: 0.5 }
        );

        setTimeout(() => {
            if (flipCardContentRef.current)
                flipCardContentRef.current.style.display = "none";
        }, 10);

        animate(
            "#flipCardBody",
            {
                opacity: [1, 0],
            },
            {
                duration: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 50,
                mass: 0.075,
            }
        );

        animate(
            "#flipCard",
            {
                transform: [
                    "rotateY(0deg) scale(1)",
                    "rotateY(180deg) scale(0.35)",
                ],
            },
            {
                duration: 0.1,
                type: "spring",
                stiffness: 200,
                damping: 30,
                mass: 0.075,
            }
        );

        await animate(
            "#flipCardTitle",
            {
                opacity: [1, 0],
            },
            {
                duration: 0.1,
                type: "spring",
                stiffness: 400,
                damping: 50,
                mass: 0.075,
            }
        );

        triggerCloseCard();
    };

    return (
        <div
            className="fixed z-[100] w-screen h-screen -left-[2.5vw] -bottom-[2.5vh] flex items-center justify-center"
            style={{
                perspective: "750px",
            }}
            ref={scope}
        >
            <div
                className="absolute top-0 left-0 w-screen h-screen -z-10"
                style={{
                    background: "rgba(0, 0, 0, 0.75)",
                }}
                id="backdrop"
                onClick={closeCardAnimation}
            />
            <div
                className="relative w-[82.22vh] h-[92.5vh]"
                style={{
                    transformStyle: "preserve-3d",
                }}
                id="flipCard"
            >
                <div
                    className="relative top-[50%]"
                    style={{
                        aspectRatio: 8 / 9,
                        transformStyle: "preserve-3d",
                        transform: "translateY(-50%)",
                    }}
                >
                    <svg viewBox="-160 -180 320 360" id="flipCardBody">
                        <path
                            d="M-120 -177.5 L120 -177.5 L157.5 -140 L157.5 140 L120 177.5 L-120 177.5 L-157.5 140 L-157.5 -140 Z"
                            strokeWidth="3"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            className="stroke-[rgb(25,25,25)]"
                            fill="white"
                        />
                    </svg>
                    <div
                        className="w-full h-full absolute top-0 left-0"
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        <div
                            className="text-[60px] leading-[65px] flex flex-col h-full items-center w-full absolute left-0 top-0 font-semibold px-[40px] text-center overflow-hidden"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(-1px) scale(-1, 1)",
                            }}
                            id="flipCardTitle"
                        >
                            <div className="h-[50%] aspect-square">
                                {images[idxc][idxf][idx][idxs]}
                            </div>
                            <div className="absolute top-[50%] px-[30px]">
                                {idxs + 1}.
                                <br />
                                {title}
                            </div>
                        </div>
                        <div
                            className="w-full h-full hidden justify-between flex-col items-center absolute top-0 left-0 px-11 pt-[16%] pb-10"
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "translateZ(1px)",
                            }}
                            ref={flipCardContentRef}
                        >
                            <button
                                onClick={closeCardAnimation}
                                className="w-[5%] h-[5%] absolute top-[8%] right-[10%]"
                            >
                                <Image src={cross} alt="" />
                            </button>
                            <div
                                className="text-[clamp(15px,2vw,19.25px)] leading-[clamp(22px,100vw,24px)] w-full flex-col font-medium px-2 text-center overflow-y-auto flex gap-5"
                                style={{
                                    aspectRatio: 8 / 9,
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
