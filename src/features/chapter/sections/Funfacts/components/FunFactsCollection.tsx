"use client";

import React from "react";
import { ChapterChildProps } from "feature/chapter/types/General";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import card from "public/Image/funfacts/card.webp";
import CrossIcon from "@/assets/Svg/Cross.svg";
import ArrowIcon from "@/assets/Svg/arrowStuff.svg";
import style from "../assets/funfacts.module.css";

import ContentArray from "../content/ContentArray";
import useFunfacts from "../hooks/useFunfacts";
import { cn } from "@/lib/tailwind/tailwindMerge";

export default function FunFactsCollection({
    grade,
    chapter,
}: ChapterChildProps) {
    const content = ContentArray["grade" + grade]["chapter" + chapter];

    const {
        isMobile,
        handleCardAnimation,
        show,
        scope,
        selectedItem,
        handleHide,
        setSelectedItem,
        handleSide,
    } = useFunfacts(Object.values(content || {}));

    if (!content) return;

    return (
        <div className="w-full h-svh relative flex overflow-hidden" ref={scope}>
            <div className="grow h-full overflow-hidden relative pt-[7rem]">
                <AnimatePresence>
                    {!isMobile && !show && !selectedItem && (
                        <motion.div
                            className="w-full h-full flex justify-center items-center text-neutral-300 text-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            Hãy chọn một trong các thẻ để xem câu chuyện
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="absolute top-0 left-0 size-full pt-[7rem]">
                    <div className="size-full relative">
                        {!show && (
                            <div
                                className="w-[12.5rem] h-[19rem] min-[1000px]:left-full max-[1000px]:right-full absolute top-1/2 -translate-y-1/2 opacity-0 select-none flex justify-center items-center"
                                id="card"
                            >
                                {selectedItem && (
                                    <div
                                        className="aspect-[12.5/19] h-full relative"
                                        style={{
                                            containerType: "inline-size",
                                        }}
                                    >
                                        <p className="absolute z-10 top-[0.8%] text-[8cqw] text-center w-full">
                                            {selectedItem.id}
                                        </p>
                                        <div className="absolute z-10 w-full left-0 top-[26%] flex justify-center">
                                            <div className="w-[56%] aspect-square relative">
                                                {selectedItem.src && (
                                                    <Image
                                                        src={selectedItem.src}
                                                        alt=""
                                                        fill
                                                        sizes="auto"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="absolute z-10 top-[68%] font-medium text-center w-full">
                                            <p className="w-[80%] text-[8cqw] mx-auto">
                                                {selectedItem.title}
                                            </p>
                                        </div>
                                        <Image
                                            src={card}
                                            alt=""
                                            fill
                                            sizes="auto"
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <AnimatePresence>
                    {show && selectedItem && (
                        <motion.div
                            className="px-[10%] pt-[5%] w-full h-[95%] z-10 relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onAnimationComplete={(definition) => {
                                if (!Object.values(definition)[0])
                                    setSelectedItem(undefined);
                            }}
                        >
                            <div className="size-full flex flex-col gap-3">
                                <header className="text-center w-full font-semibold md:text-[2.25rem] md:leading-[3rem] sm:text-3xl text-2xl pr-[1.5rem]">
                                    {selectedItem.title}
                                </header>
                                <div
                                    className={cn(
                                        style.content,
                                        "size-full overflow-hidden relative",
                                    )}
                                >
                                    <div
                                        className="overflow-y-auto overflow-x-hidden size-full relative"
                                        style={{
                                            scrollbarGutter: "stable",
                                        }}
                                    >
                                        <div className="py-8 pr-[1rem] space-y-4 md:text-lg sm:text-base text-sm">
                                            {selectedItem.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="md:size-[1.5rem] size-[1.25rem] absolute right-[5%] top-[5%]"
                                onClick={() => handleHide()}
                            >
                                <CrossIcon className="size-full" />
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div
                className={cn(
                    isMobile
                        ? "border-r w-full absolute"
                        : "border-l min-[1300px]:w-[45.5rem] w-[31rem] relative",
                    "h-full bg-white pt-[7rem] z-20",
                )}
                id="side"
            >
                <div
                    className="absolute size-5 left-0 top-1/2 -translate-y-1/2 origin-center max-[1000px]:hidden"
                    id="collapseTrigger"
                >
                    {!isMobile && (
                        <button
                            className="relative size-full"
                            onClick={() => {
                                handleSide();
                            }}
                        >
                            <ArrowIcon
                                className="absolute opacity-70 top-0 left-[-2px] size-full stroke-[10px] rotate-90"
                                stroke="black"
                            />
                            <ArrowIcon
                                className="absolute opacity-70 top-0 left-1 size-full stroke-[10px] rotate-90"
                                stroke="black"
                            />
                        </button>
                    )}
                </div>
                <div
                    className={cn(
                        isMobile
                            ? "w-full pl-2"
                            : "min-[1300px]:w-[45.5rem] w-[31rem] pl-[2rem] py-[1rem]",
                        "h-full overflow-x-hidden overflow-y-auto pr-[1rem]",
                    )}
                >
                    <div>
                        {Object.entries(content).map(([figure, fact], id1) => (
                            <div className="flex-col flex" key={id1}>
                                {id1 != 0 && (
                                    <hr className="md:mx-[5rem] mx-[3rem]" />
                                )}
                                <header className="md:text-xl text-lg font-semibold pt-[2rem]">
                                    {figure}
                                </header>
                                <div
                                    className={cn(
                                        isMobile ? "pl-4" : "pl-[2rem]",
                                        "flex flex-wrap gap-[1rem] pt-[1rem] pb-[2rem]",
                                    )}
                                >
                                    {fact.map((item, id2) => (
                                        <div
                                            className="md:w-[12.5rem] max-[48rem]:text-[0.8rem] max-[40rem]:text-[0.6rem] max-[48rem]:leading-[1.2rem] max-[40rem]:leading-[0.9rem] sm:w-[10rem] w-[7.5rem] relative aspect-[25/38] cursor-pointer select-none"
                                            onClick={() =>
                                                handleCardAnimation(id1, id2)
                                            }
                                            key={id2}
                                        >
                                            <p className="absolute z-10 md:top-[0.15rem] sm:top-[0.12rem] top-[0.09rem] text-center w-full">
                                                {item.id}
                                            </p>
                                            <div className="absolute z-10 w-full left-0 md:top-[5rem] sm:top-[4rem] top-[3rem] flex justify-center">
                                                <div className="md:size-[7rem] sm:size-[5.6rem] size-[4.2rem] relative">
                                                    {item.src && (
                                                        <Image
                                                            src={item.src}
                                                            alt=""
                                                            fill
                                                            sizes="auto"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            <div className="absolute z-10 md:top-[13rem] sm:top-[10.4rem] top-[7.8rem] font-medium text-center w-full">
                                                <p className="md:w-[10rem] sm:w-[8rem] w-[6rem] mx-auto">
                                                    {item.title}
                                                </p>
                                            </div>
                                            <Image
                                                src={card}
                                                alt=""
                                                fill
                                                sizes="auto"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
