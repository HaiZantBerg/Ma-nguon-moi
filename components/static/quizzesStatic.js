import Image from "next/image";

export const quizzes = [
    `Năm người thợ tên là: Da, Điện, Hàn, Tiện và Sơn làm 5 nghề khác nhau và trùng với tên của 5 người họ nhưng không có ai làm 
    nghề trùng với tên mình. Tên của bác thợ da trùng với nghề của anh vợ mình và vợ bác chỉ có 2 anh em. Bác Tiện không làm 
    thợ sơn mà lại là em rể của bác thợ hàn. Bác thợ sơn và bác thợ da là hai anh em cùng họ. Hãy cho biết bac Da và bác Tiện 
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
    // `Giả sử bạn được bay đến Ý và vô tình đi ngang qua tháp nghiêng Pisa, và quyết định rằng sẽ mô phỏng lại thí nghiệm của Galileo,
    // bạn nhớ rằng Galileo đã đưa ra một mệnh đề rằng: "Tốc độ rơi của các vật có khối lượng khác nhau, kể cả rơi từ cùng độ cao,
    // là như nhau khi không có lực cản.". Hãy thử thả 1 quả bóng bàn và 1 quả banh, đoán xem quả nào chạm đất trước khi lực cản
    // không khí là quả nhỏ để xét?`,
];

export const quizCardImg = [
    <Image key="quizCardImg1" />,
    <Image key="quizCardImg2" />,
    <Image key="quizCardImg3" />,
    <Image key="quizCardImg4" />,
];

export const quizName = [
    `Trùng tên nghề nghiệp`,
    `Cửa sổ vỡ`,
    `Đàn ông thì phải khiêm tốn`,
    `Giới tính và trung thực`,
];

export const answerArray = [2];

export const choicesArray = [["Quả bóng bàn", "Quả banh", "Cả 2 quả"]];
