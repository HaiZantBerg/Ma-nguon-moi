"use client";

import React from "react";
import Link from "next/link";
import { Ethems, Logo, SettingIcon } from "@/assets";
import { usePathname } from "next/navigation";

const navList = [
    {
        href: "/home",
        title: "Trang chủ",
        icon: (color: string) => (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 450 450"
                xmlSpace="preserve"
                className="h-full w-auto"
            >
                <path
                    d="M372.834 435H299.43c-16.831 0-30.523-13.693-30.523-30.524V296.644c0-5.803-4.722-10.524-10.524-10.524h-66.764c-5.803 0-10.524 4.722-10.524 10.524v107.832c0 16.831-13.693 30.524-30.524 30.524H77.167c-28.148 0-51.048-22.9-51.048-51.048V178.221c0-15.871 7.548-31.073 20.191-40.667L194.143 25.381c18.167-13.784 43.545-13.786 61.713 0L403.69 137.554c12.643 9.593 20.191 24.795 20.191 40.667v205.731c.001 28.148-22.9 51.048-51.047 51.048zM191.618 266.119h66.764c16.831 0 30.524 13.693 30.524 30.524v107.832c0 5.803 4.721 10.524 10.523 10.524h73.404c17.12 0 31.048-13.928 31.048-31.048v-205.73c0-9.653-4.591-18.899-12.28-24.734L243.767 41.314c-11.05-8.383-26.483-8.383-37.534 0L58.398 153.487c-7.689 5.835-12.28 15.081-12.28 24.734v205.731c0 17.12 13.928 31.048 31.048 31.048h73.404c5.803 0 10.524-4.722 10.524-10.524V296.644c0-16.831 13.693-30.525 30.524-30.525z"
                    fill={color}
                />
            </svg>
        ),
    },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 left-0 z-[100] bg-[#040418e7] flex h-16 w-full items-center min-[54rem]:px-10 px-4 text-white backdrop-blur-xl justify-between">
            <div className="flex items-center pl-[0.75rem]" id="logo">
                <Link href="/home" className="flex items-center gap-2">
                    <Logo className="hidden h-[36px] w-fit select-none sm:block" />
                    <Ethems className="h-[24px] w-auto" />
                </Link>
            </div>
            <ul id="navLinks">
                {navList.map((navItem, id) => (
                    <li key={id} className="flex items-center gap-2">
                        <div className="h-[1.1rem]">
                            {navItem.icon(
                                navItem.href === pathname ? "white" : "#bab9c4",
                            )}
                        </div>
                        <Link
                            href={navItem.href}
                            className={
                                navItem.href === pathname
                                    ? "text-white"
                                    : "text-[#bab9c4]"
                            }
                        >
                            {navItem.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <button
                id="settingsDropDown"
                className="h-[2.5rem] aspect-square flex justify-center items-center"
            >
                <SettingIcon className="h-[1.75rem] w-auto" />
            </button>
        </nav>
    );
}
