"use client";

import React, { useRef, useState } from "react";
import {
    gridDisplay,
    lessonsToggle,
    timelineStar,
} from "./static/lessonsStatic";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import { useAnimate } from "framer-motion";
import ReactPlayer from "react-player/lazy";
import Extra from "./Extra";
import Image from "next/image";
import Boner from "@/public/Image/boner.png";
import Link from "next/link";

const generalClassName = "md1:ml-[45px] ml-[30px] lg3:text-lg md1:mr-2 mr-5";
const generalContentClassName =
    "md1:text-lg md1:leading-[26px] leading-[22px] pl-4";
const generalInstanceClassName = "sm:pl-[24px] pl-[12px]";

const Menhde = () => {
    return (
        <>
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
                    Chúng ta hãy bắt đầu từ khoảng năm 384 TCN, khi Aristotle
                    được sinh ra tại thành phố Stagira, Hy Lạp. Con trai của một
                    bác sĩ hoàng gia, Aristotle được nuôi dưỡng trong môi trường
                    học thuật từ nhỏ.
                    <br />
                    Đến năm 17 tuổi, ông đến Athens và trở thành học trò của
                    triết gia nổi tiếng Plato tại Học viện Athens - một nơi tập
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
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] h-fit">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
                    Trong giai đoạn này, các nhà logic học như William of Ockham
                    và Peter Abelard đã tiếp tục phát triển các khái niệm về
                    logic và ngôn ngữ, tập trung vào cách các phát biểu có thể
                    được kết hợp và phân tích. Mặc dù chưa hình thành rõ ràng
                    mệnh đề như ta hiểu ngày nay, những nghiên cứu về suy luận
                    và ngôn ngữ của họ đã đặt nền móng cho sự phát triển sau
                    này.
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] h-fit">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}>
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
                    đại số như: , trong đó và lần lượt đại diện cho các mệnh đề.
                    Boole không chỉ dừng lại ở đó.
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
                </div>
                <div className={generalClassName}>
                    Khoảng 15 năm sau cái chết của Boole, một giáo sư trầm lặng
                    người Đức tên Gottlob Frege bắt đầu suy nghĩ về các vấn đề
                    sâu xa hơn trong logic. Frege sinh năm 1848 tại Wismar, Đức,
                    và ban đầu ông theo đuổi toán học thuần túy. Tuy nhiên,
                    Frege nhanh chóng nhận ra rằng lý thuyết mệnh đề của Boole
                    chưa đủ để giải quyết những vấn đề phức tạp trong toán học
                    và triết học. Ông muốn tạo ra một hệ thống logic không chỉ
                    biểu diễn các mệnh đề đơn giản mà còn cả các khái niệm phức
                    tạp liên quan đến đối tượng và thuộc tính của chúng.
                    <br /> Trong tác phẩm {'"'}Begriffsschrift{'"'} (1879),
                    Frege đã phát triển logic vị từ (predicate logic), một bước
                    tiến lớn so với logic mệnh đề của Boole. Nếu logic mệnh đề
                    chỉ xử lý các phát biểu đơn giản như {'"'}Socrates là người
                    {'"'}, thì logic vị từ cho phép Frege xử lý những phát biểu
                    phức tạp hơn như
                    {'"'}Mọi người đều có một trái tim{'"'}. Frege đã phát triển
                    một hệ thống ký hiệu hoàn toàn mới để biểu diễn các khái
                    niệm này, trong đó các đối tượng (như Socrates) và các thuộc
                    tính (như
                    {'"'}có trái tim{'"'}) có thể được biểu diễn một cách chính
                    xác. Tuy nhiên, trong suốt cuộc đời của mình, Frege không
                    được công nhận rộng rãi và phải đối mặt với nhiều thất bại
                    cá nhân. Một trong những thất bại lớn nhất của Frege là khi
                    ông phát hiện ra rằng hệ thống logic của mình chứa đựng một
                    mâu thuẫn nghiêm trọng, được nhà toán học Bertrand Russell
                    chỉ ra trong một lá thư vào năm 1902. Dù vậy, công trình của
                    Frege sau này đã trở thành nền tảng cho nhiều nhánh của
                    logic hiện đại và ảnh hưởng sâu sắc đến những nhà tư tưởng
                    sau ông, như Ludwig Wittgenstein và Kurt Gödel.
                </div>
            </div>
            <div className="col-[1/-1] row-[4/-1] relative z-1 h-fit0">
                <div className="md:h-[75px] h-[51.5px]">{}</div>
                <div className={generalClassName}></div>
            </div>
        </>
    );
};

