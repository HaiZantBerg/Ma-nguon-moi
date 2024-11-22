"use client";

import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";

const DrawerContainer = ({
    children,
    setIsOpen,
}: {
    children: React.ReactNode;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate("#backdrop", {
            background: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.5)"],
        });

        animate(
            "#container",
            {
                top: ["100vh", "0vh"],
            },
            { ease: "circOut" }
        );
    }, []);

    const handleCloseDialog = async () => {
        animate("#backdrop", {
            background: ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"],
        });

        await animate(
            "#container",
            {
                top: "100vh",
            },
            { ease: "circIn" }
        );

        setIsOpen(false);
    };

    return (
        <div
            className="fixed z-[100] w-screen h-screen -left-[2.5vw] -bottom-[2.5vh] flex items-end"
            ref={scope}
        >
            <div
                className="absolute top-0 left-0 w-screen h-screen -z-10"
                style={{
                    background: "rgba(0, 0, 0, 0.5)",
                }}
                id="backdrop"
                onClick={handleCloseDialog}
            />
            <div
                className="bg-white h-[500px] relative w-screen rounded-[25px_25px_0px_0px] border-2 border-gray-700"
                id="container"
            >
                <div className="flex flex-col justify-between h-full px-8 pt-10 pb-6">
                    <div>{children}</div>
                    <div>
                        <button
                            onClick={handleCloseDialog}
                            className="rounded-full border-2 border-black font-semibold px-5 py-2"
                        >
                            Thoát
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Drawer({
    children,
    className,
}: Readonly<{
    children?: React.ReactNode;
    className?: string;
}>) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={className}>
            <button
                className="h-[110px] w-[200px] -translate-x-2 relative z-10"
                onClick={() => setIsOpen(true)}
            />
            {isOpen ? (
                <DrawerContainer setIsOpen={setIsOpen}>
                    {children}
                </DrawerContainer>
            ) : null}
        </div>
    );
}
