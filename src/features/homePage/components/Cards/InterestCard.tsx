"use client";

import { Button3d } from "@/components";
import Link from "next/link";
import React, { ReactNode } from "react";
import { FindIcon } from "@/assets";
import Image from "next/image";
import style from "../../assets/card.module.css";

import { capitalizeFirst } from "@/utils/capitalizeFirst";
import { cn } from "@/lib/tailwind/tailwindMerge";

type LegacyType = {
    type: "legacy";
    title: string;
    url: `legacy${string}`;
    description: ReactNode;
};

type FunfactsType = {
    id: string;
    type: "funfacts";
    title: string;
    url: `funfacts${string}`;
    src: string;
};

type QuizzesType = {
    type: "quizzes";
    title: string;
    url: "quizzes";
    src: string;
};

type PartType = LegacyType | FunfactsType | QuizzesType;

export default function InterestCard() {
    const interestChapter: {
        chapter: number;
        grade: number;
        variant: "green" | "blue" | "purple";
        part: PartType;
    } = {
        chapter: 1,
        grade: 10,
        variant: "green",
        part: {
            // id: "I",
            // type: "funfacts",
            // title: "Câu hỏi hóc búa và câu trả lời bất ngờ",
            // url: "funfacts?figure-id=0&funfact-id=2",
            // src: `${process.env.NEXT_PUBLIC_URL}Image/funfacts/MDTH/cauhoihocbuavatratraloibatngo.webp`,
            type: "legacy",
            title: "Mệnh đề và tập hợp",
            description: (
                <div className="space-y-2">
                    <p>
                        <strong>Mệnh đề</strong> là một câu khẳng định trong
                        toán học có thể đúng hoặc sai. Nó thường được sử dụng để
                        phát biểu các kết luận trong lý thuyết. Mệnh đề có thể
                        có các dạng như mệnh đề đảo, mệnh đề tương đương, và
                        được chứng minh qua các phương pháp logic.
                    </p>
                    <p>
                        Lịch sử toán học về <strong>tập hợp</strong> và các phép
                        toán trong tập hợp có thể được tóm tắt qua một số mốc
                        quan trọng. Tập hợp là một khái niệm cơ bản trong toán
                        học, và sự phát triển của lý thuyết tập hợp đã có ảnh
                        hưởng sâu rộng đến các lĩnh vực khác của toán học và
                        khoa học máy tính.
                    </p>
                </div>
            ),
            url: "legacy?part=menh-de",
        },
    };

    const { grade, variant, chapter, part } = interestChapter;

    const RenderComponent = () => {
        switch (part.type) {
            case "legacy":
                return _renderLegacy({ part: part as LegacyType });
            case "funfacts":
                return _renderFunfacts({ part: part as FunfactsType });
            case "quizzes":
                return _renderQuizzes({ part: part as QuizzesType });
            default:
                return null;
        }
    };

    return (
        <div className="py-4 px-6 h-full flex flex-col justify-between">
            <p className="text-2xl font-[Chakra_Petch] font-[550] text-secondary">
                Có thể bạn sẽ thích
            </p>
            <RenderComponent />
            <div className="mb-2">
                <Button3d
                    as={Link}
                    variant={variant}
                    className="h-[3rem] text-xl block"
                    href={`/khoi${grade}/chuong${chapter}/${part.url}`}
                >
                    <Button3d.Content className="gap-3">
                        Khám phá
                        <FindIcon height="60%" />
                    </Button3d.Content>
                    <Button3d.Behind />
                </Button3d>
            </div>
        </div>
    );
}

function _renderLegacy({ part }: { part: LegacyType }) {
    const { title, description, type } = part;

    return (
        <div className="flex flex-col">
            <p className="absolute font-[425] text-secondary text-[1.1rem]">
                {capitalizeFirst(type)}:
            </p>
            <div className="flex flex-col items-center mb-2">
                <p className="font-medium text-center text-[1.1rem] leading-[1.3rem] pt-2 min-[30rem]:w-[10rem] w-[8rem] text-pretty">
                    {title}
                </p>
                <div
                    className={cn(style.cardGradient, "h-[10.75rem] relative")}
                >
                    <div
                        className="text-[0.9rem] leading-[1.3rem] h-full overflow-y-auto pt-4 pb-2 pr-4"
                        style={{
                            scrollbarGutter: "stable both-edges",
                        }}
                    >
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
}

function _renderFunfacts({ part }: { part: FunfactsType }) {
    const { title, src, id, type } = part;

    return (
        <div className="h-full relative mb-3">
            <p className="absolute font-[425] text-[1.1rem]">
                {capitalizeFirst(type)}:
            </p>
            <p className="absolute top-3 left-1/2 -translate-x-1/2">{id}.</p>
            <div className="flex justify-center">
                <div className="min-[30rem]:size-[7rem] top-[2.5rem] size-[5.6rem] relative ">
                    <Image src={src} alt="" fill />
                </div>
            </div>
            <p className="min-[30rem]:w-[14rem] w-[12rem] absolute top-[10rem] mx-auto font-medium text-center left-1/2 -translate-x-1/2">
                {title}
            </p>
        </div>
    );
}

function _renderQuizzes({ part }: { part: QuizzesType }) {
    const { title, src, type } = part;

    return (
        <div className="mb-3">
            <p className="absolute font-[425] text-[1.1rem]">
                {capitalizeFirst(type)}:
            </p>
            <p className="font-medium text-center">{title}</p>
            <div className="relative">
                <Image src={src} alt="" fill />
            </div>
        </div>
    );
}
