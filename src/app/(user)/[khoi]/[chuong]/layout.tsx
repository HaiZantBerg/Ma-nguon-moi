import { BookMarks } from "@/features/chapter";
import React, { Fragment, ReactNode } from "react";

type bookMarkLayoutProps = {
    children: ReactNode;
};

export default function bookMarkLayout({ children }: bookMarkLayoutProps) {
    return (
        <Fragment>
            <BookMarks />
            {children}
        </Fragment>
    );
}
