"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export function ToggleLesson() {
    const pathname = usePathname();

    return (
        <div className="absolute left-0 top-[10rem] min-[1100px]:px-[10rem] w-full">
            <Link
                href={{
                    pathname: pathname,
                    query: {
                        part: "menh-de",
                    },
                }}
                replace={true}
            >
                Mệnh đề
            </Link>
            <Link
                href={{
                    pathname: pathname,
                    query: {
                        part: "tap-hop",
                    },
                }}
                replace={true}
            >
                Tập hợp
            </Link>
        </div>
    );
}
