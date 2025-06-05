"use client";

import React from "react";
import { SmPortalIcon } from "@/features/chapterRoute/assets";
import RouteLine from "./RouteLine";
import Drawer from "../Drawer";
import { LevelBtnArray, ui } from "../../data/chapterRouteData";
import ParallaxBg from "./ParallaxBg";
import { Card } from "@/components";
import useSetUp from "../../hooks/useSetUp";
import useIsMounted from "@/hooks/useIsMounted";
import { cn } from "@/lib/tailwind/tailwindMerge";
import BtnLevel from "../BtnLevel";

const color: Record<string, string[]> = {
    grade10: ["#2f406e", "#041dff0c"],
    grade11: ["#2f6f53", "#05ff6d0d"],
    grade12: ["#4f2f6f", "#9305ff0d"],
};

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

    const { level, bg } = ui["grade1" + String(grade)];

    if (!isMounted) return;

    return (
        <div
            className="flex h-fit w-full flex-col-reverse items-center bg-white px-4 pt-28 max-[1367px]:overflow-hidden min-[500px]:px-20 min-[640px]:gap-[5rem] min-[1366px]:flex-row min-[1366px]:items-start min-[1366px]:justify-center min-[1400px]:px-24 min-[1550px]:gap-[15rem] sm:pt-36"
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
            <div
                className={cn(
                    grade === 2
                        ? "grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)]"
                        : "grid-cols-[repeat(3,1fr)] grid-rows-[repeat(3,1fr)]",
                    "relative z-10 grid pb-40",
                )}
            >
                {willChangeRouteLayout ? (
                    <RouteLine
                        className="h-auto w-full opacity-75"
                        grade={grade}
                        size="sm"
                    />
                ) : (
                    <RouteLine
                        className="h-auto w-full opacity-75"
                        grade={grade}
                        size="lg"
                    />
                )}
                {LevelBtnArray["grade1" + String(grade)].map((config, idx) => (
                    <BtnLevel
                        config={config}
                        romanNumeral={romanNumeral[idx]}
                        isMobile={isMobile}
                        grade={grade}
                        idx={idx}
                        setCurChapter={setCurChapter}
                        key={idx}
                        level={level}
                    />
                ))}
            </div>
            <Card
                className="top-[0] z-[1] min-[1366px]:sticky min-[1366px]:top-[9rem] min-[1366px]:max-w-[32rem]"
                style={{
                    borderColor: color["grade1" + String(grade)][0],
                    background: color["grade1" + String(grade)][1],
                }}
            >
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
                        Khởi đầu hành trình khám phá lịch sử toán học, từ đóng
                        góp của các nền văn minh cổ đại trong đại số và hình học
                        đến những đột phá vào những năm 1900.
                    </p>
                    <div
                        className="flex w-fit flex-col border-l-2 py-2 pl-4"
                        style={{
                            borderColor: color["grade1" + String(grade)][0],
                        }}
                    >
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
            <ParallaxBg scrollYProgress={scrollYProgress} bg={bg} />
        </div>
    );
}
