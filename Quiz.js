const quiz = [
  {
    question: "2022年8月時点でのReal Madrid所属の7番は誰？",
    answers: [
      "エデン・アザール",
      "クリスティアーノ・ロナウド",
      "キリアン・エンバぺ",
      "ヴィ二シウス・ジュニオール",
    ],
    correct: "エデン・アザール",
  },
  {
    question: "カリム・ベンゼマの次に在籍年数が多い選手は誰？",
    answers: [
      "ルカ・モドリッチ",
      "ダニエル・カルバハル",
      "トニー・クロース",
      "マルセロ",
    ],
    correct: "ダニエル・カルバハル",
  },
  {
    question: "レアル・マドリードの宿敵は？",
    answers: [
      "バイエルン・ミュンヘン",
      "ビジャレアル",
      "バルセロナ",
      "アトレティコ・マドリード",
    ],
    correct: "バルセロナ",
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuize = () => {
  document.getElementById("js-qestion").textContent =
    "Q" + (quizIndex + 1) + ".  " + quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuize();

const animete = document.querySelector("button");

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuize();
  } else {
    window.alert(
      "終了！あたなの正解数は" + score + "/" + quizLength + "です！"
    );
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
