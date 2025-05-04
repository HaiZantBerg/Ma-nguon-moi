import Image from "next/image";
import behumble from "@/public/Image/behumble.png";
import brokenGlass from "@/public/Image/brokenglass.png";
import jobAndName from "@/public/Image/jobandname.png";
import frog from "@/public/Image/frog.png";
import faces from "@/public/Image/faces.png";
import genderHonest from "@/public/Image/genderhonest.png";
import React from "react";

export const quizzes = [
    [
        [
            `Năm người thợ tên là: Da, Điện, Hàn, Tiện và Sơn làm 5 nghề khác nhau và trùng với tên của 5 người họ nhưng không có ai làm 
nghề trùng với tên mình. Tên của bác thợ da trùng với nghề của anh vợ mình và vợ bác chỉ có 2 anh em. Bác Tiện không làm 
thợ sơn mà lại là em rể của bác thợ hàn. Bác thợ sơn và bác thợ da là hai anh em cùng họ. Hãy cho biết bác Da và bác Tiện 
làm nghề gì?`,
            `Một trong các bạn A, B, C và D làm vỡ kính cửa sổ. Khi được hỏi, họ trả lời như sau:
//   A: "C làm vỡ".
//   B: "Không phải tôi".
//   C: "D làm vỡ".
//   D: "C đã nói dối".
//Vậy ai đã làm vỡ cửa sổ trong trường hợp:
//   1. Có đúng một người đã nói thật.
//   2. Có đúng một người đã nói dối.`,
            `Có 4 chàng trai khiêm tốn là Hùng, Huy, Hoàng và Hải. Họ tuyên bố như sau
//   Hùng: "Huy là người khiêm tốn nhất."
//   Huy: "Hoàng là người khiêm tốn nhất."
//   Hoàng: "Tôi không phải là người khiêm tốn nhất"
//   Hải: "Tôi không phải là người khiêm tốn nhất"
//Hóa ra, chỉ có một tuyên bố của 4 chàng trai khiêm tốn trên là đúng. Vậy ai là người khiêm tốn nhất?`,
            `Có 13 bạn nhỏ ngồi quanh một bàn tròn. Họ thỏa thuận với nhau là hai bạn khác giới sẽ nói dối nhau, còn hai bạn cùng giới
sẽ nói thật. Một bạn nói với bạn bên phải mình "Đa số trong chúng ta là con trai". Bạn này lại nói với bạn bên phải của mình
"Đa số trong chúng ta là con gái". Bạn kế tiếp lại nói với bạn bên phải mình "Đa số trong chúng ta là con trai". Bạn này lại 
nói với bạn bên phải của mình "Đa số trong chúng ta là con gái", ... cho đến bạn cuối cùng nói với bạn đầu tiên "Đa số trong 
chúng ta là con trai". Hỏi có bao nhiêu bạn trai ngồi quanh bàn?`,
            `Andrew, Burt, Charlie, Danny and Eli cùng chơi một trò chơi trong đó mỗi bạn sẽ là ếch hoặc kangaroo. Ếch luôn nói dối còn kangaroo luôn nói thật:
//
1. Andrew nói rằng Burt là một con kangaroo.
//
2. Charlie nói Danny là một con ếch.
//
3. Eli nói rằng Andrew không phải là ếch.
//
4. Burt nói rằng Charlie không phải là kangaroo.
//
5. Danny lại nói Eli và Andrew là hai con thú khác nhau.
//
Hỏi có bao nhiêu con ếch trong số 5 bạn này?
`,
            `Mọi người giúp mình câu toán logic này đi: 
//
Peter có 4 tấm bìa 2 mặt, một mặt ghi 1 chữ cái còn mặt kia ghi một số. 
// 
Peter khẳng định rằng "Nếu 1 mặt của tấm bìa ghi chữ A thì mặt kia ghi số 1". 
// 
Hiện trên bàn đặt 4 tấm bìa và mặt ngửa lên ghi lần lượt là A, 1, 2, B. 
//
Hỏi phải lật 2 tấm bìa nào để kiểm tra khẳng định của Peter là đúng hay sai. 
`,
        ],
    ],
    [[]],
    [[]],
];

