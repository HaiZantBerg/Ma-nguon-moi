"use client";

import React, { CSSProperties } from "react";
import passwordIcon from "../assets/passwordIcon.svg";
import emailIcon from "../assets/emailIcon.svg";
import { Form, Input, Button3d } from "@/components";

export default function SignUpForm() {
    return (
        <Form className="sm:w-[24rem] w-[18rem]">
            <Form.Feild className="flex flex-col w-full">
                <Form.Item>
                    <label htmlFor="email" className="sr-only">
                        Địa chỉ email
                    </label>
                    <Input id="email" className="*:sm:h-[3rem] *:h-[2.75rem]">
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
                            type="email"
                            className="peer caret-white outline-0 max-[40rem]:placeholder:text-[0.95rem] sm:h-[3rem]"
                            placeholder="Email@cua.ban"
                            style={
                                {
                                    "--hide-autofill": "#202434",
                                } as CSSProperties
                            }
                            spellCheck="false"
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                </Form.Item>
                <Form.Item>
                    <label htmlFor="password" className="sr-only">
                        Mật khẩu
                    </label>
                    <Input
                        id="password"
                        className="*:sm:h-[3rem] *:h-[2.75rem]"
                    >
                        <Input.IconContainer className="ml-1.5">
                            <Input.Icon
                                src={passwordIcon}
                                alt="passwordIcon"
                                className="w-auto h-[3rem]"
                            />
                        </Input.IconContainer>
                        <Input.Placeholder
                            name="password"
                            className="peer max-[40rem]:placeholder:text-[0.95rem] rounded-xl"
                            placeholder="Mật khẩu"
                            type="password"
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                </Form.Item>
            </Form.Feild>
            <p className="w-full mt-2 mb-4 text-end text-[0.9rem] font-bold text-[#4c9aff] sm:text-[1rem]">
                Quên mật khẩu?
            </p>
            <Button3d
                variant="sign-in"
                className="h-[2.75rem] w-full sm:h-[3rem]"
                type="submit"
            >
                <Button3d.Content className="font-semibold sm:text-[1.1rem] text-base">
                    Đăng nhập
                </Button3d.Content>
                <Button3d.Behind />
            </Button3d>
        </Form>
    );
}
