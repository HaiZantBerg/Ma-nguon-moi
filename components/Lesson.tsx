"use client";

import React, { useRef } from "react";
// import Drawer from "./Drawer";
// import Image from "next/image";
// import Aristotle from "@/Image/image-removebg-preview.png";
// import GeorgeBoole from "@/Image/george-boole.png";
import { menhDeStars, lessonsToggle } from "./static/lessonsStatic";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useAnimate } from "framer-motion";

const Menhde = () => {
    return (
        <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(4,auto)]">
            <div className="col-[1/-1] row-[1/-1] bg-[#050505] sm:w-[2.5px] w-[1.5px] relative sm:left-[21.35px] left-[14.25px]" />
            <div className="col-[1/-1] row-[1/2] relative z-10 mt-[10px]">
                <div className="sm:h-[75px] h-[51.5px]">{menhDeStars[0]}</div>
                <p className="pl-[70px] py-3">
                    Chúng ta hãy bắt đầu từ khoảng năm 384 TCN, khi Aristotle
                    được sinh ra tại thành phố Stagira, Hy Lạp. Con trai của một
                    bác sĩ hoàng gia, Aristotle được nuôi dưỡng trong môi trường
                    học thuật từ nhỏ.
                    <br />
                    Đến năm 17 tuổi, ông đến Athens và trở thành học trò của
                    triết gia nổi tiếng Plato tại Học viện Athens – một nơi tập
                    trung những bộ óc vĩ đại của thời đại. Tại đây, Aristotle
                    sớm nổi lên như một trong những học giả hàng đầu, nhưng tư
                    tưởng của ông dần dần tách biệt khỏi những ý tưởng lý thuyết
                    của Plato.
                    <br /> Aristotle bị ám ảnh bởi câu hỏi về sự chính xác trong
                    tư duy. Làm thế nào con người có thể đạt được sự thật thông
                    qua lý luận? Ông phát triển một hệ thống suy luận logic mà
                    sau này được gọi là logic học suy diễn (syllogistic logic).
                    Aristotle lập luận rằng mọi kết luận đều có thể được rút ra
                    từ hai hoặc nhiều tiền đề. Ví dụ, nếu “Mọi người đều là sinh
                    vật” và “Socrates là người”, thì có thể suy ra “Socrates là
                    sinh vật”. Đây là cách thức đầu tiên mà loài người có thể
                    suy luận về thế giới một cách có hệ thống và chặt chẽ.
                    <br /> Trong gần 2000 năm, lý thuyết logic của Aristotle
                    chiếm vị trí thống trị trong triết học phương Tây. Các học
                    giả thời Trung cổ như Thomas Aquinas và Albertus Magnus đã
                    đưa các nguyên lý logic của ông vào hệ thống triết học và
                    thần học, củng cố thêm tầm quan trọng của nó. Nhưng dù những
                    nền tảng mà Aristotle xây dựng rất mạnh mẽ, chúng vẫn chưa
                    đủ để giải quyết những thách thức của toán học hiện đại.
                </p>
            </div>
            <div className="col-[1/-1] row-[2/3] relative z-10">
                <div className="sm:h-[75px] h-[51.5px]">{menhDeStars[1]}</div>
                <p className="pl-[70px] py-3">
                    Trong giai đoạn này, các nhà logic học như William of Ockham
                    và Peter Abelard đã tiếp tục phát triển các khái niệm về
                    logic và ngôn ngữ, tập trung vào cách các phát biểu có thể
                    được kết hợp và phân tích. Mặc dù chưa hình thành rõ ràng
                    mệnh đề như ta hiểu ngày nay, những nghiên cứu về suy luận
                    và ngôn ngữ của họ đã đặt nền móng cho sự phát triển sau
                    này.
                </p>
            </div>
            <div className="col-[1/-1] row-[3/4] relative z-10">
                <div className="sm:h-[75px] h-[51.5px]">{menhDeStars[2]}</div>
                <p className="pl-[70px] py-3">
                    Chuyển sang thế kỷ 19, một nhân vật mới xuất hiện: George
                    Boole, xuất thân từ một gia đình khiêm tốn; cha ông là một
                    người thợ giày nhưng lại rất đam mê về toán học và khoa học.
                    Boole sớm bộc lộ tài năng xuất sắc trong học tập, và dù hoàn
                    cảnh khó khăn, ông vẫn tự học toán học và các ngôn ngữ cổ
                    đại như Latin và Hy Lạp. Khi bước vào tuổi trưởng thành,
                    Boole cảm thấy rằng logic học truyền thống không đủ để giải
                    quyết những vấn đề phức tạp trong toán học và các lĩnh vực
                    khoa học khác. Ông nhận ra rằng để lý giải suy luận một cách
                    có hệ thống, cần phải có một phương pháp mới, một ngôn ngữ
                    toán học có thể biểu diễn logic.
                    <br /> Năm 1847, Boole xuất bản tác phẩm “The Mathematical
                    Analysis of Logic”, trong đó ông giới thiệu một ý tưởng đột
                    phá: các mệnh đề logic có thể được đại số hóa. Theo Boole,
                    logic có thể được xử lý giống như các phép toán đại số với
                    những ký hiệu cho “và” (AND), “hoặc” (OR) và “không” (NOT),
                    và các mệnh đề có thể được biểu diễn bằng số nhị phân: đúng
                    là 1, sai là 0. Ví dụ, phát biểu “Socrates là người và
                    Socrates là sinh vật” có thể được viết dưới dạng phép toán
                    đại số như: ￼, trong đó ￼ và ￼ lần lượt đại diện cho các
                    mệnh đề. Boole không chỉ dừng lại ở đó.
                    <br />
                    Trong tác phẩm “An Investigation of the Laws of Thought”
                    (1854), ông mở rộng ý tưởng của mình và đặt nền móng cho
                    toàn bộ một hệ thống logic đại số, gọi là Đại số Boole. Điều
                    đặc biệt là dù Boole phát triển hệ thống này từ quan điểm lý
                    thuyết thuần túy, nhưng các khái niệm mà ông đưa ra sau này
                    đã trở thành nền tảng cho khoa học máy tính hiện đại.
                    <br /> Khi Boole qua đời năm 1864 ở tuổi 49, ông không biết
                    rằng những tư tưởng của mình sẽ định hình tương lai của công
                    nghệ và viễn thông.
                </p>
                <p className="pl-[70px] py-3">
                    Khoảng 15 năm sau cái chết của Boole, một giáo sư trầm lặng
                    người Đức tên Gottlob Frege bắt đầu suy nghĩ về các vấn đề
                    sâu xa hơn trong logic. Frege sinh năm 1848 tại Wismar, Đức,
                    và ban đầu ông theo đuổi toán học thuần túy. Tuy nhiên,
                    Frege nhanh chóng nhận ra rằng lý thuyết mệnh đề của Boole
                    chưa đủ để giải quyết những vấn đề phức tạp trong toán học
                    và triết học. Ông muốn tạo ra một hệ thống logic không chỉ
                    biểu diễn các mệnh đề đơn giản mà còn cả các khái niệm phức
                    tạp liên quan đến đối tượng và thuộc tính của chúng.
                    <br /> Trong tác phẩm “Begriffsschrift” (1879), Frege đã
                    phát triển logic vị từ (predicate logic), một bước tiến lớn
                    so với logic mệnh đề của Boole. Nếu logic mệnh đề chỉ xử lý
                    các phát biểu đơn giản như “Socrates là người”, thì logic vị
                    từ cho phép Frege xử lý những phát biểu phức tạp hơn như
                    “Mọi người đều có một trái tim”. Frege đã phát triển một hệ
                    thống ký hiệu hoàn toàn mới để biểu diễn các khái niệm này,
                    trong đó các đối tượng (như Socrates) và các thuộc tính (như
                    “có trái tim”) có thể được biểu diễn một cách chính xác. Tuy
                    nhiên, trong suốt cuộc đời của mình, Frege không được công
                    nhận rộng rãi và phải đối mặt với nhiều thất bại cá nhân.
                    Một trong những thất bại lớn nhất của Frege là khi ông phát
                    hiện ra rằng hệ thống logic của mình chứa đựng một mâu thuẫn
                    nghiêm trọng, được nhà toán học Bertrand Russell chỉ ra
                    trong một lá thư vào năm 1902. Dù vậy, công trình của Frege
                    sau này đã trở thành nền tảng cho nhiều nhánh của logic hiện
                    đại và ảnh hưởng sâu sắc đến những nhà tư tưởng sau ông, như
                    Ludwig Wittgenstein và Kurt Gödel.
                </p>
            </div>
            <div className="col-[1/-1] row-[4/-1] relative z-10">
                <div className="sm:h-[75px] h-[51.5px]">{menhDeStars[3]}</div>
                <p className="pl-[70px] py-3"></p>
            </div>
        </div>
    );
};