export const quizExplaination = [
    [
        [
            <div key="explaination1" className="flex flex-col gap-1">
                <div>
                    Theo đề bài bác Tiện không làm thợ sơn. Bác Tiện là em rể
                    của bác thợ hàn nên bác Tiện không làm thợ hàn. Như vậy bác
                    Tiện chỉ có thể là thợ da hoặc thợ điện.
                </div>
                <div>
                    Nếu bác Tiện làm thợ da thì bác Da làm thợ điện. Như vậy bác
                    tiện vừa là em rể của bác thợ điện vừa làm em rể của bác thợ
                    hàn mà vợ bác Tiện chỉ có hai anh em.
                </div>
                Điều này vô lý, suy ra bác Tiện làm thợ điện. Bác Da và bác thợ
                sơn là hai anh em họ nên bác Da không phải là thợ sơn. Theo lập
                luận trên bác Da không là thợ điện, nên bác Da là thợ hàn.
            </div>,
            <div key="explaination2">
                a{")"}
                <br />
                Ta sẽ xem xét lần lượt ai đã nói thật.
                <div className="pl-2">
                    Nếu A nói thật, thì C đã làm vỡ. Nhưng khi đó, câu của B
                    cũng đúng, như vậy sẽ dẫn đến mâu thuẫn.
                </div>
                <div className="pl-2">
                    Nếu B nói thật, thì B không làm vỡ kính, và người làm vỡ chỉ
                    có thể là A, C hoặc D. Nếu A làm vỡ, thì D đã nói thật, mâu
                    thuẫn. Nếu C làm vỡ, thì D cũng đã nói thật, mâu thuẫn. Nếu
                    D làm vỡ, thì C đã nói thật, cũng mâu thuẫn. Vì vậy, B cũng
                    không nói thật.
                </div>
                <div className="pl-2">
                    Nếu C nói thật, thì D đã làm vỡ, suy ra B không làm vỡ và B
                    cũng nói thật. Điều này cũng mâu thuẫn vì chỉ có một người
                    nói thật.
                </div>
                <div className="pl-2">
                    Nếu D nói thật, thì C đã nói dối, tức là D không làm vỡ; A
                    đã nói dối, tức là C không làm vỡ; B đã nói dối, thì B chính
                    là người làm vỡ. Do đó, trong trường hợp này, B là người làm
                    vỡ kính.
                </div>
                b{")"}
                <div className="pl-2">
                    A và C đưa ra hai khẳng định không thể cùng đúng, do đó
                    trong hai người A và C phải có ít nhất một người nói dối.
                    <br />
                    Nhưng vì trong bốn người chỉ có một người nói dối, nên suy
                    ra B và D nói thật. Theo lời của D, thì C nói dối, như vậy A
                    nói thật. Vì A nói {'"'}C làm vỡ{'"'}, nên C là người làm vỡ
                    kính trong trường hợp này.
                </div>
            </div>,
            <div key="explaination3">
                Hải là người khiêm tốn nhất
                <br />
                <br />
                Nếu Hùng đúng thì Hoàng và Hải cũng đúng. Nếu Huy đúng thì Hải
                cũng đúng. Nếu Hoàng đúng thì sao? Nếu Hoàng sai thì sao?
            </div>,
            <div key="explaination4">
                Do tổng số bạn ngồi quanh bàn là lẻ, nên số nam và số nữ không
                thể bằng nhau. Từ đó suy ra, trong hai câu nói: {'"'}Đa số trong
                chúng ta là con trai{'"'} và {'"'}Đa số trong chúng ta là con
                gái{'"'}, có 1 câu sai và 1 câu đúng.
                <br />
                Theo giả thiết, có tất cả 7 bạn nói {'"'}Đa số trong chúng ta là
                con trai{'"'} và 6 bạn nói {'"'}Đa số trong chúng ta là con gái
                {'"'}. Chú ý rằng mỗi bạn từ số thứ tự 2 đến 13 đều nói ngược
                lại với điều nghe được, nên họ đã ngồi giữa hai người khác giới.
                <br />
                <br />
                Từ đây, ta suy ra:
                <div className="pl-3">
                    Các bạn có số thứ tự 1, 5, 9, 13 cùng giới với nhau.
                    <br />
                    Các bạn có số thứ tự 3, 7, 11 khác giới với 4 bạn này.
                    <br />
                    Tương tự, các bạn có số thứ tự 2, 6, 10 cùng giới với nhau.
                    <br />
                    Các bạn có số thứ tự 4, 8, 12 khác giới với 3 bạn này.
                </div>
                Tổng cộng, có 3 + 4 = 7 bạn thuộc cùng một giới tính và 3 + 3 =
                6 bạn còn lại khác giới với họ.
                <br />
                Bạn thứ 13 cùng giới với bạn thứ 1, nên họ đã nói thật rằng{" "}
                {'"'}Đa số trong chúng ta là nam{'"'}.
                <br />
                Do đó, số nam ngồi quanh bàn tròn này là 7.
            </div>,
            <div key="explaination5" className="my-2">
                4 con ếch. Andrew, Burt, Danny, Eli là ếch, Charlie là kangaroo.
            </div>,
            <div key="explaination6">
                Phải lật mặt A và mặt 2.
                <br />
                <br />
                Bạn nghĩ là phải lật tấm bìa có ghi là A? Bạn đã đúng. Còn tấm
                bìa thứ hai là tấm nào? Chắc không phải là tấm bìa ghi là B rồi?
                Nhưng 1 và 2 thì chọn cái nào? Hãy suy nghĩ cho cẩn thận, đừng
                để bị mắc lừa.
            </div>,
        ],
    ],
    [[]],
    [[]],
];

