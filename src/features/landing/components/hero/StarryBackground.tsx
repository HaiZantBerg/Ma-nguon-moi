import React from "react";
import Fibbo from "../../assets/fibbo.svg";
import styling from "../../assets/landing.module.css";
import Image from "next/image";

export default function StarryBackground() {
    return (
        <>
            <div className="absolute top-0 left-0 grid h-full w-full grid-cols-1 grid-rows-1 overflow-hidden *:col-[1/2] *:row-[1/2] *:h-full *:w-auto *:scale-150 *:select-none *:md:scale-100">
                <Image
                    fill
                    src="/Image/landing/starry1-01.png"
                    alt=""
                    className={`${styling.star11}`}
                />
                <Image
                    fill
                    src="/Image/landing/starry1-01.png"
                    alt=""
                    className={`${styling.star12}`}
                />
                <Image
                    fill
                    src="/Image/landing/starry2-01.png"
                    alt=""
                    className={`${styling.star21}`}
                />
                <Image
                    fill
                    src="/Image/landing/starry2-01.png"
                    alt=""
                    className={`${styling.star22}`}
                />
                <Image
                    fill
                    src="/Image/landing/starry3-01.png"
                    alt=""
                    className={`${styling.star31}`}
                />
                <Image
                    fill
                    src="/Image/landing/starry3-01.png"
                    alt=""
                    className={`${styling.star32}`}
                />
            </div>
            <div className="absolute top-0 left-0 z-10 flex h-full w-full justify-center overflow-hidden *:-translate-x-[4rem] *:translate-y-[12rem] *:sm:translate-y-[20rem] min-[1600px]:gap-[25rem] min-[1400px]:gap-[20rem]">
                <div className="relative h-[50rem] w-auto min-[1600px]:min-w-[70rem] min-[1400px]:min-w-[65rem] min-[700px]:min-w-[50rem] min-w-[45rem] select-none rotate-[335deg] opacity-[17.5%]">
                    <Image
                        src="/Image/landing/sine func.png"
                        alt=""
                        priority
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                    />
                </div>
                <Image
                    src={Fibbo}
                    alt=""
                    className="h-[50rem] w-auto min-[1600px]:min-w-[52.5rem] min-[1400px]:min-w-[45rem] min-[700px]:min-w-[35rem] min-w-[30rem] select-none"
                    priority
                />
            </div>
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
