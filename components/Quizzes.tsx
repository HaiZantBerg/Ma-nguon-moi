"use client";

import React, { useRef } from "react";
import { useAnimate } from "motion/react";
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
    quizExplaination,
} from "./static/quizzesStatic";
import cross from "@/public/Svg/Cross.svg";
import Image from "next/image";

const Quiz1 = ({ idxq, idxc }: { idxq: number; idxc: number }) => {
    return (
        <>
            {quizName[idxc][idxq].map((quiz, idx) => (
                <QuizCardContainer
                    idx={idx}
                    content={quiz}
                    key={idx}
                    quizName={quizName[idxc][idxq][idx]}
                    quiz={quizzes[idxc][idxq][idx]}
                    choices={choicesArray[idxc][idxq][idx]}
                    answerId={answerArray[idxc][idxq][idx]}
                    explaination={quizExplaination[idxc][idxq][idx]}
                >
                    {quizCardImg[idxc][idxq][idx]}
                </QuizCardContainer>
            ))}
        </>
    );
};

export const Quizzes = [[<Quiz1 key="quiz1" idxq={0} idxc={0} />], [], []];

const QuizCardDisplay = ({
    children,
    content,
}: {
    children?: React.ReactNode;
    content?: string;
}) => {
    return (
        <div className="w-full h-full flex flex-col px-2 py-2">
            <div className="flex-[1_0_65%] flex justify-center items-center h-full">
                {children}
            </div>
            <div className="flex-[1_0_35%] font-semibold text-lg flex items-center justify-center">
                {content}
            </div>
        </div>
    );
};

