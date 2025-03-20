"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import loginIcon from "@/public/Svg/loginIcon.svg";
import styling from "@/components/css/generalStyling.module.css";
import Image from "next/image";
import Link from "next/link";

const NEXTJS_LOGIN_API = "/api/login";

export default function Page() {
    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmitLogIn = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const requestData = JSON.stringify(Object.fromEntries(formData));

        const request = await fetch(NEXTJS_LOGIN_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: requestData,
        });

        if (request.ok) router.replace("/home");
    };

    return (
        <div className="h-dvh w-full flex justify-center bg-[#050d1d]">
            <div className="w-[36rem] h-[50rem]">
                <div className="select-auto h-fit">
                    <Image
                        src={loginIcon}
                        alt=""
                        className="h-[22rem] w-auto mx-auto"
                    />
                </div>
                <hr className="sm:w-[22rem] w-[18rem] mx-auto opacity-25" />
                {isMounted && (
                    <form
                        onSubmit={handleSubmitLogIn}
                        className="flex items-center flex-col my-8"
                    >
                        <div>
                            <div className="sm:text-[1.15rem] text-base">
                                Nhập email hoặc tên người dùng
                            </div>
                            <input
                                name="username"
                                className={`${styling.loginInput} bg-[#202434] duration-[0ms] outline-0 sm:w-[20rem] w-[18rem] sm:h-[3rem] h-[2.75rem] mt-3 rounded-2xl text-center focus:placeholder:invisible text-[1.1rem] max-[40rem]:placeholder:text-[0.95rem]`}
                                placeholder="banlanhat@gmail.com"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <div className="sm:text-[1.15rem] text-base flex justify-between">
                                <span>Nhập mật khẩu</span>
                                <span className="sm:text-[1.1rem] text-[0.95rem] text-[#4c9aff] font-bold">
                                    <Link href="/reset_password">
                                        Quên mật khẩu?
                                    </Link>
                                </span>
                            </div>
                            <input
                                name="password"
                                className="bg-[#202434] border-2 ring-2 outline-0 ring-transparent border-transparent transition-all duration-300 ease-in focus:border-[#581ce3] focus:ring-[#f9dcef] sm:w-[20rem] w-[18rem] sm:h-[3rem] h-[2.75rem] mt-3 rounded-2xl text-center focus:placeholder:invisible text-[1.1rem] max-[40rem]:placeholder:text-[0.95rem]"
                                placeholder="yourthebest"
                                required
                                type="password"
                                minLength={6}
                                maxLength={30}
                            />
                        </div>
                        <button
                            className="rounded-2xl sm:w-[20rem] w-[18rem] sm:h-[3rem] transition-all duration-200 ease-in opacity-90 hover:opacity-100 h-[2.75rem] sm:text-[1.15rem] text-base mt-5 pointer-events-auto cursor-pointer font-bold"
                            style={{
                                background:
                                    "linear-gradient(42deg, rgba(89,103,227,1) 5%, rgba(114,89,227,1) 26%, rgba(89,98,227,1) 58%)",
                            }}
                        >
                            Đăng nhập
                        </button>
                    </form>
                )}
                <hr className="sm:w-[22rem] w-[18rem] mx-auto opacity-25" />
                <div className="w-fit mx-auto mt-4 sm:text-[1.1rem] text-[0.95rem]">
                    Mới biết đến Ethems?{" "}
                    <span className="text-[#4c9aff] font-bold">
                        <Link href="/register">Đăng ký tại đây!</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
