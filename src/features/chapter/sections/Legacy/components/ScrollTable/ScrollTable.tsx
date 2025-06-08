"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useScrollTableContext } from "../../context/ScrollTableContext";
import { cn } from "@/lib/tailwind/tailwindMerge";
import ScrollSectionIcon from "../../assets/scrollSectionIcon.svg";
import ScrollSectionItemTable from "./ScrollSectionItemTable";
import { useSearchParams } from "next/navigation";

export default function ScrollTable() {
    const { sections, activeSection, interuptedScroll, isMobile } =
        useScrollTableContext();

    const searchParams = useSearchParams();
    const part = searchParams.get("part");

    console.log("2");

    return (
        <AnimatePresence>
            <div className="fixed top-0 left-0 h-svh min-[1000px]:w-[10rem] w-[9.5rem] pt-[7rem] flex items-center min-[1000px]:pl-[1rem] pl-[0.25rem]">
                helo
                <motion.div
                    className="h-[80%] w-full flex flex-col justify-center text-sm min-[768px]:space-y-2.5 space-y-3"
                    key={part}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {sections.map((section, id) => {
                        const shouldRenderInterupt =
                            interuptedScroll.current === section.id ||
                            interuptedScroll.current === -1;

                        const shouldRender =
                            activeSection === section.id &&
                            shouldRenderInterupt;

                        console.log(sections);

                        return (
                            <div key={id} className="text-start flex flex-col">
                                helo
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
                                                ? "stroke-[#762003]"
                                                : "stroke-[#a5a5a5]",
                                            "min-[768px]:flex-[0_0_22px] min-[768px]:size-[22px] flex-[0_0_16px] size-[1rem] transition-colors duration-200 ease-in",
                                        )}
                                        strokeWidth="5"
                                        strokeLinejoin="round"
                                        fill="white"
                                    />
                                    <AnimatePresence>
                                        {shouldRender && !isMobile && (
                                            <motion.div
                                                initial={{
                                                    gridTemplateRows: "0fr",
                                                }}
                                                animate={{
                                                    gridTemplateRows: "1fr",
                                                }}
                                                exit={{
                                                    gridTemplateRows: "0fr",
                                                }}
                                                className="grid"
                                            >
                                                <motion.p
                                                    className="pl-2 text-[#200800] self-center overflow-hidden"
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
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