const Taphop = () => {
    return (
        <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(4,auto)]">
            <div className="col-[1/-1] row-[1/-1] bg-[#050505] sm:w-[2.5px] w-[1.5px] relative sm:left-[21.35px] left-[14.25px]" />
            <div className="col-[1/-1] row-[1/2] relative z-10 mt-[10px]">
                <div className="sm:h-[75px] h-[51.5px]"></div>
                <p className="pl-[70px] py-3">
                    Cantor và tập hợp: Vào cuối thế kỷ 19, Georg Cantor đã giới
                    thiệu khái niệm về tập hợp (set) trong toán học, coi tập hợp
                    là một tập hợp các đối tượng hoặc phần tử mà có thể được xác
                    định rõ ràng. Cantor không chỉ khái quát hóa các tập hợp hữu
                    hạn mà còn mở rộng ra tập hợp vô hạn.
                    <br />
                    Lý thuyết tập hợp vô hạn: Một trong những đóng góp quan
                    trọng của Cantor là sự phân biệt giữa các loại vô hạn. Ông
                    phát hiện rằng không phải tất cả các tập hợp vô hạn đều có
                    cùng kích thước (số lượng phần tử). Cantor đưa ra khái niệm
                    về số siêu hạn (cardinality), trong đó có sự phân biệt giữa
                    tập hợp đếm được (countably infinite) như tập các số tự
                    nhiên và tập hợp không đếm được (uncountably infinite) như
                    tập các số thực. <br />
                    Ví dụ, tập các số tự nhiên <InlineMath math="\mathbb{N}" />=
                    {"{1, 2, 3,…}"} là một tập hợp đếm được.
                    <br />
                    Tập các số thực <InlineMath math="\mathbb{R}" /> lại không
                    thể đếm được. Điều này được chứng minh qua định lý Cantor
                    rằng không thể thiết lập một ánh xạ một - một giữa tập{" "}
                    <InlineMath math="\mathbb{N}" /> và{" "}
                    <InlineMath math="\mathbb{R}" />.
                    <br />
                    Các phép toán tập hợp cơ bản của Cantor:
                    <br />
                    Hợp tập (Union): Nếu A và B là hai tập hợp, thì hợp tập A{" "}
                    <InlineMath math="\cup" /> B là tập hợp tất cả các phần tử
                    thuộc A hoặc B, không trùng lặp.
                    <br />
                    Giao tập (Intersection): Giao tập A{" "}
                    <InlineMath math="\cap" /> B là tập hợp tất cả các phần tử
                    mà A và B cùng chia sẻ.
                    <br />
                    Hiệu tập (Difference): Hiệu tập A{" "}
                    <InlineMath math="\setminus" /> B là tập hợp tất cả các phần
                    tử thuộc A nhưng không thuộc B.
                    <br />
                    Tập con (Subset): Một tập hợp A là một tập con của tập hợp B
                    (ký hiệu A <InlineMath math="\subset" /> B ) nếu mọi phần tử
                    của A đều là phần tử của B.
                </p>
            </div>
            <div className="col-[1/-1] row-[2/3] relative z-10">
                <div className="sm:h-[75px] h-[51.5px]"></div>
                <p className="pl-[70px] py-3"></p>
            </div>
            <div className="col-[1/-1] row-[3/4] relative z-10">
                <div className="sm:h-[75px] h-[51.5px]"></div>
                <p className="pl-[70px] py-3"></p>
                <p className="pl-[70px] py-3"></p>
            </div>
            <div className="col-[1/-1] row-[4/-1] relative z-10">
                <div className="sm:h-[75px] h-[51.5px]"></div>
                <p className="pl-[70px] py-3"></p>
            </div>
        </div>
    );
};

