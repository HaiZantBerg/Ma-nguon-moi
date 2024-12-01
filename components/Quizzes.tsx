"use client";

import React, { useRef } from "react";
import { useAnimate } from "framer-motion";
// import ReactPlayer from "react-player/lazy";
import {
    quizName,
    answerArray,
    choicesArray,
    quizCardImg,
    quizzes,
    choiceABCD,
    choiceColor,
    choiceColorBackdrop,
    choiceColorHover,
} from "./static/quizzesStatic";
import cross from "@/Svg/Cross.svg";
import Image from "next/image";

const QuizCardDisplay = ({
    children,
    content,
}: {
    children?: React.ReactNode;
    content: string;
}) => {
    return (
        <div className="w-full h-full flex flex-col px-2 py-2">
            <div className="flex-[1_0_65%]">{children}</div>
            <div className="flex-[1_0_35%] font-semibold text-lg flex items-center justify-center">
                {content}
            </div>
        </div>
    );
};

const QuizCard = ({
    children,
    idx,
    content,
    quizName,
    quiz,
    choices,
    answerId,
}: {
    children?: React.ReactNode;
    idx: number;
    content: string;
    quizName: string;
    quiz: string;
    choices: string[];
    answerId: number;
}) => {
    const [scope, animate] = useAnimate();

    const quizDialogContainerRef = useRef<HTMLDivElement | null>(null);

    const handleCloseCardDialog = async () => {
        animate(
            "#backdrop",
            {
                opacity: 0,
            },
            { duration: 0.3, ease: "easeOut" }
        );

        animate(
            "#dialog",
            {
                opacity: 0,
            },
            { duration: 0.3, ease: "easeOut" }
        );

        await animate(
            "#dialog",
            {
                transform: ["scale(1)", "scale(1.05)", "scale(0.7)"],
            },
            { duration: 0.3, times: [0, 0.05, 1], ease: "easeIn" }
        );

        if (quizDialogContainerRef.current)
            quizDialogContainerRef.current.style.display = "none";
    };

    const handleClickChoice = (idx: number) => {
        animate(
            `#choice${idx}`,
            {
                background: answerId === idx ? "#29b030" : "#5e5e5e",
            },
            { duration: 0.1 }
        );

        animate(
            `#shadow${idx}`,
            { background: answerId === idx ? "#17631b" : "#404040" },
            { duration: 0.1 }
        );

        animate(
            `#check${idx}`,
            { opacity: 0.75, fill: answerId === idx ? "#229127" : "#454545" },
            { duration: 0.265 }
        );
    };

    const handleOpenQuizDialog = () => {
        if (quizDialogContainerRef.current)
            quizDialogContainerRef.current.style.display = "flex";

        animate(
            "#backdrop",
            {
                opacity: 1,
            },
            { duration: 0.3, ease: "easeOut" }
        );

        animate(
            scope.current,
            {
                display: "flex",
            },
            { duration: 0 }
        );

        animate(
            "#dialog",
            {
                opacity: 1,
            },
            { duration: 0.3, ease: "easeOut" }
        );

        animate(
            "#dialog",
            {
                transform: ["scale(0.7)", "scale(1)"],
            },
            {
                duration: 0.3,
                type: "spring",
                stiffness: 700,
                damping: 50,
                mass: 3,
            }
        );
    };

    return (
        <div ref={scope}>
            <button
                className="aspect-square h-[200px] border rounded-md relative"
                onClick={handleOpenQuizDialog}
            >
                <div className="absolute top-1 left-2">{idx + 1}</div>
                <QuizCardDisplay content={content}>{children}</QuizCardDisplay>
            </button>
            <div
                className="fixed w-screen h-screen justify-center items-center top-0 left-0 z-[100] px-10 py-10 hidden"
                ref={quizDialogContainerRef}
            >
                <div
                    className="absolute top-0 left-0 w-screen h-screen -z-10 opacity-0"
                    style={{
                        background: "rgba(0, 0, 0, 0.75)",
                    }}
                    id="backdrop"
                    onClick={handleCloseCardDialog}
                />
                <div
                    className="bg-white relative py-2 z-10 scale-100 max-w-[800px] w-full h-full max-h-[400px] overflow-y-hidden rounded-xl flex flex-col shadow-[inset_0_4px_8px_0_rgb(0_0_0_/_0.3)]"
                    id="dialog"
                >
                    <button
                        className="w-[20px] h-[20px] absolute right-2"
                        onClick={handleCloseCardDialog}
                    >
                        <Image
                            src={cross}
                            alt=""
                            className="w-[20px] h-[20px]"
                        />
                    </button>
                    <div className="h-full flex flex-col mx-5">
                        <div className="flex flex-col grow h-full">
                            <div className="flex justify-center text-2xl font-semibold px-2">
                                {quizName}
                            </div>
                            <div className="overflow-y-auto flex flex-col h-full">
                                <div className="my-1">
                                    {quiz
                                        .split("\n")
                                        .join("")
                                        .split("//")
                                        .map((text, idxt) => (
                                            <div
                                                key={idxt}
                                                className="whitespace-pre text-wrap font-medium md:text-[1rem] md:leading-[1.5rem] text-[0.8rem] leading-[1.15rem]"
                                            >
                                                {text}
                                            </div>
                                        ))}
                                </div>
                                <div className="grow flex items-center w-full">
                                    <div className="flex flex-wrap gap-[0.5rem] w-full justify-center">
                                        {choices.map((choice, idxc) => (
                                            <div
                                                key={idxc}
                                                className="sm:w-[49%] w-full relative"
                                            >
                                                <div
                                                    className={`w-full h-full absolute top-1 left-0 -z-10 rounded-lg ${choiceColorBackdrop[idxc]}`}
                                                    id={`shadow${idxc}`}
                                                />
                                                <button
                                                    className={`${choiceColor[idxc]} min-h-[56px] flex overflow-hidden active:translate-y-1 w-full h-full text-white relative transition-all ease-in duration-75 rounded-lg py-1 px-2 ${choiceColorHover[idxc]}`}
                                                    onClick={() =>
                                                        handleClickChoice(idxc)
                                                    }
                                                    id={`choice${idxc}`}
                                                >
                                                    <div className="grow relative z-10">
                                                        {choiceABCD[idxc]}.{" "}
                                                        {choice}
                                                    </div>
                                                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0">
                                                        <div className="aspect-square h-[200%]">
                                                            {answerId ===
                                                            idxc ? (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    version="1.1"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    viewBox="0 0 512 512"
                                                                    xmlSpace="preserve"
                                                                >
                                                                    <path
                                                                        fill={choiceColor[
                                                                            idxc
                                                                        ].slice(
                                                                            4,
                                                                            11
                                                                        )}
                                                                        d="M116.049 194.505a67.98 67.98 0 0 0-96.14.002v.001c-26.546 26.547-26.545 69.587.001 96.134l134.296 134.301a67.977 67.977 0 0 0 96.138.002L492.089 183.2c26.546-26.545 26.548-69.583.006-96.132l-.007-.007a67.982 67.982 0 0 0-96.143-.005l-188.021 188.02a7.994 7.994 0 0 1-11.304 0z"
                                                                        id={`check${idxc}`}
                                                                        opacity={
                                                                            0
                                                                        }
                                                                    />
                                                                </svg>
                                                            ) : (
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    version="1.1"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    viewBox="0 0 365.717 365"
                                                                    xmlSpace="preserve"
                                                                >
                                                                    <path
                                                                        d="M356.34 296.348 69.727 9.734c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.816c-12.5 12.504-12.5 32.77 0 45.25L295.988 356.68c12.504 12.5 32.77 12.5 45.25 0l15.082-15.082c12.524-12.48 12.524-32.75.02-45.25zm0 0 M295.988 9.734 9.375 296.348c-12.5 12.5-12.5 32.77 0 45.25l15.082 15.082c12.504 12.5 32.77 12.5 45.25 0L356.34 70.086c12.504-12.5 12.504-32.766 0-45.246L341.258 9.758c-12.5-12.524-32.766-12.524-45.27-.024zm0 0"
                                                                        fill={choiceColor[
                                                                            idxc
                                                                        ].slice(
                                                                            4,
                                                                            11
                                                                        )}
                                                                        id={`check${idxc}`}
                                                                        opacity={
                                                                            0
                                                                        }
                                                                    />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-[30px] w-full">
                            <div className="h-[300px] w-1 hidden"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Quiz1 = () => {
    return (
        <>
            {quizName.map((quiz, idx) => (
                <QuizCard
                    idx={idx}
                    content={quiz}
                    key={idx}
                    quizName={quizName[idx]}
                    quiz={quizzes[idx]}
                    choices={choicesArray[idx]}
                    answerId={answerArray[idx]}
                >
                    {quizCardImg[idx]}
                </QuizCard>
            ))}
        </>
    );
};

export const Quizzes = [[<Quiz1 key="quiz1" />], [], []];