export const quizCardImg = [
    [
        [
            <div key="quizCardImg1" className="w-[110px]">
                <Image src={jobAndName} className="w-full h-full" alt="" />
            </div>,
            <div key="quizCardImg2" className="w-[175px]">
                <Image src={brokenGlass} className="w-full h-full" alt="" />
            </div>,
            <div key="quizCardImg3" className="w-[175px]">
                <Image src={behumble} className="w-full h-full" alt="" />
            </div>,
            <div key="quizCardImg4" className="w-[125px]">
                <Image src={genderHonest} className="w-full h-full" alt="" />
            </div>,
            <div key="quizCardImg5" className="w-[125px]">
                <Image src={frog} className="w-full h-full" alt="" />
            </div>,
            <div key="quizCardImg6" className="w-[125px]">
                <Image src={faces} className="w-full h-full" alt="" />
            </div>,
        ],
    ],
    [[]],
    [[]],
];

export const quizName = [
    [
        [
            `Trùng Tên Nghề Nghiệp`,
            `Cửa Sổ Vỡ`,
            `Đàn Ông Thì Phải Khiêm Tốn`,
            `Giới Tính Và Trung Thực`,
            `Ếch ngồi đáy xã hội`,
            `Lật mặt`,
        ],
    ],
    [[]],
    [[]],
];

export const answerArray = [[[0, 0, 3, 2, 1, 3]]];

export const choicesArray = [
    [
        [
            [
                "Bác Tiện làm thợ điện// Bác Da làm thợ hàn",
                "Bác Tiện làm thợ da// Bác Da làm thợ hàn",
                "Bác Tiện làm thợ hàn// Bác Da làm thợ da",
                "Bác Tiện làm thợ tiện// Bác Da làm thợ hàn",
            ],
            ["B và C", "A và B", "D và A", "C và D"],
            ["Hùng", "Huy", "Hoảng", "Hải"],
            ["69", "6", "7", "5"],
            ["3", "4", "1", "-1"],
            [
                "Lật mặt B và mặt 1",
                "Lật mặt A và mặt 1",
                "Lật mặt B và mặt 2",
                "Lật mặt A và mặt 2",
            ],
        ],
    ],
    [[]],
    [[]],
];

export const choiceColor = [
    "bg-[#296FB0]",
    "bg-[#24a793]",
    "bg-[#F1AA04]",
    "bg-[#D7526C]",
];

export const choiceColorHover = [
    "hover:bg-[#25639d]",
    "hover:bg-[#1e8a7a]",
    "hover:bg-[#c48a03]",
    "hover:bg-[#d03453]",
];

export const choiceColorBackdrop = [
    "bg-[#174064]",
    "bg-[#125436]",
    "bg-[#775403]",
    "bg-[#851f33]",
];

export const choiceABCD = ["A", "B", "C", "D"];
