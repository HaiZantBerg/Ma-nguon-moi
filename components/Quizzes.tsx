"use client";

import React, { useRef, useState } from "react";
import { useAnimate } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import {
    quizName,
    answerArray,
    choicesArray,
    quizCardImg,
} from "./static/quizzesStatic";

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
    setQuizCard,
}: {
    children?: React.ReactNode;
    idx: number;
    content: string;
    setQuizCard: React.Dispatch<React.SetStateAction<number>>;
}) => {
    return (
        <button
            className="aspect-square h-[200px] border rounded-md relative"
            onClick={() => setQuizCard(idx)}
        >
            <div className="absolute top-1 left-2">{idx}</div>
            <QuizCardDisplay content={content}>{children}</QuizCardDisplay>
        </button>
    );
};

const QuizCardDialog = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className="fixed w-screen h-screen flex justify-center items-center top-0 left-0 z-[100] px-10 py-10">
            <div
                className="absolute top-0 left-0 w-screen h-screen -z-10"
                style={{
                    background: "rgba(0, 0, 0, 0.75)",
                }}
            />
            <div className="bg-white max-w-[800px] w-full h-full max-h-[400px]">
                hello
            </div>
        </div>
    );
};

const Quiz1 = () => {
    const [scope, animate] = useAnimate();

    const [quizCard, setQuizCard] = useState(-1);

    return (
        <div
            className="h-full md:overflow-y-auto md:overflow-x-hidden w-full relative"
            ref={scope}
        >
            <div className="pt-5 pl-5 flex flex-wrap gap-10">
                {quizName.map((quiz, idx) => (
                    <QuizCard
                        idx={idx + 1}
                        content={quiz}
                        setQuizCard={setQuizCard}
                    >
                        {quizCardImg[idx]}
                    </QuizCard>
                ))}
            </div>
            {quizCard !== -1 && <QuizCardDialog></QuizCardDialog>}
        </div>
    );
};

export const Quizzes = [[<Quiz1 key="quiz1" />], [], []];
