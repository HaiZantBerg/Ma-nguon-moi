"use client";

import { Button3d, Form, Input } from "@/components";
import EmailIcon from "../assets/emailIcon.svg";
import React, {
    CSSProperties,
    useActionState,
    useEffect,
    useState,
} from "react";
import CrossItem from "@/assets/Svg/Cross.svg";
import { resetPassword } from "@/auth/action";

export default function ResetPasswordForm() {
    const [data, action, isPending] = useActionState(resetPassword, undefined);
    const [showUpError, setShowUpError] = useState<string | undefined>(
        undefined,
    );
    const [showUpSuccess, setShowUpSuccess] = useState<boolean>(false);

    useEffect(() => {
        if (isPending) return;

        if (data) {
            setShowUpError(data.error);
            setShowUpSuccess(data.success);
        }
    }, [data, isPending]);

    return (
        <Form className="sm:w-[20rem] w-[18rem]" action={action}>
            {showUpSuccess && (
                <div
                    id="errorMsg"
                    className="text-[#49ffa4] justify-center px-4 text-[0.9rem] py-2 bg-[#206d4f69] flex items-center rounded-xl border border-emerald-500 mb-[1rem]"
                >
                    Gửi yêu cầu thành công
                </div>
            )}
            {showUpError && (
                <div
                    id="errorMsg"
                    className="text-[#ff4949] px-4 text-[0.9rem] justify-between py-2 bg-[#6d202069] flex items-center rounded-xl border border-red-600 mb-[1rem]"
                >
                    {showUpError}
                    <div
                        className="h-[2rem] aspect-square flex justify-center items-center cursor-pointer"
                        onClick={() => {
                            setShowUpError(undefined);
                        }}
                    >
                        <CrossItem fill="#ff4949" width="10.4" height="10.4" />
                    </div>
                </div>
            )}
            <Form.Feild className="flex flex-col w-full">
                <Form.Item className="flex-col gap-1">
                    <label htmlFor="email" className="text-[#dadae6]">
                        Địa chỉ email:
                    </label>
                    <Input
                        id="email"
                        className="*:sm:h-[3rem] *:h-[2.75rem] text-white"
                    >
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
                            defaultValue={data?.formField.email}
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                </Form.Item>
            </Form.Feild>
            <Button3d
                variant="sign-in"
                className="h-[2.75rem] w-full mt-4 sm:h-[3rem]"
                type="submit"
            >
                {isPending ||
                    (showUpSuccess && (
                        <div
                            id="overlay"
                            className="w-full h-[49px] sm:h-[53px] absolute top-0 left-0 bg-black opacity-40 rounded-2xl z-20"
                        />
                    ))}
                <Button3d.Content className="font-semibold sm:text-[1.1rem] text-base text-white">
                    Gửi yêu cầu
                </Button3d.Content>
                <Button3d.Behind />
            </Button3d>
        </Form>
    );
}
