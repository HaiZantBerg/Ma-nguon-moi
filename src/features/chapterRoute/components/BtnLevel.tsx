"use client";

import React from "react";
import { chapter } from "../data/chaptersStatic";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import { FindIcon } from "../assets";
import Link from "next/link";
import { createPortal } from "react-dom";
import { cn } from "@/lib/tailwind/tailwindMerge";
import useHover from "../hooks/useHover";
import { Button3d } from "@/components";
import { ButtonContextType } from "@/context/Button3dContext";

type LevelBtnProps = {
    config: {
        directionR?: boolean;
        className?: string;
        detailsCN?: string;
        gridPosition: string;
        delay?: number;
    };
    grade: number;
    idx: number;
    isMobile: boolean;
    romanNumeral: string;
    setCurChapter: React.Dispatch<React.SetStateAction<number>>;
    level: StaticImageData[];
};

const variants: ButtonContextType["variant"][] = ["blue", "red", "purple"];

export default function BtnLevel({
    config,
    grade,
    idx,
    isMobile,
    romanNumeral,
    setCurChapter,
    level,
}: LevelBtnProps) {
    const {
        directionR = false,
        detailsCN = "top-[65%] -translate-y-1/2",
        delay = 0,
        gridPosition,
        className,
    } = config;

    const { mountElement, scope, handleMouseEnter, handleMouseLeave } =
        useHover(isMobile, `container${idx}${grade}`);

    const handleMouseClick = () => {
        if (isMobile) setCurChapter(idx + 1);
    };

    return (
        <div
            className={cn(
                gridPosition,
                "relative h-[45rem] w-[6rem] min-[40rem]:w-[12rem] sm:h-[50rem]",
            )}
        >
            <div className={className}>
                <div
                    className="relative aspect-[0.5] w-[5.5rem] scroll-mt-[30vh] select-none sm:w-[8rem]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleMouseClick}
                    ref={scope}
                    id={`container${idx}${grade}`}
                >
                    {mountElement &&
                        !isMobile &&
                        createPortal(
                            <div
                                className={`absolute ${
                                    directionR ? "left-[90%]" : "right-[90%]"
                                } h-fit w-[25rem] ${detailsCN} z-20`}
                            >
                                <div
                                    className={`h-0 w-0 overflow-hidden rounded-2xl border-2 border-black text-black opacity-0 ${
                                        directionR
                                            ? "float-left ml-[2.5rem]"
                                            : "float-right mr-[2.5rem]"
                                    } bg-[#ffffff80] backdrop-blur-lg backdrop-saturate-150`}
                                    id="detail"
                                >
                                    <div className="w-[22.5rem] p-5">
                                        <header className="mb-3 text-center">
                                            <p className="font-['Chakra_Petch'] text-[1.4rem] font-semibold">
                                                CHƯƠNG {romanNumeral}
                                            </p>
                                            <p className="text-xl">
                                                {
                                                    chapter["grade1" + grade]
                                                        .title[idx]
                                                }
                                            </p>
                                        </header>
                                        {
                                            chapter["grade1" + grade]
                                                .description[idx]
                                        }
                                        <Button3d
                                            as={Link}
                                            variant={variants[grade]}
                                            className="mt-3 h-[3rem] text-xl block"
                                            href={`/khoi1${grade}/chuong${idx + 1}/legacy`}
                                        >
                                            <Button3d.Content className="gap-3">
                                                Khám phá
                                                <FindIcon height="60%" />
                                            </Button3d.Content>
                                            <Button3d.Behind />
                                        </Button3d>
                                    </div>
                                </div>
                            </div>,
                            mountElement,
                        )}
                    <motion.div
                        className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2"
                        animate={{ y: [0, -10] }}
                        transition={{
                            duration: 2,
                            repeatType: "mirror",
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: -1 - delay,
                        }}
                    >
                        <Image priority src={level[0]} alt="" />
                    </motion.div>
                    <motion.div
                        className="pointer-events-none absolute bottom-[3.5rem] left-1/2 w-[75%] -translate-x-1/2 sm:bottom-[4.8rem]"
                        animate={{ y: [0, -10] }}
                        transition={{
                            duration: 2,
                            repeatType: "mirror",
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: -0.5 - delay,
                        }}
                    >
                        <Image priority src={level[1]} alt="" />
                    </motion.div>
                    <motion.div
                        className="pointer-events-none absolute bottom-[5rem] left-1/2 flex aspect-square w-[80%] -translate-x-1/2 items-center justify-center sm:bottom-[7.5rem]"
                        animate={{ y: [0, -10] }}
                        transition={{
                            duration: 2,
                            repeatType: "mirror",
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: -delay,
                        }}
                    >
                        <motion.div
                            className="absolute top-0 left-0 h-full w-full"
                            animate={{
                                rotate: "360deg",
                            }}
                            transition={{
                                duration: 12.5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: -delay,
                            }}
                        >
                            <Image priority src={level[2]} alt="" />
                        </motion.div>
                        <div className="font-['Algerian'] text-[1.65rem] text-black sm:text-[2.25rem]">
                            {idx + 1}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
