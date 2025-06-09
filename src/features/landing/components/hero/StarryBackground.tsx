import React from "react";
import Fibbo from "../../assets/fibbo.svg";
import styling from "../../assets/landing.module.css";
import Image from "next/image";
import { cn } from "@/lib/tailwind/tailwindMerge";

export default function StarryBackground() {
    return (
        <>
            <div className="absolute top-0 left-0 grid h-full w-full grid-cols-1 grid-rows-1 overflow-hidden *:col-[1/2] *:row-[1/2] *:h-full *:w-auto *:scale-150 *:select-none *:md:scale-100">
                <Image
                    fill
                    sizes="auto"
                    src="/Image/landing/starry1-01.webp"
                    alt=""
                    className={`${styling.star11}`}
                />
                <Image
                    fill
                    sizes="auto"
                    src="/Image/landing/starry1-01.webp"
                    alt=""
                    className={`${styling.star12}`}
                />
                <Image
                    fill
                    sizes="auto"
                    src="/Image/landing/starry2-01.webp"
                    alt=""
                    className={`${styling.star21}`}
                />
                <Image
                    fill
                    sizes="auto"
                    src="/Image/landing/starry2-01.webp"
                    alt=""
                    className={`${styling.star22}`}
                />
                <Image
                    fill
                    sizes="auto"
                    src="/Image/landing/starry3-01.webp"
                    alt=""
                    className={`${styling.star31}`}
                />
                <Image
                    fill
                    sizes="auto"
                    src="/Image/landing/starry3-01.webp"
                    alt=""
                    className={`${styling.star32}`}
                />
            </div>
            <div
                className={cn(
                    "absolute h-[50rem] select-none rotate-[335deg] opacity-[17.5%]",
                    "min-[100rem]:w-[70rem] md:w-[60rem] sm:w-[50rem] w-[45rem]",
                    "min-[70rem]:top-[20rem] -left-[20rem] sm:top-[0rem] -top-[5rem]",
                )}
            >
                <Image
                    src="/Image/landing/sinefunc.webp"
                    alt=""
                    priority
                    fill
                    sizes="auto"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <Fibbo
                className={cn(
                    "absolute h-[50rem] select-none",
                    "min-[100rem]:w-[55rem] md:w-[47.5rem] sm:w-[40rem] w-[35rem]",
                    "-right-[17rem] sm:top-[25rem] top-[20rem]",
                )}
            />
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
                <div
                    className="aspect-square h-[20rem] sm:h-[30rem] md:h-[40rem]"
                    style={{
                        background:
                            "radial-gradient(circle farthest-corner at 0 0, rgba(33, 33, 66, 0.75) 6%, rgba(33, 33, 66, 0) 48%)",
                    }}
                />
                <div
                    className="relative top-[-15rem] aspect-square h-[50rem] justify-self-end opacity-75 sm:top-[-25rem] sm:h-[60rem] sm:opacity-90 md:top-[-40rem] md:h-[80rem]"
                    style={{
                        background:
                            "radial-gradient(circle farthest-side at 100% 50%, rgba(74, 34, 93, 0.5) 0%, rgba(74, 34, 93, 0) 42%)",
                    }}
                />
            </div>
        </>
    );
}
