"use client";

import React, { useRef, useState } from "react";
import { lessonsToggle } from "../static/lessonsStatic";
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
    const smallDeviceLessonNameRef = useRef<HTMLDivElement | null>(null);
    const curToggleId = useRef<number>(0);

    let isMoblie;

    const handleToggle = (idxl: number, id: number, idx: number) => {
        const constCurToggleId = curToggleId.current;

        isMoblie = window.innerWidth < 768;

        if (!initialLessonToggleLoad[idxl])
            setInitialLessonToggleLoad((prev) => ({
                ...prev,
                [idxl]: true,
            }));

        if (
            !toggleRef.current[idxl] ||
            !toggleRef.current[constCurToggleId] ||
            !smallDeviceLessonNameRef.current
        )
            return;

        if (idxl !== curToggleId.current) {
            if (isMoblie) {
            } else {
                animate(
                    `#lessonName${idxl}`,
                    {
                        width: "fit-content",
                    },
                    { ease: "easeOut" }
                );

                animate(
                    `#lessonName${curToggleId.current}`,
                    {
                        width: "0px",
                    },
                    { ease: "easeOut" }
                );
            }

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

            smallDeviceLessonNameRef.current.textContent = String(
                lessonsToggle[id][idx][idxl][1]
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
                            className="h-full w-fit md:whitespace-nowrap"
                            key={idxl}
                            onClick={() => handleToggle(idxl, id, idx)}
                        >
                            <div className="relative px-3 flex">
                                <span className="whitespace-nowrap md:text-[1.25rem] md:leading-[1.75rem] text-[1.125rem] leding-[1.5rem]">
                                    Bài {lessonName[0]}
                                </span>
                                <div
                                    className={`${
                                        idxl ? "w-0" : "w-fit"
                                    } overflow-hidden md:pointer-events-auto pointer-events-none`}
                                    id={`lessonName${idxl}`}
                                >
                                    <div className="md:inline hidden text-[1.25rem] leading-[1.75rem]">
                                        : {lessonName[1]}
                                    </div>
                                </div>
                                <div className="absolute bottom-[-7px] left-0 flex">
                                    <div
                                        className={`sm:h-[2px] h-[1px] bg-black ${
                                            idxl ? "w-0" : "w-full"
                                        }`}
                                        id={`toggleLine${idxl}`}
                                    />
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
                <div className="sm:h-[2px] h-[1px] bg-[rgba(0,0,0,0.25)] absolute bottom-0 left-0 w-full" />
            </div>
            <div
                className="md:hidden leading-[1.6rem] text-[1.3rem] font-['Chakra_Petch'] my-3"
                id="lessonName"
                ref={smallDeviceLessonNameRef}
            >
                {lessonsToggle[id][idx][0][1]}
            </div>
            {Array.isArray(Lessons[id][idx]) &&
                Lessons[id][idx].map(
                    (lesson, idxl) =>
                        lesson && (
                            <div
                                key={idxl}
                                className={`md:mt-[10px] h-full md1:overflow-y-auto md1:overflow-x-hidden font-light w-full ${
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
