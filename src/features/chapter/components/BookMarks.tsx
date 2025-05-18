import React from "react";
import Image from "next/image";
import legacyBookMark from "../assets/legacyIcon.svg";
import funfactsBookMark from "../assets/funfactsIcon.svg";
import quizzesBookMark from "../assets/quizzesIcon.svg";
import BookMarkItem from "./BookMarkItem";

const sections = [
    {
        title: "legacy",
        image: (
            <Image
                src={legacyBookMark}
                alt=""
                className="h-[3rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
            />
        ),
        stopColor: ["255, 77, 151, 1", "255, 190, 133, 1"],
        border: "#e27e6a",
    },
    {
        title: "funfacts",
        image: (
            <Image
                src={funfactsBookMark}
                alt=""
                className="h-[2.75rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
            />
        ),
        stopColor: ["46, 91, 255, 1", "169, 120, 255, 1"],
        border: "#8420e8",
    },
    {
        title: "quizzes",
        image: (
            <Image
                src={quizzesBookMark}
                alt=""
                className="h-[2.6rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
            />
        ),
        stopColor: ["0, 199, 60, 1", "135, 237, 88, 1"],
        border: "#2db652",
    },
];

export default function BookMarks() {
    return (
        // <nav className="fixed left-0 top-0 w-[19rem] h-[7.25rem]">
        <nav className="fixed right-0 top-0 w-[18rem] bg-[#eeeeee] border-b-2 border-l-2 border-[#868686] h-[7rem] rounded-bl-2xl pl-[1.25rem] pr-[1rem]">
            <ul className="w-full h-full justify-between flex">
                {sections.map((section, id) => (
                    <BookMarkItem config={section} key={id} id={id} />
                ))}
            </ul>
        </nav>
    );
}
