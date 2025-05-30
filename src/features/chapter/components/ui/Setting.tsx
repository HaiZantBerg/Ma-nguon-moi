"use client";

import React from "react";
import SettingIcon from "../../assets/settingIcon.svg";
import SettingIcon2 from "@/assets/Svg/setting2.svg";
import ExitIcon from "@/assets/Svg/exit.svg";
import Popover from "@/components/ui/Popover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LegacyIcon from "../../assets/legacyIcon.svg";
import FunfactsIcon from "../../assets/funfactsIcon.svg";
import QuizzesIcon from "../../assets/quizzesIcon.svg";
import { useMediaQuery } from "react-responsive";
import PushLink from "@/components/PushLink";

const image = [
    <LegacyIcon
        key={0}
        // className="h-[3rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
    />,
    <FunfactsIcon
        key={1}
        // className="h-[2.75rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
    />,
    <QuizzesIcon
        key={2}
        // className="h-[2.6rem] w-auto absolute bottom-[1.6rem] left-1/2 -translate-x-1/2"
    />,
];

export default function Setting({
    sections,
}: {
    sections: {
        title: string;
        stopColor: string[];
        border: string;
    }[];
}) {
    const pathname = usePathname().split("/")[1];

    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

    return (
        <Popover className="min-[1000px]:size-[2.5rem] size-[2rem]">
            <Popover.Trigger className="rounded-lg bg-[#f5f5f5] shadow-[0_5px_10px_#949494] size-full transition duration-200 ease-in hover:bg-[#f0f0f0]">
                <SettingIcon className="min-[1000px]:w-[1.5rem] w-[1.25rem] mx-auto" />
            </Popover.Trigger>
            <Popover.Content className="flex flex-col gap-2">
                {isMobile && (
                    <ul className="flex flex-col gap-2">
                        {sections.map((section, id) => {
                            const { stopColor, border, title } = section;

                            return (
                                <li key={id}>
                                    <PushLink
                                        id={title}
                                        push={title}
                                        slice={[0, 3]}
                                        className="flex items-center gap-2"
                                    >
                                        <div
                                            className="border size-[2.25rem] flex items-center p-[4px] rounded-xl"
                                            style={{
                                                borderColor: border,
                                                background: `linear-gradient(144deg,rgba(${stopColor[0]}) 0%, rgba(${stopColor[1]}) 100%)`,
                                            }}
                                        >
                                            {image[id]}
                                        </div>
                                        <p style={{ color: border }}>
                                            {title[0].toUpperCase() +
                                                title.slice(1)}
                                        </p>
                                    </PushLink>
                                </li>
                            );
                        })}
                    </ul>
                )}
                <Link
                    href="/setting"
                    className="flex items-center min-[1000px]:gap-4 gap-2"
                >
                    <SettingIcon2
                        className="min-[1000px]:size-[1rem] max-[1000px]:w-[2.25rem] max-[1000px]:h-[1.25rem]"
                        id="setting"
                    />
                    <label htmlFor="setting" className="cursor-pointer">
                        Setting
                    </label>
                </Link>
                <Link
                    href={`/${pathname}`}
                    className="flex items-center min-[1000px]:gap-4 gap-2"
                >
                    <ExitIcon
                        className="min-[1000px]:size-[1rem] max-[1000px]:w-[2.25rem] max-[1000px]:h-[1.25rem]"
                        id="exit"
                    />
                    <label htmlFor="exit" className="cursor-pointer">
                        Thoát
                    </label>
                </Link>
            </Popover.Content>
        </Popover>
    );
}
