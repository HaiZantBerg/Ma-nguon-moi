"use client";

import React, {
    CSSProperties,
    useActionState,
    useEffect,
    useState,
} from "react";
import PasswordIcon from "../assets/passwordIcon.svg";
import EmailIcon from "../assets/emailIcon.svg";
import { Form, Input, Button3d } from "@/components";
import { signIn } from "@/auth/action";
import CrossItem from "@/assets/Svg/Cross.svg";
import Link from "next/link";

export default function SignUpForm() {
    const [data, action, isPending] = useActionState(signIn, undefined);
    const [showUpError, setShowUpError] = useState<string | undefined>(
        undefined,
    );

    useEffect(() => {
        if (data && !isPending) setShowUpError(data.error);
    }, [data, isPending]);

    return (
        <Form className="sm:w-[20rem] w-[18rem]" action={action}>
            {showUpError && (
                <div
                    id="errorMsg"
                    className="text-[#ff4949] px-4 text-[0.9rem] justify-between py-2 bg-[#6d202069] flex items-center rounded-xl border border-red-600 mb-[1rem]"
                >
                    {data?.error}
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
                            defaultValue={data?.formField.email}
                            spellCheck="false"
                        />
                        <div className="pointer-events-none absolute w-full h-full top-0 left-0 rounded-xl border border-[#404866] ring-2 ring-transparent transition-all duration-300 ease-in peer-focus:border-[#581ce3] peer-focus:ring-[#f9dcef]" />
                    </Input>
                </Form.Item>
                <Form.Item className="flex-col gap-1">
                    <label htmlFor="password" className="text-[#dadae6]">
                        Mật khẩu:
                    </label>
                    <Input
                        id="password"
                        className="*:sm:h-[3rem] *:h-[2.75rem]"
                    >
                        <Input.Icon className="ml-1.5">
                            <PasswordIcon className="w-auto h-[3rem]" />
                        </Input.Icon>
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
            <Link
                href="/reset-password"
                className="w-full mt-2 mb-4 text-end text-[0.9rem] font-bold text-[#4c9aff] sm:text-[1rem]"
            >
                Quên mật khẩu?
            </Link>
            <Button3d
                variant="sign-in"
                className="h-[2.75rem] w-full sm:h-[3rem]"
                type="submit"
            >
                {isPending && (
                    <div
                        id="overlay"
                        className="w-full h-[49px] sm:h-[53px] absolute top-0 left-0 bg-black opacity-40 rounded-2xl z-20"
                    />
                )}
                <Button3d.Content className="font-semibold sm:text-[1.1rem] text-base">
                    Đăng nhập
                </Button3d.Content>
                <Button3d.Behind />
            </Button3d>
        </Form>
    );
}
