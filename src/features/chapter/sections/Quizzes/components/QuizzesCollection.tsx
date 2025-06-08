"use client";

import React from "react";
import { ChapterChildProps } from "feature/chapter/types/General";
import ContentArray from "../content/ContentArray";
import Image from "next/image";
import { cn } from "@/lib/tailwind/tailwindMerge";
import CrossIcon from "@/assets/Svg/Cross.svg";
import QuizDisplay from "./QuizDisplay";
import useQuiz from "../hooks/useQuiz";

export default function QuizzesCollection({
    grade,
    chapter,
}: ChapterChildProps) {
    const content = ContentArray["grade" + grade]["chapter" + chapter];

    const { scope, handleCloseQuiz, handleOpenQuiz, curQuiz } = useQuiz();

    if (!content) return;

    return (
        <div className="flex flex-col w-full h-fit" ref={scope}>
            <div className="overflow-x-auto overflow-y-hidden pb-4 mt-[10rem] min-[41rem]:mx-[7rem] min-[31rem]:mx-[3rem] mx-[1rem]">
                <div className="space-x-4 whitespace-nowrap mx-auto w-fit h-full">
                    {content.map((item, id) => {
                        const { src, title, className = "" } = item;

                        return (
                            <button
                                key={id}
                                className="rounded-2xl min-[57rem]:size-[12.5rem] max-[57rem]:text-[0.8rem] max-[57rem]:leading-[1.2rem] size-[10rem] border-[rgba(5,97,32,0.7)] bg-white transition-all ease-out duration-200 hover:border-[rgba(5,97,32,1)] hover:shadow-[0_4px_0_0_rgba(5,97,32,1)] border-2 relative shadow-[0_4px_0_0_rgba(5,97,32,0.7)] cursor-pointer"
                                onClick={() => handleOpenQuiz(id, true)}
                            >
                                <p className="absolute min-[57rem]:top-[0.75rem] top-[0.6rem] min-[57rem]:left-[1.25rem] left-[1rem]">
                                    {id + 1}
                                </p>
                                <div
                                    className={cn(
                                        className ||
                                            "min-[57rem]:size-[7.5rem] size-[6rem]",
                                        "absolute -translate-x-1/2 left-1/2 top-[0.5rem]",
                                    )}
                                >
                                    <Image
                                        src={src}
                                        alt=""
                                        className="size-full object-contain"
                                    />
                                </div>
                                <p className="absolute min-[57rem]:top-[8rem] top-[6.4rem] text-center w-full font-medium px-2 text-pretty">
                                    {title}
                                </p>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="max-w-[94rem] w-full min-[41rem]:px-[7rem] min-[31rem]:px-[3rem] px-[1rem] flex flex-col grow py-[4rem] mx-auto max-h-[40rem] min-h-[30rem]">
                <div className="border-dashed border-4 border-neutral-200 rounded-2xl h-full grow relative flex items-center justify-center">
                    <div className="absolute w-[calc(100%+8px))] h-[calc(100%+8px))] top-[-4px] left-[-4px] flex justify-center items-center">
                        <div
                            id="quizContainer"
                            className="border-[#33aa56] text-[#00330f] shadow-[0_4px_0_0_#33aa56] w-0 h-[5%] relative bg-[rgb(248,255,248)] border-4 rounded-2xl opacity-0 overflow-hidden"
                        >
                            {curQuiz !== -1 && (
                                <>
                                    <button
                                        className="absolute min-[41rem]:right-6 right-4 min-[41rem]:top-6 top-4"
                                        onClick={() => handleCloseQuiz()}
                                    >
                                        <CrossIcon
                                            width="15"
                                            height="15"
                                            fill="#0f6e2c"
                                        />
                                    </button>
                                    <QuizDisplay content={content[curQuiz]} />
                                </>
                            )}
                        </div>
                    </div>
                    <p className="text-lg text-[#919191]">
                        Chọn một câu đố bất kì
                    </p>
                </div>
            </div>
        </div>
    );
}
