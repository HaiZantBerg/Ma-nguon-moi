import { ChapterNavbar } from "@/features/chapter";
import React, { Fragment, ReactNode } from "react";

type bookMarkLayoutProps = {
    children: ReactNode;
};

export default async function bookMarkLayout({
    children,
}: bookMarkLayoutProps) {
    return (
        <Fragment>
            <ChapterNavbar />
            {children}
        </Fragment>
    );
}
