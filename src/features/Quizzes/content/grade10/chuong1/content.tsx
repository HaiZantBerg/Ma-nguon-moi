import React from "react";
import beHumble from "public/Image/quizzes/MDTH/behumble.webp";
import brokenGlass from "public/Image/quizzes/MDTH/brokenglass.webp";
import jobAndName from "public/Image/quizzes/MDTH/jobandname.webp";
import frog from "public/Image/quizzes/MDTH/frog.webp";
import faces from "public/Image/quizzes/MDTH/faces.webp";
import genderHonest from "public/Image/quizzes/MDTH/genderhonest.webp";

const g0c1 = [
    {
        title: "Trùng Tên Nghề Nghiệp",
        quiz: (
            <div>
                <p>
                    Năm người thợ tên là: Da, Điện, Hàn, Tiện và Sơn làm 5 nghề
                    khác nhau và trùng với tên của 5 người họ nhưng không có ai
                    làm nghề trùng với tên mình. Tên của bác thợ da trùng với
                    nghề của anh vợ mình và vợ bác chỉ có 2 anh em. Bác Tiện
                    không làm thợ sơn mà lại là em rể của bác thợ hàn. Bác thợ
                    sơn và bác thợ da là hai anh em cùng họ. Hãy cho biết bác Da
                    và bác Tiện làm nghề gì?
                </p>
            </div>
        ),
        choices: {
            array: [
                <p
                    key={0}
                    className="*:inline-block max-[41rem]:space-y-0 max-[57rem]:space-y-2 text-pretty flex flex-col"
                >
                    <span>Bác Tiện làm thợ điện</span>
                    <span>Bác Da làm thợ hàn</span>
                </p>,
                <p
                    key={1}
                    className="*:inline-block max-[41rem]:space-y-0 max-[57rem]:space-y-2 text-pretty flex flex-col"
                >
                    <span>Bác Tiện làm thợ da</span>
                    <span>Bác Da làm thợ hàn</span>
                </p>,
                <p
                    key={2}
                    className="*:inline-block max-[41rem]:space-y-0 max-[57rem]:space-y-2 text-pretty flex flex-col"
                >
                    <span>Bác Tiện làm thợ hàn</span>
                    <span>Bác Da làm thợ da</span>
                </p>,
                <p
                    key={3}
                    className="*:inline-block max-[41rem]:space-y-0 max-[57rem]:space-y-2 text-pretty flex flex-col"
                >
                    <span>Bác Tiện làm thợ tiện</span>
                    <span>Bác Da làm thợ hàn</span>
                </p>,
            ],
            answerId: 0,
        },
        explaination: (
            <div className="space-y-4">
                <p>
                    Theo đề bài bác Tiện không làm thợ sơn. Bác Tiện là em rể
                    của bác thợ hàn nên bác Tiện không làm thợ hàn. Như vậy bác
                    Tiện chỉ có thể là thợ da hoặc thợ điện.
                </p>
                <p>
                    Nếu bác Tiện làm thợ da thì bác Da làm thợ điện. Như vậy bác
                    tiện vừa là em rể của bác thợ điện vừa làm em rể của bác thợ
                    hàn mà vợ bác Tiện chỉ có hai anh em.
                </p>
                <p>
                    Điều này vô lý, suy ra bác Tiện làm thợ điện. Bác Da và bác
                    thợ sơn là hai anh em họ nên bác Da không phải là thợ sơn.
                    Theo lập luận trên bác Da không là thợ điện, nên bác Da là
                    thợ hàn.
                </p>
            </div>
        ),
        src: jobAndName,
    },
    {
        title: "Cửa Sổ Vỡ",
        quiz: (
            <div>
                <p>
                    Một trong các bạn L, I, A và R làm vỡ kính cửa sổ. Khi được
                    hỏi, họ trả lời như sau:
                </p>
                <ul className="pl-3 flex flex-col gap-1 my-1">
                    <li> {`L: "A làm vỡ".`} </li>
                    <li> {`I: "Không phải tôi".`} </li>
                    <li> {`A: "R làm vỡ".`} </li>
                    <li> {`R: "A đã nói dối".`} </li>
                </ul>
                <p> Vậy ai đã làm vỡ cửa sổ trong trường hợp: </p>
                <ol className="pl-[2rem] list-decimal">
                    <li> Có đúng một người đã nói thật.</li>
                    <li> Có đúng một người đã nói dối.</li>
                </ol>
            </div>
        ),
        choices: {
            array: ["I và A", "L và I", "R và L", "A và R"],
            answerId: 0,
        },
        explaination: (
            <div>
                <ol>
                    <li>
                        <div className="flex gap-1">
                            a{") "}
                            <p>Ta sẽ xem xét lần lượt ai đã nói thật:</p>
                        </div>
                        <ul className="pl-3 flex flex-col gap-1 my-1">
                            <li>
                                - Nếu A nói thật, thì C đã làm vỡ. Nhưng khi đó,
                                câu của B cũng đúng, như vậy sẽ dẫn đến mâu
                                thuẫn.
                            </li>
                            <li>
                                - Nếu B nói thật, thì B không làm vỡ kính, và
                                người làm vỡ chỉ có thể là A, C hoặc D. Nếu A
                                làm vỡ, thì D đã nói thật, mâu thuẫn. Nếu C làm
                                vỡ, thì D cũng đã nói thật, mâu thuẫn. Nếu D làm
                                vỡ, thì C đã nói thật, cũng mâu thuẫn. Vì vậy, B
                                cũng không nói thật.
                            </li>
                            <li>
                                - Nếu C nói thật, thì D đã làm vỡ, suy ra B
                                không làm vỡ và B cũng nói thật. Điều này cũng
                                mâu thuẫn vì chỉ có một người nói thật.
                            </li>
                            <li>
                                - Nếu D nói thật, thì C đã nói dối, tức là D
                                không làm vỡ; A đã nói dối, tức là C không làm
                                vỡ; B đã nói dối, thì B chính là người làm vỡ.
                                Do đó, trong trường hợp này, B là người làm vỡ
                                kính.
                            </li>
                        </ul>
                    </li>
                    <li className="flex gap-1">
                        b{") "}
                        <p>
                            A và C đưa ra hai khẳng định không thể cùng đúng, do
                            đó trong hai người A và C phải có ít nhất một người
                            nói dối.
                        </p>
                    </li>
                </ol>
                <p>
                    {`Nhưng vì trong bốn người chỉ có một người nói dối, nên suy
                    ra B và D nói thật. Theo lời của D, thì C nói dối, như vậy A
                    nói thật. Vì A nói "C làm vỡ", nên C là người làm vỡ kính
                    trong trường hợp này.`}
                </p>
            </div>
        ),
        src: brokenGlass,
    },
    {
        title: "Đàn Ông Thì Phải Khiêm Tốn",
        quiz: (
            <div>
                <p>
                    Có 4 chàng trai khiêm tốn là Hùng, Huy, Hoàng và Hải. Họ
                    tuyên bố như sau:
                </p>

                <p>{`Hùng: "Huy là người khiêm tốn nhất."`}</p>
                <p>{`Huy: "Hoàng là người khiêm tốn nhất."`}</p>
                <p>{`Hoàng: "Tôi không phải là người khiêm tốn nhất"`}</p>
                <p>{`Hải: "Tôi không phải là người khiêm tốn nhất"`}</p>

                <p>
                    Hóa ra, chỉ có một tuyên bố của 4 chàng trai khiêm tốn trên
                    là đúng. Vậy ai là người khiêm tốn nhất?
                </p>
            </div>
        ),
        choices: {
            array: ["Hùng", "Huy", "Hoảng", "Hải"],
            answerId: 3,
        },
        explaination: (
            <div className="space-y-4">
                <p>Hải là người khiêm tốn nhất</p>
                <p>
                    Nếu Hùng đúng thì Hoàng và Hải cũng đúng. Nếu Huy đúng thì
                    Hải cũng đúng. Nếu Hoàng đúng thì sao? Nếu Hoàng sai thì
                    sao?
                </p>
            </div>
        ),
        src: beHumble,
        className: "aspect-[9/7.5] min-[57rem]:h-[7.5rem] h-[6rem]",
    },
    {
        title: "Giới Tính Và Trung Thực",
        quiz: (
            <p>
                {`Có 13 bạn nhỏ ngồi quanh một bàn tròn. Họ thỏa thuận với nhau là
                hai bạn khác giới sẽ nói dối nhau, còn hai bạn cùng giới sẽ nói
                thật. Một bạn nói với bạn bên phải mình "Đa số trong chúng ta là
                con trai". Bạn này lại nói với bạn bên phải của mình "Đa số
                trong chúng ta là con gái". Bạn kế tiếp lại nói với bạn bên phải
                mình "Đa số trong chúng ta là con trai". Bạn này lại nói với bạn
                bên phải của mình "Đa số trong chúng ta là con gái", ... cho đến
                bạn cuối cùng nói với bạn đầu tiên "Đa số trong chúng ta là con
                trai". Hỏi có bao nhiêu bạn trai ngồi quanh bàn?`}
            </p>
        ),
        choices: {
            array: ["69", "6", "7", "5"],
            answerId: 2,
        },
        explaination: (
            <div>
                <p>
                    {`Do tổng số bạn ngồi quanh bàn là lẻ, nên số nam và số nữ không
            thể bằng nhau. Từ đó suy ra, trong hai câu nói: "Đa số trong
            chúng ta là con trai" và "Đa số trong chúng ta là con
            gái", có 1 câu sai và 1 câu đúng.`}
                </p>
                <p>
                    {`Theo giả thiết, có tất cả 7 bạn nói "Đa số trong chúng ta là
            con trai" và 6 bạn nói "Đa số trong chúng ta là con gái". 
            Chú ý rằng mỗi bạn từ số thứ tự 2 đến 13 đều nói ngược
            lại với điều nghe được, nên họ đã ngồi giữa hai người khác giới.`}
                </p>
                <p>Từ đây, ta suy ra:</p>
                <ul className="pl-3 flex flex-col gap-1 my-1">
                    <li>
                        Các bạn có số thứ tự 1, 5, 9, 13 cùng giới với nhau.
                    </li>
                    <li>
                        Các bạn có số thứ tự 3, 7, 11 khác giới với 4 bạn này.
                    </li>
                    <li>
                        Tương tự, các bạn có số thứ tự 2, 6, 10 cùng giới với
                        nhau.
                    </li>
                    <li>
                        Các bạn có số thứ tự 4, 8, 12 khác giới với 3 bạn này.
                    </li>
                </ul>
                <p>
                    Tổng cộng, có 3 + 4 = 7 bạn thuộc cùng một giới tính và 3 +
                    3 = 6 bạn còn lại khác giới với họ.
                </p>
                <p>{`Bạn thứ 13 cùng giới với bạn thứ 1, nên họ đã nói thật rằng "Đa số trong chúng ta là nam".`}</p>
                <p>Do đó, số nam ngồi quanh bàn tròn này là 7.</p>
            </div>
        ),
        src: genderHonest,
    },
    {
        title: "Ếch ngồi đáy xã hội",
        quiz: (
            <div>
                <p>
                    Andrew, Burt, Charlie, Danny and Eli cùng chơi một trò chơi
                    trong đó mỗi bạn sẽ là ếch hoặc kangaroo. Ếch luôn nói dối
                    còn kangaroo luôn nói thật:
                </p>
                <ol className="pl-[2rem] list-decimal">
                    <li>Andrew nói rằng Burt là một con kangaroo.</li>
                    <li>Charlie nói Danny là một con ếch.</li>
                    <li>Eli nói rằng Andrew không phải là ếch.</li>
                    <li>Burt nói rằng Charlie không phải là kangaroo.</li>
                    <li>
                        Danny lại nói Eli và Andrew là hai con thú khác nhau.
                    </li>
                </ol>
                <p>Hỏi có bao nhiêu con ếch trong số 5 bạn này?</p>
            </div>
        ),
        choices: {
            array: ["3", "4", "1", "-1"],
            answerId: 1,
        },
        explaination: (
            <div className="my-2">
                4 con ếch. Andrew, Burt, Danny, Eli là ếch, Charlie là kangaroo.
            </div>
        ),
        src: frog,
    },
    {
        title: "Lật mặt",
        quiz: (
            <div>
                <p>
                    Peter có 4 tấm bìa 2 mặt, một mặt ghi 1 chữ cái còn mặt kia
                    ghi một số.
                </p>
                <p>
                    {`Peter khẳng định rằng "Nếu 1 mặt của tấm bìa ghi chữ A thì
                    mặt kia ghi số 1".`}
                </p>
                <p>
                    Hiện trên bàn đặt 4 tấm bìa và mặt ngửa lên ghi lần lượt là
                    A, 1, 2, B.
                </p>
                <p>
                    Hỏi phải lật 2 tấm bìa nào để kiểm tra khẳng định của Peter
                    là đúng hay sai.
                </p>
            </div>
        ),
        choices: {
            array: [
                "Lật mặt B và mặt 1",
                "Lật mặt A và mặt 1",
                "Lật mặt B và mặt 2",
                "Lật mặt A và mặt 2",
            ],
            answerId: 3,
        },
        explaination: (
            <div className="space-y-4">
                <p>Phải lật mặt A và mặt 2.</p>
                <p>
                    Bạn nghĩ là phải lật tấm bìa có ghi là A? Bạn đã đúng. Còn
                    tấm bìa thứ hai là tấm nào? Chắc không phải là tấm bìa ghi
                    là B rồi? Nhưng 1 và 2 thì chọn cái nào? Hãy suy nghĩ cho
                    cẩn thận, đừng để bị mắc lừa.
                </p>
            </div>
        ),
        src: faces,
    },
];

export default g0c1;
