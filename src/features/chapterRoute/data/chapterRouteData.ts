import { StaticImageData } from "next/image";

import levelUiI10 from "public/Image/chapterRoute/leveluipart110.webp";
import levelUiII10 from "public/Image/chapterRoute/leveluipart210.webp";
import levelUiIII10 from "public/Image/chapterRoute/leveluipart310.webp";

import levelUiI11 from "public/Image/chapterRoute/leveluipart111.webp";
import levelUiII11 from "public/Image/chapterRoute/leveluipart211.webp";
import levelUiIII11 from "public/Image/chapterRoute/leveluipart311.webp";

import levelUiI12 from "public/Image/chapterRoute/leveluipart112.webp";
import levelUiII12 from "public/Image/chapterRoute/leveluipart212.webp";
import levelUiIII12 from "public/Image/chapterRoute/leveluipart312.webp";

type GradeType = {
    summary: string;
    level: StaticImageData[];
    bg: string[];
    card: string[];
};

export const ui: Record<string, GradeType> = {
    grade10: {
        summary: `Khởi đầu hành trình khám phá lịch sử toán học, từ đóng góp của các nền văn minh cổ đại trong đại số và hình học đến những đột phá vào những năm 1900.`,
        level: [levelUiI10, levelUiII10, levelUiIII10],
        bg: [
            "/Image/chapterRoute/bgpart210.webp",
            "/Image/chapterRoute/bgpart310.webp",
            "/Image/chapterRoute/bgpart410.webp",
            "/Image/chapterRoute/bgpart510.webp",
        ],
        card: ["#2f6f53", "#05ff6d0d"],
    },
    grade11: {
        summary: `Tìm hiểu sâu hơn về sự phát triển của đại số, lượng giác và những ý tưởng mang tính cải cách đã định hình nên toán học hiện đại.`,
        level: [levelUiI11, levelUiII11, levelUiIII11],
        bg: [
            "/Image/chapterRoute/bgpart211.webp",
            "/Image/chapterRoute/bgpart311.webp",
            "/Image/chapterRoute/bgpart411.webp",
            "/Image/chapterRoute/bgpart511.webp",
        ],
        card: ["#2f406e", "#041dff0c"],
    },
    grade12: {
        summary: `Khám phá những bước tiến từ giải tích đến lý thuyết xác suất, và xem cách những ý tưởng phát triển này đã biến đổi tư duy toán học qua thời gian.`,
        level: [levelUiI12, levelUiII12, levelUiIII12],
        bg: [
            "/Image/chapterRoute/bgpart212.webp",
            "/Image/chapterRoute/bgpart312.webp",
            "/Image/chapterRoute/bgpart412.webp",
            "/Image/chapterRoute/bgpart512.webp",
        ],
        card: ["#4f2f6f", "#9305ff0d"],
    },
};

export const LevelBtnArray: Record<
    string,
    {
        gridPosition: string;
        className: string;
        detailsCN?: string;
        directionR?: boolean;
        delay?: number;
    }[]
> = {
    grade10: [
        {
            gridPosition: "col-[1/2] row-[1/2]",
            className: "absolute -right-[20%] z-10",
            detailsCN: "translate-y-12",
            directionR: true,
        },
        {
            gridPosition: "col-[2/3] row-[1/2]",
            className: "absolute top-[25%] left-[40%]",
            directionR: true,
            delay: 1,
        },
        {
            gridPosition: "row-[1/2] col-[1/2]",
            className: "absolute top-[63%] left-[18%]",
            directionR: true,
        },
        {
            gridPosition: "col-[3/4] row-[2/3]",
            className: "absolute right-0 -top-[16%] z-10",
            delay: 2,
        },
        {
            gridPosition: "col-[3/4] row-[2/3]",
            className: "absolute top-[28%] right-[25%]",
        },
        {
            gridPosition: "row-[2/3] col-[1/2]",
            className: "absolute sm:right-[35%] top-[48%]",
            delay: 2,
            directionR: true,
        },
        {
            gridPosition: "col-[2/3] row-[2/3]",
            className: "absolute left-[45%] sm:-bottom-[10%] bottom-0",
            directionR: true,
        },
        {
            gridPosition: "col-[3/4] row-[3/4]",
            className: "absolute top-[10%] sm:left-[30%] -left-[10%]",
            delay: 2,
        },
        {
            gridPosition: "row-[3/4] col-[2/3]",
            className: "absolute top-[60%] -left-[10%]",
            directionR: true,
        },
    ],
    grade11: [
        {
            gridPosition: "col-[3/4] row-[1/2]",
            className: "absolute right-[5%]",
            detailsCN: "translate-y-12",
        },
        {
            gridPosition: "col-[2/3] row-[1/2]",
            className: "absolute top-[20%] left-[20%]",
            directionR: true,
            delay: 1,
        },
        {
            gridPosition: "row-[1/2] col-[1/2]",
            className: "absolute top-[60%] left-[5%]",
            directionR: true,
        },
        {
            gridPosition: "col-[2/3] row-[2/3]",
            className: "absolute left-[10%]",
            directionR: true,
            delay: 2,
        },
        {
            gridPosition: "col-[1/2] row-[2/3]",
            className: "absolute top-[60%] left-[20%]",
            directionR: true,
        },
        {
            gridPosition: "row-[2/3] col-[3/4]",
            className: "absolute right-0 top-[30%]",
            delay: 2,
        },
        {
            gridPosition: "col-[3/4] row-[3/4]",
            className: "absolute left-[15%]",
        },
        {
            gridPosition: "col-[2/3] row-[3/4]",
            className: "absolute top-[20%] left-[10%]",
            directionR: true,
            delay: 2,
        },
        {
            gridPosition: "row-[3/4] col-[1/2]",
            className: "absolute top-[60%]",
            directionR: true,
        },
    ],
    grade12: [
        {
            gridPosition: "col-[1/2] row-[1/2]",
            className: "absolute left-[5%]",
            detailsCN: "translate-y-12",
            directionR: true,
        },
        {
            gridPosition: "col-[2/3] row-[1/2]",
            className: "absolute top-[40%] right-[30%]",
            directionR: true,
            delay: 1,
        },
        {
            gridPosition: "row-[1/2] col-[3/4]",
            className: "absolute top-[60%] right-0",
        },
        {
            gridPosition: "col-[1/2] row-[2/3]",
            className: "absolute left-[10%]",
            delay: 2,
            directionR: true,
        },
        {
            gridPosition: "row-[2/3] col-[3/4]",
            className: "absolute right-0 top-[30%]",
            delay: 2,
        },
        {
            gridPosition: "col-[2/3] row-[2/3]",
            className: "absolute top-[60%] left-[20%]",
            directionR: true,
        },
    ],
};
