"use client";

import React, { useRef, useState } from "react";
import { lessonMarginTop, lessonsToggle } from "../static/lessonsStatic";
import { useAnimate } from "motion/react";
import MenhDe from "../lessons/MenhDeVaTapHop/MenhDe";
import TapHop from "../lessons/MenhDeVaTapHop/TapHop";
import LuongGiac10 from "../lessons/LuongGiac10";
import GiaTriLuongGiacCuaGocLuongGiac from "../lessons/LuongGiac11/GiaTriLuongGiacCuaGocLuongGiac";
import PhuongTrinhLuongGiac from "../lessons/LuongGiac11/PhuongTrinhLuongGiac";
import HamSoLuongGiac from "../lessons/LuongGiac11/HamSoLuongGiac";

const Lessons = [
    [
        [<MenhDe key="lesson1s1" />, <TapHop key="lesson1s2" />],
        null,
        <LuongGiac10 key="lesson3" />,
    ],
    [
        [
            <GiaTriLuongGiacCuaGocLuongGiac key="lesson4" />,
            <HamSoLuongGiac key="lesson6" />,
            <PhuongTrinhLuongGiac key="lesson5" />,
        ],
    ],
    [],
];

export default function LessonLayout({ id, idx }: { id: number; idx: number }) {
    return (
        <>
            {lessonsToggle[id][idx] ? (
                <LessonsToggleLayout id={id} idx={idx} />
            ) : (
                Lessons[id][idx] && (
                    <div
                        className="mt-8 h-full md1:overflow-y-auto md1:overflow-x-hidden font-light w-full"
                        style={{
                            scrollbarGutter: "stable",
                        }}
                    >
                        <div className={`relative md1:pl-9`}>
                            <div className="bg-black w-[1px] absolute h-full md1:left-[49px] md:left-[13px] left-[9px]" />
                            {Lessons[id][idx]}
                        </div>
                    </div>
                )
            )}
        </>
    );
}

const LessonsToggleLayout = ({ id, idx }: { id: number; idx: number }) => {
    const [initialLessonToggleLoad, setInitialLessonToggleLoad] = useState<{
        [key: number]: boolean;
    }>({
        0: true,
    });

    const [scope, animate] = useAnimate();

    const toggleRef = useRef<(HTMLDivElement | null)[]>([]);
    const curToggleId = useRef<number>(0);

    let isMoblie;

    const handleToggle = (idxl: number) => {
        const constCurToggleId = curToggleId.current;

        isMoblie = Number(!(window.innerWidth < 768)) / 2.75;

        if (!initialLessonToggleLoad[idxl])
            setInitialLessonToggleLoad((prev) => ({
                ...prev,
                [idxl]: true,
            }));

        if (!toggleRef.current[idxl] || !toggleRef.current[constCurToggleId])
            return;

        if (idxl !== curToggleId.current) {
            animate(
                `#lessonName${idxl}`,
                {
                    width: "fit-content",
                },
                { ease: "easeOut", duration: isMoblie }
            );

            animate(
                `#lessonName${curToggleId.current}`,
                {
                    width: "0px",
                },
                { ease: "easeOut", duration: isMoblie }
            );

            animate(
                `#toggleLine${idxl}`,
                {
                    width: "100%",
                },
                { delay: 0.2, ease: "easeOut" }
            );

            animate(
                `#toggleLine${curToggleId.current}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            toggleRef.current[idxl].style.display = "grid";
            toggleRef.current[constCurToggleId].style.display = "none";

            curToggleId.current = idxl;
        }
    };

    return (
        <>
            <div
                className="md1:h-[50px] md:h-[40px] h-[35px] md1:ml-[30px] md1:mt-[20px] mt-[10px] w-fit relative max-w-full"
                ref={scope}
            >
                <div className="flex h-full">
                    {lessonsToggle[id][idx].map((lessonName, idxl) => (
                        <button
                            className="h-full grid grid-rows-1 grid-cols-1 w-fit md:whitespace-nowrap"
                            key={idxl}
                            onClick={() => handleToggle(idxl)}
                        >
                            <div className="col-[1/-1] row-[1/-1] px-3 flex">
                                <span className="whitespace-nowrap md:text-[1.25rem] md:leading-[1.75rem] text-[1.125rem] leding-[1.5rem]">
                                    Bài {lessonName[0]}
                                </span>
                                <div
                                    className={`${
                                        idxl ? "w-0" : "w-fit"
                                    } overflow-hidden md:static absolute md:top-0 top-10 sm:left-0 left-[6px] md:pointer-events-auto pointer-events-none`}
                                    id={`lessonName${idxl}`}
                                >
                                    <span className="md:inline hidden">: </span>
                                    <span className="md:inline block w-[calc(100vw-75px)] text-start md:text-[1.25rem] md:leading-[1.75rem] leading-[1.6rem] text-[1.3rem] max-[768px]:font-['Chakra_Petch']">
                                        {lessonName[1]}
                                    </span>
                                </div>
                            </div>
                            <div className="col-[1/-1] row-[1/-1] self-end flex justify-center w-full">
                                <div
                                    className={`sm:h-[2px] h-[1px] bg-black ${
                                        idxl ? "w-0" : "w-full"
                                    }`}
                                    id={`toggleLine${idxl}`}
                                />
                            </div>
                        </button>
                    ))}
                </div>
                <div className="sm:h-[2px] h-[1px] bg-[rgba(0,0,0,0.25)] absolute bottom-0 left-0 w-full" />
            </div>
            {Array.isArray(Lessons[id][idx]) &&
                Lessons[id][idx].map(
                    (lesson, idxl) =>
                        lesson && (
                            <div
                                key={idxl}
                                className={`md:mt-[10px] ${
                                    lessonMarginTop[id][idx]
                                        ? lessonMarginTop[id][idx]
                                        : "mt-10"
                                } h-full md1:overflow-y-auto md1:overflow-x-hidden font-light w-full ${
                                    idxl ? "hidden" : "block"
                                }`}
                                ref={(el) => {
                                    toggleRef.current[idxl] = el;
                                }}
                            >
                                {initialLessonToggleLoad[idxl] && (
                                    <div
                                        className={`grid grid-cols-1 relative md1:pl-9`}
                                    >
                                        <div className="bg-black w-[1px] absolute h-full md1:left-[49px] md:left-[13px] left-[9px]" />
                                        {lesson}
                                    </div>
                                )}
                            </div>
                        )
                )}
        </>
    );
};
