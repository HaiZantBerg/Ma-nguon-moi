import "dotenv/config";
import {
    Container,
    Head,
    Html,
    Img,
    Link,
    Section,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.NEXT_PUBLIC_URL || "";

type ResetPasswordProps = { email: string; resetPasswordToken: string };

export default function ResetPassword({
    email,
    resetPasswordToken,
}: ResetPasswordProps) {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Container className="font-sans text-black bg-white mx-auto max-w-[30rem] my-[4rem] border border-solid px-[2rem] pt-[3rem] pb-[2rem] rounded-2xl border-neutral-700">
                    <Section className="mb-[2rem]">
                        <Link href="https://ethems.com">
                            <div className="flex gap-3">
                                <Img
                                    src={`${baseUrl}Image/logo/logo.png`}
                                    height="55"
                                    width="60"
                                    alt="Ethems Logo"
                                />
                                <Img
                                    src={`${baseUrl}Image/logo/ethems.png`}
                                    height="25"
                                    alt="Ethems"
                                    className="mt-[1rem]"
                                />
                            </div>
                        </Link>
                    </Section>
                    <Section>
                        <header className="font-bold text-[1.35rem] font-['Chakra_Petch']">
                            Đặt lại mật khẩu
                        </header>
                        <p className="mb-6">
                            Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho
                            tài khoản Ethems được liên kết với{" "}
                            <span className="text-black no-underline">
                                {email}
                            </span>
                            .
                            <br />
                            Để đặt lại mật khẩu, hãy nhấp vào nút bên dưới.
                        </p>
                        <div>
                            <Link
                                className="rounded-lg py-[0.75rem] px-[1rem] bg-[#19026e] text-white font-medium cursor-pointer"
                                href={`https://www.ethems.com/reset-password?token=${resetPasswordToken}`}
                            >
                                Đặt lại mật khẩu
                            </Link>
                        </div>
                        <p className="mt-6">
                            Nếu bạn không yêu cầu đặt lại mật khẩu, bạn có thể
                            bỏ qua email này.
                        </p>
                    </Section>
                </Container>
            </Tailwind>
        </Html>
    );
}
