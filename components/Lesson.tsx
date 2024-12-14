"use client";

import React, { useEffect, useRef } from "react";
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
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";

const generalClassName =
    "md1:ml-[45px] ml-[30px] lg3:text-lg sm:text-base text-[0.9rem] leading-[1.3rem] md1:mr-2 mr-5";
const generalContentClassName =
    "md1:text-lg sm:text-base text-[0.9rem] leading-[1.3rem] pl-4 text-pretty";
const generalInstanceClassName = "sm:pl-[24px] pl-[12px] text-pretty";

const gridHeight = signal(-1);

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
    useSignals();

    const playVideo = signal<boolean[]>([true]);

    const handleStartVideo = (idx: number) => {
        playVideo.value[idx] = !playVideo.value[idx];
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
                    <div className="col-[1/2] row-[1/2] font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base mb-5">
                        Người nguyên thủy đếm như thế nào?
                    </div>
                    <div
                        className="lg2:col-[1/2] lg2:row-[2/-1] cursor-pointer flex md1:justify-normal justify-center items-start"
                        onClick={() => handleStartVideo(0)}
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
                    <div className="font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base mb-2">
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
                                extraBodyVariant="instance"
                            >
                                Nó còn được thế hiện qua đơn vị đo lường quốc tế
                                về khoảng cách và khối lượng: hệ mét và kilogam.
                                Cứ đủ mười đơn vị sẽ cho ra một cho đơn vị lớn
                                hơn ngay trước đó. Tại sao cơ số mười lại được
                                con người chúng ta ưu ái đền thế? Hầu như mọi
                                dân tộc, hầu hết mọi người đều đếm theo cơ số
                                mười từ nhỏ. Tại sao không phải là một cơ số nào
                                đó khác? Có phải vì bàn tay chúng ta có mười
                                ngón nên cơ số này hỗ trợ tốt cho việc đếm? Hay
                                vì mười là cơ số có lợi cho việc thực hiện phép
                                tính, nhất là khi nhân với mười hay một lũy thừa
                                của mười? Những câu hỏi như thế này thường ít
                                khi được nêu ra vì đếm theo mười là một điều quá
                                hiển nhiên, không có gì phải thắc mắc. Sự thực
                                thì cơ số mười không tốt cho việc tính toán hơn
                                so với những cơ số khác, chẳng hạn như cơ số
                                mười hai. Mười chỉ chia hết cho hai và năm,
                                trong khi mười hai thì chia hết cho hai, ba, bốn
                                và sáu. Vì thế, đếm và tính theo cơ số mười hai
                                vượt trội hơn rất nhiều so với cơ số mười, nhất
                                là trong việc phân chia: phân nửa, một phần ba,
                                phần tư, thậm chí cả phần sáu. Thế thì mười là
                                cơ số có lợi cho việc tính toán không phải là
                                câu trả lời thỏa đáng. Vậy thì chắc là do bàn
                                tay con người có mười ngón. Trong trường hợp chỉ
                                có tám ngón thôi thì liệu chúng ta có đếm theo
                                cơ số tám? Hay vẫn cứ luôn là cơ số mười? Thật
                                khó lòng mà biết được, nhưng khả năng cao sẽ là
                                cơ số tám. Nếu quả đúng vậy thì thật lạ, tư duy
                                Toán học của chúng ta, như bạn đã biết, hình
                                thành từ việc đếm, lại phụ thuộc vào cấu trúc
                                sinh học cơ thể, cấu trúc này lại hình thành từ
                                hàng loạt quá trình ngẫu nhiên và tiến hóa. Sinh
                                học đã tác động đến Toán học theo cách không thể
                                ngờ. Toán học ra đời từ chính bàn tay của chúng
                                ta theo đúng nghĩa đen như vậy. Quả thực, khi
                                ngẫm nghĩ về điều này, chúng ta không khỏi có
                                một cảm giác kì lạ và bối rối. Trong khoa học,
                                khi truy nguyên tận cùng gốc rễ vấn đề thì câu
                                trả lời nhận được sẽ như một chiếc búa tạ đập
                                thẳng vào tâm thức khiến ta phải choáng váng.
                                <br /> Nguồn{" "}
                                <Link
                                    href="https://www.history-of-mathematics.org/"
                                    className="underline font-[475]"
                                >
                                    https://www.history-of-mathematics.org/.
                                </Link>{" "}
                                Đây là trích đoạn từ De Temporum Ratione. Trong
                                chương đầu tiên của De Temporum Ratione, mang
                                tên “Tính toán hoặc nói chuyện bằng ngón tay,”
                                đã mô tả một hình thức đếm bằng ngón tay.
                            </Extra>{" "}
                            (hệ thập phân) là vô cùng phổ biến.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Phổ biến thứ hai sau cơ số mười là{" "}
                            <Extra
                                buttonContent="cơ số mười hai"
                                variant="inlineFact"
                                extraBodyVariant="instance"
                            >
                                Mười hai bằng một tá, kiểu đếm này vẫn còn được
                                dùng, điển hình là số lượng trứng và vài trường
                                hợp ở các nước Anh, Mỹ. Thời cổ đại, người Sumer
                                chia một ngày làm mười hai danna, một danna
                                tương ứng hai giờ đồng hồ hiện nay; họ cũng chia
                                một đường tròn làm mười hai phần bằng nhau, mỗi
                                cung có số đo 30°. Vì sao lại là con số mười
                                hai? Cũng như cơ số mười, nguồn gốc của nó cũng
                                có thể tạm giải thích theo chính bàn tay con
                                người. Bốn ngón gồm ngón trỏ, ngón giữa, ngón áp
                                út và ngón út, mỗi ngón được chia làm ba đốt,
                                tổng cộng mười hai đốt, riêng ngón cái có chức
                                năng chỉ lần lượt mỗi mười hai đốt này khi đếm.
                                Đếm theo kiểu này rất thuận tiện vì chỉ cần một
                                tay, tay còn lại có thể ghi chép lại số liệu.
                                Bàn tay người vẫn chỉ là một giả thuyết cho việc
                                sử dụng cơ số mười hai, một lời giải thích đơn
                                giản hơn có thể là bởi sự thuận tiện trong tính
                                toán của cơ số mười hai.
                            </Extra>
                            .
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            <Extra
                                buttonContent="Cơ số sáu mươi"
                                variant="inlineFact"
                                extraBodyVariant="instance"
                            >
                                Cơ số 60 là một trong những phương pháp đếm cổ
                                xưa của con người, có nguồn gốc từ người Semite
                                cổ đại vào thế kỷ thứ 3 trước Công nguyên và sau
                                đó được truyền bá sang Babylon và những nơi
                                khác.
                                <br />
                                Lý do tại sao 60 được sử dụng thay vì các số
                                khác có thể là do 60 là một số tương đối nhỏ và
                                có thể được chia thành 10 thừa số thực của 2, 3,
                                4, 5, 6, 10, 12, 15, 20 và 30 điều này làm cho
                                hệ đếm cơ số 60 linh hoạt hơn cho các tính toán
                                khác nhau.
                                <br />
                                Nhà thiên văn học người Hy Lạp Eratosthenes đã
                                sử dụng số thập lục phân để tạo ra một hệ thống
                                địa lý vĩ độ với việc chia một vòng tròn thành
                                60 phần và một hệ thống các đường kinh độ bao
                                phủ 360 độ và chạy từ bắc xuống nam, nối từ cực
                                này sang cực kia.
                                <br />
                                Tiếp đó, nhà bác học Claudius Ptolemy đã mở rộng
                                công trình của Hipparchus bằng cách chia hệ
                                thống 360 độ vĩ độ và kinh độ thành các phần nhỏ
                                hơn. Mỗi độ được chia thành 60 phần (ngày nay
                                chúng ta gọi là phút), mỗi phần được chia thành
                                60 phần nhỏ hơn (ngày nay gọi là giây)
                                <div className="aspect-video max-w-[475px]">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=VnBbvPevFFQ"
                                        width="100%"
                                        height="100%"
                                    />
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
                                extraBodyVariant="instance"
                            >
                                Cơ số hai được sử dụng rộng rãi vì nó gắn liền
                                với hoạt động của máy tính điện tử. Tuy nhiên,
                                ngay từ thời xa xưa, những thổ dân Queensland
                                cũng đã sử dụng hệ đếm này.
                            </Extra>{" "}
                            (gọi là hệ nhị phân).
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Ngoài ra hệ đếm{" "}
                            <Extra
                                buttonContent="Cơ số năm"
                                variant="inlineFact"
                                extraBodyVariant="instance"
                            >
                                Cơ số năm cũng được dùng ở một số vùng khác như
                                tộc người Yukaghir ở Siberia. Cho đến đầu thế kỉ
                                mười chín, lịch nông nghiệp của Đức vẫn còn dùng
                                hệ ngũ phân!
                            </Extra>{" "}
                            (gọi là hệ ngũ phân).
                        </div>
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className="font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base my-2">
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
                            extraBodyVariant="content"
                        >
                            Nhà toán học Ấn Độ Brahmagupta (598 - 668 CE) đã
                            phát minh ra các quy tắc cộng, trừ và nhân với số 0
                            và số âm trong quyển sách Brahma Sphuta Siddhanta.
                            Ông cũng là một nhà thiên văn học và thực hiện nhiều
                            khám phá khác trong toán học. Thật không may, các
                            bài viết của anh ấy không chứa bất kỳ bằng chứng
                            nào, vì vậy chúng tôi không thể biết được kết quả
                            của anh ấy như thế nào.
                        </Extra>
                        . Và ông cũng là người đầu tiên nêu lên các quy tắc tính
                        toán trong hệ ghi số có số 0 trong quyển sách{" "}
                        <Extra
                            buttonContent="Brahma Sphuta Siddhanta"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            <>
                                Nội dung sách gồm 24 chương với 1 008 câu hoàn
                                toàn là thơ ca viết bằng tiếng Sanskrit, không
                                chứa bất kỳ một ký hiệu toán học nào. Số 0 vẫn
                                được gọi là{" "}
                                <span className="font-[475]">sunya</span>, nó có
                                tính chất: Thêm hay bớt{" "}
                                <span className="font-[475]">sunya</span> từ một
                                số thì con số vẫn không thay đổi, nhân một số
                                với <span className="font-[475]">sunya</span>{" "}
                                thì kết quả nhận được là{" "}
                                <span className="font-[475]">sunya</span>. Xa
                                hơn nữa, Brahmagupta còn chỉ ra khái niệm số âm,
                                số dương qua mô hình khoản nợ và tài sản:
                                <div className={`${generalInstanceClassName}`}>
                                    Một khoản nợ trừ đi{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    vẫn là một khoản nợ.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Tài sản trừ đi{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    vẫn là tài sản.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">sunya</span>{" "}
                                    trừ đi{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    vẫn là{" "}
                                    <span className="font-[475]">sunya</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Một khoản nợ được trừ đi từ{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    trở thành tài sản.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Tài sản được trừ đi từ{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    trở thành một khoản nợ.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    Nhân tài sản hay khoản nợ với{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    thì thành{" "}
                                    <span className="font-[475]">sunya</span>.
                                </div>
                                <div className={`${generalInstanceClassName}`}>
                                    <span className="font-[475]">sunya</span>{" "}
                                    nhân với{" "}
                                    <span className="font-[475]">sunya</span>{" "}
                                    vẫn là{" "}
                                    <span className="font-[475]">sunya</span>.
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
                                <span className="font-[475]">sunya</span> chia
                                cho <span className="font-[475]">sunya</span>{" "}
                                thì vẫn là{" "}
                                <span className="font-[475]">sunya</span>.
                            </>
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
                        Số không mở ra cánh cửa đến với các số âm. Tuy vậy, phải
                        mất một thời gian dài các nhà toán học mới thực sự chấp
                        nhận chúng. Giới học giả Trung Quốc là những người đầu
                        tiên mô tả những số lượng có thể liên quan đến số âm.
                        Trong những lời bàn ở “Cửu chương toán thuật”, Lưu Huy
                        đã mô tả một hệ thống các thanh màu cho phép biểu diễn
                        những số lượng dương hoặc âm. Mỗi thanh đỏ biểu trưng
                        cho một số dương, mỗi thanh đen biểu trưng cho một số
                        âm. Lưu Huy đã giải thích cụ thể hai loại số này tương
                        tác với nhau như thế nào, và đặc biệt là việc chúng cộng
                        vào hoặc trừ với nhau ra sao.
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
                    <div className="font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base my-2">
                        Sự xuất hiện của số hữu tỉ
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Sự ra đời của số hữu tỉ xuất phát từ nhu cầu giải quyết
                        các vấn đề thực tiễn và toán học trong đời sống. Đầu
                        tiên đó là nhu cầu{" "}
                        <Extra
                            buttonContent="đo lường chính xác trong thực tế"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            <span className="font-[475]">
                                MỘT VÀI VẤN ĐỀ CỦA THỜI ĐẠI
                            </span>
                            <br />
                            Từ những bài toán về ruộng đất, kiến trúc, hay khái
                            quát hơn, về quy hoạch không gian, các nhà bác học
                            thời kỳ cổ đại đã đặt ra những vấn đề hình học rất
                            đa dạng. Đề bài sau, trích từ bản khắc văn tự BM
                            85200 của người Babylon, cho thấy người Babylon
                            không hề dừng lại ở hình học mặt phẳng mà còn vươn
                            đến cả hình học không gian. Một tầng hầm. Chiều dài
                            bằng chiều sâu. 1 [đơn vị], Tôi đào dưới đất. Nền
                            nhà của tôi và khoảng đất tôi đắp lên, 1'10. Chiều
                            dài và mặt tiền, '50. Chiều dài, mặt tiền, bao
                            nhiêu? Bạn sẽ thấy các nhà toán học Babylon dùng
                            ngôn ngữ điện báo. Cụ thể, nội dung của đề bài trên
                            có thể hiểu như sau: Chiều sâu của một tầng hầm gấp
                            mười hai lần chiều dài của nó. Nếu tôi đào căn hầm
                            sâu thêm một đơn vị, thể tích của nó sẽ bằng{" "}
                            <InlineMath math="\frac{7}{6}" />. Nếu tôi cộng
                            chiều dài và chiều rộng, tôi sẽ thu được{" "}
                            <InlineMath math="\frac{5}{6}" />. Các kích thước
                            của căn hầm là bao nhiêu? Lưu ý rằng với hệ thống có
                            cơ số sáu mươi, kí hiệu 1'10 Bài toán này được viết
                            kèm với một lời giải cụ thể dẫn tới câu trả lời là
                            chiều dài bằng <InlineMath math="\frac{1}{2}" />,
                            chiều rộng bằng <InlineMath math="\frac{1}{3}" /> và
                            chiều sâu bằng 6. Bây giờ hãy cùng dạo qua phía sông
                            Nile một chút. Lẽ tất nhiên, ở vùng đất của người Ai
                            Cập, ta sẽ gặp những bài toán về kim tự tháp. Đề bài
                            tiếp theo đây được trích từ một quyển sách giấy cói
                            nổi tiếng được viết bởi viên thư lại Ahmes, có niên
                            đại vào nửa đầu thế kỉ 16 trước Công nguyên. Một kim
                            tự tháp có cạnh đáy bằng 140 cẳng tay và độ dốc bằng
                            5 gang tay và 1 ngón tay, có độ cao là bao nhiều?
                            Cẳng tay, gang tay và ngón tay là các đơn vị đo
                            lường lần lượt tương ứng với 52,5 xentimét, 7,5
                            xentimét và 1,88 xentimét. Ahmes đã đưa ra lời giải:
                            93 cẳng tay <InlineMath math="\frac{1}{3}" />. Trong
                            sách giấy cói này, ông cũng thử sức với hình tròn.
                            Và còn nhiều bài toán khác nữa. Các bạn có thể tìm
                            đọc thêm ở cuốn sách “Toán học - Một thiên tiểu
                            thuyết” của Mickael Launay.
                        </Extra>
                        : Trong các hoạt động đời sống như đo chiều dài, diện
                        tích, khối lượng, hoặc chia sẻ tài sản, các số nguyên
                        không thể đáp ứng hết nhu cầu. Ví dụ, việc chia một
                        chiếc bánh cho 3 người dẫn đến phần chia không thể biểu
                        diễn bằng số nguyên, mà cần đến các phân số như{" "}
                        <InlineMath math="\frac{1}{3}" />. Từ nhu cầu về đo
                        lường đó thì hình học và toán học cũng phát triển một
                        cách mạnh mẽ. Người Hy Lạp cổ đại, đặc biệt là nhà toán
                        học Pythagoras và các học trò của ông, đã nghiên cứu
                        hình học và phát hiện rằng nhiều tỷ lệ giữa các đoạn
                        thẳng có thể được biểu diễn dưới dạng phân số. Điều này
                        thúc đẩy sự ra đời và phát triển của khái niệm số hữu
                        tỉ. Hệ thống số hữu tỉ được dùng để biểu diễn các tỷ lệ
                        trong hình học, chẳng hạn như các tỷ lệ trong tam giác
                        hay giữa các cạnh của hình chữ nhật.
                        <br />
                        <br />
                        Cũng như sự ra đời của số hữu tỉ, số vô tỉ ra đời vì nhu
                        cầu đo lường của xã hội. Người Pythagoras ở Hy Lạp,
                        những người theo học nhà toán học và triết gia nổi tiếng
                        Pythagoras, là những người đầu tiên phát hiện ra các số
                        không phải là số hữu tỷ, vào khoảng năm 400 TCN. Những
                        số này được gọi là số vô tỷ (irrationals), vì chúng
                        không thể được viết dưới dạng tỉ số của hai số nguyên.
                        Có rất nhiều câu chuyện huyền thoại xoay quanh việc phát
                        hiện ra số vô tỷ của nhà toán học Pythagoras, Hippacus
                        thành Croton. Trong tất cả các câu chuyện, Hippacus gặp
                        một kết cục không may, hoặc vì phát hiện ra rằng{" "}
                        <InlineMath math="\sqrt{2}" /> là số vô tỷ, hoặc vì tiết
                        lộ bí mật về <InlineMath math="\sqrt{2}" /> ra bên ngoài
                        hội kín Pythagoras.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[2/3] h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][1]}
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Bài báo của{" "}
                        <Extra
                            variant="inlineFact"
                            buttonContent="Georg Cantor"
                            extraBodyVariant="content"
                        >
                            <span className="font-[475]">Georg Cantor </span>{" "}
                            (1845-1918) là nhà toán học người Đức, sáng lập lý
                            thuyết tập hợp hiện đại. Ông phát hiện ra tập hợp vô
                            hạn có thể có kích thước khác nhau và giới thiệu
                            khái niệm về số cardinal và số siêu hạn, mở đường
                            cho nghiên cứu về tập hợp vô hạn và lý thuyết tập
                            hợp.
                        </Extra>{" "}
                        công bố năm 1874, "Über eine Eigenschaft des Inbegriffes
                        aller reellen algebraischen Zahlen" ("Về một thuộc tính
                        của tập hợp tất cả số đại số thực"), đã đánh dấu sự ra
                        đời của{" "}
                        <Extra
                            buttonContent="lý thuyết tập hợp hiện đại"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            <span className="font-[475]">
                                Khái niệm về tập hợp của Georg Cantor
                            </span>
                            : Cantor đã định nghĩa một tập hợp là một tập hợp
                            các đối tượng duy nhất và khác nhau.
                        </Extra>{" "}
                        như một nhánh của toán học. Ông đã giới thiệu khái niệm
                        về tập hợp (set) trong toán học, coi tập hợp là một tập
                        hợp các đối tượng hoặc phần tử mà có thể được xác định
                        rõ ràng. Cantor không chỉ khái quát hóa các tập hợp hữu
                        hạn mà còn mở rộng ra{" "}
                        <Extra
                            buttonContent="tập hợp vô hạn"
                            extraBodyVariant="content"
                            variant="inlineFact"
                        >
                            <span className="font-[475]">
                                Lý thuyết tập hợp vô hạn
                            </span>
                            : Một trong những đóng góp quan trọng của Cantor là
                            sự phân biệt giữa các loại vô hạn. Ông phát hiện
                            rằng không phải tất cả các tập hợp vô hạn đều có
                            cùng kích thước (số lượng phần tử). Cantor đưa ra
                            khái niệm về số siêu hạn (cardinality), trong đó có
                            sự phân biệt giữa tập hợp đếm được (countably
                            infinite) như tập các số tự nhiên và tập hợp không
                            đếm được (uncountably infinite) như tập các số thực.
                            <br />
                            Ví dụ: tập các số tự nhiên{" "}
                            <InlineMath math="\mathbb{N}=\{1, 2, 3, ...\}" /> là
                            một tập hợp đếm được.
                        </Extra>
                        .
                    </div>
                    <Extra variant="learnMore" buttonContent="Tìm hiểu thêm">
                        Tập các số thực <InlineMath math="\mathbb{R}" /> lại
                        không thể đếm được. Điều này được chứng minh qua định lý
                        Cantor rằng không thể thiết lập một ánh xạ một-một giữa
                        tập <InlineMath math="\mathbb{N}" /> và{" "}
                        <InlineMath math="\mathbb{R}" />.{" "}
                        <span className="font-[475]">Định lý Cantor</span>, hay
                        còn gọi là{" "}
                        <span className="font-[475]">
                            Định lý Cantor về chiều của tập hợp
                        </span>
                        , là một trong những phát hiện quan trọng của
                        <span className="font-[475]"> Georg Cantor</span> trong
                        lý thuyết tập hợp. Định lý này chứng minh rằng:
                        <br />{" "}
                        <span className="font-[475]">
                            "Không có ánh xạ (hàm) một-một từ một tập hợp vô hạn
                            vào một tập hợp con của nó mà phủ định."
                        </span>
                        <br />
                        Cụ thể, định lý này cho biết rằng:
                        <br />
                        <div className={`${generalInstanceClassName}`}>
                            Tập hợp số thực <InlineMath math="\mathbb{R}" /> có
                            nhiều phần tử hơn tập hợp số tự nhiên{" "}
                            <InlineMath math="\mathbb{N}" />, mặc dù cả hai đều
                            là vô hạn. Điều này có nghĩa là tập hợp các số thực
                            là một tập hợp vô hạn lớn hơn so với tập hợp các số
                            tự nhiên.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            {" "}
                            Tập hợp vô hạn không thể có cùng số phần tử với một
                            tập con của nó. Tức là không thể tìm một ánh xạ
                            một-một từ một tập hợp vô hạn vào một tập con của
                            nó. Nếu có một ánh xạ như vậy, thì ánh xạ đó không
                            thể là khả nghịch (không thể đảo ngược được).
                        </div>{" "}
                        Các phép toán tập hợp cơ bản của Cantor: Hợp tập, Giao
                        tập, Hiệu tập, Tập con,... như ta đã biết hiện nay.
                        <br />
                        <div className={`${generalInstanceClassName}`}>
                            Hợp tập (Union): Nếu A và B là hai tập hợp, thì hợp
                            tập <InlineMath math="A \cup B" /> là tập hợp tất cả
                            các phần tử thuộc A hoặc B, không trùng lặp.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Giao tập (Intersection): Giao tập{" "}
                            <InlineMath math="A \cap B" /> là tập hợp tất cả các
                            phần tử mà A và B cùng chia sẻ.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Hiệu tập (Difference): Hiệu tập{" "}
                            <InlineMath math="A / B" /> là tập hợp tất cả các
                            phần tử thuộc A nhưng không thuộc B.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Tập con (Subset): Một tập hợp A là một tập con của
                            tập hợp B (ký hiệu <InlineMath math="A \subset B" />{" "}
                            ) nếu mọi phần tử của A đều là phần tử của B.
                        </div>
                    </Extra>
                </div>
            </div>
            <div className="col-[1/-1] row-[3/4] h-fit">
                <div className="md:h-[75px] h-[51.5px] grid grid-rows-1 md:grid-cols-[28.5px_auto] grid-cols-[20px_auto]">
                    <div className="col-[1/2] row-[1/-1]">
                        {timelineStar[0][0][2]}
                    </div>
                    <div className="col-[2/-1] row-[1/-1] flex flex-wrap ml-3">
                        {timelineStar[0][0][3]}
                        {timelineStar[0][0][4]}
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className="font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base my-2">
                        Gottlob Frege và Lý thuyết tập hợp
                    </div>
                    <div className={`${generalContentClassName}`}>
                        <Extra
                            buttonContent="Gottlob Frege"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            Gottlob Frege (1848 - 1925) được xem là người sáng
                            lập ra logic học hiện đại. Trong công trình nổi
                            tiếng của ông, "Begriffsschrift" (1879), Frege đã
                            đưa ra một hệ thống logic đại số để hình dung và mô
                            tả các khái niệm toán học. Ông đã phát triển phép
                            tính tâm lý học (predicate calculus), một nền tảng
                            cơ bản của logic toán học hiện đại.
                        </Extra>{" "}
                        sử dụng khái niệm "tập hợp" trong lý thuyết của ông, đặc
                        biệt là trong cách ông định nghĩa khái niệm. Theo Frege,
                        một khái niệm toán học là một tập hợp của các đối tượng
                        thỏa mãn một thuộc tính cụ thể. Ví dụ, "tập hợp tất cả
                        các số chẵn" là một tập hợp mà phần tử của nó là những
                        số tự nhiên chẵn. Frege không chỉ định nghĩa tập hợp như
                        là một tập hợp các đối tượng vật lý mà ông coi tập hợp
                        là một đối tượng toán học chính thống, có thể được mô tả
                        và sử dụng trong các phép toán toán học. Frege tin rằng
                        lý thuyết tập hợp của ông có thể giúp xác định một cách
                        chính xác các khái niệm trong toán học. Frege được xem
                        là người sáng lập ra logic học hiện đại. Trong công
                        trình nổi tiếng của ông, "Begriffsschrift" (1879), Frege
                        đã đưa ra một hệ thống logic đại số để hình dung và mô
                        tả các khái niệm toán học. Ông đã phát triển phép tính
                        tâm lý học (predicate calculus), một nền tảng cơ bản của
                        logic toán học hiện đại.
                        <br />
                        <br />
                        Tuy nhiên, lý thuyết tập hợp của Frege gặp phải một vấn
                        đề lớn khi{" "}
                        <Extra
                            buttonContent="Bertrand Russell"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            Bertrand Russell (1872-1970) là nhà triết học, toán
                            học và logic học người Anh, nổi tiếng với nghịch lý
                            Russell trong lý thuyết tập hợp. Ông cùng Whitehead
                            viết Principia Mathematica, đặt nền tảng cho toán
                            học hiện đại qua logic học. Russell cũng là một nhà
                            hoạt động xã hội, nhận Giải Nobel Văn học 1950.
                        </Extra>{" "}
                        phát hiện ra{" "}
                        <Extra
                            buttonContent="nghịch lý Russell"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            Nghịch lý Russell là một trong những mâu thuẫn quan
                            trọng nhất trong lý thuyết tập hợp, được Bertrand
                            Russell phát hiện vào năm 1901. Nghịch lý này liên
                            quan đến tập hợp chứa chính nó như một phần tử. Cụ
                            thể, nếu ta định nghĩa tập hợp{" "}
                            <InlineMath math="\mathbb{R}" /> là tập hợp của tất
                            cả các tập hợp không phải là phần tử của chính nó,
                            thì câu hỏi đặt ra là: liệu{" "}
                            <InlineMath math="\mathbb{R}" /> có phải là phần tử
                            của chính nó không?
                            <br />
                            Nếu <InlineMath math="\mathbb{R} \in \mathbb{R}" />,
                            thì theo định nghĩa <InlineMath math="\mathbb{R}" />{" "}
                            phải không phải là phần tử của chính nó, điều này
                            mâu thuẫn.
                            <br />
                            Nếu{" "}
                            <InlineMath math="\mathbb{R} \notin \mathbb{R}" />,
                            thì theo định nghĩa,{" "}
                            <InlineMath math="\mathbb{R}" /> phải là phần tử của
                            chính nó, lại dẫn đến mâu thuẫn.
                            <br />
                            <InlineMath math="\to" /> Hệ quả của nghịch lý: Sau
                            khi nghịch lý Russell được phát hiện, Frege nhận ra
                            rằng lý thuyết tập hợp của ông không thể hoạt động
                            như một nền tảng vững chắc cho toán học. Trong một
                            lá thư gửi Russell, Frege đã thể hiện sự thất vọng
                            sâu sắc về việc lý thuyết của ông bị phá vỡ. Nghịch
                            lý này là một trong những lý do quan trọng dẫn đến
                            sự phát triển của các lý thuyết tập hợp sau này,
                            chẳng hạn như lý thuyết tập hợp tiên đề
                            Zermelo-Fraenkel, được phát triển bởi Ernst Zermelo
                            và Abraham Fraenkel vào những năm 1920 để tránh các
                            nghịch lý như của Frege và Russell. Zermelo-Fraenkel
                            sử dụng các tiên đề để hạn chế các tập hợp không hợp
                            lệ và bảo vệ lý thuyết tập hợp khỏi các nghịch lý.
                        </Extra>{" "}
                        vào năm 1901. Nghịch lý này xuất hiện trong lý thuyết
                        của Frege khi ông cố gắng định nghĩa tập hợp của{" "}
                        <span className="font-[475]">
                            tất cả các tập hợp không phải là phần tử của chính
                            nó
                        </span>
                        . Và để giải quyết vấn đề nghịch lý này thì nhà toán học
                        <Extra
                            buttonContent="Zermelo và Fraenkel"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            Ernst Zermelo là một nhà toán học người Đức nổi
                            tiếng với các đóng góp trong lý thuyết tập hợp, đặc
                            biệt là việc phát triển Axiom of Choice (Axiom lựa
                            chọn), một tiên đề quan trọng trong lý thuyết tập
                            hợp hiện đại. Ông cũng là người đề xuất hệ thống
                            tiên đề Zermelo-Fraenkel để xây dựng lý thuyết tập
                            hợp vững chắc, với Zermelo-Fraenkel + Axioms of
                            Choice (ZFC) là hệ thống tiên đề phổ biến nhất hiện
                            nay trong toán học. <br /> <br /> Abraham Fraenkel
                            là một nhà toán học người Đức, nổi tiếng với việc
                            phát triển hệ thống tiên đề Zermelo-Fraenkel cho lý
                            thuyết tập hợp, trong đó các tiên đề này giúp xây
                            dựng nền tảng toán học vững chắc, đồng thời giải
                            quyết một số vấn đề trong lý thuyết tập hợp mà
                            Zermelo chưa hoàn chỉnh.
                        </Extra>{" "}
                        đã xây dựng{" "}
                        <Extra
                            buttonContent="Lý thuyết tập hợp tiên đề Zermelo-Fraenkel"
                            variant="inlineFact"
                            extraBodyVariant="content"
                        >
                            Hệ tiên đề Zermelo-Fraenkel bao gồm các tiên đề cơ
                            bản đảm bảo rằng các tập hợp có thể được xây dựng
                            một cách hợp lý mà không gặp phải nghịch lý. Một
                            trong những tiên đề quan trọng trong lý thuyết này
                            là tiên đề{" "}
                            <span className="font-[475]">tập hợp trống</span> và{" "}
                            <span className="font-[475]"> tập hợp con</span>.
                            Tiên đề Zermelo-Fraenkel:
                            <br />
                            Tiên đề tập hợp trống: Có tồn tại một tập hợp không
                            có phần tử nào (tập hợp rỗng, ký hiệu Ø).
                            <br />
                            Tiên đề hình thành: Nếu A là tập hợp, thì tồn tại
                            một tập hợp con của A có các phần tử là các tập hợp
                            con của các phần tử trong A.
                            <br />
                            Tiên đề lựa chọn: Tiên đề này cho phép chọn phần tử
                            từ mỗi tập hợp không rỗng. Đây là một tiên đề quan
                            trọng trong lý thuyết tập hợp, mặc dù đôi khi nó có
                            thể dẫn đến các kết quả phi trực quan.
                        </Extra>{" "}
                        . Đây là một hệ thống tiên đề được phát triển vào những
                        năm 1920 để giải quyết các vấn đề và nghịch lý trong lý
                        thuyết tập hợp, đặc biệt là nghịch lý Russell. Hệ thống
                        này được xây dựng bởi Ernst Zermelo và sau đó được mở
                        rộng bởi Abraham Fraenkel. Mục tiêu của lý thuyết này là
                        tạo ra một nền tảng logic vững chắc cho lý thuyết tập
                        hợp mà không gặp phải các nghịch lý như trong lý thuyết
                        tập hợp trước đó của Frege.
                    </div>
                </div>
            </div>
            <div className="col-[1/-1] row-[4/5] h-fit">
                <div className="md:h-[75px] h-[51.5px]">
                    {timelineStar[0][0][5]}
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        <div className="font-semibold md1:text-[1.25rem] md1:leading-[1.325rem] text-base my-2">
                            Lý thuyết tập hợp và các phép toán nâng cao
                        </div>
                        <div className={`${generalContentClassName}`}>
                            Khái niệm về thứ tự và số hạng (Ordinal and Cardinal
                            Numbers):
                            <div className={`${generalInstanceClassName}`}>
                                Trong lý thuyết tập hợp, số hạng (ordinal
                                numbers) dùng để chỉ thứ tự của các phần tử
                                trong một tập hợp (ví dụ: "phần tử thứ nhất",
                                "phần tử thứ hai",...).
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Số cardinal là một khái niệm quan trọng dùng để
                                chỉ kích thước hoặc số lượng phần tử của một tập
                                hợp. Số cardinal có thể là hữu hạn hoặc vô hạn.
                            </div>
                            Lý thuyết mô hình (Model Theory) và ứng dụng trong
                            lý thuyết tập hợp: Vào nửa sau thế kỷ 20, lý thuyết
                            tập hợp trở thành cơ sở cho lý thuyết mô hình, trong
                            đó các mô hình toán học được mô tả bằng các tập hợp
                            và phép toán trên chúng. Lý thuyết mô hình giúp giải
                            quyết các câu hỏi về sự đúng đắn và tính khả thi của
                            các lý thuyết toán học.
                        </div>
                        <Extra
                            buttonContent="Tìm hiểu thêm"
                            variant="learnMore"
                            extraBodyVariant="content"
                            flip
                        >
                            <span className="font-[450]">
                                Lý thuyết mô hình
                            </span>{" "}
                            (Model Theory) là một nhánh của logic toán học
                            nghiên cứu về mối quan hệ giữa các{" "}
                            <span className="font-[450]">
                                hệ thống lý thuyết
                            </span>{" "}
                            (hay lý thuyết, tức là các tập hợp các tiên đề và
                            định lý) và các{" "}
                            <span className="font-[450]">mô hình</span> của
                            chúng (tức là các cấu trúc toán học mà trong đó các
                            định lý của lý thuyết được thỏa mãn). Trong lý
                            thuyết mô hình, "mô hình" là một cấu trúc toán học
                            được thiết lập để kiểm tra tính hợp lý của các lý
                            thuyết, và các lý thuyết có thể có nhiều mô hình
                            khác nhau.{" "}
                            <span className="font-[450]">
                                Khái niệm cơ bản trong Lý thuyết Mô hình:
                            </span>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Lý thuyết (Theory)
                                </span>
                                : Là một tập hợp các tiên đề hoặc định lý. Ví
                                dụ, lý thuyết về nhóm (group theory) chứa các
                                tiên đề về nhóm, như tính chất đóng, tính chất
                                nghịch đảo, v.v .
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Mô hình (Model)
                                </span>
                                : Là một cấu trúc toán học thỏa mãn các tiên đề
                                của lý thuyết. Ví dụ, tập hợp các số nguyên dưới
                                phép cộng và phép nhân có thể là một mô hình của
                                lý thuyết nhóm.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Khái niệm đồng nhất (Isomorphism)
                                </span>
                                : Hai mô hình được gọi là đồng nhất nếu có một
                                phép ánh xạ một-một giữa chúng mà bảo toàn cấu
                                trúc của lý thuyết. Điều này có nghĩa là các mô
                                hình này "giống nhau" về mặt lý thuyết, mặc dù
                                có thể có các cấu trúc khác nhau.
                            </div>
                            <span className="font-[450]">
                                Ứng dụng trong lý thuyết tập hợp
                            </span>
                            :
                            <br />
                            Trong lý thuyết tập hợp, lý thuyết mô hình có những
                            ứng dụng quan trọng trong việc nghiên cứu các mô
                            hình của lý thuyết tập hợp và các cấu trúc trong đó
                            các tiên đề của lý thuyết tập hợp được thỏa mãn.{" "}
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Mô hình của lý thuyết tập hợp ZFC
                                </span>
                                : Lý thuyết tập hợp Zermelo-Fraenkel với tiên đề
                                lựa chọn (ZFC) là lý thuyết chính trong lý
                                thuyết tập hợp hiện đại. Các mô hình của ZFC là
                                các cấu trúc tập hợp trong đó tất cả các tiên đề
                                của ZFC đều đúng. Ví dụ, một mô hình của lý
                                thuyết ZFC có thể là một tập hợp các tập hợp
                                trong đó tất cả các định lý của ZFC được thỏa
                                mãn.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Các mô hình của lý thuyết tập hợp và các vấn
                                    đề như tính không đầy đủ
                                </span>
                                : Lý thuyết mô hình giúp nghiên cứu về khả năng
                                tồn tại các mô hình khác nhau của lý thuyết tập
                                hợp. Cantor đã chỉ ra sự tồn tại của các tập hợp
                                vô hạn, và lý thuyết mô hình có thể được sử dụng
                                để nghiên cứu các mô hình của lý thuyết tập hợp,
                                chẳng hạn như việc liệu một mô hình cụ thể có
                                chứa tất cả các tập hợp mà lý thuyết yêu cầu hay
                                không.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Các mô hình không chuẩn (Nonstandard Models)
                                </span>
                                : Lý thuyết mô hình cho phép nghiên cứu các{" "}
                                <span className="font-[450]">
                                    mô hình không chuẩn
                                </span>{" "}
                                của lý thuyết tập hợp. Ví dụ, trong lý thuyết
                                tập hợp, có thể tồn tại các mô hình mà trong đó
                                các khái niệm như{" "}
                                <span className="font-[450]">số thực</span> hay{" "}
                                <span className="font-[450]">số tự nhiên</span>{" "}
                                có thể có những thuộc tính đặc biệt không tồn
                                tại trong các mô hình chuẩn của lý thuyết ZFC.
                                Đây là một ví dụ về việc sử dụng lý thuyết mô
                                hình để mở rộng và kiểm tra các lý thuyết tập
                                hợp.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Định lý bất khả hoàn thành của Gödel
                                </span>
                                : Lý thuyết mô hình cũng liên quan đến định lý
                                bất khả hoàn thành của Gödel, chứng minh rằng
                                không thể có một lý thuyết tập hợp đầy đủ và
                                nhất quán, nghĩa là sẽ luôn có những mệnh đề
                                trong lý thuyết tập hợp mà không thể chứng minh
                                hoặc bác bỏ được. Lý thuyết mô hình giúp nghiên
                                cứu những mô hình mà trong đó các mệnh đề không
                                thể chứng minh hoặc không thể bác bỏ, do đó liên
                                quan đến tính không đầy đủ của lý thuyết tập
                                hợp.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                <span className="font-[450]">
                                    Lý thuyết mô hình và các vấn đề về lựa chọn
                                </span>
                                : Trong lý thuyết tập hợp, các tiên đề Lý thuyết
                                lựa chọn (Axiom of Choice - AC) có ảnh hưởng lớn
                                đến các kết quả. Lý thuyết mô hình có thể được
                                sử dụng để nghiên cứu sự tồn tại của các mô hình
                                trong đó AC được áp dụng và các mô hình không có
                                AC, từ đó mở ra những sự phân biệt và tính chất
                                khác nhau trong lý thuyết tập hợp.
                            </div>
                        </Extra>
                        <div className={`${generalContentClassName}`}>
                            Khoa học máy tính:
                            <div className={`${generalInstanceClassName}`}>
                                Ngôn ngữ lập trình: Các ngôn ngữ lập trình sử
                                dụng các cấu trúc dữ liệu như danh sách, tập hợp
                                và mảng, trong đó tập hợp là một công cụ quan
                                trọng để tổ chức và thao tác dữ liệu.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Cơ sở dữ liệu: Trong lý thuyết cơ sở dữ liệu,
                                tập hợp được sử dụng để mô hình hóa các đối
                                tượng dữ liệu và quan hệ giữa chúng.
                            </div>
                            <br />
                            Các ứng dụng khác:
                            <div className={`${generalInstanceClassName}`}>
                                Lý thuyết đồ thị: Các tập hợp và phép toán trên
                                tập hợp cũng được ứng dụng trong lý thuyết đồ
                                thị, nơi các đỉnh và cạnh có thể được coi là các
                                phần tử trong các tập hợp.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Lý thuyết thông tin và mã hóa: Tập hợp cũng là
                                công cụ quan trọng trong lý thuyết mã hóa, nơi
                                các tập hợp của các mã có thể được sử dụng để
                                đảm bảo tính chính xác trong việc truyền tải
                                thông tin.
                            </div>
                        </div>
                    </div>
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
                            className={`grid grid-cols-1 ${gridDisplay[0][0][1]} relative`}
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
                        className={`grid grid-cols-1 ${gridDisplay[0][0][1]} relative`}
                    >
                        {Lessons[id][idx]}
                    </div>
                </div>
            )}
        </>
    );
}
