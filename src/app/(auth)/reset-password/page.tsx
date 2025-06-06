import React from "react";
import Image from "next/image";
import signInIcon from "@/assets/Svg/auth/signInIcon.svg?url";
import { ResetPasswordForm } from "@/features/auth";

export default function Page() {
    return (
        <div className="flex h-lvh min-h-fit w-full justify-center bg-[#050d1d]">
            <div className="mt-2 h-[50rem] w-[24rem] mb-4">
                <div className="h-fit select-auto">
                    <Image
                        src={signInIcon}
                        alt=""
                        className="mx-auto h-[22rem] w-auto"
                    />
                </div>
                <div className="bg-[#202434] w-fit mx-auto *:mx-auto px-4 py-7 rounded-2xl shadow-[0_40px_100px_-15px] shadow-indigo-950">
                    <header className="mb-4 w-full">
                        <p className="font-['Chakra_Petch'] text-2xl font-semibold text-white">
                            Quên mật khẩu?
                        </p>
                        <p className="text-neutral-400 mt-2">
                            Điền email gắn với tài khoản của bạn để nhận đường
                            dẫn thay đổi mật khẩu
                        </p>
                    </header>
                    <hr className="w-[18rem] border-t-[#404866] sm:w-[22rem] my-[1.5rem]" />
                    <ResetPasswordForm />
                    <hr className="w-[18rem] sm:w-[22rem] border-t-[#404866] mt-[1.5rem] mb-[15px]" />
                </div>
            </div>
        </div>
    );
}
