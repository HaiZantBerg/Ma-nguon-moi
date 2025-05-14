import React from "react";
import signInIcon from "@/features/auth/assets/signInIcon.svg";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "@/features/auth/components/SignInForm";

export default function Page() {
    return (
        <div className="flex h-dvh w-full justify-center bg-[#050d1d] text-white">
            <div className="mt-2 h-[50rem] w-[36rem]">
                <div className="h-fit select-auto">
                    <Image
                        src={signInIcon}
                        alt=""
                        className="mx-auto h-[22rem] w-auto"
                        priority
                    />
                </div>
                <div className="bg-[#202434] w-fit mx-auto *:mx-auto px-4 py-7 rounded-2xl shadow-[0_40px_100px_-15px] shadow-indigo-950">
                    <header className="mb-4 w-fit text-2xl font-semibold">
                        <p className="font-['Chakra_Petch'] font-semibold">
                            Đăng nhập với
                        </p>
                    </header>
                    <hr className="w-[18rem] border-t-[#404866] sm:w-[22rem] my-[1.5rem]" />
                    <SignInForm />
                    <hr className="w-[18rem] sm:w-[22rem] border-t-[#404866] mt-[1.5rem] mb-[15px]" />
                    <p className="w-fit text-[0.85rem] sm:text-[0.9rem]">
                        Bạn mới biết đến Ethems?{" "}
                        <Link
                            href="/register"
                            className="font-semibold text-[#4c9aff]"
                        >
                            Đăng ký
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
