import { cn } from "@/lib/tailwind/tailwindMerge";
import React, { FormHTMLAttributes, HTMLAttributes } from "react";

export default function Form({
    children,
    className,
    ...props
}: FormHTMLAttributes<HTMLFormElement>) {
    return (
        <form className={cn(className, "flex flex-col")} {...props}>
            {children}
        </form>
    );
}

Form.Item = function FormItem({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn(className, "flex")} {...props}>
            {children}
        </div>
    );
};

Form.Feild = function FormFeild({
    children,
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn(className, "flex flex-col gap-4")} {...props}>
            {children}
        </div>
    );
};
