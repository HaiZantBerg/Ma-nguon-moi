import React from "react";
import Threed2Icon from "@/features/landing/assets/3d2.svg";
import CoolLookingBtn from "../CoolLookingBtn";

export default function HeroCTA() {
    return (
        <div className="flex flex-col mt-10 sm:mt-12 shrink">
            <div className="relative mx-auto max-w-[48rem] px-8 text-center text-[0.9rem] tracking-wide text-pretty text-[#d1d3d4] sm:px-16 sm:text-[1.2rem]">
                Lật mở lịch sử toán học — nơi hội tụ những nghịch lý sâu xa
                nhất, vẻ đẹp thuần túy và những bí ẩn vĩnh cửu của nó.
                <Threed2Icon className="absolute right-[1rem] bottom-[-4rem] h-[3.5rem] w-auto select-none sm:bottom-[-6rem] sm:h-[5.5rem]" />
            </div>
            <CoolLookingBtn
                variant="purple"
                href="/sign-up"
                id="signInBtn"
                className="mx-auto"
            >
                Bắt đầu hành trình
            </CoolLookingBtn>
        </div>
    );
}
