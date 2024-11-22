"use client";

import React, { useRef } from "react";
import { Chakra_Petch } from "next/font/google";
import QuesExcla from "@/Svg/QuesExcla";
import { useAnimate } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import { quiz, answerArray, choicesArray } from "./static/quizzesStatic";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

const QHeader = () => {
    return (
        <div
            className={`${chakraPetch.className} justify-center md:justify-normal md:pt-6 pt-2 md:text-[40px] text-[35px] leading-[42.5px] flex text-nowrap`}
        >
            <div
                className="mr-2 w-[90px] aspect-square"
                style={{
                    transform: "scale(-1, 1) translateY(-20px)",
                }}
            >
                <QuesExcla />
            </div>
            Quizzes
            <div
                className="ml-2 w-[90px] aspect-square"
                style={{
                    transform: "translateY(-20px)",
                }}
            >
                <QuesExcla />
            </div>
        </div>
    );
};

const QuizContent = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="font-medium max-h-[196px] overflow-y-auto">
            {children}
        </div>
    );
};

const Explaination = ({ children }: { children?: React.ReactNode }) => {
    const [scope, animate] = useAnimate();

    const isClicked = useRef<boolean>(false);

    const handleClickExpand = () => {
        if (!isClicked.current) {
            isClicked.current = true;

            animate(
                "#expandArrow",
                {
                    transform: "rotate(180deg)",
                },
                {
                    duration: 0.5,
                    type: "spring",
                }
            );

            animate("#explainationContainer", {
                display: "block",
                height: "fit-content",
            });
        } else {
            isClicked.current = false;

            animate(
                "#expandArrow",
                {
                    transform: "rotate(0deg)",
                },
                {
                    duration: 0.5,
                    type: "spring",
                }
            );

            animate("#explainationContainer", {
                display: "hidden",
                height: "0px",
            });
        }
    };

    return (
        <div className="w-full" ref={scope}>
            <div className="w-full h-[1px] bg-[rgba(0,0,0,0.5)] mt-[15px] mb-[5px]" />
            <div id="explainationContainer" className="h-0">
                {children}
            </div>
            <div
                className="flex justify-center cursor-pointer"
                onClick={handleClickExpand}
            >
                <svg
                    className="w-[20px] h-[20px]"
                    viewBox="-100 -100 200 200"
                    id="expandArrow"
                >
                    <path
                        d="M-95 0 L0 95 L95 0 M-95 -60 L0 35 L95 -60"
                        fill="none"
                        strokeWidth={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="stroke-black"
                    />
                </svg>
            </div>
        </div>
    );
};

const Choices = ({
    choices,
    idx,
    handleExpand,
}: {
    choices: string[];
    idx: number;
    handleExpand: () => void;
}) => {
    const [scope, animate] = useAnimate();

    const isAnswerRight = useRef<boolean>(false);

    const answer = answerArray[0];

    const handleClick = (chosenChoiceId: number, idx: number) => {
        if (!isAnswerRight.current)
            if (chosenChoiceId === answer) {
                isAnswerRight.current = true;

                animate(
                    `#choice${answer}${idx}`,
                    {
                        borderColor: "#3ce000",
                        backgroundColor: "rgba(209 255 189 / 0.81)",
                        color: "#3ce000",
                    },
                    {
                        duration: 0.1,
                    }
                );

                handleExpand();
            } else {
                animate(
                    `#choice${chosenChoiceId}${idx}`,
                    {
                        borderColor: "#ff0505",
                        backgroundColor: "rgba(255 212 189 / 0.81)",
                        color: "#ff0505",
                    },
                    {
                        duration: 0.1,
                    }
                );
            }
    };

    return (
        <div
            className="flex flex-col gap-4 mt-4 *:flex *:justify-around *:*:border-2 *:*:border-[rgb(71,71,71)] *:*:rounded-xl *:gap-10 *:*:w-full *:*:max-w-[20rem] *:*:h-20 *:*:max-h-[3rem] *:*:overflow-x-hidden"
            ref={scope}
        >
            <div>
                {choices[0] ? (
                    <button
                        onClick={() => handleClick(0, idx)}
                        id={`choice0${idx}`}
                    >
                        A. {choices[0]}
                    </button>
                ) : null}
                {choices[1] ? (
                    <button
                        onClick={() => handleClick(1, idx)}
                        id={`choice1${idx}`}
                    >
                        B. {choices[1]}
                    </button>
                ) : null}
            </div>
            <div>
                {choices[2] ? (
                    <button
                        onClick={() => handleClick(2, idx)}
                        id={`choice2${idx}`}
                    >
                        C. {choices[2]}
                    </button>
                ) : null}
                {choices[3] ? (
                    <button
                        onClick={() => handleClick(3, idx)}
                        id={`choice3${idx}`}
                    >
                        D. {choices[3]}
                    </button>
                ) : null}
            </div>
        </div>
    );
};

const Quiz1 = () => {
    const [scope, animate] = useAnimate();

    const handleExpand = () => {
        animate("#expandContainer", {
            height: "fit-content",
        });
    };

    return (
        <div
            className="*:md:pl-4 lgmi:pt-0 md:pt-12 pt-2 md:pr-5 md:px-0 px-3"
            ref={scope}
        >
            <QHeader />
            <div className="md:overflow-y-auto h-[calc(100vh-215px)] md:pr-4">
                <div
                    className="text-lg border border-black shadow-[inset_0_2px_4px_0_rgb(0,0,0,0.1)] rounded-xl px-5 py-3"
                    id="quizContainer"
                >
                    {quiz.map((content, idx) => (
                        <React.Fragment key={idx}>
                            <QuizContent>{content}</QuizContent>
                            <Choices
                                choices={choicesArray[idx]}
                                idx={idx}
                                handleExpand={handleExpand}
                            />
                        </React.Fragment>
                    ))}
                    <div
                        className="w-full overflow-hidden h-0"
                        id="expandContainer"
                    >
                        <Explaination>
                            <div className="py-5 px-5 flex items-center flex-col gap-2 font-medium">
                                Có thể tham khảo thêm để hỉu rõ:
                                <ReactPlayer url="https://www.youtube.com/watch?v=ZgqJ5wQF944" />
                            </div>
                        </Explaination>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Quizzes = [[<Quiz1 key="quiz1" />], [], []];
