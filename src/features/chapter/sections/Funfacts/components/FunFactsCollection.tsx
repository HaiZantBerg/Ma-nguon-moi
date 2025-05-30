"use client";

import React from "react";
import { ChapterChildProps } from "feature/chapter/types/General";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import card from "public/Image/funfacts/card.webp";
import CrossIcon from "@/assets/Svg/Cross.svg";
import ArrowIcon from "@/assets/Svg/arrowStuff.svg";

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
        isMounted,
        handleCardAnimation,
        show,
        scope,
        selectedItem,
        handleHide,
        setSelectedItem,
        handleSide,
    } = useFunfacts(Object.values(content || {}));

    if (!isMounted || !content) return;

    return (
        <div
            className="pt-[7rem] w-full h-full relative flex overflow-hidden"
            ref={scope}
        >
            <div className="grow h-full overflow-hidden relative">
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
                                    style={{
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                        )}
                    </div>
                )}
                <AnimatePresence>
                    {show && selectedItem && (
                        <motion.div
                            className="px-[10%] h-[90%] size-full z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onAnimationComplete={(definition) => {
                                if (!Object.values(definition)[0])
                                    setSelectedItem(undefined);
                            }}
                        >
                            <div className="relative top-[5%] size-full">
                                <header className="text-center w-full font-semibold text-[2.25rem] leading-[3rem] pr-[1.5rem]">
                                    {selectedItem.title}
                                </header>
                                <div
                                    className="overflow-y-auto overflow-x-hidden size-full"
                                    style={{
                                        scrollbarGutter: "stable",
                                    }}
                                >
                                    <div className="absolute size-full to-0 left-0 pointer-events-none pr-[1rem]">
                                        <div
                                            className="size-full"
                                            style={{
                                                background:
                                                    "linear-gradient(180deg, rgba(255, 255, 255, 1) 1%, rgba(255, 255, 255, 0) 5%, rgba(255, 255, 255, 0) 95%, rgba(255, 255, 255, 1) 99%)",
                                            }}
                                        />
                                    </div>
                                    <div className="py-8 pr-[1rem] space-y-4 text-lg">
                                        {selectedItem.content}
                                    </div>
                                </div>
                            </div>
                            <button
                                className="size-[1.5rem] absolute right-[5%] top-[5%]"
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
                        ? "border-r w-full pl-[1rem] absolute"
                        : "border-l min-[1300px]:w-[45.5rem] w-[31rem] relative",
                    "h-full bg-white",
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
                            ? "w-full pl-[1rem]"
                            : "min-[1300px]:w-[45.5rem] w-[31rem] pl-[2rem]",
                        "h-full overflow-x-hidden overflow-y-auto pr-[1rem] py-[1rem]",
                    )}
                >
                    {Object.entries(content).map(([figure, fact], id1) => (
                        <div className="flex-col flex" key={id1}>
                            {id1 != 0 && <hr className="mx-[5rem]" />}
                            <header className="text-xl font-semibold pt-[2rem]">
                                {figure}
                            </header>
                            <div
                                className={cn(
                                    isMobile ? "mx-auto" : "pl-[2rem]",
                                    "flex flex-wrap gap-[1rem] pt-[1rem] pb-[2rem]",
                                )}
                            >
                                {fact.map((item, id2) => (
                                    <div
                                        className="w-[12.5rem] relative h-[19rem] cursor-pointer select-none"
                                        onClick={() =>
                                            handleCardAnimation(id1, id2)
                                        }
                                        key={id2}
                                    >
                                        <p className="absolute z-10 top-[0.15rem] text-center w-full">
                                            {item.id}
                                        </p>
                                        <div className="absolute z-10 w-full left-0 top-[5rem] flex justify-center">
                                            <div className="size-[7rem] relative">
                                                {item.src && (
                                                    <Image
                                                        src={item.src}
                                                        alt=""
                                                        fill
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="absolute z-10 top-[13rem] font-medium text-center w-full">
                                            <p className="w-[10rem] mx-auto">
                                                {item.title}
                                            </p>
                                        </div>
                                        <Image src={card} alt="" fill />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
