"use client";

import React from "react";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import Link from "next/link";
import Boner from "@/public/Image/boner.png";
import { signal } from "@preact/signals-react";
import { useSignals } from "@preact/signals-react/runtime";
import {
    timelineStar,
    generalClassName,
    generalContentClassName,
    generalInstanceClassName,
    generalHeaderClassName,
} from "../../static/lessonsStatic";
import ExtraQuiz from "../../Extra/ExtraQuiz";
import ExtraAloneFact from "../../Extra/ExtraAloneFact";
import ExtraInlineFact from "../../Extra/ExtraInlineFact";
import ExtraFunFact from "../../Extra/ExtraFunFact";
import ExtraLearnMore from "../../Extra/ExtraLearnMore";
import GottlobFrege from "@/public/Image/gottlobfrege.png";
import GeorgCantor from "@/public/Image/georgcantor.png";
import Bertrandrussell from "@/public/Image/bertrandrussell.png";
import Brahmagupta from "@/public/Image/brahmagupta.png";
import AbrahamFraenkel from "@/public/Image/abarahamfraenkel.png";
import ErnstZermelo from "@/public/Image/ernstzermelo.png";
import HistoricalFigure from "@/components/Extra/HistoricalFigure";

const playVideo = signal([true]);

export default function TapHop() {
    useSignals();

    const handleStartVideo = (idx: number) => {
        const updatedArray = [...playVideo.value];
        updatedArray[idx] = !updatedArray[idx];

        playVideo.value = updatedArray;
    };

    return (
        <>
            <div className="h-fit mt-[10px]">
                {timelineStar.ThoiCoDai()}
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
                        <div className="lg2:sticky lg2:top-[20px] max-w-[400px] w-full aspect-[304/207]">
                            <ReactPlayer
                                url={`${process.env.NEXT_PUBLIC_API_URL}/videos/primitive.mp4`}
                                loop={!playVideo.value[0]}
                                playing={playVideo.value[0]}
                                onEnded={() => handleStartVideo(0)}
                                muted
                                width="100%"
                                height="100%"
                                type="video/mp4"
                            />
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
                <div className={`${generalClassName}`}>
                    <ExtraAloneFact buttonContent="Xương Ishango">
                        <div className="w-full h-full text-lg flex lg3:flex-row flex-col gap-2 items-center">
                            <div
                                className={`${generalContentClassName} flex-[0_1_auto]`}
                            >
                                Xương Ishango có thể là hiện vật toán học cổ xưa
                                nhất vẫn còn tồn tại đến ngày nay: nó được phát
                                hiện vào năm 1950 tại Cộng hòa Dân chủ Congo ở
                                khu vực Trung Phi, và được đặt tên theo khu vực
                                nơi nó được tìm thấy. Hiện vật này có niên đại
                                từ thời kỳ đồ đá cũ muộn trong lịch sử loài
                                người, khoảng 20.000 năm trước.
                                <br /> <br />
                                Chiếc xương dài 10 cm và chứa một loạt các khía,
                                mà nhiều nhà khoa học tin rằng đã được sử dụng
                                để đếm. Cách nhóm các khía thậm chí có thể gợi ý
                                về sự hiểu biết toán học cao cấp hơn, như hệ
                                thập phân hoặc số nguyên tố. Khi đếm thì vấn đề
                                nan giải tiếp theo mà con người phải vượt qua đó
                                là khi số lượng cần phải đếm nhiều đáng kể,
                                không thể nào mãi khắc vạch, không thể nào bổ
                                sung mãi các hòn sỏi, que đếm, chuỗi hạt,… Làm
                                sao để chỉ rõ con số lớn một cách đơn giản, với
                                số lượng đối tượng được thể hiện ít nhất có thể?
                                Thế là khái niệm cơ số được sinh ra.
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
                    </ExtraAloneFact>
                    <div className={`${generalHeaderClassName}`}>Cơ số</div>
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
                        {'"'}Chục{'"'} của họ không hẳn là mười, chẳng hạn với{" "}
                        {'"'}chục{'"'} là tám thì:
                        <div className={`${generalInstanceClassName}`}>
                            8 là một {'"'}chục{'"'}
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            16 bằng hai lần tám nghĩa là hai {'"'}chục{'"'}
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            24 bằng ba lần tám nghĩa là ba {'"'}chục{'"'}
                        </div>
                        Như vậy, có thể hiểu rằng Hệ cơ số n là một kiểu đếm mà
                        mỗi {'"'}chục{'"'} bằng n.
                    </div>
                    <div className={`${generalContentClassName}`}>
                        <br />
                        Các cơ số phổ biến thường gặp:
                        <div className={`${generalInstanceClassName}`}>
                            <ExtraInlineFact
                                buttonContent="Cơ số mười"
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
                                hiển nhiên, không có gì phải thắc mắc.
                                <br />
                                <br />
                                Sự thực thì cơ số mười không tốt cho việc tính
                                toán hơn so với những cơ số khác, chẳng hạn như
                                cơ số mười hai. Mười chỉ chia hết cho hai và
                                năm, trong khi mười hai thì chia hết cho hai,
                                ba, bốn và sáu. Vì thế, đếm và tính theo cơ số
                                mười hai vượt trội hơn rất nhiều so với cơ số
                                mười, nhất là trong việc phân chia: phân nửa,
                                một phần ba, phần tư, thậm chí cả phần sáu. Thế
                                thì mười là cơ số có lợi cho việc tính toán
                                không phải là câu trả lời thỏa đáng.
                                <br />
                                <br />
                                Vậy thì chắc là do bàn tay con người có mười
                                ngón. Trong trường hợp chỉ có tám ngón thôi thì
                                liệu chúng ta có đếm theo cơ số tám? Hay vẫn cứ
                                luôn là cơ số mười? Thật khó lòng mà biết được,
                                nhưng khả năng cao sẽ là cơ số tám. Nếu quả đúng
                                vậy thì thật lạ, tư duy Toán học của chúng ta,
                                như bạn đã biết, hình thành từ việc đếm, lại phụ
                                thuộc vào cấu trúc sinh học cơ thể, cấu trúc này
                                lại hình thành từ hàng loạt quá trình ngẫu nhiên
                                và tiến hóa. Sinh học đã tác động đến Toán học
                                theo cách không thể ngờ. Toán học ra đời từ
                                chính bàn tay của chúng ta theo đúng nghĩa đen
                                như vậy. Quả thực, khi ngẫm nghĩ về điều này,
                                chúng ta không khỏi có một cảm giác kì lạ và bối
                                rối. Trong khoa học, khi truy nguyên tận cùng
                                gốc rễ vấn đề thì câu trả lời nhận được sẽ như
                                một chiếc búa tạ đập thẳng vào tâm thức khiến ta
                                phải choáng váng.
                                <br />
                                <br />
                                Nguồn{" "}
                                <Link
                                    target="_blank"
                                    href="https://www.history-of-mathematics.org/"
                                    className="underline font-[475]"
                                >
                                    https://www.history-of-mathematics.org/.
                                </Link>{" "}
                                Đây là trích đoạn từ De Temporum Ratione. Trong
                                chương đầu tiên của De Temporum Ratione, mang
                                tên “Tính toán hoặc nói chuyện bằng ngón tay,”
                                đã mô tả một hình thức đếm bằng ngón tay.
                            </ExtraInlineFact>{" "}
                            (hệ thập phân) là vô cùng phổ biến.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Phổ biến thứ hai sau cơ số mười là{" "}
                            <ExtraInlineFact
                                buttonContent="cơ số mười hai"
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
                            </ExtraInlineFact>
                            .
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            <ExtraInlineFact
                                buttonContent="Cơ số sáu mươi"
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
                            </ExtraInlineFact>{" "}
                            (hệ lục thập phân).
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Trong thời đại công nghệ thông tin đang phát triển
                            mạnh mẽ, hệ đếm{" "}
                            <ExtraInlineFact
                                buttonContent="Cơ số hai"
                                extraBodyVariant="instance"
                            >
                                Cơ số hai được sử dụng rộng rãi vì nó gắn liền
                                với hoạt động của máy tính điện tử. Tuy nhiên,
                                ngay từ thời xa xưa, những thổ dân Queensland
                                cũng đã sử dụng hệ đếm này.
                            </ExtraInlineFact>{" "}
                            (gọi là hệ nhị phân).
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Ngoài ra hệ đếm{" "}
                            <ExtraInlineFact
                                buttonContent="Cơ số năm"
                                extraBodyVariant="instance"
                            >
                                Cơ số năm cũng được dùng ở một số vùng khác như
                                tộc người Yukaghir ở Siberia. Cho đến đầu thế kỉ
                                mười chín, lịch nông nghiệp của Đức vẫn còn dùng
                                hệ ngũ phân!
                            </ExtraInlineFact>{" "}
                            (gọi là hệ ngũ phân).
                        </div>
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
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
                        hề gặp {'"'}số không{'"'} trong tự nhiên để nó có thể
                        hữu hình, dễ hiểu. Bất cứ số tự nhiên nào lớn hơn không
                        đều có ví dụ thực hiện: một con khỉ, hai con ong, ba
                        trái đào hay bốn bông hoa. Nhưng {'"'}không{'"'} thì
                        sao? Phải có chút nhận thức để nhận ra cái vô hình cũng
                        là cái hữu hình, trong hư có thực, {'"'}không có gì{'"'}{" "}
                        cũng là một cái gì đó.
                        <br />
                        {'"'}Số không tồn tại trong não bộ chúng ta chứ không
                        thuộc về cảm giác{'"'}, Robert Kaplan, giáo sư toán học
                        tại Harvard và tác giả cuốn sách về con số không, nói
                        với tạp chí Vox.
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
                        <ExtraInlineFact
                            buttonContent="Brahmagupta"
                            extraBodyVariant="content"
                        >
                            <HistoricalFigure
                                image={<Image src={Brahmagupta} alt="" />}
                            >
                                Nhà toán học Ấn Độ{" "}
                                <span className="font-[475]">Brahmagupta</span>{" "}
                                (598 - 668 CE) đã phát minh ra các quy tắc cộng,
                                trừ và nhân với số 0 và số âm trong quyển sách
                                Brahma Sphuta Siddhanta. Ông cũng là một nhà
                                thiên văn học và thực hiện nhiều khám phá khác
                                trong toán học. Thật không may, các bài viết của
                                anh ấy không chứa bất kỳ bằng chứng nào, vì vậy
                                chúng tôi không thể biết được kết quả của anh ấy
                                như thế nào.
                            </HistoricalFigure>
                        </ExtraInlineFact>
                        . Và ông cũng là người đầu tiên nêu lên các quy tắc tính
                        toán trong hệ ghi số có số 0 trong quyển sách{" "}
                        <ExtraInlineFact
                            buttonContent="Brahma Sphuta Siddhanta"
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
                                    <br />
                                    Một khoản nợ trừ đi{" "}
                                    <span className="font-[475]">
                                        sunya
                                    </span>{" "}
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
                                <br />
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
                        </ExtraInlineFact>{" "}
                        <ExtraAloneFact
                            buttonContent="Ý nghĩa của số 0"
                            extraBodyVariant="content"
                            extraBodyClassName="max-w-[700px] w-full"
                        >
                            <div className="aspect-video">
                                <ReactPlayer
                                    url="https://www.youtube.com/watch?v=Lic7cvYuulU"
                                    width="100%"
                                    height="100%"
                                />
                            </div>
                        </ExtraAloneFact>
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
                    <ExtraQuiz
                        buttonContent="Tại sao trừ với trừ lại thành cộng?"
                        explaination={
                            <div>
                                Thấy rằng, đối với câu a{")"}, số tiền của bạn
                                có sẽ tăng thêm 20€. Nói cách khác: 4 x 5 = 20.
                                Tích của hai số dương vẫn là số dương, đến đây
                                mọi thứ đều ổn.
                                <br />
                                <br />b{")"} Nếu bây giờ người ta đưa cho bạn 4
                                thanh xám, nghĩa là bốn khoản nợ, khoản tiền sẽ
                                giảm đi 20€. Nói cách khác: 4 x (-5) = -20. Một
                                số dương nhân với một số âm sẽ cho ra một số âm.
                                <br />
                                <br />
                                Và tương tự, câu c{")"} nếu người ta lấy của bạn
                                4 thanh đen, bạn sẽ mất 20€. Cũng có nghĩa là
                                (-4) x 5 = -20. Hai trường hợp b{")"} và c{")"}
                                chứng tỏ rằng việc đưa ai một khoản nợ thì cũng
                                cùng tác dụng với việc đang lấy tiền từ người
                                đó. Thêm số âm tức là trừ đi số dương.
                                <br />
                                <br />
                                Giờ hãy tới điểm mấu chốt là câu d{")"}: khoản
                                tiền của bạn sẽ thế nào nếu người ta lấy đi của
                                bạn 4 thanh xám?
                                <br />
                                <br />
                                Nói cách khác, chuyện gì sẽ xảy ra nếu người ta
                                xóa bỏ những khoản nợ của bạn? Câu trả lời rất
                                rõ ràng: số tiền bạn có sẽ tăng lên, bạn sẽ có
                                thêm tiền. Nói cách khác (-4) x (-5) = 20. Bỏ số
                                âm tức là thêm sỡ dương! Trừ với trừ bằng cộng.
                            </div>
                        }
                    >
                        Quy tắc của việc nhân các dấu, ban đầu hẳn là khá kỳ
                        quặc, lại hoàn toàn có nghĩa nếu ta nhớ lại hệ thống các
                        thanh màu được phát minh bởi các học giả Trung Quốc. Ví
                        dụ sử dụng hệ thống này để biểu diễn cho sự lời lỗ về
                        tiền bạc.
                        <br />
                        <br />
                        Giả sử một thanh đen tượng trưng cho 5€ trong khi một
                        thanh xám tượng trưng cho một món nợ 5€, nghĩa là -5€.
                        Nếu bạn có 10 thanh đen và 5 thanh xám, khoản tiền của
                        bạn sẽ là 25€.
                        <br />
                        <br />
                        Bây giờ hãy nghiên cứu những trường hợp khác nhau có thể
                        xảy ra khi tài khoản của bạn thay đổi. Và hãy đưa về
                        phép tính nhé!
                        <br />a{`)`} Giả sử bạn bổ sung thêm 4 thanh đen, vậy số
                        tiền bạn là bao nhiêu?
                        <br />b{`)`} Nếu bây giờ người ta đưa cho bạn 4 thanh
                        xám, số tiền của bạn là bao nhiêu?
                        <br />c{`)`} Nếu người ta đưa bạn 4 thanh xám, số tiền
                        của bạn là bao nhiêu?
                        <br />d{`)`} Khoản tiền của bạn sẽ thế nào nếu người ta
                        lấy đi của bạn 4 thanh xám?
                        <div className="bg-[#327e0c] w-full h-[1px] my-2" />
                    </ExtraQuiz>
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
                        {'"'}trừ x trừ = cộng{'"'}, đã làm chậm đi đáng kể quá
                        trình chấp nhận những số âm. Rất lâu sau Brahmagupta,
                        nhiều học giả vẫn tiếp tục coi thường những con số cực
                        kỳ tiện lợi nhưng lại khó nắm bắt này. Vài người gọi
                        chúng là những {'"'}con số phi lý{'"'} và chỉ áp dụng
                        chúng trong những phép tính trung gian với điều kiện là
                        chúng sẽ không xuất hiện trong kết quả cuối cùng. Phải
                        đến thế kỉ 19, thậm chí là thế kỉ 20 thì tính chính đáng
                        và công dụng của chúng mới chính thức được chấp nhận.
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Sự xuất hiện của số hữu tỉ
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Sự ra đời của số hữu tỉ xuất phát từ nhu cầu giải quyết
                        các vấn đề thực tiễn và toán học trong đời sống. Đầu
                        tiên đó là nhu cầu{" "}
                        <ExtraInlineFact
                            buttonContent="đo lường chính xác trong thực tế"
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
                            đến cả hình học không gian.
                            <br />
                            <br />
                            Một tầng hầm. Chiều dài bằng chiều sâu. 1 [đơn vị],
                            tôi đào dưới đất. Nền nhà của tôi và khoảng đất tôi
                            đắp lên, 1{"'"}10. Chiều dài và mặt tiền, {"'"}50.
                            Chiều dài, mặt tiền, bao nhiêu? Bạn sẽ thấy các nhà
                            toán học Babylon dùng ngôn ngữ điện báo.
                            <br />
                            <br />
                            Cụ thể, nội dung của đề bài trên có thể hiểu như
                            sau: Chiều sâu của một tầng hầm gấp mười hai lần
                            chiều dài của nó. Nếu tôi đào căn hầm sâu thêm một
                            đơn vị, thể tích của nó sẽ bằng{" "}
                            <InlineMath math="\frac{7}{6}" />. Nếu tôi cộng
                            chiều dài và chiều rộng, tôi sẽ thu được{" "}
                            <InlineMath math="\frac{5}{6}" />. Các kích thước
                            của căn hầm là bao nhiêu? Lưu ý rằng với hệ thống có
                            cơ số sáu mươi, kí hiệu 1{"'"}10 Bài toán này được
                            viết kèm với một lời giải cụ thể dẫn tới câu trả lời
                            là chiều dài bằng <InlineMath math="\frac{1}{2}" />,
                            chiều rộng bằng <InlineMath math="\frac{1}{3}" /> và
                            chiều sâu bằng 6. Bây giờ hãy cùng dạo qua phía sông
                            Nile một chút. Lẽ tất nhiên, ở vùng đất của người Ai
                            Cập, ta sẽ gặp những bài toán về kim tự tháp.
                            <br />
                            <br />
                            Đề bài tiếp theo đây được trích từ một quyển sách
                            giấy cói nổi tiếng được viết bởi viên thư lại Ahmes,
                            có niên đại vào nửa đầu thế kỉ 16 trước Công nguyên.
                            Một kim tự tháp có cạnh đáy bằng 140 cẳng tay và độ
                            dốc bằng 5 gang tay và 1 ngón tay, có độ cao là bao
                            nhiều? Cẳng tay, gang tay và ngón tay là các đơn vị
                            đo lường lần lượt tương ứng với 52,5 xentimét, 7,5
                            xentimét và 1,88 xentimét. Ahmes đã đưa ra lời giải:
                            93 cẳng tay <InlineMath math="\frac{1}{3}." /> Trong
                            sách giấy cói này, ông cũng thử sức với hình tròn.
                            Và còn nhiều bài toán khác nữa. Các bạn có thể tìm
                            đọc thêm ở cuốn sách “Toán học - Một thiên tiểu
                            thuyết” của Mickael Launay.
                            <br />
                            <br />
                            Bạn cũng có thể tham khảo thêm câu chuyện “Cánh tay,
                            gang tay và bàn tay” và “Một lý do tốt để yêu người
                            Pháp”
                        </ExtraInlineFact>
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
                        hiện ra{" "}
                        <ExtraFunFact
                            buttonContent="số vô tỷ"
                            ffidx={[0, 0, 5, 0]}
                        />{" "}
                        của nhà toán học Pythagoras, Hippacus thành Croton.
                        Trong tất cả các câu chuyện, Hippacus gặp một kết cục
                        không may, hoặc vì phát hiện ra rằng{" "}
                        <InlineMath math="\sqrt{2}" /> là số vô tỷ, hoặc vì tiết
                        lộ bí mật về <InlineMath math="\sqrt{2}" /> ra bên ngoài
                        hội kín Pythagoras.
                    </div>
                </div>
            </div>
            <div className="h-fit">
                {timelineStar.TheKy(1012191, "19")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalContentClassName}`}>
                        Bài báo của{" "}
                        <ExtraInlineFact
                            buttonContent="Georg Cantor"
                            extraBodyVariant="content"
                        >
                            <HistoricalFigure
                                image={<Image src={GeorgCantor} alt="" />}
                                historicalFigureName="Georg Cantor"
                            >
                                (1845-1918) là nhà toán học người Đức, sáng lập
                                lý thuyết tập hợp hiện đại. Ông phát hiện ra tập
                                hợp vô hạn có thể có kích thước khác nhau và
                                giới thiệu khái niệm về số cardinal và số siêu
                                hạn, mở đường cho nghiên cứu về tập hợp vô hạn
                                và lý thuyết tập hợp.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        công bố năm 1874, {'"'}Über eine Eigenschaft des
                        Inbegriffes aller reellen algebraischen Zahlen{'"'} (
                        {'"'}Về một thuộc tính của tập hợp tất cả số đại số thực
                        {'"'}), đã đánh dấu sự ra đời của{" "}
                        <ExtraInlineFact
                            buttonContent="lý thuyết tập hợp hiện đại"
                            extraBodyVariant="content"
                        >
                            <span className="font-[475]">
                                Khái niệm về tập hợp của Georg Cantor
                            </span>
                            : Cantor đã định nghĩa một tập hợp là một tập hợp
                            các đối tượng duy nhất và khác nhau.
                        </ExtraInlineFact>{" "}
                        như một nhánh của toán học. Ông đã giới thiệu khái niệm
                        về tập hợp (set) trong toán học, coi tập hợp là một tập
                        hợp các đối tượng hoặc phần tử mà có thể được xác định
                        rõ ràng. Cantor không chỉ khái quát hóa các tập hợp hữu
                        hạn mà còn mở rộng ra{" "}
                        <ExtraInlineFact
                            buttonContent="tập hợp vô hạn"
                            extraBodyVariant="content"
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
                        </ExtraInlineFact>
                        .
                        <ExtraLearnMore>
                            Tập các số thực <InlineMath math="\mathbb{R}" /> lại
                            không thể đếm được. Điều này được chứng minh qua
                            định lý Cantor rằng không thể thiết lập một ánh xạ
                            một-một giữa tập <InlineMath math="\mathbb{N}" /> và{" "}
                            <InlineMath math="\mathbb{R}" />.{" "}
                            <span className="font-[475]">Định lý Cantor</span>,
                            hay còn gọi là{" "}
                            <span className="font-[475]">
                                Định lý Cantor về chiều của tập hợp
                            </span>
                            , là một trong những phát hiện quan trọng của
                            <span className="font-[475]">
                                {" "}
                                Georg Cantor
                            </span>{" "}
                            trong lý thuyết tập hợp. Định lý này chứng minh
                            rằng:
                            <br />{" "}
                            <span className="font-[475]">
                                {'"'}Không có ánh xạ (hàm) một-một từ một tập
                                hợp vô hạn vào một tập hợp con của nó mà phủ
                                định.{'"'}
                            </span>
                            <br />
                            Cụ thể, định lý này cho biết rằng:
                            <br />
                            <div className={`${generalInstanceClassName}`}>
                                Tập hợp số thực <InlineMath math="\mathbb{R}" />{" "}
                                có nhiều phần tử hơn tập hợp số tự nhiên{" "}
                                <InlineMath math="\mathbb{N}" />, mặc dù cả hai
                                đều là vô hạn. Điều này có nghĩa là tập hợp các
                                số thực là một tập hợp vô hạn lớn hơn so với tập
                                hợp các số tự nhiên.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                {" "}
                                Tập hợp vô hạn không thể có cùng số phần tử với
                                một tập con của nó. Tức là không thể tìm một ánh
                                xạ một-một từ một tập hợp vô hạn vào một tập con
                                của nó. Nếu có một ánh xạ như vậy, thì ánh xạ đó
                                không thể là khả nghịch (không thể đảo ngược
                                được).
                            </div>{" "}
                            Các phép toán tập hợp cơ bản của Cantor: Hợp tập,
                            Giao tập, Hiệu tập, Tập con,... như ta đã biết hiện
                            nay.
                            <br />
                            <div className={`${generalInstanceClassName}`}>
                                Hợp tập (Union): Nếu A và B là hai tập hợp, thì
                                hợp tập <InlineMath math="A \cup B" /> là tập
                                hợp tất cả các phần tử thuộc A hoặc B, không
                                trùng lặp.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Giao tập (Intersection): Giao tập{" "}
                                <InlineMath math="A \cap B" /> là tập hợp tất cả
                                các phần tử mà A và B cùng chia sẻ.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Hiệu tập (Difference): Hiệu tập{" "}
                                <InlineMath math="A / B" /> là tập hợp tất cả
                                các phần tử thuộc A nhưng không thuộc B.
                            </div>
                            <div className={`${generalInstanceClassName}`}>
                                Tập con (Subset): Một tập hợp A là một tập con
                                của tập hợp B (ký hiệu{" "}
                                <InlineMath math="A \subset B" /> ) nếu mọi phần
                                tử của A đều là phần tử của B.
                            </div>
                        </ExtraLearnMore>
                    </div>
                </div>
            </div>
            <div className="h-fit">
                <div className="grid grid-rows-1 md:grid-cols-[28.5px_auto] grid-cols-[20px_auto]">
                    <div className="col-[1/2] row-[1/-1]">
                        {timelineStar.Star1dc19}
                    </div>
                    <div className="col-[2/-1] row-[1/-1] flex flex-wrap ml-3">
                        {timelineStar.DauTheKy19Text}
                        {timelineStar.CuoiTheKy19Text}
                    </div>
                </div>
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Gottlob Frege và Lý thuyết tập hợp
                    </div>
                    <div className={`${generalContentClassName}`}>
                        <ExtraInlineFact
                            buttonContent="Gottlob Frege"
                            extraBodyVariant="content"
                        >
                            <HistoricalFigure
                                image={<Image src={GottlobFrege} alt="" />}
                                historicalFigureName="Gottlob Frege "
                            >
                                (1848 - 1925) được xem là người sáng lập ra
                                logic học hiện đại. Trong công trình nổi tiếng
                                của ông, {'"'}Begriffsschrift{'"'} (1879), Frege
                                đã đưa ra một hệ thống logic đại số để hình dung
                                và mô tả các khái niệm toán học. Ông đã phát
                                triển phép tính tâm lý học (predicate calculus),
                                một nền tảng cơ bản của logic toán học hiện đại.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        sử dụng khái niệm {'"'}tập hợp{'"'} trong lý thuyết của
                        ông, đặc biệt là trong cách ông định nghĩa khái niệm.
                        Theo Frege, một khái niệm toán học là một tập hợp của
                        các đối tượng thỏa mãn một thuộc tính cụ thể. Ví dụ,{" "}
                        {'"'}tập hợp tất cả các số chẵn{'"'} là một tập hợp mà
                        phần tử của nó là những số tự nhiên chẵn. Frege không
                        chỉ định nghĩa tập hợp như là một tập hợp các đối tượng
                        vật lý mà ông coi tập hợp là một đối tượng toán học
                        chính thống, có thể được mô tả và sử dụng trong các phép
                        toán toán học. Frege tin rằng lý thuyết tập hợp của ông
                        có thể giúp xác định một cách chính xác các khái niệm
                        trong toán học. Frege được xem là người sáng lập ra
                        logic học hiện đại. Trong công trình nổi tiếng của ông,{" "}
                        {'"'}Begriffsschrift{'"'} (1879), Frege đã đưa ra một hệ
                        thống logic đại số để hình dung và mô tả các khái niệm
                        toán học. Ông đã phát triển phép tính tâm lý học
                        (predicate calculus), một nền tảng cơ bản của logic toán
                        học hiện đại.
                        <br />
                        <br />
                        Tuy nhiên, lý thuyết tập hợp của Frege gặp phải một vấn
                        đề lớn khi{" "}
                        <ExtraInlineFact
                            buttonContent="Bertrand Russell"
                            extraBodyVariant="content"
                        >
                            <HistoricalFigure
                                image={<Image src={Bertrandrussell} alt="" />}
                                historicalFigureName="Bertrand Russell"
                            >
                                (1872-1970) là nhà triết học, toán học và logic
                                học người Anh, nổi tiếng với nghịch lý Russell
                                trong lý thuyết tập hợp. Ông cùng Whitehead viết
                                Principia Mathematica, đặt nền tảng cho toán học
                                hiện đại qua logic học. Russell cũng là một nhà
                                hoạt động xã hội, nhận Giải Nobel Văn học 1950.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        phát hiện ra{" "}
                        <ExtraInlineFact
                            buttonContent="nghịch lý Russell"
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
                            <div className={`${generalInstanceClassName}`}>
                                Nếu{" "}
                                <InlineMath math="\mathbb{R} \in \mathbb{R}" />,
                                thì theo định nghĩa{" "}
                                <InlineMath math="\mathbb{R}" /> phải không phải
                                là phần tử của chính nó, điều này mâu thuẫn.
                                <br />
                                Nếu{" "}
                                <InlineMath math="\mathbb{R} \notin \mathbb{R}" />
                                , thì theo định nghĩa,{" "}
                                <InlineMath math="\mathbb{R}" /> phải là phần tử
                                của chính nó, lại dẫn đến mâu thuẫn.
                            </div>
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
                        </ExtraInlineFact>{" "}
                        vào năm 1901. Nghịch lý này xuất hiện trong lý thuyết
                        của Frege khi ông cố gắng định nghĩa tập hợp của{" "}
                        <span className="font-[475]">
                            tất cả các tập hợp không phải là phần tử của chính
                            nó
                        </span>
                        . Và để giải quyết vấn đề nghịch lý này thì nhà toán học{" "}
                        <ExtraInlineFact
                            buttonContent="Zermelo"
                            extraBodyVariant="content"
                        >
                            <HistoricalFigure
                                image={<Image src={ErnstZermelo} alt="" />}
                                historicalFigureName="Ernst Zermelo"
                            >
                                (1871 - 1953) là một nhà toán học người Đức nổi
                                tiếng với các đóng góp trong lý thuyết tập hợp,
                                đặc biệt là việc phát triển Axiom of Choice
                                (Axiom lựa chọn), một tiên đề quan trọng trong
                                lý thuyết tập hợp hiện đại. Ông cũng là người đề
                                xuất hệ thống tiên đề Zermelo-Fraenkel để xây
                                dựng lý thuyết tập hợp vững chắc, với
                                Zermelo-Fraenkel + Axioms of Choice (ZFC) là hệ
                                thống tiên đề phổ biến nhất hiện nay trong toán
                                học.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        và{" "}
                        <ExtraInlineFact
                            buttonContent="Fraenkel"
                            extraBodyVariant="content"
                        >
                            <HistoricalFigure
                                image={<Image src={AbrahamFraenkel} alt="" />}
                                historicalFigureName="Abraham Fraenkel"
                            >
                                (1891 - 1965) là một nhà toán học người Đức, nổi
                                tiếng với việc phát triển hệ thống tiên đề
                                Zermelo-Fraenkel cho lý thuyết tập hợp, trong đó
                                các tiên đề này giúp xây dựng nền tảng toán học
                                vững chắc, đồng thời giải quyết một số vấn đề
                                trong lý thuyết tập hợp mà Zermelo chưa hoàn
                                chỉnh.
                            </HistoricalFigure>
                        </ExtraInlineFact>{" "}
                        đã xây dựng{" "}
                        <ExtraInlineFact
                            buttonContent="Lý thuyết tập hợp tiên đề Zermelo-Fraenkel"
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
                        </ExtraInlineFact>{" "}
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
            <div className=" h-fit">
                {timelineStar.TheKy(101220, "20")}
                <div className={`${generalClassName}`}>
                    <div className={`${generalHeaderClassName}`}>
                        Lý thuyết tập hợp và các phép toán nâng cao
                    </div>
                    <div className={`${generalContentClassName}`}>
                        Khái niệm về thứ tự và số hạng (Ordinal and Cardinal
                        Numbers):
                        <div className={`${generalInstanceClassName}`}>
                            Trong lý thuyết tập hợp, số hạng (ordinal numbers)
                            dùng để chỉ thứ tự của các phần tử trong một tập hợp
                            (ví dụ: {'"'}phần tử thứ nhất
                            {'"'},{'"'}phần tử thứ hai{'"'},...).
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Số cardinal là một khái niệm quan trọng dùng để chỉ
                            kích thước hoặc số lượng phần tử của một tập hợp. Số
                            cardinal có thể là hữu hạn hoặc vô hạn.
                        </div>
                        Lý thuyết mô hình (Model Theory) và ứng dụng trong lý
                        thuyết tập hợp: Vào nửa sau thế kỷ 20, lý thuyết tập hợp
                        trở thành cơ sở cho lý thuyết mô hình, trong đó các mô
                        hình toán học được mô tả bằng các tập hợp và phép toán
                        trên chúng. Lý thuyết mô hình giúp giải quyết các câu
                        hỏi về sự đúng đắn và tính khả thi của các lý thuyết
                        toán học.
                        <ExtraLearnMore flip>
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
                            thuyết mô hình, {'"'}mô hình{'"'} là một cấu trúc
                            toán học được thiết lập để kiểm tra tính hợp lý của
                            các lý thuyết, và các lý thuyết có thể có nhiều mô
                            hình khác nhau.{" "}
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
                                hình này {'"'}giống nhau{'"'} về mặt lý thuyết,
                                mặc dù có thể có các cấu trúc khác nhau.
                            </div>
                            <br />
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
                        </ExtraLearnMore>
                        Khoa học máy tính:
                        <div className={`${generalInstanceClassName}`}>
                            Ngôn ngữ lập trình: Các ngôn ngữ lập trình sử dụng
                            các cấu trúc dữ liệu như danh sách, tập hợp và mảng,
                            trong đó tập hợp là một công cụ quan trọng để tổ
                            chức và thao tác dữ liệu.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Cơ sở dữ liệu: Trong lý thuyết cơ sở dữ liệu, tập
                            hợp được sử dụng để mô hình hóa các đối tượng dữ
                            liệu và quan hệ giữa chúng.
                        </div>
                        <br />
                        Các ứng dụng khác:
                        <div className={`${generalInstanceClassName}`}>
                            Lý thuyết đồ thị: Các tập hợp và phép toán trên tập
                            hợp cũng được ứng dụng trong lý thuyết đồ thị, nơi
                            các đỉnh và cạnh có thể được coi là các phần tử
                            trong các tập hợp.
                        </div>
                        <div className={`${generalInstanceClassName}`}>
                            Lý thuyết thông tin và mã hóa: Tập hợp cũng là công
                            cụ quan trọng trong lý thuyết mã hóa, nơi các tập
                            hợp của các mã có thể được sử dụng để đảm bảo tính
                            chính xác trong việc truyền tải thông tin.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
