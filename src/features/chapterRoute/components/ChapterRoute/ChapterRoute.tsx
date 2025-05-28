"use client";

import React from "react";
import LevelBtn from "../levelBtn";
import { SmRoute, LgRoute, SmPortalIcon } from "@/features/chapterRoute/assets";
import Drawer from "../Drawer";
import { LevelBtnArray } from "../../data/chapterRouteData";
import ParallaxBg from "./ParallaxBg";
import { Card } from "@/components";
import useSetUp from "../../hooks/useSetUp";
import useIsMounted from "@/hooks/useIsMounted";

export default function ChapterRoute({
    grade,
    numberOfChapter,
}: {
    grade: number;
    numberOfChapter: number;
}) {
    const {
        scrollYProgress,
        isMobile,
        willChangeRouteLayout,
        setCurChapter,
        curChapter,
        container,
    } = useSetUp();

    const { isMounted } = useIsMounted();

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

    if (isMounted)
        return (
            <div
                className="flex h-fit w-full flex-col-reverse items-center bg-white px-4 pt-28 max-[1367px]:overflow-x-hidden min-[500px]:px-20 min-[640px]:gap-[5rem] min-[1366px]:flex-row min-[1366px]:items-start min-[1366px]:justify-center min-[1400px]:px-24 min-[1550px]:gap-[15rem] sm:pt-36"
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
                <div className="relative z-10 grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)] pb-40">
                    {willChangeRouteLayout ? (
                        <div className="absolute top-[7rem] left-[-2.5rem] h-full w-[25rem]">
                            <SmRoute className="h-auto w-full opacity-75" />
                        </div>
                    ) : (
                        <div className="absolute top-[10rem] left-9 h-full w-full">
                            <LgRoute className="h-auto w-full opacity-75" />
                        </div>
                    )}
                    {LevelBtnArray.map((config, idx) => (
                        <LevelBtn
                            config={config}
                            romanNumeral={romanNumeral[idx]}
                            isMobile={isMobile}
                            grade={grade}
                            idx={idx}
                            setCurChapter={setCurChapter}
                            key={idx}
                        />
                    ))}
                </div>
                <Card className="top-[0] z-[1] border-[#2f406e] bg-[#041dff0c] min-[1366px]:sticky min-[1366px]:top-[9rem] min-[1366px]:max-w-[32rem]">
                    <Card.Title as="h1" className="flex flex-col">
                        <span className="font-['Chakra_Petch'] text-3xl font-bold sm:text-4xl">
                            KHỐI
                        </span>
                        <span className="mx-auto mb-4 font-['Chakra_Petch'] text-[4.25rem] leading-[3rem] font-bold sm:text-[5rem] sm:leading-[4rem]">
                            1{grade}
                        </span>
                    </Card.Title>
                    <Card.Content className="flex gap-4">
                        <p>
                            Khởi đầu hành trình khám phá lịch sử toán học, từ
                            đóng góp của các nền văn minh cổ đại trong đại số và
                            hình học đến những đột phá vào những năm 1900.
                        </p>
                        <div className="flex w-fit flex-col border-l-2 border-[#2f406e] py-2 pl-4">
                            <div className="flex">
                                <div className="inline h-[1.5rem] w-[1.5rem]">
                                    <SmPortalIcon className="size-[24px]" />
                                </div>
                                <span className="pl-2 text-nowrap">
                                    {numberOfChapter} chương
                                </span>
                            </div>
                        </div>
                    </Card.Content>
                </Card>
                <ParallaxBg
                    // isMobile={isMobile}
                    scrollYProgress={scrollYProgress}
                />
            </div>
        );
}
