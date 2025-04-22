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
import portalIcon from "@/public/Image/portalSmIcon.png";
import {
    AnimatePresence,
    easeIn,
    motion,
    useScroll,
    useTransform,
} from "motion/react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { chapter, description } from "../static/chaptersStatic";
import styling from "@/components/css/test.module.css";

export default function ChapterRoute({ grade }: { grade: number }) {
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
        offset: ["start end", "end start"],
    });

    const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const parallax3 = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const parallax4 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const parallax5 = useTransform(scrollYProgress, [0, 1], [0, -300]);

    if (isMounted)
        return (
            <div
                className="w-full h-fit overflow-auto max-[1275px]:flex-col-reverse flex-row flex bg-white sm:pt-36 pt-28 max-[1275px]:justify-normal items-start max-[1275px]:items-center justify-center min-[1550px]:gap-[15rem] min-[640px]:gap-[5rem] sm:px-24 px-4"
                ref={container}
            >
                <AnimatePresence>
                    {isMobile && curChapter > 0 && (
                        <Drawer
                            curChapter={curChapter}
                            romanNumeral={romanNumeral}
                            handleCloseDrawer={() => {
                                document.body.style.overflow = "auto";

                                setCurChapter(0);
                            }}
                        />
                    )}
                </AnimatePresence>
                <div className="relative grid grid-cols-[repeat(3,8rem)] min-[640px]:grid-cols-[repeat(3,12rem)] min-[1550px]:grid-cols-[repeat(3,14rem)] sm:grid-rows-[repeat(3,50rem)] grid-rows-[repeat(3,40rem)] pb-40 z-10">
                    <LevelBtn
                        romanNumeral={romanNumeral[1]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={1}
                        gridPosition="col-[3/4] row-[1/2]"
                        className="absolute left-[25%]"
                        detailsCN="translate-y-12"
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[2]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={2}
                        directionR
                        gridPosition="col-[2/3] row-[1/2]"
                        className="absolute top-[20%] left-[20%]"
                        delay={1}
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[3]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={3}
                        directionR
                        gridPosition="row-[1/2] col-[1/2]"
                        className="absolute top-[60%] left-[5%]"
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[4]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={4}
                        directionR
                        gridPosition="col-[2/3] row-[2/3]"
                        className="absolute left-[10%]"
                        delay={2}
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[5]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={5}
                        directionR
                        gridPosition="col-[1/2] row-[2/3]"
                        className="absolute top-[60%] left-[20%]"
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[6]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={6}
                        gridPosition="row-[2/3] col-[3/-1]"
                        className="absolute right-0 top-[30%]"
                        delay={2}
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[7]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={7}
                        gridPosition="col-[3/4] row-[3/4]"
                        className="absolute left-[15%]"
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[8]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={8}
                        directionR
                        gridPosition="col-[2/3] row-[3/4]"
                        className="absolute top-[20%] left-[10%]"
                        delay={2}
                        setCurChapter={setCurChapter}
                    />
                    <LevelBtn
                        romanNumeral={romanNumeral[9]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={9}
                        directionR
                        gridPosition="row-[3/4] col-[1/2]"
                        className="absolute top-[60%]"
                        setCurChapter={setCurChapter}
                    />
                </div>
                <div className="border-2 rounded-[1.25rem] border-[#2f406e] bg-[#041dff0c] max-w-[32rem] h-fit max-[1275px]:static sticky max-[1275px]:top-[0rem] top-[9rem] sm:p-[2rem] p-[1.5rem] backdrop-blur-lg backdrop-saturate-150 z-10">
                    <p className="sm:text-4xl text-3xl font-bold font-['Chakra_Petch']">
                        KHỐI
                    </p>
                    <p className="sm:text-[5rem] text-[4.25rem] font-bold mb-4 sm:leading-[4rem] leading-[3rem] font-['Chakra_Petch']">
                        10
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
                                <span className="pl-2 text-nowrap">
                                    9 chương
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed top-0 left-0 w-full h-full select-none pointer-events-none">
                    <motion.div
                        className="absolute top-[32%] left-1/2 -translate-x-1/2 w-[50rem] opacity-[15%]"
                        style={{
                            y: parallax1,
                        }}
                    >
                        <Image src={bg1} alt="" />
                    </motion.div>
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
                        className="absolute top-[25%] right-[5rem] w-[22.5rem] opacity-[15%]"
                        style={{
                            y: parallax4,
                        }}
                    >
                        <Image src={bg4} alt="" />
                    </motion.div>
                    <motion.div
                        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[95%] opacity-[16%]"
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
    handleCloseDrawer,
}: {
    curChapter: number;
    romanNumeral: string[];
    handleCloseDrawer: () => void;
}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <div className="fixed h-full w-full left-0 top-0 z-50 flex items-end">
            <motion.div
                className="bg-[#000000] w-full h-full opacity-0 absolute top-0 left-0"
                onClick={handleCloseDrawer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                transition={{
                    duration: 0.3,
                    ease: easeIn,
                }}
                exit={{ opacity: 0 }}
            />
            <motion.div
                className="bg-white w-full rounded-t-2xl flex items-center flex-col sm:pb-[1.75rem] pb-[1rem]"
                id="drawer"
                initial={{
                    transform: "scale(0.85) translateY(100%)",
                }}
                animate={{
                    transform: "scale(1) translateY(0)",
                }}
                exit={{
                    transform: "scale(0.85) translateY(100%)",
                }}
            >
                <div className="w-[10rem] bg-[#96969677] h-[0.25rem] rounded-2xl mt-3" />
                <div className="md:px-10 px-5 py-5 w-full">
                    <p className="text-center">
                        <span className="font-semibold font-['Chakra_Petch'] md:text-[2rem] text-[1.4rem]">
                            CHƯƠNG {romanNumeral[curChapter - 1]}
                        </span>
                        <br />
                        <span className="md:text-[1.5rem] text-xl">
                            {chapter[0][curChapter - 1]}
                        </span>
                    </p>
                    <div className={`${styling.drawerContent} relative py-0.5`}>
                        <div className="overflow-auto max-h-[50dvh] py-8">
                            {description[0][curChapter - 1]}
                        </div>
                    </div>
                    <Link
                        className={`relative h-[3rem] rounded-2xl bg-[#207cf3] transition-colors ease-in duration-150 hover:bg-[#0c6ce8] active:top-[5px] flex justify-center items-center gap-5 text-xl text-white font-medium ${styling.levelBtn}`}
                        href=""
                    >
                        Khám phá
                        <Image src={find} alt="" className="h-[60%] w-fit" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};