const QuizCardContainer = ({
    children,
    idx,
    content,
    quizName,
    quiz,
    choices,
    answerId,
    explaination,
}: {
    children?: React.ReactNode;
    idx: number;
    content?: string;
    quizName: string;
    quiz: string;
    choices: string[];
    answerId: number;
    explaination: React.JSX.Element;
}) => {
    const [scope, animate] = useAnimate();

    const quizDialogContainerRef = useRef<HTMLDivElement | null>(null);
    const explainationBtnRef = useRef<HTMLButtonElement | null>(null);

    const clickedChoice = [false, false, false, false];
    let openExplaination = false;

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
        if (clickedChoice[idx]) return;

        clickedChoice[idx] = true;

        if (idx === answerId) {
            animate(
                `#buttonExplaination`,
                {
                    height: "fit-content",
                },
                { duration: 0.5 }
            );

            setTimeout(() => {
                if (explainationBtnRef.current)
                    explainationBtnRef.current.scrollIntoView({
                        behavior: "smooth",
                    });
            }, 500);
        }

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

    const handleExpandExplaination = () => {
        if (!openExplaination) {
            openExplaination = true;

            animate(
                "#explainationContent",
                { height: "fit-content" },
                { duration: 0.4 }
            );

            animate(
                "#expandExplainationButton",
                {
                    transform: "rotate(180deg)",
                },
                { type: "spring", damping: 20 }
            );

            animate("#textOpenExplaination", {
                opacity: 0,
                height: "0px",
            });
        } else {
            openExplaination = false;

            animate(
                "#explainationContent",
                { height: "0px" },
                { duration: 0.4 }
            );

            animate(
                "#expandExplainationButton",
                {
                    transform: "rotate(0deg)",
                },
                { type: "spring", damping: 20 }
            );

            animate("#textOpenExplaination", {
                opacity: 1,
                height: "fit-content",
            });
        }
    };

    return (
        <div ref={scope} className="h-fit">
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
                    className="bg-white relative py-2 z-10 max-w-[900px] w-full h-full max-h-[450px] overflow-y-hidden rounded-xl shadow-[inset_0_4px_8px_0_rgb(0_0_0_/_0.3)]"
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
                    <div className="h-full flex flex-col mx-1">
                        <div className="text-center md:text-3xl text-[1.3rem] font-semibold md1:px-2 px-[24px]">
                            {quizName}
                        </div>
                        <div
                            className="overflow-y-auto grid grid-cols-1 grid-rows-[auto_min-content_auto] h-fit w-full px-4"
                            style={{
                                scrollbarGutter: "stable both-edges",
                            }}
                        >
                            <div className="my-1 col-[1/-1] row-[1/2] h-fit">
                                {quiz
                                    .split("\n")
                                    .join("")
                                    .split("//")
                                    .map((text, idxt) => (
                                        <div
                                            key={idxt}
                                            className="whitespace-pre text-wrap font-medium md:text-[1.2rem] md:leading-[1.7rem]"
                                        >
                                            {text}
                                        </div>
                                    ))}
                            </div>
                            <div className="flex flex-wrap gap-[0.5rem] w-full justify-center mt-3 mb-6 col-[1/-1] row-[2/3] md:text-[1.2rem] md:leading-[1.7rem]">
                                {choices.map((choice, idxc) => (
                                    <div
                                        key={idxc}
                                        className="lgmi:w-[49%] w-full relative"
                                    >
                                        <div
                                            className={`w-full h-full absolute top-1 left-0 -z-10 rounded-lg ${choiceColorBackdrop[idxc]}`}
                                            id={`shadow${idxc}`}
                                        />
                                        <button
                                            className={`${choiceColor[idxc]} min-h-[56px] flex md:items-center overflow-hidden active:translate-y-1 w-full h-full text-white relative transition-all ease-in duration-75 rounded-lg py-1 px-2 ${choiceColorHover[idxc]}`}
                                            onClick={() =>
                                                handleClickChoice(idxc)
                                            }
                                            id={`choice${idxc}`}
                                        >
                                            <div className="grow relative z-10">
                                                {choiceABCD[idxc]}.{" "}
                                                {choice
                                                    .split("//")
                                                    .map((text, idx) => (
                                                        <span
                                                            key={`${idx}${idxc}`}
                                                            className={
                                                                idx
                                                                    ? "block"
                                                                    : "inline"
                                                            }
                                                        >
                                                            {text}
                                                        </span>
                                                    ))}
                                            </div>
                                            <div className="absolute w-full h-full flex justify-center items-center top-0 left-0">
                                                <div className="aspect-square h-[200%]">
                                                    {answerId === idxc ? (
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
                                                                ].slice(4, 11)}
                                                                d="M116.049 194.505a67.98 67.98 0 0 0-96.14.002v.001c-26.546 26.547-26.545 69.587.001 96.134l134.296 134.301a67.977 67.977 0 0 0 96.138.002L492.089 183.2c26.546-26.545 26.548-69.583.006-96.132l-.007-.007a67.982 67.982 0 0 0-96.143-.005l-188.021 188.02a7.994 7.994 0 0 1-11.304 0z"
                                                                id={`check${idxc}`}
                                                                opacity={0}
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
                                                                ].slice(4, 11)}
                                                                id={`check${idxc}`}
                                                                opacity={0}
                                                            />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="w-full flex items-center h-fit flex-col col-[1/-1] row-[3/-1]">
                                <div className="h-[1.5px] w-full bg-[rgba(0,0,0,0.25)]" />
                                <div
                                    className="w-full h-0 overflow-hidden"
                                    id="explainationContent"
                                >
                                    {explaination}
                                </div>
                                <button
                                    className="flex flex-col items-center overflow-hidden h-0"
                                    id="buttonExplaination"
                                    onClick={handleExpandExplaination}
                                    ref={explainationBtnRef}
                                >
                                    <div
                                        className="w-[15px] h-[15px] relative"
                                        id="expandExplainationButton"
                                    >
                                        <svg viewBox="-10 -10 20 20">
                                            <path
                                                d="M-9.5 -5 L0 5 L9.5 -5"
                                                fill="none"
                                                stroke="rgba(0,0,0,0.25)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <div
                                        className="text-[rgba(0,0,0,0.5)] md:text-[1.2rem] md:leading-[1.7rem]"
                                        id="textOpenExplaination"
                                    >
                                        Xem giải thích
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
