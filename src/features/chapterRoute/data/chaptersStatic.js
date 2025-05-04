import Link from "next/link";
import ReactPlayer from "react-player";

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
            <p className="mb-1.5">
                <span className="font-bold">Mệnh đề</span> là một câu khẳng định
                trong toán học có thể đúng hoặc sai. Nó thường được sử dụng để
                phát biểu các kết luận trong lý thuyết. Mệnh đề có thể có các
                dạng như mệnh đề đảo, mệnh đề tương đương, và được chứng minh
                qua các phương pháp logic.
            </p>
            <p>
                Lịch sử toán học về <span className="font-bold">tập hợp</span>{" "}
                và các phép toán trong tập hợp có thể được tóm tắt qua một số
                mốc quan trọng. Tập hợp là một khái niệm cơ bản trong toán học,
                và sự phát triển của lý thuyết tập hợp đã có ảnh hưởng sâu rộng
                đến các lĩnh vực khác của toán học và khoa học máy tính.
            </p>
        </div>,
        <div key="description2"></div>,
        <div
            key="description3"
            className="md1:text-[1.1rem] md1:leading-[1.6rem]"
        >
            Để có thể đi vào chuyên sâu của một khái niệm trước hết chúng ta
            phải biết rõ các khái niệm chúng ta đang bàn đến có ý nghĩa thế nào
            về mặt từ ngữ. Từ “<span className="font-[475]">lượng giác</span>”
            được sử dụng trong các chương trình giáo dục của Việt Nam từ lúc bắt
            đầu có chương trình giáo dục phổ thông từ giữa thế kỷ XX. Đây là một
            từ Hán Việt ghép từ 2 khái niệm: “lượng” mang ý nghĩa về đo lường và
            “giác” nói về các góc, nên có thể hiểu “lượng giác” mang ý nghĩa là
            một phương pháp đo lường và định lượng về góc.
            <br />
            <br />
            Nếu chỉ mang ý nghĩa như trên chúng ta không có gì để bàn ở đây,
            trong tiếng Anh hoặc tiếng Pháp, khái niệm “lượng giác” được tương
            ứng với “<span className="font-[475]">trigonometry</span>”, đây là
            một từ xuất phát từ tiếng Hy Lạp - nền văn minh đặt nền tảng cho sự
            phát triển của nền văn mình phương Tây - trong đó, “
            <span className="font-[475]">trigōnon</span>” có nghĩa là “tam giác”
            và “<span className="font-[475]">metron</span>” mang nghĩa “đo
            lường”. Như thế khái niệm “lượng giác” trong tiếng Anh lại có ý
            nghĩa là sự đo lường về góc bằng tam giác.{" "}
            <Link
                target="_blank"
                href="https://zefro.wordpress.com/2021/07/16/luong-giac-tu-ly-thuyet-den-thuc-te/"
                className="underline"
            >
                Theo nguồn
            </Link>{" "}
            <br />
            <br />
            Các bạn có thể tìm hiểu thêm kiến thức về lượng giác ở{" "}
            <Link
                href="/khoi11?chuong=1"
                className="text-[#0d0c3f] underline decoration-[1.5px] decoration-sky-800 font-[375]"
            >
                chương 1 - lớp 11.
            </Link>
        </div>,
        <div key="description4"></div>,
        <div key="description5"></div>,
        <div key="description6"></div>,
        <div key="description7"></div>,
        <div key="description8"></div>,
        <div key="description9"></div>,
    ],
    [
        <div key="description10">
            Lịch sử phát triển của lượng giác đi cùng với sự phát triển của đo
            đạc và thiên văn. Để hiểu rõ hơn bạn đọc có thể tìm hiểu thêm ở{" "}
            <Link
                className="text-[#073108] underline decoration-[1.5px] decoration-emerald-800 font-[375]"
                href="/khoi10?chuong=3"
            >
                chương 3 - lớp 10
            </Link>
            .
            <br />
            <br />
            Ở chương này, chúng ta sẽ đi cụ thể hơn về hàm số lượng giác, phương
            trình lượng giá. Và để có thể tìm hiểu về các khái niệm này, thì đầu
            tiên ta cùng nhau đi tìm hiểu về lịch sử phát triển của góc lượng
            giác và góc theo đơn vị radian.
            <br />
            <br />
            Bạn có thể tìm hiểu thêm ở video sau
            <div className="aspect-video max-w-[400px] mt-2">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=eRenu0jUfmY"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>,
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
