import Link from "next/link";
import React from "react";
import Ethems from "@/public/Svg/ethems.svg";
import logo from "@/public/Svg/logowhite.svg";
import Image from "next/image";
import landingPageHeader from "@/public/Svg/landingPageHeader.svg";
import sineFunc from "@/public/Svg/sine func.svg";
import Fibbo from "@/public/Svg/fibbo.svg";

export default function page() {
    return (
        <div className="w-full">
            <div className="h-dvh w-full bg-[#080414] flex flex-col relative">
                <div className="absolute z-10 left-0 top-0 w-full h-full flex overflow-hidden justify-center min-[75rem]:gap-[25rem] md:gap-[10rem] *:-translate-x-[8rem] *:sm:translate-y-[20rem] *:translate-y-[12rem]">
                    <Image
                        src={sineFunc}
                        alt=""
                        className="h-[50rem] min-[75rem]:min-w-[75rem] md:min-w-[65rem] min-w-[55rem]"
                    />
                    <Image
                        src={Fibbo}
                        alt=""
                        className="h-[50rem] min-[75rem]:min-w-[60rem] md:min-w-[50rem] min-w-[40rem]"
                    />
                </div>
                <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
                    <div
                        className="aspect-square md:h-[40rem] sm:h-[30rem] h-[20rem]"
                        style={{
                            background:
                                "radial-gradient(circle farthest-corner at 0 0, rgba(33, 33, 66, 0.75) 6%, rgba(33, 33, 66, 0) 48%)",
                        }}
                    />
                    <div
                        className="aspect-square md:h-[80rem] sm:h-[60rem] h-[50rem] relative md:top-[-40rem] sm:top-[-25rem] top-[-15rem] justify-self-end sm:opacity-90 opacity-75"
                        style={{
                            background:
                                "radial-gradient(circle farthest-side at 100% 50%, rgba(74, 34, 93, 0.5) 0%, rgba(74, 34, 93, 0) 42%)",
                        }}
                    />
                </div>
                <div className="w-full h-32 pt-16 relative z-10">
                    <div className="mx-auto max-w-[98rem] flex items-center px-8 h-[56px]">
                        <Link
                            className="font-['Chakra_Petch'] text-white font-bold flex gap-4"
                            href="/"
                        >
                            <Image
                                alt=""
                                src={logo}
                                className="sm:block hidden h-[56px] w-fit"
                            />
                            <Image alt="" src={Ethems} height="32" />
                        </Link>
                        <div className="justify-end flex-1 flex">
                            <Link
                                className="text-[#c1d4ff] select-none flex justify-center items-center sm:text-base text-sm text-nowrap shadow-[inset_0px_0px_0px_rgba(238,243,255,0.5),0px_0px_2px_rgba(238,243,255,0.4)] hover:shadow-[inset_0px_0px_12px_rgba(238,243,255,0.5),0px_0px_8px_rgba(238,243,255,0.4)] transition-all duration-200 ease-in hover:text-[#eff4ff] relative z-10 border border-[#5c6bc0] hover:border-[#7b87cc] rounded-xl px-5 py-2 overflow-hidden"
                                href="/login"
                                id="logInBtn"
                            >
                                <div
                                    className="w-full h-full absolute left-0 top-0 z-[-2]"
                                    style={{
                                        background:
                                            "linear-gradient(270deg, rgba(200,231,255,0) 87%, rgba(84,139,255,1) 100%), linear-gradient(90deg, rgba(74, 34, 93, 0) 87%, rgba(84,139,255,1) 100%), linear-gradient(180deg, rgba(200,231,255,0) 60%, rgba(84,139,255,1) 100%)",
                                    }}
                                    id="logInBtnBg"
                                />
                                <div className="w-full h-full absolute left-0 top-0 backdrop-blur-lg z-[-1]" />
                                Đăng nhập
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col relative z-10">
                    <div className="sm:mt-[8rem] mt-[4rem]">
                        <Image
                            src={landingPageHeader}
                            alt=""
                            className="sm:h-[18rem] h-[10rem] mx-auto select-none"
                        />
                        <div className="text-[#d1d3d4] sm:px-16 px-8 text-center mx-auto sm:mt-8 mt-10 max-w-[48rem] sm:text-[1.2rem] text-[0.9rem] tracking-wide">
                            Lật mở lịch sử toán học — nơi hội tụ những nghịch lý
                            sâu xa nhất, vẻ đẹp thuần túy và những bí ẩn vĩnh
                            cửu của nó.
                        </div>
                    </div>
                </div>
                <div className="grow flex justify-center">
                    <Link
                        className="text-[#e1caff] select-none sm:text-[1.2rem] text-[0.9rem] sm:mt-8 mt-10 text-base h-fit w-fit flex justify-center items-center text-nowrap sm:shadow-[inset_0px_0px_0px_rgba(247,238,255,0.5),0px_0px_4px_rgba(247,238,255,0.5)] shadow-[inset_0px_0px_0px_rgba(247,238,255,0.5),0px_0px_3px_rgba(247,238,255,0.4)] hover:shadow-[inset_0px_0px_12px_rgba(247,238,255,0.5),0px_0px_12px_rgba(247,238,255,0.4)] transition-all duration-200 ease-in hover:text-[#f9efff] relative z-10 border border-[#b26fcc] hover:border-[#ac7bcc] rounded-xl sm:px-[1.5rem] sm:py-[0.75rem] px-[1.3rem] py-[0.6rem] overflow-hidden"
                        href="/register"
                        id="logInBtn"
                    >
                        <div
                            className="w-full h-full absolute left-0 top-0 z-[-2]"
                            style={{
                                background:
                                    "linear-gradient(270deg, rgba(145, 0, 189, 0) 87%, rgba(218, 97, 255, 1) 100%), linear-gradient(90deg, rgba(145, 0, 189, 0) 87%, rgba(218, 97, 255, 1) 100%), linear-gradient(180deg, rgba(145, 0, 189, 0) 60%, rgba(218, 97, 255, 1) 100%)",
                            }}
                            id="logInBtnBg"
                        />
                        <div className="w-full h-full absolute left-0 top-0 backdrop-blur-lg z-[-1]" />
                        Bắt đầu hành trình
                    </Link>
                </div>
            </div>
        </div>
    );
}
