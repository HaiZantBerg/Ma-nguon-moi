import { Navbar } from "@/components";
import React, { Fragment, ReactNode } from "react";

type UserLayoutProps = {
    children: ReactNode;
};

export default function UserLayout({ children }: UserLayoutProps) {
    return (
        <Fragment>
            <Navbar></Navbar>
            {children}
        </Fragment>
    );
}
