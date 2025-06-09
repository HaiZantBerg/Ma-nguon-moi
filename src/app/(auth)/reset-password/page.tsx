import React from "react";
import Image from "next/image";
import signInIcon from "@/assets/Svg/auth/signInIcon.svg?url";
import { ChangePasswordForm, EmailResetPassForm } from "@/features/auth";
import { getCurrentUserViaResetToken } from "@/auth/getCurUser";
import Link from "next/link";
import { checkExpiry } from "@/auth/email/checkExpiry";

type ResetPasswordProps = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Page({ searchParams }: ResetPasswordProps) {
    const { token } = await searchParams;

    if (token && typeof token === "string") {
        const user = await getCurrentUserViaResetToken(token as string);

        if (user) {
            const hasExpired = await checkExpiry(token);

            if (hasExpired)
                return (
                    <div className="flex flex-col h-lvh min-h-fit w-full justify-center text-blue-100 font-['Chakra_Petch'] text-3xl drop-shadow-blue-300 bg-[#050d1d] items-center">
                        410 ERROR: resetPasswordToken đã hết hạn
                        <Link
                            href="/reset-password"
                            className="bg-blue-200 mt-3 py-2 px-6 rounded-2xl text-blue-950"
                        >
                            Quay lại
                        </Link>
                    </div>
                );
            else
                return (
                    <div className="flex h-lvh min-h-fit w-full justify-center bg-[#050d1d]">
                        <div className="mt-2 h-[50rem] w-[25rem] mb-4">
                            <div className="h-fit select-auto">
                                <Image
                                    src={signInIcon}
                                    alt=""
                                    className="mx-auto h-[22rem] w-auto"
                                />
                            </div>
                            <div className="bg-[#202434] w-fit mx-auto *:mx-auto px-6 py-7 rounded-2xl shadow-[0_40px_100px_-15px] shadow-indigo-950">
                                <header className="mb-4 sm:w-[20rem] w-[18rem]">
                                    <p className="font-['Chakra_Petch'] text-center text-2xl font-semibold text-white">
                                        Đặt lại mật khẩu
                                    </p>
                                </header>
                                <hr className="w-[18rem] border-t-[#404866] sm:w-[22rem] my-[1.5rem]" />
                                <ChangePasswordForm userId={user.id} />
                                <hr className="w-[18rem] sm:w-[22rem] border-t-[#404866] mt-[1.5rem] mb-[15px]" />
                            </div>
                        </div>
                    </div>
                );
        }

        return (
            <div className="flex flex-col h-lvh min-h-fit w-full justify-center text-blue-100 font-['Chakra_Petch'] text-3xl drop-shadow-blue-300 bg-[#050d1d] items-center">
                400 ERROR: resetPasswordToken không hợp lệ
                <Link
                    href="/reset-password"
                    className="bg-blue-200 mt-3 py-2 px-6 rounded-2xl text-blue-950"
                >
                    Quay lại
                </Link>
            </div>
        );
    }

    return (
        <div className="flex h-lvh min-h-fit w-full justify-center bg-[#050d1d]">
            <div className="mt-2 h-[50rem] w-[25rem] mb-4">
                <div className="h-fit select-auto">
                    <Image
                        src={signInIcon}
                        alt=""
                        className="mx-auto h-[22rem] w-auto"
                    />
                </div>
                <div className="bg-[#202434] w-fit mx-auto *:mx-auto px-6 py-7 rounded-2xl shadow-[0_40px_100px_-15px] shadow-indigo-950">
                    <header className="mb-4 sm:w-[20rem] w-[18rem]">
                        <p className="font-['Chakra_Petch'] text-2xl font-semibold text-white">
                            Quên mật khẩu?
                        </p>
                        <p className="text-neutral-400 mt-2">
                            Điền email gắn với tài khoản của bạn để nhận đường
                            dẫn thay đổi mật khẩu
                        </p>
                    </header>
                    <hr className="w-[18rem] border-t-[#404866] sm:w-[22rem] my-[1.5rem]" />
                    <EmailResetPassForm />
                    <hr className="w-[18rem] sm:w-[22rem] border-t-[#404866] mt-[1.5rem] mb-[15px]" />
                    <p className="w-fit text-[0.85rem] sm:text-[0.9rem] text-white">
                        Chưa có tài khoản?{" "}
                        <Link
                            href="/sign-up"
                            className="text-[#a495e4] font-semibold"
                        >
                            Đăng kí
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
