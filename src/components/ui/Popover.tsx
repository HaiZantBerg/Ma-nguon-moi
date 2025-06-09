"use client";

import {
    PopoverContext,
    usePopoverContext,
    usePopoverValues,
} from "@/context/PopoverContext";
import { cn } from "@/lib/tailwind/tailwindMerge";
import { AnimatePresence, motion, MotionProps } from "motion/react";
import React, { HTMLAttributes, useEffect } from "react";
import CrossIcon from "@/assets/Svg/Cross.svg";

export default function Popover({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { values } = usePopoverValues();

    return (
        <PopoverContext.Provider value={values}>
            <Container className={className} {...props} />
        </PopoverContext.Provider>
    );
}

const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { container } = usePopoverContext();

    return (
        <div className={cn(className, "relative")} ref={container} {...props} />
    );
};

Popover.Trigger = function PopoverTrigger({
    ...props
}: HTMLAttributes<HTMLButtonElement>) {
    const { setIsOpen, isOpen } = usePopoverContext();

    return (
        <button
            {...props}
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        />
    );
};

Popover.Content = function PopoverContent({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement> & MotionProps) {
    const { isOpen, setIsOpen, container } = usePopoverContext();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                container.current &&
                !container.current.contains(event.target as Node)
            )
                setIsOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [container, setIsOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="translate-y-1 z-20 overflow-hidden origin-top-left rounded-[0_1rem_1rem_1rem] border border-neutral-300 px-5 py-3 absolute top-full left-0 bg-white"
                        initial={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0.8,
                            opacity: 0,
                        }}
                        {...props}
                    >
                        <div
                            className={cn(
                                className,
                                "relative w-full h-full pr-7 pt-3",
                            )}
                        >
                            {children}
                            <button
                                className="size-3 absolute right-0 top-0"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <CrossIcon className="size-full" />
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
