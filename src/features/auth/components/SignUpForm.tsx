"use client";

import React, { CSSProperties, useActionState } from "react";
import passwordIcon from "../assets/passwordIcon.svg";
import emailIcon from "../assets/emailIcon.svg";
import userIcon from "../assets/userIcon.svg";
import { Form, Input } from "@/components";
import { motion } from "motion/react";
import arrow from "@/assets/Svg/arrowStuff.svg";
import Image from "next/image";
import { Button3d } from "@/components";
import { signUp } from "../api/action";
import ErrorMsg from "./ErrorMsg";

export default function SignUpForm() {
    const [data, action, isPending] = useActionState(signUp, undefined);

    return (
        <Form className="sm:w-[30rem] w-full" action={action}>
            <Form.Feild className="">
                <Form.Item className="flex-col">
                    <label htmlFor="username" className="sr-only">
                        Tên người dùng
                    </label>
                    <Input className="sm:h-[3rem] h-[2.75rem]" id="username">
                        <Input.IconContainer className="ml-1.5">
                            <Input.Icon
                                src={userIcon}
                                alt="userIcon"
                                className="w-auto h-[1.5rem]"
                            />
                        </Input.IconContainer>
                        <Input.Placeholder
                            id="username"
                            name="username"
                            className="peer caret-white outline-[#0a060a] outline-0 max-[40rem]:placeholder:text-[0.95rem]"
                            style={
                                {
                                    "--hide-autofill": "#0a060a",
                                } as CSSProperties
                            }
                            spellCheck="false"
                            placeholder="Tên người dùng"
                            type="text"
                            defaultValue={data?.formField?.username}
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                    <ErrorMsg errorArray={data?.error?.username} />
                </Form.Item>
                <Form.Item className="flex-col">
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <Input className="sm:h-[3rem] h-[2.75rem]" id="email">
                        <Input.IconContainer className="ml-1.5">
                            <Input.Icon
                                src={emailIcon}
                                alt="emailIcon"
                                className="w-auto h-[1.5rem]"
                            />
                        </Input.IconContainer>
                        <Input.Placeholder
                            id="email"
                            name="email"
                            type="text"
                            placeholder="Email@cua.ban"
                            className="peer caret-white outline-[#0a060a] outline-0 max-[40rem]:placeholder:text-[0.95rem]"
                            style={
                                {
                                    "--hide-autofill": "#0a060a",
                                } as CSSProperties
                            }
                            spellCheck="false"
                            defaultValue={data?.formField?.email}
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                    <ErrorMsg errorArray={data?.error?.email} />
                </Form.Item>
                <Form.Item className="flex-col">
                    <label htmlFor="password" className="sr-only">
                        Mật khẩu
                    </label>
                    <Input className="sm:h-[3rem] h-[2.75rem]" id="password">
                        <Input.IconContainer className="ml-1.5">
                            <Input.Icon
                                src={passwordIcon}
                                alt="passwordIcon"
                                className="w-auto h-[3rem]"
                            />
                        </Input.IconContainer>
                        <Input.Placeholder
                            id="password"
                            name="password"
                            className="peer outline-[#0a060a] outline-0 max-[40rem]:placeholder:text-[0.95rem]"
                            style={
                                {
                                    "--hide-autofill": "#0a060a",
                                } as CSSProperties
                            }
                            placeholder="Mật khẩu"
                            type="password"
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                    <ErrorMsg errorArray={data?.error?.password} />
                </Form.Item>
            </Form.Feild>
            <Button3d
                variant="sign-up"
                className="mt-[1.5rem] h-[2.75rem] w-full sm:h-[3rem]"
                type="submit"
                disabled={isPending}
            >
                {isPending && (
                    <div
                        id="overlay"
                        className="w-full h-[49px] sm:h-[53px] absolute top-0 left-0 bg-black opacity-40 rounded-2xl z-20"
                    />
                )}
                <Button3d.Content className="font-semibold sm:text-[1.1rem] text-base">
                    Tiếp tục
                    <motion.div className="h-[17.5%] w-auto ml-2">
                        <Image
                            src={arrow}
                            alt=""
                            className="h-full w-auto rotate-90"
                        />
                    </motion.div>
                </Button3d.Content>
                <Button3d.Behind />
            </Button3d>
        </Form>
    );
}
