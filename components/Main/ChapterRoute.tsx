"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LevelBtn from "@/components/Extra/levelBtn";
import bg1 from "@/public/Image/bgpart1.png";
import bg2 from "@/public/Image/bgpart2.png";
import bg3 from "@/public/Image/bgpart3.png";
import bg4 from "@/public/Image/bgpart4.png";
import bg5 from "@/public/Image/bgpart5.png";
import find from "@/public/Svg/find.svg";
import arrow from "@/public/Svg/arrowStuff.svg";
import portalIcon from "@/public/Image/portalSmIcon.png";
import {
    easeIn,
    motion,
    useAnimate,
    useMotionValue,
    useScroll,
    useTransform,
} from "motion/react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { chapter, description } from "../static/chaptersStatic";
import styling from "@/components/css/generalStyling.module.css";

const LevelBtnArray = [
    {
        gridPosition: "col-[3/4] row-[1/2]",
        className: "absolute sm:left-[25%] left-[15%]",
        detailsCN: "translate-y-12",
    },
    {
        gridPosition: "col-[2/3] row-[1/2]",
        className: "absolute top-[20%] left-[20%]",
        directionR: true,
        delay: 1,
    },
    {
        gridPosition: "row-[1/2] col-[1/2]",
        className: "absolute top-[60%] left-[5%]",
        directionR: true,
    },
    {
        gridPosition: "col-[2/3] row-[2/3]",
        className: "absolute left-[10%]",
        directionR: true,
        delay: 2,
    },
    {
        gridPosition: "col-[1/2] row-[2/3]",
        className: "absolute top-[60%] left-[20%]",
        directionR: true,
    },
    {
        gridPosition: "row-[2/3] col-[3/4]",
        className: "absolute right-0 top-[30%]",
        delay: 2,
    },
    {
        gridPosition: "col-[3/4] row-[3/4]",
        className: "absolute left-[15%]",
    },
    {
        gridPosition: "col-[2/3] row-[3/4]",
        className: "absolute top-[20%] left-[10%]",
        directionR: true,
        delay: 2,
    },
    {
        gridPosition: "row-[3/4] col-[1/2]",
        className: "absolute top-[60%]",
        directionR: true,
        detailsCN: "-translate-y-24 bottom-0",
    },
];

export default function ChapterRoute({
    grade,
    numberOfChapter,
}: {
    grade: number;
    numberOfChapter: number;
}) {
    const [isMounted, setIsMounted] = useState(false);
    const [curChapter, setCurChapter] = useState(0);

    const romanNumeral = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
    ];

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const container = useRef<HTMLDivElement | null>(null);

    const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const parallax4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const parallax5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

    if (isMounted)
        return (
            <div
                className="w-full h-fit max-[1275px]:flex-col-reverse flex-row flex bg-white sm:pt-36 pt-28 max-[1275px]:justify-normal items-start max-[1275px]:items-center justify-center min-[1550px]:gap-[15rem] min-[640px]:gap-[5rem] sm:px-24 px-4"
                ref={container}
            >
                {isMobile && curChapter > 0 && (
                    <Drawer
                        curChapter={curChapter}
                        romanNumeral={romanNumeral}
                        setCurChapter={setCurChapter}
                        grade={grade}
                        numberOfChapter={numberOfChapter}
                    />
                )}
                <div className="relative grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)] pb-40 z-10">
                    {LevelBtnArray.map((config, idx) => (
                        <LevelBtn
                            romanNumeral={romanNumeral[idx]}
                            isMobile={isMobile}
                            grade={grade}
                            idx={idx}
                            gridPosition={config.gridPosition}
                            className={config.className}
                            detailsCN={config.detailsCN}
                            directionR={config.directionR}
                            delay={config.delay}
                            setCurChapter={setCurChapter}
                            key={idx}
                        />
                    ))}
                </div>
                <div className="border-2 rounded-[1.25rem] border-[#2f406e] bg-[#041dff0c] max-w-[32rem] h-fit max-[1275px]:static sticky max-[1275px]:top-[0rem] top-[9rem] sm:p-[2rem] p-[1.5rem] backdrop-blur-lg backdrop-saturate-150 z-10">
                    <p className="sm:text-4xl text-3xl font-bold font-['Chakra_Petch']">
                        KHỐI
                    </p>
                    <p className="sm:text-[5rem] text-[4.25rem] font-bold mb-4 sm:leading-[4rem] leading-[3rem] font-['Chakra_Petch']">
                        1{grade}
                    </p>
                    <div className="flex gap-4 sm:text-base text-[0.8rem]">
                        <p>
                            Khởi đầu hành trình khám phá lịch sử toán học, từ
                            đóng góp của các nền văn minh cổ đại trong đại số và
                            hình học đến những đột phá vào những năm 1900.
                        </p>
                        <div className="flex flex-col w-fit border-l-2 border-[#2f406e] py-2 pl-4">
                            <div className="flex">
                                <div className="w-[1.5rem] h-[1.5rem] inline">
                                    <Image
                                        src={portalIcon}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                {/* Thêm các chí số funfact game... */}
                                <span className="pl-2 text-nowrap">
                                    {numberOfChapter} chương
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed top-0 left-0 w-full h-lvh select-none pointer-events-none">
                    {!isMobile && (
                        <motion.div
                            className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[50rem] opacity-[15%]"
                            style={{
                                y: parallax1,
                            }}
                        >
                            <Image src={bg1} alt="" />
                        </motion.div>
                    )}
                    <motion.div
                        className="absolute top-[15%] left-[5%] w-[25rem] opacity-[14%]"
                        style={{
                            y: parallax2,
                        }}
                    >
                        <Image src={bg2} alt="" />
                    </motion.div>
                    <motion.div
                        className="absolute bottom-[-50%] left-[5%] w-[30rem] opacity-[16%]"
                        style={{
                            y: parallax3,
                        }}
                    >
                        <Image src={bg3} alt="" />
                    </motion.div>
                    <motion.div
                        className="absolute md:top-[25%] top-[40%] right-[5rem] w-[22.5rem] opacity-[15%]"
                        style={{
                            y: parallax4,
                        }}
                    >
                        <Image src={bg4} alt="" />
                    </motion.div>
                    <motion.div
                        className="absolute md:top-[20%] top-[50%] left-1/2 -translate-x-1/2 md:h-full h-[60%] aspect-video opacity-[17.5%]"
                        style={{
                            y: parallax5,
                        }}
                    >
                        <Image src={bg5} alt="" />
                    </motion.div>
                </div>
            </div>
        );
}

