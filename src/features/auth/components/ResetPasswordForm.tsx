"use client";

import { Button3d, Form, Input } from "@/components";
import EmailIcon from "../assets/emailIcon.svg";
import React, { CSSProperties } from "react";
import { sendEmail } from "@/auth/email/sendEmail";
// import EmailTemplate from "../../../../emails/emailTemplate";
// import { render, pretty } from "@react-email/render";

export default function ResetPasswordForm() {
    const handleSendEmail = async () => {
        // const html = await pretty(
        //     await render(<EmailTemplate email="hello" />),
        // );

        sendEmail({
            from: "Ethems <info@ethems.com>",
            to: ["tandocong5@gmail.com"],
            subject: "Đặt lại mật khẩu",
            html: "<p></p>",
        });
    };

    return (
        <Form>
            <Form.Feild className="flex flex-col w-full">
                <Form.Item className="flex-col gap-1">
                    <label htmlFor="email" className="text-[#dadae6]">
                        Địa chỉ email:
                    </label>
                    <Input id="email" className="*:sm:h-[3rem] *:h-[2.75rem]">
                        <Input.Icon className="ml-1.5">
                            <EmailIcon className="w-auto h-[1.5rem]" />
                        </Input.Icon>
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
            </Form.Feild>
            <Button3d
                variant="sign-in"
                className="h-[2.75rem] w-full sm:h-[3rem]"
                type="submit"
                onClick={() => handleSendEmail()}
            >
                {/* {isPending && (
                    <div
                        id="overlay"
                        className="w-full h-[49px] sm:h-[53px] absolute top-0 left-0 bg-black opacity-40 rounded-2xl z-20"
                    />
                )} */}
                <Button3d.Content className="font-semibold sm:text-[1.1rem] text-base">
                    Đặt lại mật khẩu
                </Button3d.Content>
                <Button3d.Behind />
            </Button3d>
        </Form>
    );
}
