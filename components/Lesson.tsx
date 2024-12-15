"use client";

import React, { useRef } from "react";
import { gridDisplay, lessonsToggle } from "./static/lessonsStatic";
import { useAnimate } from "framer-motion";
import MenhDe from "./lessons/MenhDe";
import TapHop from "./lessons/TapHop";
import LuongGiac from "./lessons/LuongGiac";

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
    const [scope, animate] = useAnimate();

    const toggleRef = useRef<(HTMLDivElement | null)[]>([]);
    let curToggleId = 0;

    const handleToggle = (idxl: number) => {
        const constCurToggleId = curToggleId;

        if (!toggleRef.current[idxl] || !toggleRef.current[constCurToggleId])
            return;

        if (idxl !== curToggleId) {
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
                `#toggleLine${curToggleId}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            animate(
                `#lessonName${curToggleId}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            toggleRef.current[idxl].style.display = "block";
            toggleRef.current[constCurToggleId].style.display = "none";

            curToggleId = idxl;
        }
    };

    return (
        <>
            {lessonsToggle[id][idx] && (
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
            )}
            {Array.isArray(Lessons[id][idx]) ? (
                Lessons[id][idx].map((lesson, idxl) => (
                    <div
                        key={idxl}
                        className={`h-full md1:overflow-y-auto md1:overflow-x-hidden font-light *:md1:pl-9 w-full ${
                            idxl ? "hidden" : "block"
                        }`}
                        ref={(el) => {
                            toggleRef.current[idxl] = el;
                        }}
                    >
                        <div
                            className={`grid grid-cols-1 ${gridDisplay[0][0][1]} relative`}
                        >
                            {lesson}
                        </div>
                    </div>
                ))
            ) : (
                <div
                    className="mt-8 h-full md1:overflow-y-auto md1:overflow-x-hidden font-light *:md1:pl-9 w-full"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    <div
                        className={`grid grid-cols-1 ${gridDisplay[0][0][1]} relative`}
                    >
                        {Lessons[id][idx]}
                    </div>
                </div>
            )}
        </>
    );
}
