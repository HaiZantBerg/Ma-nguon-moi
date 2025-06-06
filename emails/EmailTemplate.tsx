import "dotenv/config";
import {
    Button,
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

type EmailTemplateProps = { email: string };

export default function EmailTemplate({ email }: EmailTemplateProps) {
    return (
        <Html>
            <Head />
            <Tailwind>
                <Container className="font-sans mx-auto max-w-[30rem] my-[4rem] border border-solid px-[2rem] py-[3rem] rounded-2xl border-neutral-700">
                    <Link href="https://ethems.com">
                        <Section className="mb-[1rem]">
                            <Img
                                src={`${baseUrl}Image/logo/logo.webp`}
                                height="50"
                                width="55"
                                alt="Ethems Logo"
                            />
                            <Img
                                src={`${baseUrl}Image/logo/ethems.webp`}
                                height="50"
                                width="55"
                                alt="Ethems"
                            />
                        </Section>
                    </Link>
                    <Section>
                        <header className="font-bold text-2xl font-['Chakra_Petch']">
                            Đặt lại mật khẩu
                        </header>
                        <p>
                            Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho
                            tài khoản Ethems được liên kết với {email}.
                            <br />
                            Để đặt lại mật khẩu, hãy nhấp vào nút bên dưới.
                        </p>
                        <Button className="rounded-lg py-[0.75rem] px-[1rem] bg-[#19026e] text-white font-medium cursor-pointer">
                            Đặt lại mật khẩu
                        </Button>
                        <p>
                            Nếu bạn không yêu cầu đặt lại mật khẩu, bạn có thể
                            bỏ qua email này.
                        </p>
                    </Section>
                </Container>
            </Tailwind>
        </Html>
    );
}
