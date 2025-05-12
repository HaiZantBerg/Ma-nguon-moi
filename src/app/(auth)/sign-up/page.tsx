import Image from "next/image";
import React from "react";
import book from "public/Image/auth/sign-up.png";
import SignUpForm from "@/features/auth/components/SignUpForm";
import Link from "next/link";
import Ethems from "@/assets/Svg/ethems.svg";
import logo from "@/assets/Svg/logowhite.svg";

export default function page() {
    return (
        <div className="w-full h-dvh bg-[#0a060a] text-white flex gap-[20rem]">
            <div className="absolute top-0 left-0 h-32 w-full pt-16">
                <Link
                    className="space-x-2 flex relative ml-[5rem] items-center"
                    href="/"
                >
                    <Image
                        alt=""
                        src={logo}
                        className="hidden h-[56px] w-fit select-none sm:block"
                    />
                    <Image
                        alt=""
                        src={Ethems}
                        className="h-[28px] w-auto"
                        priority
                    />
                </Link>
            </div>
            <div className="flex justify-end w-1/2 h-full items-center">
                <Image src={book} alt="" className="w-[20rem]" />
            </div>
            <div className="justify-center flex w-1/2 h-full flex-col">
                <div className="*:mx-auto sm:w-[32rem] w-[20rem]">
                    <header className="sm:w-[30rem] w-[18rem]">
                        <h1 className="text-center text-5xl font-bold font-['Chakra_Petch']">
                            Đăng ký
                        </h1>
                        <p className="text-center mt-[1rem] text-[#b3b3b3]">
                            Chào mừng đến Ethems - Hãy tạo một tài khoản.
                        </p>
                    </header>
                    <hr className="my-[27px] border-t-[#a18aba]" />
                    <SignUpForm />
                    <p className="text-center mt-[1rem] sm:w-[30rem] w-[18rem]">
                        Đã có tài khoản?{" "}
                        <Link
                            href="/sign-in"
                            className="text-[#a495e4] font-semibold"
                        >
                            Đăng nhập
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