const Drawer = ({
    curChapter,
    romanNumeral,
    setCurChapter,
    grade,
    numberOfChapter,
}: {
    curChapter: number;
    romanNumeral: string[];
    setCurChapter: React.Dispatch<React.SetStateAction<number>>;
    grade: number;
    numberOfChapter: number;
}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const dragY = useMotionValue(0);

    const handleCloseDrawer = async () => {
        animate(
            scope.current,
            {
                backgroundColor: "#00000000",
            },
            {
                duration: 0.3,
                ease: easeIn,
            }
        );

        await animate("#drawer", {
            y: "100%",
            scale: 0.85,
        });

        document.body.style.overflow = "auto";

        setCurChapter(0);
    };

    const handleBtnClick = (id: number) => {
        animate(`#btn${id}`, {
            y: ["5px", "0px"],
        });
    };

    return (
        <motion.div
            className="fixed left-0 top-0 z-50 w-full h-full"
            onClick={handleCloseDrawer}
            initial={{ backgroundColor: "#00000000" }}
            animate={{ backgroundColor: "#00000050" }}
            transition={{
                duration: 0.3,
                ease: easeIn,
            }}
            ref={scope}
        >
            <motion.div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`${styling.fakeDrawer} bg-white w-full rounded-t-2xl flex items-center flex-col absolute bottom-0 z-10`}
                id="drawer"
                drag="y"
                style={{ y: dragY }}
                initial={{
                    y: "100%",
                    scale: 0.85,
                }}
                animate={{
                    y: "0%",
                    scale: 1,
                }}
                dragElastic={{
                    top: 0.3,
                    bottom: 0.5,
                }}
                dragConstraints={{
                    bottom: 0,
                    top: 0,
                }}
                onDragEnd={() => {
                    if (dragY.get() >= 50) handleCloseDrawer();
                }}
            >
                <div className="w-[10rem] bg-[#96969677] h-[0.25rem] rounded-2xl mt-3 pointer-events-none" />
                <div className="sm:px-10 px-5 py-5 w-full">
                    <p className="text-center">
                        <span className="font-semibold font-['Chakra_Petch'] sm:text-[2rem] text-[1.4rem]">
                            CHƯƠNG {romanNumeral[curChapter - 1]}
                        </span>
                        <br />
                        <span className="sm:text-[1.5rem] text-xl">
                            {chapter[0][curChapter - 1]}
                        </span>
                    </p>
                    <div className={`${styling.drawerContent} relative py-0.5`}>
                        <div className="overflow-auto max-h-[50dvh] py-8">
                            {description[0][curChapter - 1]}
                        </div>
                    </div>
                    <div className="flex h-[3rem] gap-3 relative">
                        <div className="absolute w-full flex h-full -bottom-1 gap-3 -z-10">
                            <div className="h-full aspect-square rounded-2xl bg-[#32324b]" />
                            <div className="h-full grow bg-[#3b3fa1] rounded-2xl" />
                            <div className="h-full aspect-square rounded-2xl bg-[#32324b]" />
                        </div>
                        <button
                            id="btn1"
                            className="h-full aspect-square rounded-2xl bg-[#4a5c99]"
                            onClick={() => {
                                handleBtnClick(1);

                                const des = ((curChapter + 7) % 9) + 1;

                                setCurChapter(des);

                                document
                                    .getElementById(
                                        `container${des - 1}${grade}`
                                    )
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            <Image
                                src={arrow}
                                alt=""
                                className="rotate-270 w-[50%] translate-x-[40%]"
                            />
                        </button>
                        <Link
                            id="btn2"
                            className="h-full rounded-2xl bg-[#207cf3] grow flex justify-center items-center sm:gap-5 gap-3 text-xl text-white font-medium"
                            href=""
                            onClick={() => {
                                handleBtnClick(2);
                            }}
                        >
                            Khám phá
                            <Image
                                src={find}
                                alt=""
                                className="h-[60%] w-fit"
                            />
                        </Link>
                        <button
                            id="btn3"
                            className="h-full aspect-square rounded-2xl bg-[#4a5c99]"
                            onClick={() => {
                                handleBtnClick(3);

                                const inc = curChapter % numberOfChapter;

                                document
                                    .getElementById(`container${inc}${grade}`)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });

                                setCurChapter(inc + 1);
                            }}
                        >
                            <Image
                                src={arrow}
                                alt=""
                                className="rotate-90 w-[50%] translate-x-[60%]"
                            />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
