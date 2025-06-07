import React from "react";

import {
    routeLg10,
    routeLg11,
    routeLg12,
    routeSm10,
    routeSm11,
    routeSm12,
} from "../../assets";
import { cn } from "@/lib/tailwind/tailwindMerge";

type RouteType = {
    grade: number;
    className: string;
    size: "lg" | "sm";
};

const gradeType: Record<
    string,
    { lg: any; sm: { svg: any; className: string } }
> = {
    grade10: {
        lg: { svg: routeLg10, className: "top-[10rem] left-9 w-full" },
        sm: {
            svg: routeSm10,
            className: "top-0 left-0 w-[21rem]",
        },
    },
    grade11: {
        lg: { svg: routeLg11, className: "top-[10rem] left-9 w-full" },
        sm: {
            svg: routeSm11,
            className: "top-[7rem] left-[-2.5rem] w-[25rem]",
        },
    },
    grade12: {
        lg: { svg: routeLg12, className: "w-full top-0 left-0" },
        sm: {
            svg: routeSm12,
            className: "w-[21rem] -left-[1.5rem] top-[0.25rem]",
        },
    },
};

export default function RouteLine({ grade, className, size }: RouteType) {
    const { svg: Type, className: containerCN } =
        gradeType["grade1" + String(grade)][size];

    return (
        <div className={cn(containerCN, "absolute h-full")}>
            <Type className={className} />
        </div>
    );
}