const LuongGiac = () => {
    return (
        <>
            <div className="overflow-x-auto overflow-y-hidden grid grid-cols-1 grid-rows-[repeat(4,auto)]">
                <div className="col-[1/-1] row-[1/-1] bg-[#050505] sm:w-[2.5px] w-[1.5px] relative sm:left-[21.35px] left-[14.25px]" />
                <div className="col-[1/-1] row-[1/2] relative z-10 mt-[10px]">
                    <div className="sm:h-[75px] h-[51.5px]"></div>
                    <p className="pl-[70px] py-3"></p>
                </div>
                <div className="col-[1/-1] row-[2/3] relative z-10">
                    <div className="sm:h-[75px] h-[51.5px]"></div>
                    <p className="pl-[70px] py-3"></p>
                </div>
                <div className="col-[1/-1] row-[3/4] relative z-10">
                    <div className="sm:h-[75px] h-[51.5px]"></div>
                    <p className="pl-[70px] py-3"></p>
                    <p className="pl-[70px] py-3"></p>
                </div>
                <div className="col-[1/-1] row-[4/-1] relative z-10">
                    <div className="sm:h-[75px] h-[51.5px]"></div>
                    <p className="pl-[70px] py-3"></p>
                </div>
            </div>
        </>
    );
};

const Lessons = [
    [
        [<Menhde key="lesson1s1" />, <Taphop key="lesson1s2" />],
        null,
        <LuongGiac key="lesson3" />,
    ],
    [],
    [],
];

