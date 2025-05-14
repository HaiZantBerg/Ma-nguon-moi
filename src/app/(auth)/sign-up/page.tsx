import Image from "next/image";
import React from "react";
import book from "public/Image/auth/sign-up.png";
import SignUpForm from "@/features/auth/components/SignUpForm";
import Link from "next/link";
import Ethems from "@/assets/Svg/ethems.svg";
import logo from "@/assets/Svg/logowhite.svg";

export default function page() {
    return (
        <div className="w-full h-full min-h-fit bg-[#0a060a] text-white flex max-[1150px]:flex-col items-center min-[1150px]:gap-[5rem] min-[1500px]:gap-[20rem]">
            <div className="absolute top-0 left-0 h-fit w-full mt-[2rem]">
                <Link
                    className="space-x-2 flex relative sm:ml-[5rem] ml-[2rem] items-center"
                    href="/"
                >
                    <Image
                        alt=""
                        src={logo}
                        className="h-[44px] sm:h-[56px] w-fit select-none"
                    />
                    <Image
                        alt=""
                        src={Ethems}
                        className="h-[22px] sm:h-[28px] w-auto"
                        priority
                    />
                </Link>
            </div>
            <div className="flex min-[1150px]:justify-end min-[1150px]:w-1/2 max-[1150px]:mt-[7rem] max-[1150px]:mb-[5rem] max-[768px]:mb-[3rem]">
                <div className="sm:w-[32rem] w-[20rem] h-fit">
                    <Image
                        src={book}
                        alt=""
                        className="min-[1300px]:w-[20rem] sm:w-[17.5rem] w-[12.5rem] h-auto mx-auto"
                    />
                </div>
            </div>
            <div className="flex min-[1150px]:w-1/2 flex-col max-[1150px]:mb-[4rem]">
                <div className="*:mx-auto sm:w-[32rem] w-[20rem]">
                    <header className="sm:w-[30rem] w-[18rem]">
                        <h1 className="text-center md:text-5xl text-4xl font-bold font-['Chakra_Petch']">
                            Đăng ký
                        </h1>
                        <p className="text-center md:mt-[1rem] mt-[0.5rem] text-[#b3b3b3] max-[48rem]:text-[0.9rem]">
                            Chào mừng đến Ethems - Hãy tạo một tài khoản.
                        </p>
                    </header>
                    <hr className="md:my-[27px] my-[18px] border-t-[#a18aba]" />
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
