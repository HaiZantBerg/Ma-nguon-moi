"use client";

import React, { useRef } from "react";
import { ChapterChildProps } from "@/types/General";
import { chapters } from "@/data/chaptersStatic";
import style from "../../assets/description.module.css";
import { cn } from "@/lib/tailwind/tailwindMerge";
import { ArrowIcon } from "@/assets";
import { useAnimate } from "motion/react";
import useIsMounted from "@/hooks/useIsMounted";

export default function Description({ grade, chapter }: ChapterChildProps) {
    const [scope, animate] = useAnimate();
    const { isMounted } = useIsMounted();

    const { titles, descriptions } = chapters["grade" + grade];

    const title = titles[Number(chapter) - 1];
    const description = descriptions[Number(chapter) - 1];

    const isOpen = useRef(false);

    const handleClose = () => {
        if (!isOpen.current) {
            animate(scope.current, {
                y: "-100%",
                borderBottomWidth: "0px",
            });

            animate("#btn", { rotate: 180, y: 20 });

            isOpen.current = true;

            return;
        }

        animate(scope.current, {
            y: "0%",
            borderBottomWidth: "1px",
        });

        animate("#btn", { rotate: 0, y: 0 });

        isOpen.current = false;
    };

    if (!isMounted) return;

    return (
        <div
            ref={scope}
            className="col-[1/4] row-[1/4] min-[75rem]:max-h-[90%] pointer-events-auto max-h-[85%] max-[62.5rem]:hidden min-[81.25rem]:max-h-[95%] pl-[1rem] pr-[1rem] max-w-[22.5rem] rounded-br-2xl text-pretty border-r border-b bg-white flex flex-col"
        >
            <div className="h-full overflow-hidden flex flex-col">
                <header className="min-[81.25rem]:text-[2rem] mt-[1.5rem] min-[81.25rem]:leading-[2.25rem] text-[1.75rem] leading-[2rem] font-['Chakra_Petch'] min-[81.25rem]:w-[15vw] w-[17vw] font-semibold mb-2 pl-2">
                    {title}
                </header>
                <hr className="mb-2 border-t-neutral-500" />
                <div
                    className={cn(
                        style.description,
                        "relative h-full overflow-hidden pl-2 max-[81.25rem]:text-[0.95rem] max-[81.25rem]:leading-[1.4rem]",
                    )}
                >
                    <div className="overflow-auto pr-4 py-[1rem] [&>div]:!space-y-6 h-full">
                        {description}
                    </div>
                </div>
            </div>
            <button onClick={() => handleClose()} id="btn">
                <ArrowIcon
                    stroke="black"
                    height="8"
                    className="mx-auto mb-[5px] mt-[3px]"
                />
            </button>
        </div>
    );
}
