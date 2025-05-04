"use client";

import {
    Button3dContext,
    ButtonContextProps,
    useButton3dContext,
} from "@/context/Button3dContext";
import { cn } from "@/lib/tailwind/tailwindMerge";
import { useAnimate } from "motion/react";
import React, {
    ComponentPropsWithoutRef,
    ElementType,
    HTMLAttributes,
    ReactNode,
} from "react";

type ButtonProps = {
    className?: string;
    children: ReactNode;
};

type ButtonAsProps<T extends ElementType> = {
    as?: T;
} & ButtonProps &
    ButtonContextProps;

export default function Button3d<T extends ElementType = "button">({
    as,
    className,
    variant,
    children,
    ...props
}: ButtonAsProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonAsProps<T>>) {
    const Component = as || "button";

    const value = {
        variant: variant,
    };

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
}: ButtonProps & HTMLAttributes<HTMLDivElement>) {
    const { variant } = useButton3dContext();

    const [scope, animate] = useAnimate();

    const variants = {
        blue: "bg-[#207cf3] text-white hover:bg-[#0c6ce8]",
        grey: "bg-[#4a5c99]",
        logIn: "bg-[linear-gradient(42deg,rgba(89,103,227,1)5%,rgba(114,89,227,1)26%,rgba(89,98,227,1)58%)]",
    };

    return (
        <div
            style={{
                borderRadius: 16,
            }}
            className={cn(
                className,
                variants[variant],
                "flex items-center justify-center h-full w-full",
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
}: Omit<ButtonProps, "children"> & HTMLAttributes<HTMLDivElement>) {
    const { variant } = useButton3dContext();

    const variants = {
        blue: "bg-[#3b3fa1]",
        grey: "bg-[#32324b]",
        logIn: "bg-[#3b3fa1]",
    };

    return (
        <div
            className={cn(
                className,
                variants[variant],
                "absolute h-full w-full top-[5px] left-0 -z-10 rounded-2xl",
            )}
            {...props}
        />
    );
};
