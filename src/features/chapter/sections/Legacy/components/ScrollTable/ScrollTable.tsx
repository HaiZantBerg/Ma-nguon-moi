"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useScrollTableContext } from "../../context/ScrollTableContext";
import { cn } from "@/lib/tailwind/tailwindMerge";
import ScrollSectionIcon from "../../assets/scrollSectionIcon.svg";
import ScrollSectionItemTable from "./ScrollSectionItemTable";

export default function ScrollTable() {
    const { sections, activeSection, interuptedScroll } =
        useScrollTableContext();

    return (
        <div className="fixed top-0 left-0 h-dvh w-[10rem] pt-[7rem] flex items-center pl-[1rem]">
            <div className="h-[80%] w-full flex flex-col justify-center">
                {sections.map((section, id) => {
                    const shouldRenderInterupt =
                        interuptedScroll.current === section.id ||
                        interuptedScroll.current === -1;

                    const shouldRender =
                        activeSection === section.id && shouldRenderInterupt;

                    return (
                        <div
                            key={id}
                            className="text-start flex flex-col my-1.5"
                        >
                            <button
                                className="flex items-center text-start"
                                onClick={() => {
                                    interuptedScroll.current = section.id;

                                    if (id)
                                        document
                                            .getElementById(
                                                `section-${section.id}`,
                                            )
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    else
                                        scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        });
                                }}
                            >
                                <ScrollSectionIcon
                                    className={cn(
                                        shouldRender
                                            ? "stroke-black"
                                            : "stroke-[#a5a5a5]",
                                        "flex-[0_0_16px] transition-colors duration-200 ease-in",
                                    )}
                                    strokeWidth="5"
                                    strokeLinejoin="round"
                                    fill="white"
                                />
                                <AnimatePresence>
                                    {shouldRender && (
                                        <motion.div
                                            initial={{
                                                gridTemplateRows: "0fr",
                                            }}
                                            animate={{
                                                gridTemplateRows: "1fr",
                                            }}
                                            exit={{ gridTemplateRows: "0fr" }}
                                            className="grid"
                                        >
                                            <motion.p
                                                className="pl-2 self-center overflow-hidden"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                            >
                                                {section.title}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                            <AnimatePresence>
                                {activeSection === section.id &&
                                    (() => {
                                        if (
                                            interuptedScroll.current ===
                                            section.id
                                        )
                                            interuptedScroll.current = -1;

                                        return (
                                            <>
                                                {shouldRenderInterupt && (
                                                    <ScrollSectionItemTable
                                                        parId={id}
                                                    />
                                                )}
                                            </>
                                        );
                                    })()}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
