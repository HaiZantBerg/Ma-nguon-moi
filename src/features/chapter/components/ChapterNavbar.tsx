import React from "react";
import LegacyIcon from "../assets/legacyIcon.svg";
import FunfactsIcon from "../assets/funfactsIcon.svg";
import QuizzesIcon from "../assets/quizzesIcon.svg";
import BookMarkItem from "./BookMarkItem";
import Header from "./Header";
import SettingIcon from "../assets/settingIcon.svg";

const sections = [
    {
        title: "legacy",
        image: (
            <LegacyIcon className="h-[3rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2" />
        ),
        stopColor: ["255, 77, 151, 1", "255, 190, 133, 1"],
        border: "#e27e6a",
    },
    {
        title: "funfacts",
        image: (
            <FunfactsIcon className="h-[2.75rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2" />
        ),
        stopColor: ["46, 91, 255, 1", "169, 120, 255, 1"],
        border: "#8420e8",
    },
    {
        title: "quizzes",
        image: (
            <QuizzesIcon className="h-[2.6rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2" />
        ),
        stopColor: ["0, 199, 60, 1", "135, 237, 88, 1"],
        border: "#2db652",
    },
];

export default function ChapterNavbar() {
    return (
        <div className="fixed top-0 left-0 w-full z-[100] h-[7rem] bg-[#ffffff96] backdrop-grayscale-75 backdrop-blur-3xl shadow-[0_0_20px_#d1d1d1] rounded-b-2xl flex justify-between items-center px-[2rem]">
            <div className="w-[16rem] h-full flex items-center">
                <button className="rounded-lg bg-[#f5f5f5] shadow-[0_5px_10px_#949494] size-[2.5rem] transition duration-200 ease-in hover:bg-[#e4e4e4]">
                    <SettingIcon className="w-[1.5rem] mx-auto" />
                </button>
            </div>
            <Header />
            <nav className="w-[16rem] h-full">
                <ul className="w-full h-full min-[32rem]:justify-between justify-evenly flex">
                    {sections.map((section, id) => (
                        <BookMarkItem config={section} key={id} id={id} />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