export default function LessonLayout({ id, idx }: { id: number; idx: number }) {
    const [scope, animate] = useAnimate();

    const toggleRef = useRef<(HTMLDivElement | null)[]>([]);
    let curToggleId = 0;

    const handleToggle = (idxl: number) => {
        const constCurToggleId = curToggleId;

        if (!toggleRef.current[idxl] || !toggleRef.current[constCurToggleId])
            return;

        if (idxl !== curToggleId) {
            animate(
                `#lessonName${idxl}`,
                {
                    width: "fit-content",
                },
                { ease: "easeOut" }
            );

            animate(
                `#toggleLine${idxl}`,
                {
                    width: "100%",
                },
                { delay: 0.2, ease: "easeOut" }
            );

            animate(
                `#toggleLine${curToggleId}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            animate(
                `#lessonName${curToggleId}`,
                {
                    width: "0px",
                },
                { ease: "easeOut" }
            );

            toggleRef.current[idxl].style.display = "block";
            toggleRef.current[constCurToggleId].style.display = "none";

            curToggleId = idxl;
        }
    };

    return (
        <>
            {lessonsToggle[id][idx] && (
                <div
                    className="h-[50px] ml-[30px] mb-[10px] mt-[20px] w-fit relative"
                    ref={scope}
                >
                    <div className="flex h-full">
                        {lessonsToggle[id][idx].map((lessonName, idxl) => (
                            <button
                                className="h-full flex w-fit text-[1.25rem] leading-[1.75rem] px-3 relative text-nowrap overflow-hidden"
                                key={idxl}
                                onClick={() => handleToggle(idxl)}
                            >
                                <div>Bài {idxl + 1}</div>
                                <div
                                    className={`${
                                        idxl ? "w-0" : "w-fit"
                                    } overflow-hidden`}
                                    id={`lessonName${idxl}`}
                                >
                                    : {lessonName}
                                </div>
                                <div className="w-full absolute bottom-0 left-0 flex justify-center">
                                    <div
                                        className={`h-[1.5px] bg-black ${
                                            idxl ? "w-0" : "w-full"
                                        }`}
                                        id={`toggleLine${idxl}`}
                                    />
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="h-[1.5px] bg-[rgba(0,0,0,0.25)] absolute bottom-0 left-0 w-full" />
                </div>
            )}
            {Array.isArray(Lessons[id][idx]) ? (
                Lessons[id][idx].map((lesson, idxl) => (
                    <div
                        key={idxl}
                        className={`h-full md1:overflow-y-auto md1:overflow-x-hidden font-light md:pl-5 md:overflow-y-auto md:overflow-x-hidden w-full ${
                            idxl ? "hidden" : "block"
                        }`}
                        ref={(el) => {
                            toggleRef.current[idxl] = el;
                        }}
                    >
                        {lesson}
                    </div>
                ))
            ) : (
                <div
                    className="mt-8 h-full md1:overflow-y-auto md1:overflow-x-hidden font-light md:pl-5 md:overflow-y-auto md:overflow-x-hidden w-full"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    {Lessons[id][idx]}
                </div>
            )}
        </>
    );
}
