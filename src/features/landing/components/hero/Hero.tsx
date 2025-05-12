import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ethems from "@/assets/Svg/ethems.svg";
import logo from "@/assets/Svg/logowhite.svg";
import starSomething from "@/assets/Svg/starsomething.svg";
import HeroCTA from "./HeroCTA";
import HeroHeader from "./HeroHeader";
import StarryBackground from "./StarryBackground";
import CoolLookingBtn from "../CoolLookingBtn";

export default function Hero() {
    return (
        <section className="relative flex h-lvh w-full flex-col overflow-hidden bg-[#080414]">
            <StarryBackground />
            <div className="relative z-10 h-32 w-full pt-16">
                <div className="mx-auto flex h-[56px] max-w-[98rem] items-center px-8">
                    <Link className="space-x-4 flex relative" href="/">
                        <Image
                            alt=""
                            src={logo}
                            className="hidden h-[56px] w-fit select-none sm:block"
                        />
                        <Image
                            alt=""
                            src={Ethems}
                            className="h-[32px] w-auto"
                            priority
                        />
                        <Image
                            src={starSomething}
                            alt=""
                            className="absolute top-[-3rem] left-[3.5rem] h-[8.5rem] w-auto rotate-[15deg] select-none md:top-[-3rem] md:left-30 md:h-[10rem]"
                        />
                    </Link>
                    <div className="flex flex-1 justify-end">
                        <CoolLookingBtn
                            variant="blue"
                            href="/sign-in"
                            id="logInBtn"
                        >
                            Đăng nhập
                        </CoolLookingBtn>
                    </div>
                </div>
            </div>
            <div className="h-[70%] flex flex-col items-center justify-center">
                <HeroHeader />
                <HeroCTA />
            </div>
        </section>
    );
}
