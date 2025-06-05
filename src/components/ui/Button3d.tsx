"use client";

import {
    Button3dContext,
    ButtonContextType,
    useButton3dContext,
} from "@/context/Button3dContext";
import { cn } from "@/lib/tailwind/tailwindMerge";
import { useAnimate } from "motion/react";
import React, {
    ComponentPropsWithoutRef,
    ElementType,
    HTMLAttributes,
} from "react";

type ButtonAsProps<T extends ElementType> = {
    as?: T;
} & ButtonContextType;

export default function Button3d<T extends ElementType = "button">({
    as,
    className,
    variant,
    children,
    ...props
}: ButtonAsProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonAsProps<T>>) {
    const Component = as || "button";

    const value = { variant };

    return (
        <Button3dContext.Provider value={value}>
            <Component className={cn(className, "relative")} {...props}>
                {children}
            </Component>
        </Button3dContext.Provider>
    );
}

Button3d.Content = function Button3dContent({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { variant } = useButton3dContext();

    const [scope, animate] = useAnimate();

    const variants = {
        blue: "bg-[#207cf3] text-white hover:bg-[#0c6ce8]",
        green: "bg-[#33c862] text-white hover:bg-[#26c358]",
        purple: "bg-[#ad20f3] text-white hover:bg-[#9b0ce9]",
        "blue-grey": "bg-[#4a5c99]",
        "sign-in":
            "bg-[linear-gradient(42deg,rgba(89,103,227,1)5%,rgba(114,89,227,1)26%,rgba(89,98,227,1)58%)]",
        "sign-up":
            "bg-[linear-gradient(42deg,rgba(140,83,219,1)10%,rgba(142,83,219,1)26%,rgba(140,83,219,1)58%)]",
        grey: "bg-[#737373]",
    };

    return (
        <div
            style={{
                borderRadius: 16,
            }}
            className={cn(
                className,
                variants[variant],
                "flex items-center justify-center h-full w-full relative z-10 transition-colors ease-in duration-150",
            )}
            {...props}
            ref={scope}
            onClick={() => {
                animate(scope.current, {
                    y: ["5px", "0px"],
                });
            }}
        >
            {children}
        </div>
    );
};

Button3d.Behind = function Button3dBehind({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    const { variant } = useButton3dContext();

    const variants = {
        blue: "bg-[#3b3fa1]",
        green: "bg-[#398f5e]",
        purple: "bg-[#713ba0]",
        "blue-grey": "bg-[#32324b]",
        "sign-in": "bg-[#3b3fa1]",
        "sign-up": "bg-[#642F8A]",
        grey: "bg-[#474747]",
    };

    return (
        <div
            style={{
                borderRadius: 16,
            }}
            className={cn(
                variants[variant],
                "absolute h-full w-full top-[5px] left-0",
                className,
            )}
            {...props}
        />
    );
};