const Taphop = () => {
    const [playVideo, setPlayVideo] = useState<boolean>(true);

    const handleStartVideo = () =>
        // idx: number
        {
            setPlayVideo(!playVideo);
        };

    return (
        <>
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][0]}
                </div>
                <div
                    className={`${generalClassName} grid lg2:grid-cols-[auto_auto] lg2:grid-rows-[auto_auto]`}
                >
                    <div className="col-[1/2] row-[1/2] font-semibold md1:text-[1.25rem] text-[1.125rem] mb-5">
                        Người nguyên thủy đếm như thế nào?
                    </div>
                    <div
                        className="lg2:col-[1/2] lg2:row-[2/-1] cursor-pointer flex md1:justify-normal justify-center"
                        onClick={
                            () => handleStartVideo()
                            //0
                        }
                    >
                        <div className="lg2:sticky lg2:top-[20px] max-w-[400px] w-full aspect-[304/207] border">
                            {/* <ReactPlayer
                                url={
                                    `${process.env.NEXT_PUBLIC_API_URL}/videos/primitive.mp4`
                                    // `${process.env.NEXT_PUBLIC_PUBLIC_URL}/videos/primitive.mp4`
                                }
                                loop={!playVideo}
                                playing={playVideo}
                                onEnded={() => handleStartVideo(0)}
                                muted
                                width="100%"
                                height="100%"
                            /> */}
                        </div>
                    </div>
                    <div
                        className={`${generalContentClassName} lg2:col-[2/-1] lg2:row-[2/-1] lg2:pl-5 lg2:pt-0 pt-5 md1:pr-5`}
                    >
                        Khái niệm về số và quá trình đếm phát triển rất lâu
                        trước khi lịch sử loài người được ghi chép lại bằng văn
                        bản nên cách thức phát triển đó chỉ là những phỏng đoán
                        của những thế hệ sau này. Người ta cho rằng ngay trong
                        thời kỳ nguyên thủy xa xưa nhất, con người đã có những
                        khái niệm sơ đẳng về số, để nhận ra sự nhiều hơn hoặc ít
                        hơn khi một nhóm nhỏ các đồ vật được thêm vào hay lấy đi
                        một số. Cùng với từng bước tiến xã hội, việc đếm trở
                        thành một nhu cầu không thể thiếu được của con người.
                        Một bộ lạc cần phải biết có bao nhiêu thành viên. Một
                        người cần phải biết đàn gia súc của mình có bao nhiêu
                        con. Có lẽ cách đếm sớm nhất là phương pháp đối chiếu
                        đơn giản theo nguyên tắc tương ứng một - một. Chẳng hạn
                        khi đếm cừu mỗi con cừu sẽ ứng với một ngón tay. Ngoài
                        ra cách đếm có thể được thực hiện bằng cách tập hợp số
                        viên đá sỏi hoặc qua những cái que, hoặc bằng cách vạch
                        lên mặt đất hay một hòn đá có bề mặt phẳng và nhằn, hoặc
                        bằng cách khắc các dấu chữ v trên một miếng gỗ, hoặc
                        bằng thắt nút trên một sợi dây.
                    </div>
                </div>
                <Extra
                    buttonContent="Xương Ishango"
                    variant="aloneFact"
                    containerClassName="md1:ml-[45px] ml-[45px]"
                    extraBodyVariant=""
                >
                    <div className="w-full h-full text-lg flex lg3:flex-row flex-col gap-2 items-center">
                        <div
                            className={`${generalContentClassName} flex-[0_1_auto]`}
                        >
                            Xương Ishango có thể là hiện vật toán học cổ xưa
                            nhất vẫn còn tồn tại đến ngày nay: nó được phát hiện
                            vào năm 1950 tại Cộng hòa Dân chủ Congo ở khu vực
                            Trung Phi, và được đặt tên theo khu vực nơi nó được
                            tìm thấy. Hiện vật này có niên đại từ thời kỳ đồ đá
                            cũ muộn trong lịch sử loài người, khoảng 20.000 năm
                            trước. Chiếc xương dài 10 cm và chứa một loạt các
                            khía, mà nhiều nhà khoa học tin rằng đã được sử dụng
                            để đếm. Cách nhóm các khía thậm chí có thể gợi ý về
                            sự hiểu biết toán học cao cấp hơn, như hệ thập phân
                            hoặc số nguyên tố. Khi đếm thì vấn đề nan giải tiếp
                            theo mà con người phải vượt qua đó là khi số lượng
                            cần phải đếm nhiều đáng kể, không thể nào mãi khắc
                            vạch, không thể nào bổ sung mãi các hòn sỏi, que
                            đếm, chuỗi hạt,… Làm sao để chỉ rõ con số lớn một
                            cách đơn giản, với số lượng đối tượng được thể hiện
                            ít nhất có thể? Thế là khái niệm cơ số được sinh ra.
                        </div>
                        <div className="lg3:flex-[1_0_50%]">
                            <div className="w-full aspect-[595/311]">
                                <Image
                                    src={Boner}
                                    alt=""
                                    className="w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </Extra>
                <div className={`${generalClassName}`}>
                    <div className="font-semibold md1:text-[1.25rem] text-[1.125rem] mb-2">
                        Cơ số
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Để hiểu được khái niệm gây khá nhiều bối rối này, chúng
                        ta bàn một chút về cách đếm hiện nay. Với chúng ta, mỗi
                        khi đếm, cứ đủ mười thì được một chục, tiếp tục đêm đủ
                        mười nữa, thì ta được hai chục,...và khi đủ mười chục
                        thì được một trăm, mười trăm thì bằng một ngàn, mười
                        ngàn thì là một vạn, mười vạn chính bằng một ức,... Kiểu
                        đếm này bất cứ ai cũng đã được học ngay từ khi còn nhỏ.
                        Thế nhưng, con người ở một số nền văn minh cổ đại xa xưa
                        cũng như vài tộc người ngày nay lại có kiểu đếm khác.
                        "Chục" của họ không hẳn là mười, chẳng hạn với "chục" là
                        tám thì:
                        <div className={`${generalInstanceClassName}`}>
                            8 là một "chục"
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            16 bằng hai lần tám nghĩa là hai "chục"
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            24 bằng ba lần tám nghĩa là ba "chục"
                        </div>
                        Như vậy, có thể hiểu rằng Hệ cơ số n là một kiểu đếm mà
                        mỗi "chục" bằng n.
                    </div>
                    <div className={`${generalContentClassName}`}>
                        <br />
                        Các cơ số phổ biến thường gặp:
                        <div className={`${generalInstanceClassName}`}>
                            <Extra
                                buttonContent="Cơ số mười"
                                variant="inlineFact"
                                containerClassName="inline bg-black"
                                extraBodyVariant="instance"
                            >
                                <div className="md:text-[0.9rem] text-sm">
                                    Nó còn được thế hiện qua đơn vị đo lường
                                    quốc tế về khoảng cách và khối lượng: hệ mét
                                    và kilogam. Cứ đủ mười đơn vị sẽ cho ra một
                                    cho đơn vị lớn hơn ngay trước đó. Tại sao cơ
                                    số mười lại được con người chúng ta ưu ái
                                    đền thế? Hầu như mọi dân tộc, hầu hết mọi
                                    người đều đếm theo cơ số mười từ nhỏ. Tại
                                    sao không phải là một cơ số nào đó khác? Có
                                    phải vì bàn tay chúng ta có mười ngón nên cơ
                                    số này hỗ trợ tốt cho việc đếm? Hay vì mười
                                    là cơ số có lợi cho việc thực hiện phép
                                    tính, nhất là khi nhân với mười hay một lũy
                                    thừa của mười? Những câu hỏi như thế này
                                    thường ít khi được nêu ra vì đếm theo mười
                                    là một điều quá hiển nhiên, không có gì phải
                                    thắc mắc. Sự thực thì cơ số mười không tốt
                                    cho việc tính toán hơn so với những cơ số
                                    khác, chẳng hạn như cơ số mười hai. Mười chỉ
                                    chia hết cho hai và năm, trong khi mười hai
                                    thì chia hết cho hai, ba, bốn và sáu. Vì
                                    thế, đếm và tính theo cơ số mười hai vượt
                                    trội hơn rất nhiều so với cơ số mười, nhất
                                    là trong việc phân chia: phân nửa, một phần
                                    ba, phần tư, thậm chí cả phần sáu. Thế thì
                                    mười là cơ số có lợi cho việc tính toán
                                    không phải là câu trả lời thỏa đáng. Vậy thì
                                    chắc là do bàn tay con người có mười ngón.
                                    Trong trường hợp chỉ có tám ngón thôi thì
                                    liệu chúng ta có đếm theo cơ số tám? Hay vẫn
                                    cứ luôn là cơ số mười? Thật khó lòng mà biết
                                    được, nhưng khả năng cao sẽ là cơ số tám.
                                    Nếu quả đúng vậy thì thật lạ, tư duy Toán
                                    học của chúng ta, như bạn đã biết, hình
                                    thành từ việc đếm, lại phụ thuộc vào cấu
                                    trúc sinh học cơ thể, cấu trúc này lại hình
                                    thành từ hàng loạt quá trình ngẫu nhiên và
                                    tiến hóa. Sinh học đã tác động đến Toán học
                                    theo cách không thể ngờ. Toán học ra đời từ
                                    chính bàn tay của chúng ta theo đúng nghĩa
                                    đen như vậy. Quả thực, khi ngẫm nghĩ về điều
                                    này, chúng ta không khỏi có một cảm giác kì
                                    lạ và bối rối. Trong khoa học, khi truy
                                    nguyên tận cùng gốc rễ vấn đề thì câu trả
                                    lời nhận được sẽ như một chiếc búa tạ đập
                                    thẳng vào tâm thức khiến ta phải choáng
                                    váng.
                                    <br /> Nguồn{" "}
                                    <Link
                                        href="https://www.history-of-mathematics.org/"
                                        className="underline font-[450]"
                                    >
                                        https://www.history-of-mathematics.org/.
                                    </Link>{" "}
                                    Đây là trích đoạn từ De Temporum Ratione.
                                    Trong chương đầu tiên của De Temporum
                                    Ratione, mang tên “Tính toán hoặc nói chuyện
                                    bằng ngón tay,” đã mô tả một hình thức đếm
                                    bằng ngón tay.
                                </div>
                            </Extra>{" "}
                            (hệ thập phân) là vô cùng phổ biến.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Phổ biến thứ hai sau cơ số mười là{" "}
                            <Extra
                                buttonContent="cơ số mười hai"
                                variant="inlineFact"
                                containerClassName="inline bg-black"
                                extraBodyVariant="instance"
                            >
                                <div className="md:text-[0.9rem] text-sm">
                                    Mười hai bằng một tá, kiểu đếm này vẫn còn
                                    được dùng, điển hình là số lượng trứng và
                                    vài trường hợp ở các nước Anh, Mỹ. Thời cổ
                                    đại, người Sumer chia một ngày làm mười hai
                                    danna, một danna tương ứng hai giờ đồng hồ
                                    hiện nay; họ cũng chia một đường tròn làm
                                    mười hai phần bằng nhau, mỗi cung có số đo
                                    30°. Vì sao lại là con số mười hai? Cũng như
                                    cơ số mười, nguồn gốc của nó cũng có thể tạm
                                    giải thích theo chính bàn tay con người. Bốn
                                    ngón gồm ngón trỏ, ngón giữa, ngón áp út và
                                    ngón út, mỗi ngón được chia làm ba đốt, tổng
                                    cộng mười hai đốt, riêng ngón cái có chức
                                    năng chỉ lần lượt mỗi mười hai đốt này khi
                                    đếm. Đếm theo kiểu này rất thuận tiện vì chỉ
                                    cần một tay, tay còn lại có thể ghi chép lại
                                    số liệu. Bàn tay người vẫn chỉ là một giả
                                    thuyết cho việc sử dụng cơ số mười hai, một
                                    lời giải thích đơn giản hơn có thể là bởi sự
                                    thuận tiện trong tính toán của cơ số mười
                                    hai.
                                </div>
                            </Extra>
                            .
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            <Extra
                                buttonContent="Cơ số sáu mươi"
                                variant="inlineFact"
                                containerClassName="inline bg-black"
                                extraBodyVariant="instance"
                            >
                                <div className="md:text-[0.9rem] text-sm">
                                    Cơ số 60 là một trong những phương pháp đếm
                                    cổ xưa của con người, có nguồn gốc từ người
                                    Semite cổ đại vào thế kỷ thứ 3 trước Công
                                    nguyên và sau đó được truyền bá sang Babylon
                                    và những nơi khác.
                                    <br />
                                    Lý do tại sao 60 được sử dụng thay vì các số
                                    khác có thể là do 60 là một số tương đối nhỏ
                                    và có thể được chia thành 10 thừa số thực
                                    của 2, 3, 4, 5, 6, 10, 12, 15, 20 và 30 điều
                                    này làm cho hệ đếm cơ số 60 linh hoạt hơn
                                    cho các tính toán khác nhau.
                                    <br />
                                    Nhà thiên văn học người Hy Lạp Eratosthenes
                                    đã sử dụng số thập lục phân để tạo ra một hệ
                                    thống địa lý vĩ độ với việc chia một vòng
                                    tròn thành 60 phần và một hệ thống các đường
                                    kinh độ bao phủ 360 độ và chạy từ bắc xuống
                                    nam, nối từ cực này sang cực kia.
                                    <br />
                                    Tiếp đó, nhà bác học Claudius Ptolemy đã mở
                                    rộng công trình của Hipparchus bằng cách
                                    chia hệ thống 360 độ vĩ độ và kinh độ thành
                                    các phần nhỏ hơn. Mỗi độ được chia thành 60
                                    phần (ngày nay chúng ta gọi là phút), mỗi
                                    phần được chia thành 60 phần nhỏ hơn (ngày
                                    nay gọi là giây)
                                    <div className="aspect-video max-w-[500px]">
                                        <ReactPlayer
                                            url="https://www.youtube.com/watch?v=VnBbvPevFFQ"
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                            </Extra>{" "}
                            (hệ lục thập phân).
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Trong thời đại công nghệ thông tin đang phát triển
                            mạnh mẽ, hệ đếm{" "}
                            <Extra
                                buttonContent="Cơ số hai"
                                variant="inlineFact"
                                containerClassName="inline bg-black"
                                extraBodyVariant="instance"
                            >
                                <div className="md:text-[0.9rem] text-sm">
                                    Cơ số hai được sử dụng rộng rãi vì nó gắn
                                    liền với hoạt động của máy tính điện tử. Tuy
                                    nhiên, ngay từ thời xa xưa, những thổ dân
                                    Queensland cũng đã sử dụng hệ đếm này.
                                </div>
                            </Extra>{" "}
                            (gọi là hệ nhị phân).
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Ngoài ra hệ đếm{" "}
                            <Extra
                                buttonContent="Cơ số năm"
                                variant="inlineFact"
                                containerClassName="inline bg-black"
                                extraBodyVariant="instance"
                            >
                                <div className="md:text-[0.9rem] text-sm">
                                    Cơ số năm cũng được dùng ở một số vùng khác
                                    như tộc người Yukaghir ở Siberia. Cho đến
                                    đầu thế kỉ mười chín, lịch nông nghiệp của
                                    Đức vẫn còn dùng hệ ngũ phân!
                                </div>
                            </Extra>{" "}
                            (gọi là hệ ngũ phân).
                        </div>
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className="font-semibold md1:text-[1.25rem] text-[1.125rem] my-2">
                        Sự ra đời của số 0 và số âm
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Trong khi một vài thế kỷ trước người Hy Lạp còn gặp khó
                        khăn trong việc chấp nhận 1 là một con số, hãy tưởng
                        tượng việc gắn tên “số” cho một điều không tồn tại tạo
                        nên một cuộc các mạng thế nào. Vậy thì đối với số 0 lại
                        càng khó khăn để chấp nhận hơn.
                        <br />
                        Số 0 được coi là một trong những khám phá vĩ đại nhất
                        trong lịch sử loài người. Cho đến khi phát hiện ra số 0,
                        việc thực hiện ngay cả những phép tính số học cơ bản
                        cũng là rất khó khăn đối với con người.
                        <br />
                        <br />
                        Việc ta hiểu được số 0 phức tạp hơn bạn tưởng: ta không
                        hề gặp "số không" trong tự nhiên để nó có thể hữu hình,
                        dễ hiểu. Bất cứ số tự nhiên nào lớn hơn không đều có ví
                        dụ thực hiện: một con khỉ, hai con ong, ba trái đào hay
                        bốn bông hoa. Nhưng "không" thì sao? Phải có chút nhận
                        thức để nhận ra cái vô hình cũng là cái hữu hình, trong
                        hư có thực, "không có gì" cũng là một cái gì đó.
                        <br />
                        "Số không tồn tại trong não bộ chúng ta chứ không thuộc
                        về cảm giác", Robert Kaplan, giáo sư toán học tại
                        Harvard và tác giả cuốn sách về con số không, nói với
                        tạp chí Vox.
                        <br />
                        Trong cuốn “Chữ số và Thế giới - Nguồn gốc bị lãng quên”
                        của Đỗ Minh Triết trang 323 có khẳng định: “Vậy là Ấn Độ
                        đã có hệ ghi số hoàn chỉnh, đơn giản, hữu hiệu nhất của
                        nhân loại: hệ ghi số gồm mười chữ số gán cho số 0 và
                        chín số đếm đầu tiên, số được ghi theo quy tắc vị trí
                        định lượng cơ số 10. Ấn Độ chính là tác giả độc lập của
                        phát minh vĩ đại này, không phải Hy Lạp, không phải La
                        Mã, Maya hay Babylon và cũng không phải của Ả Rập Hồi
                        giáo.”
                        <br />
                        <br />
                        Trước người Ấn Độ, vài dân tộc đã từng manh nha suy nghĩ
                        ấy, nhưng không ai thành công được đến cùng. Người Lưỡng
                        Hà, kể từ từ thế kỉ thứ 3 trước Công nguyên, là người
                        đầu tiên phát minh ra một số 0. Trước đó, hệ số đếm của
                        họ biểu diễn những số như 25 và 250 theo cùng một cách.
                        Nhờ có số 0 chỉ một vị trí trống, nhiều khả năng nhầm
                        lẫn đã bị loại bỏ. Tuy vậy, người Babylon lại không coi
                        ký tự 0 này như một con số có thể đứng một mình để biểu
                        diễn sự thiếu vắng của đối tượng.
                        <br />Ở nửa kia của thế giới, người Maya cũng đã phát
                        minh ra số không. Họ thậm chí còn phát minh ra hai số
                        không! Số thứ nhất, như của người Babylon, chỉ có công
                        dụng là để đánh dấu vị trí trống trong hệ nhị thập phân
                        của họ. Số thứ hai, ngược lại, có thể thực sự được coi
                        là một số nhưng chỉ được sử dụng trong lịch của họ. Mỗi
                        tháng trong lịch Maya có hai mươi ngày được đánh số từ 0
                        đến 19. Số không này đứng một mình, tuy nhiên không có
                        tính chất toán học. Người Maya chưa bao giờ sử dụng nó
                        trong các phép tính số học.
                        <br />
                        Người đầu tiên thực sự mô tả hoàn chỉnh số không như một
                        con số độc lập và cũng miêu tả các đặc tính của nó là
                        nhà thiên văn học - toán học người Ấn Độ{" "}
                        <Extra
                            buttonContent="Brahmagupta"
                            variant="inlineFact"
                            containerClassName="inline bg-black"
                            extraBodyVariant="content"
                        >
                            <div className="md:text-[0.9rem] text-sm">
                                Nhà toán học Ấn Độ Brahmagupta (598 - 668 CE) đã
                                phát minh ra các quy tắc cộng, trừ và nhân với
                                số 0 và số âm trong quyển sách Brahma Sphuta
                                Siddhanta. Ông cũng là một nhà thiên văn học và
                                thực hiện nhiều khám phá khác trong toán học.
                                Thật không may, các bài viết của anh ấy không
                                chứa bất kỳ bằng chứng nào, vì vậy chúng tôi
                                không thể biết được kết quả của anh ấy như thế
                                nào.
                            </div>
                        </Extra>
                        . Và ông cũng là người đầu tiên nêu lên các quy tắc tính
                        toán trong hệ ghi số có số 0 trong quyển sách{" "}
                        <Extra
                            buttonContent="Brahma Sphuta Siddhanta"
                            variant="inlineFact"
                            containerClassName="inline bg-black"
                            extraBodyVariant="content"
                        >
                            <div className="md:text-[0.9rem] text-sm">
                                Nội dung sách gồm 24 chương với 1 008 câu hoàn
                                toàn là thơ ca viết bằng tiếng Sanskrit, không
                                chứa bất kỳ một ký hiệu toán học nào. Số 0 vẫn
                                được gọi là{" "}
                                <span className="font-[500]">sunya</span>, nó có
                                tính chất: Thêm hay bớt{" "}
                                <span className="font-[500]">sunya</span> từ một
                                số thì con số vẫn không thay đổi, nhân một số
                                với <span className="font-[500]">sunya</span>{" "}
                                thì kết quả nhận được là{" "}
                                <span className="font-[500]">sunya</span>. Xa
                                hơn nữa, Brahmagupta còn chỉ ra khái niệm số âm,
                                số dương qua mô hình khoản nợ và tài sản:
                                <div className={`${generalInstanceClassName}`}>
                                    Một khoản nợ trừ đi{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    vẫn là một khoản nợ.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Tài sản trừ đi{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    vẫn là tài sản.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[500]">sunya</span>{" "}
                                    trừ đi{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    vẫn là{" "}
                                    <span className="font-[500]">sunya</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Một khoản nợ được trừ đi từ{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    trở thành tài sản.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Tài sản được trừ đi từ{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    trở thành một khoản nợ.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Nhân tài sản hay khoản nợ với{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    thì thành{" "}
                                    <span className="font-[500]">sunya</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[500]">sunya</span>{" "}
                                    nhân với{" "}
                                    <span className="font-[500]">sunya</span>{" "}
                                    vẫn là{" "}
                                    <span className="font-[500]">sunya</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Tài sản chia thành những tài sản vẫn là
                                    những tài sản (nhỏ hơn).
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Tài sản chia ra các khoản nợ thì thành những
                                    khoản nợ.
                                </div>
                                Chưa dừng lại ở đó, quyền sách còn bàn về căn
                                bậc hai, căn bậc ba, phương trình tuyến tính,
                                phương trình nghiệm nguyên, bộ ba Pythagoras,
                                phân số, công thức nội suy, hình học, và đặc
                                biệt nhất là số r. Ở thời đại chữ số chỉ mới
                                hình thành mà Brahmagupta đã có những khám phá
                                toán học như thế đủ để đưa ông vào danh sách
                                những khoa học gia xuất chúng nhất nhân loại
                                thời bấy giờ. Tuy nhiên, Brahmagupta cũng có
                                nhận định sai lầm về số 0:{" "}
                                <span className="font-[500]">sunya</span> chia
                                cho <span className="font-[500]">sunya</span>{" "}
                                thì vẫn là{" "}
                                <span className="font-[500]">sunya</span>.
                            </div>
                        </Extra>{" "}
                        <Extra
                            buttonContent="Ý nghĩa của số 0"
                            variant="aloneFact"
                            containerClassName="w-full"
                            extraBodyVariant="content"
                            extraBodyClassName="max-w-[700px]"
                        >
                            <div className="aspect-video">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=Lic7cvYuulU"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </Extra>
                        <div>
                            Số không mở ra cánh cửa đến với các số âm. Tuy vậy,
                            phải mất một thời gian dài các nhà toán học mới thực
                            sự chấp nhận chúng. Giới học giả Trung Quốc là những
                            người đầu tiên mô tả những số lượng có thể liên quan
                            đến số âm. Trong những lời bàn ở “Cửu chương toán
                            thuật”, Lưu Huy đã mô tả một hệ thống các thanh màu
                            cho phép biểu diễn những số lượng dương hoặc âm. Mỗi
                            thanh đỏ biểu trưng cho một số dương, mỗi thanh đen
                            biểu trưng cho một số âm. Lưu Huy đã giải thích cụ
                            thể hai loại số này tương tác với nhau như thế nào,
                            và đặc biệt là việc chúng cộng vào hoặc trừ với nhau
                            ra sao.
                        </div>
                    </div>
                    <br />
                    <div className={`${generalContentClassName}`}>
                        Sự xuất hiện của số âm cũng đảo lộn ý nghĩa của phép
                        cộng và phép trừ. Vì cộng một số âm có nghĩa là trừ một
                        số dương, hai thao tác này mất đi ý nghĩa mà chúng có
                        trong ngôn ngữ thường ngày. Cộng thường đồng nghĩa với
                        tăng lên. Tuy nhiên, nếu tôi cộng một số với (-3), cũng
                        có nghĩa là tôi trừ đi 3. Chúng ta đang đặt cùng một cái
                        tên cho hai thứ khác nhau. Với các số âm, phép cộng và
                        phép trừ trở thành hai mặt của cùng một thao tác. Sự lẫn
                        lộn từ ngữ này và những thứ trông có vẻ nghịch lý, như
                        "trừ x trừ = cộng", đã làm chậm đi đáng kể quá trình
                        chấp nhận những số âm. Rất lâu sau Brahmagupta, nhiều
                        học giả vẫn tiếp tục coi thường những con số cực kỳ tiện
                        lợi nhưng lại khó nắm bắt này. Vài người gọi chúng là
                        những "con số phi lý" và chỉ áp dụng chúng trong những
                        phép tính trung gian với điều kiện là chúng sẽ không
                        xuất hiện trong kết quả cuối cùng. Phải đến thế kỉ 19,
                        thậm chí là thế kỉ 20 thì tính chính đáng và công dụng
                        của chúng mới chính thức được chấp nhận.
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className="font-semibold md1:text-[1.25rem] text-[1.125rem] my-2">
                        Sự xuất hiện của số hữu tỉ
                    </div>
                    <div className={`${generalClassName}`}></div>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] h-fit">
                <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                    <div className="md:h-[75px] h-[51.5px]">{}</div>
                    <div className={generalClassName}></div>
                </div>
            </div>
        </>
    );
};

const LuongGiac = () => {
    return (
        <>
            <div className="col-[1/-1] row-[1/-1] bg-[#000000] md:w-[1.5px] w-[0.1px] relative md:left-[13.9px] left-[9.6px]" />
            <div className="col-[1/-1] row-[1/2] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][0]}
                </div>
                <div className={generalClassName}>
                    Lượng giác có nguồn gốc từ các nền văn minh cổ đại, đặc biệt
                    là ở Ai Cập, Babylon, và Hy Lạp. Các nền văn hóa này đã
                    nghiên cứu các hình học đơn giản và sử dụng chúng trong các
                    lĩnh vực như đo đạc đất đai, xây dựng và thiên văn học.
                    <br />
                    Đo đạc đất đai: Người Ai Cập sử dụng các phương pháp hình
                    học đơn giản để đo đạc đất đai, đặc biệt là trong việc xác
                    định diện tích của các mảnh đất. Khi nước sông Nile dâng cao
                    và tạo ra lũ lụt, họ cần đo lại diện tích đất đai bị ảnh
                    hưởng. Lượng giác giúp họ xác định các góc và khoảng cách
                    trong các khu đất hình chữ nhật hoặc tam giác, từ đó tính
                    toán diện tích.
                    <br />
                    Xây dựng thiên văn học: Người Ai Cập rất chú trọng việc quan
                    sát bầu trời, đặc biệt là để xác định thời gian trong ngày
                    và mùa. Họ sử dụng các công cụ như tháp đồng hồ mặt trời và
                    bảng sao để theo dõi chu kỳ mặt trời và các vì sao, phục vụ
                    cho việc lập lịch canh tác và xây dựng.
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][1]}
                </div>
                <div className={generalClassName}>
                    Cả người Ai Cập và người Babylon đã phát triển các phương
                    pháp để tính toán các độ dài và góc trong các tam giác, mặc
                    dù họ chưa phát triển đầy đủ lý thuyết lượng giác như ngày
                    nay. Người Babylon đã sử dụng bảng số học để tính toán các
                    phép tính về góc và chu vi của các hình tròn.
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][2]}
                </div>
                <div className={generalClassName}>
                    Các nhà toán học Hy Lạp, như Hipparchus và Ptolemy, đã có
                    đóng góp quan trọng trong việc phát triển lý thuyết lượng
                    giác. Hipparchus (khoảng 190 TCN) được coi là người sáng lập
                    ra lượng giác học, ông đã tạo ra bảng giá trị cho các hàm
                    lượng giác cơ bản như sine (sin) và cosine (cos). Hipparchus
                    cũng đã nghiên cứu về các quan hệ góc trong các tam giác
                    vuông và tam giác tròn.
                    <br />
                    Ptolemy (khoảng 100 - 170 CN) tiếp tục công trình của
                    Hipparchus và viết cuốn sách nổi tiếng {'"'}Almagest
                    {'"'}, trong đó có các bảng lượng giác để tính toán các
                    khoảng cách và góc trong thiên văn học. (Có thể link đến
                    trang web có cuốn sách để người dùng có thể tham khảo)
                    <br />
                    Hipparchus (khoảng 190 TCN - 120 TCN) là một nhà thiên văn
                    học và toán học nổi tiếng người Hy Lạp, được coi là người
                    sáng lập lý thuyết lượng giác. Ông nổi bật với các đóng góp
                    trong thiên văn học và toán học, đặc biệt là trong việc
                    nghiên cứu chuyển động của các thiên thể.
                </div>
            </div>
            <div className="col-[1/-1] row-[4/5] h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][3]}
                </div>
                <div className={generalClassName}>
                    Lượng giác được phát triển mạnh mẽ ở Ấn Độ, đặc biệt là
                    trong các công trình của các nhà toán học như Aryabhata,
                    Brahmagupta, và Bhaskara I. Aryabhata (476 - 550 CN) đã giới
                    thiệu các khái niệm về sine và cosine trong công trình của
                    mình và thậm chí đã sử dụng những khái niệm này để tính toán
                    các hiện tượng thiên văn. Các nhà toán học Ấn Độ đã phát
                    triển bảng sine với độ chính xác cao và bắt đầu sử dụng các
                    phương pháp giải phương trình lượng giác.
                    <br /> Aryabhata (khoảng 476 - 550 CN) là một nhà toán học
                    và thiên văn học vĩ đại người Ấn Độ, được biết đến là một
                    trong những học giả nổi bật nhất trong lịch sử khoa học Ấn
                    Độ cổ đại. Ông là tác giả của cuốn
                    <br />
                    {'"'}Aryabhatiya{'"'}, một tác phẩm nổi tiếng trong toán học
                    và thiên văn học, chứa đựng nhiều khái niệm quan trọng vẫn
                    có ảnh hưởng lâu dài.
                    <br />
                    Brahmagupta (khoảng 598 - 668 CN) là một trong những nhà
                    toán học và thiên văn học vĩ đại của Ấn Độ cổ đại, nổi bật
                    với những đóng góp quan trọng trong cả hai lĩnh vực này. Ông
                    là tác giả của cuốn {'"'}Brahmasphutasiddhanta
                    {'"'}, một tác phẩm nổi tiếng mà trong đó, ông đã phát triển
                    và trình bày nhiều lý thuyết toán học mới.
                    <br />
                    Bhaskara I là một nhà toán học và thiên văn học Ấn Độ, nổi
                    tiếng với những đóng góp trong các lĩnh vực toán học và
                    thiên văn học. Một trong những tác phẩm nổi bật của ông là{" "}
                    {'"'}Mahabhaskariya{'"'}, trong đó ông đã phát triển các lý
                    thuyết về chu kỳ của các hành tinh và các hiện tượng thiên
                    văn như nhật thực và nguyệt thực. Ông cũng là người đầu tiên
                    giới thiệu các khái niệm về số không vào các phép toán và
                    cải tiến các phương pháp tính toán trước đó.
                </div>
                <div className="py-2 text-[1.25rem] font-[475] translate-x-[32.5px] w-fit">
                    CÁC HIỆN TƯỢNG THIÊN VĂN
                </div>
                <div className={generalClassName}>
                    1. Chuyển động của các hành tinh và Mặt Trăng: Aryabhata là
                    người đầu tiên mô tả chuyển động quay của Trái Đất quanh
                    trục của nó, điều này làm rõ rằng ngày và đêm không phải là
                    kết quả của việc Mặt Trời di chuyển quanh Trái Đất (như
                    trong các mô hình vũ trụ trước đó). Thay vào đó, ông cho
                    rằng sự chuyển động này là do Trái Đất quay quanh trục của
                    nó. Các nhà thiên văn học Ấn Độ đã nghiên cứu và tính toán
                    chu kỳ của các hành tinh (như sao Mộc, sao Thổ) và xác định
                    được các chu kỳ và sự thay đổi quỹ đạo của chúng. Họ cũng
                    phát triển các mô hình để tính toán vị trí các hành tinh,
                    giúp xác định thời gian và vị trí của các hiện tượng như
                    nhật thực và nguyệt thực.
                    <br />
                    2. Nhật thực và Nguyệt thực: Aryabhata giải thích nguyên
                    nhân của các hiện tượng thiên văn này là do sự giao thoa
                    giữa ánh sáng của Mặt Trời và Mặt Trăng, với việc Trái Đất
                    che khuất ánh sáng Mặt Trời trong nhật thực và Mặt Trăng che
                    khuất Trái Đất trong nguyệt thực. Trái ngược với các nền văn
                    hóa khác, nơi các hiện tượng này thường được coi là những
                    dấu hiệu của thần thánh hay điềm báo, Aryabhata đã đưa ra
                    một giải thích thiên văn dựa trên cơ sở khoa học.
                    Brahmagupta tiếp tục phát triển lý thuyết về nhật thực và
                    nguyệt thực, mô tả bóng của Trái Đất và Mặt Trăng trong các
                    hiện tượng này, đồng thời đưa ra các công thức chính xác để
                    tính toán thời gian và vị trí của các hiện tượng này.
                    <br />
                    3. Chu kỳ Trái Đất quay quanh Mặt Trời: Aryabhata đã tính
                    toán chu kỳ quay của Trái Đất quanh Mặt Trời là khoảng
                    365,2588 ngày, rất gần với giá trị hiện đại. Con số này cho
                    thấy sự hiểu biết sâu sắc của ông về thiên văn học và chu kỳ
                    của các thiên thể. Trong khi các nền văn hóa khác vẫn tin
                    rằng Trái Đất là trung tâm của vũ trụ, Aryabhata đã đi tiên
                    phong trong việc phát triển mô hình vũ trụ mà trong đó Trái
                    Đất quay quanh Mặt Trời, điều này phản ánh tầm nhìn khoa học
                    đáng kinh ngạc của ông.
                    <br />
                    4. Chuyển động của Mặt Trăng: Brahmagupta nghiên cứu các
                    chuyển động của Mặt Trăng và tính toán khoảng cách và thời
                    gian Mặt Trăng di chuyển trong quỹ đạo của nó. Ông cũng đưa
                    ra các công thức để dự đoán thời gian của các hiện tượng như
                    nguyệt thực. Các nhà thiên văn học Ấn Độ thời kỳ này đã phát
                    triển các phương pháp để tính toán thời gian Mặt Trăng
                    chuyển qua các chòm sao và xác định vị trí của Mặt Trăng
                    trong quỹ đạo của nó so với các ngôi sao cố định.
                    <br />
                    5. Các hiện tượng sao băng và sao chổi: Mặc dù các tài liệu
                    cổ điển không tập trung nhiều vào sao chổi hay sao băng,
                    nhưng các nhà thiên văn học Ấn Độ đã thực hiện những quan
                    sát về những hiện tượng này. Các hiện tượng như sao băng
                    thường được ghi nhận trong các văn bản thiên văn học cổ đại
                    của Ấn Độ và được kết hợp với các tín ngưỡng và lý thuyết
                    thiên văn.
                    <br />
                    6. Hệ thống thiên văn học và các công cụ đo đạc: Các nhà
                    thiên văn học Ấn Độ trong thời kỳ này sử dụng các công cụ
                    như astrolabe (điều hướng các ngôi sao) và goniometer (đo
                    góc) để đo đạc và tính toán các vị trí thiên thể. Những công
                    cụ này giúp các nhà thiên văn học có thể tính toán các
                    chuyển động của các hành tinh, sao, Mặt Trăng và Mặt Trời
                    với độ chính xác cao.
                </div>
            </div>
            <div className="col-[1/-1] row-[5/6] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][4]}
                </div>
                <div className={generalClassName}>
                    Trong thời kỳ Trung Cổ, các học giả Ả Rập như Al-Battani và
                    Al-Khwarizmi tiếp tục phát triển lý thuyết lượng giác.
                    Al-Battani đã mở rộng và hoàn thiện bảng lượng giác của
                    Ptolemy và nghiên cứu các mối quan hệ giữa các góc trong tam
                    giác vuông và hình tròn. Al-Khwarizmi là người có công trong
                    việc dịch các công trình toán học từ tiếng Ả Rập sang tiếng
                    Latinh, giúp truyền bá các kiến thức về lượng giác sang châu
                    Âu.
                    <br />
                    Al-Battani (khoảng 858-929 CN), còn được gọi là Albategnius,
                    là một nhà thiên văn học và toán học vĩ đại người Ả Rập, nổi
                    tiếng với những đóng góp quan trọng trong việc cải tiến các
                    lý thuyết thiên văn cổ điển và phát triển các phương pháp
                    tính toán. Ông sinh ra và làm việc tại vùng đất hiện nay là
                    Syria.
                    <br />
                    l-Khwarizmi (khoảng 780-850 CN) là một nhà toán học, thiên
                    văn học, và địa lý học người Ả Rập nổi tiếng, được coi là{" "}
                    {'"'}cha đẻ của đại số{'"'} vì những đóng góp quan trọng của
                    ông trong lĩnh vực này.
                    <br />
                    Bảng lượng giác: Al-Battani đã phát triển các bảng lượng
                    giác với độ chính xác cao hơn so với các bảng trước đó, bao
                    gồm các giá trị của sine, cosine, và tangent (tương ứng với
                    các khái niệm sau này trong toán học hiện đại). Các bảng
                    lượng giác này là công cụ rất quan trọng trong các phép tính
                    thiên văn học và các nghiên cứu về quỹ đạo các hành tinh.
                    <br />
                    Phương pháp đo góc: Al-Battani là một trong những người đầu
                    tiên áp dụng các khái niệm về lượng giác vào việc đo góc của
                    Mặt Trăng, Mặt Trời và các hành tinh, đặc biệt trong việc
                    tính toán các hiện tượng thiên văn như nguyệt thực và nhật
                    thực.
                </div>
            </div>
            <div className="col-[1/-1] row-[6/7] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][5]}
                </div>
                <div className={generalClassName}>
                    Lượng giác bắt đầu phát triển mạnh mẽ ở châu Âu trong thời
                    kỳ Phục Hưng và Cách mạng khoa học. Các nhà toán học như
                    Regiomontanus, Johannes Kepler, và Isaac Newton đã mở rộng
                    lý thuyết lượng giác để áp dụng vào các nghiên cứu thiên
                    văn, hình học, và cơ học.
                    <br />
                    Johannes Regiomontanus (1436-1476) là một nhà toán học và
                    thiên văn học nổi bật người Đức thời kỳ Phục Hưng. Ông là
                    một trong những nhân vật quan trọng trong sự phát triển của
                    khoa học phương Tây, đặc biệt là trong lĩnh vực thiên văn
                    học. Regiomontanus đã cải tiến và phổ biến việc sử dụng bảng
                    sao, đồng thời phát triển các công cụ tính toán thiên văn
                    chính xác hơn, giúp cải thiện khả năng dự đoán các hiện
                    tượng thiên văn. Ông cũng là người dịch và phổ biến các tác
                    phẩm cổ điển về toán học và thiên văn học từ tiếng Hy Lạp và
                    Latin, làm cầu nối giữa tri thức cổ đại và tri thức hiện
                    đại.
                    <br />
                    Bảng sao (Ephemerides): Regiomontanus đã biên soạn các bảng
                    sao chính xác hơn để giúp các nhà thiên văn dự đoán vị trí
                    của các hành tinh và các hiện tượng thiên văn khác. Bảng sao
                    của ông là một công cụ quan trọng trong việc xác định vị trí
                    các hành tinh trên bầu trời và hỗ trợ cho việc tính toán các
                    chuyển động của chúng.
                    <br />
                    Các dụng cụ quan sát: Regiomontanus đã cải tiến và phát
                    triển các dụng cụ quan sát, chẳng hạn như thiết bị định vị
                    (astrolabe) và quy mô thiên văn. Những công cụ này giúp ông
                    đo đạc và ghi lại chính xác các chuyển động thiên thể.
                    <br />
                    Johannes Kepler (1571-1630) là một nhà thiên văn học và toán
                    học người Đức, nổi tiếng với việc phát triển ba định lý về
                    chuyển động của các hành tinh, gọi là Ba định lý Kepler.
                    Kepler cũng nghiên cứu sự tương quan giữa thời gian quay của
                    hành tinh và khoảng cách từ Mặt Trời, đóng góp lớn vào sự
                    phát triển của thiên văn học và giúp củng cố lý thuyết về hệ
                    Mặt Trời của Copernicus. Các công trình của Kepler là nền
                    tảng quan trọng cho sự phát triển của lý thuyết vật lý và
                    thiên văn học sau này.
                    <br />
                    Định luật 1:
                    {/* (video)  */}
                    <br />
                    Định luật 2:
                    {/* (video)  */}
                    <br />
                    Định luật 3:
                    {/* (video) (Link video: https://www.youtube.com/watch?v=AKbfR5KHUm4 )  */}
                    {/* Video mặt trời: (Link video: https://www.youtube.com/watch?v=ZGr1nHdzLyk )  */}
                    <br />
                    Isaac Newton (1642-1727) là một nhà khoa học, toán học, và
                    thiên văn học người Anh, được coi là một trong những nhân
                    vật vĩ đại nhất trong lịch sử khoa học. Ông nổi tiếng với Ba
                    định lý chuyển động (Ba định lý Newton) và Định lý vạn vật
                    hấp dẫn. Newton cũng là người sáng lập Calculus (giải tích),
                    một công cụ toán học quan trọng trong nghiên cứu các hiện
                    tượng thay đổi liên tục. Các công trình của ông, đặc biệt là
                    cuốn sách {'"'}
                    Philosophiæ Naturalis Principia Mathematica{'"'}{" "}
                    (Mathematical Principles of Natural Philosophy), đã đặt nền
                    tảng cho cơ học cổ điển và có ảnh hưởng sâu rộng đến sự phát
                    triển của khoa học tự nhiên. (có thể liên kết với trang sách
                    khác) Ba định lý chuyển động (Ba định lý Newton)
                    <br />
                    Định lí 1:
                    {/* https://www.youtube.com/watch?v=-lToBk24L8w */}
                    <br />
                    Định lí 2:
                    {/* https://www.youtube.com/watch?v=eR9Co5d1ycw */}
                    <br />
                    Định lí 3:
                    {/* https://www.youtube.com/watch?v=5JQdSRf1yzA */}
                    <br />
                    Định lý vạn vật hấp dẫn:
                    {/* https://www.youtube.com/watch?v=7gf6YpdvtE0  */}
                    <br />
                    Giải tích:
                </div>
            </div>
            <div className="col-[1/-1] row-[7/8] h-fit mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][6]}
                </div>
                <div className={generalClassName}>
                    Vào thế kỷ 18, các hàm lượng giác được định nghĩa rõ ràng
                    hơn và ứng dụng trong các lĩnh vực khác nhau như phân tích,
                    cơ học, điện học, v.v. Các nhà toán học như Leonhard Euler
                    đã phát triển các công thức lượng giác quan trọng và định lý
                    lượng giác, đặt nền tảng cho sự phát triển của giải tích
                    toán học. Euler cũng đã đóng góp vào sự phát triển của hàm
                    lượng giác phức, mở rộng khả năng ứng dụng lượng giác trong
                    các lĩnh vực như sóng và dao động. Leonhard Euler
                    (1707-1783) là một trong những nhà toán học và lý thuyết vĩ
                    đại nhất trong lịch sử. Ông là người Thụy Sĩ và có ảnh hưởng
                    sâu rộng đến nhiều lĩnh vực của toán học, từ giải tích đến
                    lý thuyết đồ thị, lý thuyết số, và cơ học lý thuyết. Những
                    đóng góp của Euler rất phong phú và có ảnh hưởng lớn đến sự
                    phát triển của toán học và khoa học kỹ thuật. Phương trình
                    Euler: Là những phương trình cơ bản trong giải tích và lý
                    thuyết vi phân, trong đó nổi bật là Phương trình Euler trong
                    cơ học chất lưu và lý thuyết cấu trúc. Chữ Euler và Công
                    thức Euler: Công thức nổi tiếng của Euler{" "}
                    <InlineMath math="e^{i\pi} + 1 = 0" />, được coi là một
                    trong những công thức đẹp nhất trong toán học vì liên kết
                    giữa năm số cơ bản của toán học: <InlineMath math="e" />{" "}
                    (hằng số cơ số tự nhiên), <InlineMath math="i" /> (số ảo),{" "}
                    <InlineMath math="\pi" /> (số pi), 0 và 1. Lý thuyết đồ thị:
                    Euler là người sáng lập lý thuyết đồ thị, nổi bật là giải
                    quyết bài toán cầu Konigsberg, qua đó ông đã phát triển khái
                    niệm về đồ thị và các đoạn nối. Toán học lý thuyết số: Euler
                    đã có những đóng góp quan trọng trong lý thuyết số, đặc biệt
                    là về hàm Euler là các lý thuyết liên quan đến số nguyên tố.
                    Giải tích và đại số: Euler đóng góp rất nhiều vào việc phát
                    triển giải tích, chẳng hạn như các chuỗi vô hạn, khai triển
                    Taylor và các công thức quan trọng trong đại số và giải tích
                    phức.
                </div>
            </div>
            <div className="col-[1/-1] row-[8/-1] relative z-1 h-fit0 mt-[10px]">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][2][7]}
                </div>
                <div className={generalClassName}>
                    Lượng giác ngày nay không chỉ là một công cụ quan trọng
                    trong toán học mà còn trong nhiều ngành khoa học và kỹ
                    thuật, như vật lý, điện tử, cơ học, và cả máy tính. Các ứng
                    dụng hiện đại của lượng giác bao gồm vẽ đồ thị, phân tích
                    tín hiệu, truyền thông và giải quyết các vấn đề về ánh sáng
                    và sóng.
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
                    className="md1:h-[50px] h-[40px] ml-[30px] mb-[10px] md1:mt-[20px] w-fit relative"
                    ref={scope}
                >
                    <div className="flex h-full">
                        {lessonsToggle[id][idx].map((lessonName, idxl) => (
                            <button
                                className="h-full flex w-fit md1:text-[1.25rem] text-[1.125rem] md1:leading-[1.75rem] leading-[1.5rem] px-3 relative text-nowrap overflow-hidden"
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
                        className={`h-full md1:overflow-y-auto md1:overflow-x-hidden font-light *:md1:pl-9 w-full ${
                            idxl ? "hidden" : "block"
                        }`}
                        ref={(el) => {
                            toggleRef.current[idxl] = el;
                        }}
                    >
                        <div
                            className={`grid grid-cols-1 ${gridDisplay[id][idx][idxl]} relative`}
                        >
                            {lesson}
                        </div>
                    </div>
                ))
            ) : (
                <div
                    className="mt-8 h-full md1:overflow-y-auto md1:overflow-x-hidden font-light *:md1:pl-9 w-full"
                    style={{
                        scrollbarGutter: "stable",
                    }}
                >
                    <div
                        className={`grid grid-cols-1 ${gridDisplay[id][idx]} relative`}
                    >
                        {Lessons[id][idx]}
                    </div>
                </div>
            )}
        </>
    );
}
