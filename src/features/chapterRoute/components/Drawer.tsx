import React from "react";
import arrow from "../assets/arrowStuff.svg";
import Link from "next/link";
import { chapter, description } from "../data/chaptersStatic";
import styling from "../assets/drawer.module.css";
import find from "../assets/find.svg";
import Image from "next/image";
import { motion } from "motion/react";
import useDrawer from "../hooks/useDrawer";
import { Button3d } from "@/components";

type DrawerProps = {
    curChapter: number;
    romanNumeral: string[];
    setCurChapter: React.Dispatch<React.SetStateAction<number>>;
    grade: number;
    numberOfChapter: number;
};

export default function Drawer({
    curChapter,
    romanNumeral,
    setCurChapter,
    grade,
    numberOfChapter,
}: DrawerProps) {
    const { handleCloseDrawer, dragY, scope } = useDrawer(setCurChapter);

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 h-full w-full"
            onClick={handleCloseDrawer}
            initial={{ backgroundColor: "#00000000" }}
            animate={{ backgroundColor: "#00000050" }}
            transition={{
                duration: 0.3,
                ease: "easeIn",
            }}
            ref={scope}
        >
            <motion.div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`${styling.fakeDrawer} absolute bottom-0 z-10 flex w-full flex-col items-center rounded-t-2xl bg-white`}
                id="drawer"
                drag="y"
                style={{ y: dragY }}
                initial={{
                    y: "100%",
                    scale: 0.85,
                }}
                animate={{
                    y: "0%",
                    scale: 1,
                }}
                dragElastic={{
                    top: 0.3,
                    bottom: 0.5,
                }}
                dragConstraints={{
                    bottom: 0,
                    top: 0,
                }}
                onDragEnd={() => {
                    if (dragY.get() >= 50) handleCloseDrawer();
                }}
            >
                <div className="pointer-events-none mt-3 h-[0.25rem] w-[10rem] rounded-2xl bg-[#96969677]" />
                <div className="w-full px-5 py-5 sm:px-10">
                    <article>
                        <header className="text-center">
                            <h1 className="font-['Chakra_Petch'] text-[1.4rem] font-semibold sm:text-[2rem]">
                                CHƯƠNG {romanNumeral[curChapter - 1]}
                            </h1>
                            <h2 className="text-xl sm:text-[1.5rem]">
                                {chapter[0][curChapter - 1]}
                            </h2>
                        </header>
                        <div
                            className={`${styling.drawerContent} relative py-0.5`}
                        >
                            <div className="max-h-[50dvh] overflow-auto py-8">
                                {description[0][curChapter - 1]}
                            </div>
                        </div>
                    </article>
                    <div className="relative flex h-[3rem] gap-3">
                        <Button3d
                            variant="grey"
                            className="size-full"
                            onClick={() => {
                                const des = ((curChapter + 7) % 9) + 1;

                                setCurChapter(des);

                                document
                                    .getElementById(
                                        `container${des - 1}${grade}`,
                                    )
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            <Button3d.Content>
                                <Image
                                    src={arrow}
                                    alt=""
                                    className="w-[50%] translate-x-[-2px] rotate-270"
                                />
                            </Button3d.Content>
                            <Button3d.Behind />
                        </Button3d>
                        <Button3d
                            as={Link}
                            variant="blue"
                            href={`/khoi1${grade}/chuong${curChapter}`}
                            className="grow font-medium"
                        >
                            <Button3d.Content className="gap-3 sm:gap-5 text-xl">
                                Khám phá
                                <Image
                                    src={find}
                                    alt=""
                                    className="h-[60%] w-fit"
                                />
                            </Button3d.Content>
                            <Button3d.Behind />
                        </Button3d>
                        <Button3d
                            className="size-full"
                            variant="grey"
                            onClick={() => {
                                const inc = curChapter % numberOfChapter;

                                document
                                    .getElementById(`container${inc}${grade}`)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });

                                setCurChapter(inc + 1);
                            }}
                        >
                            <Button3d.Content>
                                <Image
                                    src={arrow}
                                    alt=""
                                    className="w-[50%] translate-x-[2px] rotate-90"
                                />
                            </Button3d.Content>
                            <Button3d.Behind />
                        </Button3d>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
