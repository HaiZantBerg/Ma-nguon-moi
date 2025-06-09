"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef, ReactNode } from "react";

type PushLinkProps = {
    children: ReactNode;
    slice: number[];
    push: string;
} & Omit<LinkProps, "href"> &
    Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps>;

export default function PushLink({
    children,
    push,
    slice,
    ...props
}: PushLinkProps) {
    const pathname = usePathname()
        .split("/")
        .slice(slice[0], slice[1])
        .join("/");

    return (
        <Link href={`${pathname + "/" + push}`} {...props}>
            {children}
        </Link>
    );
}
