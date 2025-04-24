"use client";

import React, { useEffect, useState } from "react";
import levelUiI from "@/public/Image/leveluipart1.png";
import levelUiII from "@/public/Image/leveluipart2.png";
import levelUiIII from "@/public/Image/leveluipart3.png";
import { chapter, description } from "../static/chaptersStatic";
import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import find from "@/public/Svg/find.svg";
import Link from "next/link";
import styling from "@/components/css/test.module.css";
import { createPortal } from "react-dom";

export default function LevelBtn({
    grade,
    directionR = false,
    idx,
    className,
    gridPosition,
    detailsCN = "top-[65%] -translate-y-1/2",
    delay = 0,
    isMobile,
    romanNumeral,
    setCurChapter,
}: {
    grade: number;
    directionR?: boolean;
    idx: number;
    className?: string;
    gridPosition: string;
    detailsCN?: string;
    delay?: number;
    isMobile: boolean;
    romanNumeral: string;
    setCurChapter: React.Dispatch<React.SetStateAction<number>>;
}) {
    const [mountElement, setMountElement] = useState<HTMLElement | null>(null);

    const [scope, animate] = useAnimate();

    const handleMouseClick = () => {
        if (isMobile) setCurChapter(idx + 1);

        document
            .getElementById(`container${idx}${grade}`)
            ?.scrollIntoView({ behavior: "smooth" });
    };

    const handleMouseEnter = () => {
        if (!isMobile) {
            animate("#detail", {
                opacity: 1,
            });

            animate(
                "#detail",
                {
                    width: "22.5rem",
                },
                {
                    ease: "easeOut",
                }
            );

            animate(
                "#detail",
                {
                    height: "fit-content",
                },
                {
                    ease: "easeOut",
                    delay: 0.25,
                }
            );
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            animate(
                "#detail",
                {
                    height: 0,
                },
                {
                    ease: "easeOut",
                }
            );

            animate(
                "#detail",
                {
                    width: 0,
                },
                {
                    ease: "easeOut",
                    delay: 0.25,
                }
            );

            animate(
                "#detail",
                {
                    opacity: 0,
                },
                {
                    delay: 0.25,
                }
            );
        }
    };

    useEffect(() => {
        const el = document.getElementById(`container${idx}${grade}`);

        setMountElement(el);
    }, [idx, grade]);
    return (
        <div
            className={`${gridPosition} w-[6rem] min-[640px]:w-[12rem] min-[400px]:w-[8rem] min-[1550px]:w-[14rem] sm:h-[50rem] h-[45rem] relative`}
        >
            <div className={className}>
                <div
                    className="relative sm:w-[8rem] w-[5.5rem] aspect-[0.5] select-none scroll-mt-[30vh]"
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
                                } w-[25rem] h-fit ${detailsCN} z-[150]`}
                            >
                                <div
                                    className={`md:block hidden rounded-2xl border-black border-2 w-0 h-0 opacity-0 text-black overflow-hidden ${
                                        directionR
                                            ? "ml-[2.5rem] float-left"
                                            : "float-right mr-[2.5rem]"
                                    } backdrop-blur-lg backdrop-saturate-150 bg-[#ffffff80]`}
                                    id="detail"
                                >
                                    <div className="p-5 w-[22.5rem]">
                                        <p className="text-center mb-3">
                                            <span className="font-semibold font-['Chakra_Petch'] text-[1.4rem]">
                                                CHƯƠNG {romanNumeral}
                                            </span>
                                            <br />
                                            <span className="text-xl">
                                                {chapter[grade][idx]}
                                            </span>
                                        </p>
                                        {description[grade][idx]}
                                        <Link
                                            className={`relative h-[3rem] rounded-2xl mt-3 bg-[#207cf3] transition-colors ease-in duration-150 hover:bg-[#0c6ce8] active:top-[5px] flex justify-center items-center gap-5 text-xl text-white font-medium ${styling.levelBtn}`}
                                            href=""
                                        >
                                            Khám phá
                                            <Image
                                                src={find}
                                                alt=""
                                                className="h-[60%] w-fit"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>,
                            mountElement
                        )}
                    <motion.div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-full"
                        animate={{ y: [0, -10] }}
                        transition={{
                            duration: 2,
                            repeatType: "mirror",
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: -1 - delay,
                        }}
                    >
                        <Image priority src={levelUiI} alt="" />
                    </motion.div>
                    <motion.div
                        className="absolute sm:bottom-[4.8rem] bottom-[3.5rem] left-1/2 -translate-x-1/2 w-[75%] pointer-events-none"
                        animate={{ y: [0, -10] }}
                        transition={{
                            duration: 2,
                            repeatType: "mirror",
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: -0.5 - delay,
                        }}
                    >
                        <Image priority src={levelUiII} alt="" />
                    </motion.div>
                    <motion.div
                        className="absolute sm:bottom-[7.5rem] bottom-[5rem] left-1/2 -translate-x-1/2 w-[80%] aspect-square justify-center flex items-center pointer-events-none"
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
                            className="absolute top-0 left-0 w-full h-full"
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
                            <Image priority src={levelUiIII} alt="" />
                        </motion.div>
                        <div className="font-['Algerian'] sm:text-[2.25rem] text-[1.65rem] text-black">
                            {idx + 1}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
