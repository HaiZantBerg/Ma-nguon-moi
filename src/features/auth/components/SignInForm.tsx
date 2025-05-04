"use client";

import React from "react";
import Image from "next/image";
import passwordIcon from "../assets/passwordIcon.svg";
import emailIcon from "../assets/emailIcon.svg";
import styling from "../assets/signInFormStyle.module.css";
import Button3d from "@/components/Button3d";

export default function SignInForm() {
    return (
        <form className="my-8 flex flex-col items-center">
            <div className="flex flex-col">
                <div className="relative sm:h-[3rem] sm:w-[20rem] h-[2.75rem] w-[18rem] flex">
                    <div className="h-full aspect-square flex justify-center items-center ml-1.5">
                        <Image
                            src={emailIcon}
                            alt="emailIcon"
                            className="w-auto h-[1.5rem]"
                        />
                    </div>
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        name="email"
                        type="email"
                        className={`${styling.SignInInput} w-full h-full peer rounded-xl caret-white outline-0 focus:placeholder:invisible max-[40rem]:placeholder:text-[0.95rem] sm:h-[3rem]`}
                        placeholder="Email@cua.ban"
                        required
                    />
                    <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                </div>
                <div className="relative sm:h-[3rem] sm:w-[20rem] h-[2.75rem] w-[18rem] flex mt-4">
                    <div className="h-full aspect-square flex justify-center items-center ml-1.5">
                        <Image
                            src={passwordIcon}
                            alt="passwordIcon"
                            className="w-auto h-[3rem]"
                        />
                    </div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        name="password"
                        className="w-full h-full rounded-xl peer focus:placeholder:invisible max-[40rem]:placeholder:text-[0.95rem]"
                        placeholder="Mật khẩu"
                        required
                        type="password"
                        minLength={6}
                        maxLength={30}
                    />
                    <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                </div>
                <p className="mt-2 text-end text-[0.9rem] font-bold text-[#4c9aff] sm:text-[1rem]">
                    Quên mật khẩu?
                </p>
            </div>
            <Button3d
                variant="logIn"
                className="mt-2 h-[2.75rem] w-[18rem] sm:h-[3rem] sm:w-[20rem] opacity-90 transition-all duration-200 ease-in hover:opacity-100"
            >
                <Button3d.Content className="font-semibold sm:text-[1.1rem] text-base">
                    Đăng nhập
                </Button3d.Content>
                <Button3d.Behind />
            </Button3d>
        </form>
    );
}
