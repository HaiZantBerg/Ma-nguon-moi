"use client";

import { useRouter } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";

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
        <div className="h-dvh w-full flex justify-center items-center bg-[#030513]">
            <div className="bg-white w-[36rem] h-[44rem]">
                {isMounted && (
                    <form onSubmit={handleSubmitLogIn}>
                        <input
                            type="text"
                            required
                            name="username"
                            placeholder="username"
                        />
                        <input
                            type="password"
                            required
                            name="password"
                            placeholder="Mật khẩu"
                        />
                        <button>Đăng nhập</button>
                    </form>
                )}
            </div>
        </div>
    );
}
