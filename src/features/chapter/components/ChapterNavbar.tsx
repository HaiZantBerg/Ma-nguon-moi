import React from "react";
import BookMarkItem from "./BookMarkItem";
import Header from "./Header";
import Setting from "./ui/Setting";

const sections = [
    {
        title: "legacy",
        stopColor: ["255, 77, 151, 1", "255, 190, 133, 1"],
        border: "#e27e6a",
    },
    {
        title: "funfacts",
        stopColor: ["46, 91, 255, 1", "169, 120, 255, 1"],
        border: "#8420e8",
    },
    {
        title: "quizzes",
        stopColor: ["0, 199, 60, 1", "135, 237, 88, 1"],
        border: "#2db652",
    },
];

export default function ChapterNavbar() {
    return (
        <div className="fixed top-0 left-0 w-screen z-[100] h-[7rem] bg-[#ffffff96] backdrop-grayscale-75 backdrop-blur-3xl shadow-[0_0_20px_#d1d1d1] rounded-b-2xl flex justify-between items-center sm:px-[2rem] px-[1rem]">
            <div className="w-[16rem] h-full flex items-center">
                <Setting sections={sections} />
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
