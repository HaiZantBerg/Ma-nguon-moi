"use client";

import { cn } from "@/lib/tailwind/tailwindMerge";
import React, { ComponentPropsWithoutRef, ElementType } from "react";

type CardProps<T extends ElementType> = {
    as?: T;
};

export default function Card({
    children,
    className,
    ...props
}: CardProps<"div"> & ComponentPropsWithoutRef<"div">) {
    return (
        <div
            className={cn(
                "h-fit max-w-[40rem] rounded-[1.25rem] border-2 p-[1.5rem] backdrop-blur-lg backdrop-saturate-150 sm:p-[2rem]",
                className,
            )}
            {...props}
        >
            {children}
        </div>
    );
}

Card.Title = function CardTitle<T extends ElementType = "div">({
    as,
    children,
    className,
    ...props
}: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>) {
    const Component = as || "div";

    return (
        <Component className={cn("w-fit", className)} {...props}>
            {children}
        </Component>
    );
};

Card.Content = function CardContent<T extends ElementType = "div">({
    as,
    children,
    className,
    ...props
}: CardProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>) {
    const Component = as || "div";

    return (
        <Component
            className={cn("text-[0.8rem] sm:text-base", className)}
            {...props}
        >
            {children}
        </Component>
    );
};
