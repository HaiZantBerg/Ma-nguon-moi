import React from "react";
import { Chakra_Petch } from "next/font/google";
import Link from "next/link";

const chakraPetch = Chakra_Petch({ weight: "700", subsets: ["vietnamese"] });

export default function Story({
    storyId,
    gradeId,
}: {
    storyId: number;
    gradeId: number;
}) {
    return (
        <div className="bg-slate-100 md:px-40 md:pb-10 px-10">
            <div className="md:text-[25px] text-[20px] flex flex-col gap-5">
                {stories[gradeId][storyId].map((section, sIdx) => (
                    <div key={sIdx} className="">
                        <div
                            className={`relative z-10 justify-center text-center md:text-[70px] text-[35px] ${
                                chakraPetch.className
                            } h-screen flex items-center ${
                                sIdx ? "my-5" : "mb-5"
                            }`}
                        >
                            <div className="">
                                {headers[gradeId][storyId][sIdx]}
                            </div>
                        </div>
                        {section.split("//").map((content, cIdx) => (
                            <p key={cIdx} className="indent-6">
                                {content}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <Link
                    href="/khoi-10/"
                    className="rounded-full text-xl border-2 border-black w-fit font-semibold px-6 py-3 flex items-center gap-3 mt-4"
                >
                    Hoàn thành
                </Link>
            </div>
        </div>
    );
}

const headers = [
    [
        [
            "Thế kỷ 4 TCN - Thời cổ đại",
            "Thế kỷ 19 - Đại số Boole (1847)",
            "Thế kỷ 19 - Logic hình thức (Frege và Peano)",
        ],
    ],
    [[]],
    [[]],
];

const stories = [
    [
        [
            `Chúng ta hãy bắt đầu từ khoảng năm 384 TCN, khi Aristotle được sinh ra tại thành phố Stagira, Hy Lạp. 
        Con trai của một bác sĩ hoàng gia, Aristotle được nuôi dưỡng trong môi trường học thuật từ nhỏ. 
        Đến năm 17 tuổi, ông đến Athens và trở thành học trò của triết gia nổi tiếng Plato tại Học viện Athens
        – một nơi tập trung những bộ óc vĩ đại của thời đại. Tại đây, Aristotle sớm nổi lên như một trong những học giả hàng đầu,
        nhưng tư tưởng của ông dần dần tách biệt khỏi những ý tưởng lý thuyết của Plato.
        //Aristotle bị ám ảnh bởi câu hỏi về sự chính xác trong tư duy. Làm thế nào con người có thể đạt được sự thật thông qua lý luận? 
        Ông phát triển một hệ thống suy luận logic mà sau này được gọi là logic học suy diễn (syllogistic logic). 
        Aristotle lập luận rằng mọi kết luận đều có thể được rút ra từ hai hoặc nhiều tiền đề. 
        //Ví dụ, nếu “Mọi người đều là sinh vật” và “Socrates là người”, thì có thể suy ra “Socrates là sinh vật”.
        //Đây là cách thức đầu tiên mà loài người có thể suy luận về thế giới một cách có hệ thống và chặt chẽ.
        Trong gần 2000 năm, lý thuyết logic của Aristotle chiếm vị trí thống trị trong triết học phương Tây. 
        Các học giả thời Trung cổ như Thomas Aquinas và Albertus Magnus đã đưa các nguyên lý logic của ông vào hệ thống triết học và 
        thần học, củng cố thêm tầm quan trọng của nó. Nhưng dù những nền tảng mà Aristotle xây dựng rất mạnh mẽ, 
        chúng vẫn chưa đủ để giải quyết những thách thức của toán học hiện đại. Và cần phải đợi đến thế kỷ 19, 
        một cuộc cách mạng thực sKhông phải lo trong thời gian tranh cử.`,
            `Chuyển sang thế kỷ 19, một nhân vật mới xuất hiện: George Boole, sinh năm 1815 tại Lincolnshire, Anh. 
        Boole xuất thân từ một gia đình khiêm tốn; cha ông là một người thợ giày nhưng lại rất đam mê về toán học và khoa học.
        Boole sớm bộc lộ tài năng xuất sắc trong học tập, và dù hoàn cảnh khó khăn, ông vẫn tự học toán học và các ngôn ngữ cổ
        đại như Latin và Hy Lạp.
        //Khi bước vào tuổi trưởng thành, Boole cảm thấy rằng logic học truyền thống không đủ để giải quyết những vấn đề phức tạp 
        trong toán học và các lĩnh vực khoa học khác. Ông nhận ra rằng để lý giải suy luận một cách có hệ thống, 
        cần phải có một phương pháp mới, một ngôn ngữ toán học có thể biểu diễn logic. Năm 1847, 
        Boole xuất bản tác phẩm “The Mathematical Analysis of Logic”, trong đó ông giới thiệu một ý tưởng đột phá: 
        các mệnh đề logic có thể được đại số hóa.
        //Theo Boole, logic có thể được xử lý giống như các phép toán đại số với những ký hiệu cho “và” (AND), 
        “hoặc” (OR) và “không” (NOT), và các mệnh đề có thể được biểu diễn bằng số nhị phân: đúng là 1, sai là 0. 
        Ví dụ, phát biểu “Socrates là người và Socrates là sinh vật” có thể được viết dưới dạng phép toán đại số như: 
        ￼, trong đó ￼ và ￼ lần lượt đại diện cho các mệnh đề.
        //Boole không chỉ dừng lại ở đó. Trong tác phẩm “An Investigation of the Laws of Thought” (1854), 
        ông mở rộng ý tưởng của mình và đặt nền móng cho toàn bộ một hệ thống logic đại số, gọi là Đại số Boole. 
        Điều đặc biệt là dù Boole phát triển hệ thống này từ quan điểm lý thuyết thuần túy, 
        nhưng các khái niệm mà ông đưa ra sau này đã trở thành nền tảng cho khoa học máy tính hiện đại. 
        Khi Boole qua đời năm 1864 ở tuổi 49, ông không biết rằng những tư tưởng của mình sẽ định hình tương lai của 
        công nghệ và viễn thông.
`,
            `Khoảng 15 năm sau cái chết của Boole, một giáo sư trầm lặng người Đức tên Gottlob Frege bắt đầu suy nghĩ về 
        các vấn đề sâu xa hơn trong logic. Frege sinh năm 1848 tại Wismar, Đức, và ban đầu ông theo đuổi toán học thuần túy. 
        Tuy nhiên, Frege nhanh chóng nhận ra rằng lý thuyết mệnh đề của Boole chưa đủ để giải quyết những vấn đề phức tạp trong 
        toán học và triết học. Ông muốn tạo ra một hệ thống logic không chỉ biểu diễn các mệnh đề đơn giản mà còn cả các khái 
        niệm phức tạp liên quan đến đối tượng và thuộc tính của chúng.
        //Trong tác phẩm “Begriffsschrift” (1879), Frege đã phát triển logic vị từ (predicate logic), một bước tiến lớn so 
        với logic mệnh đề của Boole. Nếu logic mệnh đề chỉ xử lý các phát biểu đơn giản như “Socrates là người”, 
        thì logic vị từ cho phép Frege xử lý những phát biểu phức tạp hơn như “Mọi người đều có một trái tim”. 
        Frege đã phát triển một hệ thống ký hiệu hoàn toàn mới để biểu diễn các khái niệm này, trong đó các đối tượng 
        (như Socrates) và các thuộc tính (như “có trái tim”) có thể được biểu diễn một cách chính xác.
        //Tuy nhiên, trong suốt cuộc đời của mình, Frege không được công nhận rộng rãi và phải đối mặt với nhiều thất bại cá nhân. 
        Một trong những thất bại lớn nhất của Frege là khi ông phát hiện ra rằng hệ thống logic của mình chứa đựng một 
        mâu thuẫn nghiêm trọng, được nhà toán học Bertrand Russell chỉ ra trong một lá thư vào năm 1902. 
        Dù vậy, công trình của Frege sau này đã trở thành nền tảng cho nhiều nhánh của logic hiện đại và ảnh hưởng sâu sắc 
        đến những nhà tư tưởng sau ông, như Ludwig Wittgenstein và Kurt Gödel.
`,
        ],
    ],
    [],
    [],
];
