import { cn } from "@/lib/tailwind/tailwindMerge";
import Image, { ImageProps } from "next/image";
import React, { HTMLAttributes, InputHTMLAttributes } from "react";
import styling from "@/assets/styles/signInFormStyle.module.css";

export default function Input({
    className,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className={cn(className, "flex w-full relative")} {...props}></div>
    );
}

Input.Icon = function InputIcon({ className, alt, ...props }: ImageProps) {
    return <Image className={className} {...props} alt={alt} />;
};

Input.IconContainer = function InputIconContainer({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                className,
                "h-full aspect-square flex justify-center items-center",
            )}
            {...props}
        >
            {children}
        </div>
    );
};

Input.Placeholder = function InputPlaceholder({
    className,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                className,
                styling.auth,
                "w-full h-full focus:placeholder:invisible outline-0",
            )}
            {...props}
        />
    );
};
