"use client";

import React, { useRef } from "react";
import { gridDisplay, lessonsToggle } from "./static/lessonsStatic";
import { useAnimate } from "motion/react";
import MenhDe from "./lessons/MenhDe";
import TapHop from "./lessons/TapHop";
import LuongGiac from "./lessons/LuongGiac";
import { signal, useSignal } from "@preact/signals-react";

const Lessons = [
    [
        [<MenhDe key="lesson1s1" />, <TapHop key="lesson1s2" />],
        null,
        <LuongGiac key="lesson3" />,
    ],
    [],
    [],
];

export default function LessonLayout({ id, idx }: { id: number; idx: number }) {
    return (
        <>
            {lessonsToggle[id][idx] ? (
                <LessonsToggleLayout id={id} idx={idx} />
            ) : (
                <div
                    className="mt-8 h-full md1:overflow-y-auto md1:overflow-x-hidden font-light w-full grid grid-cols-2 grid-rows-1"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    <div className="bg-[#292929] md:w-[1.5px] w-[1px] sticky h-full top-0 md1:left-[50px] md:left-[14px] left-[9.5px] col-[1/2] row-[1/-1]" />
                    <div className="col-[1/-1] row-[1/-1]">
                        <div
                            className={`grid grid-cols-1 ${gridDisplay[id][idx]} relative md1:pl-9`}
                        >
                            {Lessons[id][idx]}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

const initialLessonToggleLoad = signal<{ [key: number]: boolean }>({
    0: true,
});

const LessonsToggleLayout = ({ id, idx }: { id: number; idx: number }) => {
    useSignal();

    const [scope, animate] = useAnimate();

    const toggleRef = useRef<(HTMLDivElement | null)[]>([]);
    const curToggleId = useRef<number>(0);

    const handleToggle = (idxl: number) => {
        const constCurToggleId = curToggleId.current;

        if (!initialLessonToggleLoad.value[idxl]) {
            const initialLessonObject = { ...initialLessonToggleLoad.value };
            initialLessonObject[idxl] = true;

            initialLessonToggleLoad.value = initialLessonObject;
        }

        if (!toggleRef.current[idxl] || !toggleRef.current[constCurToggleId])
            return;

        if (idxl !== curToggleId.current) {
            animate(
                `#lessonName${idxl}`,
                {
                    width: "fit-content",
                },
                { ease: "easeOut" }
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

            animate(
                `#lessonName${curToggleId.current}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            toggleRef.current[idxl].style.display = "block";
            toggleRef.current[constCurToggleId].style.display = "none";

            curToggleId.current = idxl;
        }
    };

    return (
        <>
            <div
                className="md1:h-[50px] h-[40px] ml-[30px] mb-[10px] md1:mt-[20px] w-fit relative"
                ref={scope}
            >
                <div className="flex h-full">
                    {lessonsToggle[id][idx].map((lessonName, idxl) => (
                        <button
                            className="h-full flex w-fit md1:text-[1.25rem] text-[1.125rem] md1:leading-[1.75rem] leading-[1.5rem] px-3 relative text-nowrap overflow-hidden"
                            key={idxl}
                            onClick={() => handleToggle(idxl)}
                        >
                            <div>Bài {idxl + 1}</div>
                            <div
                                className={`${
                                    idxl ? "w-0" : "w-fit"
                                } overflow-hidden`}
                                id={`lessonName${idxl}`}
                            >
                                : {lessonName}
                            </div>
                            <div className="w-full absolute bottom-0 left-0 flex justify-center">
                                <div
                                    className={`h-[1.5px] bg-black ${
                                        idxl ? "w-0" : "w-full"
                                    }`}
                                    id={`toggleLine${idxl}`}
                                />
                            </div>
                        </button>
                    ))}
                </div>
                <div className="h-[1.5px] bg-[rgba(0,0,0,0.25)] absolute bottom-0 left-0 w-full" />
            </div>
            {Array.isArray(Lessons[id][idx]) &&
                Lessons[id][idx].map((lesson, idxl) => (
                    <div
                        key={idxl}
                        className={`h-full md1:overflow-y-auto md1:overflow-x-hidden font-light w-full ${
                            idxl ? "hidden" : "grid grid-cols-2 grid-rows-1"
                        }`}
                        ref={(el) => {
                            toggleRef.current[idxl] = el;
                        }}
                    >
                        <div className="bg-[#292929] md:w-[1.5px] w-[1px] sticky h-full top-0 md1:left-[50px] md:left-[14px] left-[9.5px] col-[1/2] row-[1/-1]" />
                        {initialLessonToggleLoad.value[idxl] && (
                            <div className="col-[1/-1] row-[1/-1]">
                                <div
                                    className={`grid grid-cols-1 ${gridDisplay[id][idx][idxl]} relative md1:pl-9`}
                                >
                                    {lesson}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </>
    );
};
