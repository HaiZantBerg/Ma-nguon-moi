import Image from "next/image";
import Link from "next/link";

export const chapter = [
    [
        "Mệnh đề và tập hợp",
        "Bất phương trình và hệ bất phương trình bậc nhất hai ẩn",
        "Hệ thức lượng trong tam giác",
        "Vectơ",
        "Các số đặc trưng của mẫu số liệu không ghép nhóm",
        "Hàm số, đồ thị và ứng dụng",
        "Phương pháp tọa độ trong mặt phẳng",
        "Đại số tổ hợp",
        "Tính xác suất theo định nghĩa cổ điển",
    ],
    [
        "Hàm số lượng giác và phương trình lượng giác",
        "Dãy số. Cấp số cộng và cấp số nhân",
        "Các số đặc trưng đo xu thế trung tâm của mẫu số liệu ghép nhóm",
        "Quan hệ song song trong không gian",
        "Giới hạn. Hàm số liên tục",
        "Hàm số mũ và hàm số lôgarit",
        "Quan hệ vuông góc trong không gian",
        "Các quy tắc tính xác suất",
        "Đạo hàm",
    ],
    [
        "Ứng dụng đạo hàm đề khảo sát và vẽ đồ thị hàm số",
        "Vectơ và hệ trục tọa độ trong không gian",
        "Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
        "Nguyên hàm và tích phân",
        "Phương pháp tọa độ trong không gian",
        "Xác suất có điều kiện",
    ],
];

export const description = [
    [
        <div key="description1">
            <p className="font-[500] pb-1">Mệnh đề</p>
            <p className="pl-[20px]">
                Mệnh đề là một câu khẳng định trong toán học có thể đúng hoặc
                sai. Nó thường được sử dụng để phát biểu các kết luận trong lý
                thuyết. Mệnh đề có thể có các dạng như mệnh đề đảo, mệnh đề
                tương đương, và được chứng minh qua các phương pháp logic.
            </p>
            <p className="font-[500] pb-1">Tập hợp</p>
            <p className="pl-[20px]">
                Lịch sử toán học về tập hợp và các phép toán trong tập hợp có
                thể được tóm tắt qua một số mốc quan trọng. Tập hợp là một khái
                niệm cơ bản trong toán học, và sự phát triển của lý thuyết tập
                hợp đã có ảnh hưởng sâu rộng đến các lĩnh vực khác của toán học
                và khoa học máy tính.
            </p>
        </div>,
        <div key="description2"></div>,
        <div
            key="description3"
            className="md1:text-[1.12rem] md1:leading-[1.6rem]"
        >
            Để có thể đi vào chuyên sâu của một khái niệm trước hết chúng ta
            phải biết rõ các khái niệm chúng ta đang bàn đến có ý nghĩa thế nào
            về mặt từ ngữ. Từ “<span className="font-[475]">lượng giác</span>”
            được sử dụng trong các chương trình giáo dục của Việt Nam từ lúc bắt
            đầu có chương trình giáo dục phổ thông từ giữa thế kỷ XX. Đây là một
            từ Hán Việt ghép từ 2 khái niệm: “lượng” mang ý nghĩa về đo lường và
            “giác” nói về các góc, nên có thể hiểu “lượng giác” mang ý nghĩa là
            một phương pháp đo lường và định lượng về góc.
            <br /> Nếu chỉ mang ý nghĩa như trên chúng ta không có gì để bàn ở
            đây, trong tiếng Anh hoặc tiếng Pháp, khái niệm “lượng giác” được
            tương ứng với “<span className="font-[475]">trigonometry</span>”,
            đây là một từ xuất phát từ tiếng Hy Lạp - nền văn minh đặt nền tảng
            cho sự phát triển của nền văn mình phương Tây - trong đó, “
            <span className="font-[475]">trigōnon</span>” có nghĩa là “tam giác”
            và “<span className="font-[475]">metron</span>” mang nghĩa “đo
            lường”. Như thế khái niệm “lượng giác” trong tiếng Anh lại có ý
            nghĩa là sự đo lường về góc bằng tam giác.
            <br /> (
            <Link
                target="_blank"
                href="https://zefro.wordpress.com/2021/07/16/luong-giac-tu-ly-thuyet-den-thuc-te/"
                className="underline"
            >
                Theo nguồn
            </Link>
            )
        </div>,
        <div key="description4"></div>,
        <div key="description5"></div>,
        <div key="description6"></div>,
        <div key="description7"></div>,
        <div key="description8"></div>,
        <div key="description9"></div>,
    ],
    [
        <div key="description10"></div>,
        <div key="description11"></div>,
        <div key="description12"></div>,
        <div key="description13"></div>,
        <div key="description14"></div>,
        <div key="description15"></div>,
        <div key="description16"></div>,
        <div key="description17"></div>,
        <div key="description18"></div>,
    ],
    [
        <div key="description19"></div>,
        <div key="description20"></div>,
        <div key="description21"></div>,
        <div key="description22"></div>,
        <div key="description23"></div>,
        <div key="description24"></div>,
    ],
];

export const LHeader = () => {
    return (
        <div className='md1:pl-4 font-["Chakra_Petch"] font-[600] h-[72px] pt-[19px] md1:text-[40px] sm:text-[35px] text-[27.5px] sm:leading-[42.5px] leading-[37.5px] items-center sm:gap-4 gap-2 flex text-nowrap'>
            Câu chuyện lịch sử
            <div className="sm:h-[64px] h-[47.5px] aspect-square">
                <Image
                    src="Svg/Book&Quill.svg"
                    alt=""
                    width={100}
                    height={100}
                />
            </div>
        </div>
    );
};

export const FFHeader = () => {
    return (
        <div className='font-["Chakra_Petch"] font-[600] h-[72px] pt-2 md1:text-[40px] items-end text-[35px] leading-[42.5px] flex text-nowrap'>
            <div className="w-[40px] aspect-square mr-3">
                <Image src="Svg/Sparkle.svg" alt="" width={100} height={100} />
            </div>
            Fun facts
            <div className="w-[64px] aspect-square -translate-x-6 -translate-y-2">
                <Image src="Svg/Noticed.svg" alt="" width={100} height={100} />
            </div>
            <div className="md1:-translate-x-6 -translate-x-9 w-[40px] aspect-square ml-3">
                <Image src="Svg/Sparkle.svg" alt="" width={100} height={100} />
            </div>
        </div>
    );
};

export const QHeader = () => {
    return (
        <div className='font-["Chakra_Petch"] font-[600] h-[72px] md1:text-[40px] items-end text-[35px] leading-[42.5px] flex text-nowrap'>
            <div
                className="mr-2 w-[90px] aspect-square"
                style={{
                    transform: "scale(-1, 1) translateY(30px)",
                }}
            >
                <div className="w-[90px] aspect-square">
                    <Image
                        src="Svg/QuesExcla.svg"
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
            </div>
            <span className="pb-2">Quizzes</span>
            <div
                className="ml-2 w-[90px] aspect-square"
                style={{
                    transform: "translateY(30px)",
                }}
            >
                <div className="w-[90px] aspect-square">
                    <Image
                        src="Svg/QuesExcla.svg"
                        alt=""
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        </div>
    );
};
