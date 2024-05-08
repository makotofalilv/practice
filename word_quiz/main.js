// 変数宣言
let displayEng = '';
let random = '';
let answer = '';
let time = '';
let aaa = 0;

// 必要なHTML要素の取得
const start = document.getElementById('start');
const quiz = document.getElementById('en_word');
const ans_1 = document.getElementById('ans-1');
const ans_2 = document.getElementById('ans-2');
const ans_3 = document.getElementById('ans-3');
const ans_4 = document.getElementById('ans-4');
const ans = document.getElementById('ans');
const selectAns = document.getElementsByClassName('ans');
const selected = Array.from(selectAns);
const count = document.getElementById('count');

// 英単語リスト
const wordList = ['ruminate', 'function', 'terminate', 'limmit', 'nod', 'surpress', 'obligate', 'frighten', 'doze', 'divert', 'duplicate', 'enhance', 'immigrate', 'loathe', 'mimic', 'obstruct', 'penetrate', 'summarize', 'attain', 'conceal', 'convey', 'depart', 'wrest'];

// 単語の意味
const japWord = ['熟考する', '機能する', '終わらせる', '制限する', '頷く', '抑制する', '義務付ける', '怖がらせる', 'うたた寝する', '注意をそらす', '複製する', '高める', '移住する', '嫌う', '真似をする', 'ふさぐ', '貫く', '要約する', '得る', '隠す', '運ぶ', '出発する', '奪う'];


// 実行される処理
start.addEventListener('click', () => {
  start.style.display = 'none';
  ans.style.display = 'block';

  setTimeout(() => {
    timer();
    displayWord();
  }, 500);
  
  //回答選択肢のイベントリスナーを設定
  selected.forEach(function(element){
    element.addEventListener('click', (e) => {

      // console.log('正解は' + answer);
      console.log('選択したのは' + element.textContent);

      //クリックされた要素のIDを取得
      const chosenDiv = document.getElementById(element.id);
      console.log(chosenDiv);

      //正誤判定 間違いの場合true
      if(element.textContent != answer) {
        console.log('wrong');
        //解答誤りの通知のための背景カラー変更
        chosenDiv.style.backgroundColor = 'red';
        //数秒後にカラーを戻す
        setTimeout(() => {
          chosenDiv.style.backgroundColor = '#cff7f7';
        }, 500);
        return;
      }
      console.log('correct');
      chosenDiv.style.backgroundColor = 'lightgreen';

      setTimeout(() => {
      // 選択肢を青色に戻す
        chosenDiv.style.backgroundColor = '#cff7f7';
        displayWord();
      }, 500);
    });
  });
});

//問題表示
const displayWord = () => {
  
  //配列からランダムに問題用の単語を取得
  random = Math.floor(Math.random() * wordList.length);
  quiz.textContent = wordList[random];

  aaa++;
  console.log('今回の問題はこれ：' + wordList[random] + ' : ' + aaa + '問目');

  //配列からランダムに解答用の単語を取得
  answer = japWord[random];

  // 発言を作成
  const speak = new SpeechSynthesisUtterance(quiz.textContent);
  speak.lang = 'en-EN';
  // 発言を再生
  speechSynthesis.speak(speak);

  let extraJap = japWord.concat();
  
  let num = ['1', '2', '3', '4'];
  let ansNum = Math.floor(Math.random()*num.length);
  switch(num[ansNum]) {
    case '1':
      ans_1.textContent = answer;
    break;
    case '2':
      ans_2.textContent = answer;
    break;
    case '3':
      ans_3.textContent = answer;
    break;
    case '4':
      ans_4.textContent = answer;
    break;
  }
  
  //答えと同じ選択肢を排除
  extraJap.splice(random,1);
  //解答選択肢の数値も同じく排除
  num.splice(ansNum,1);

  //ランダムの選択肢
  let ansOther = '';
  let numOther = '';
  do {
    ansOther = Math.floor(Math.random()*extraJap.length);
    numOther = Math.floor(Math.random()*num.length);
    switch(num[numOther]) {
      case '1':
      ans_1.textContent = extraJap[ansOther];
    break;
    case '2':
      ans_2.textContent = extraJap[ansOther];
    break;
    case '3':
      ans_3.textContent = extraJap[ansOther];
    break;
    case '4':
      ans_4.textContent = extraJap[ansOther];
    break;
    }
    extraJap.splice(ansOther,1);
    num.splice(numOther,1);
  }while (num.length != 0);//選択肢数の配列がなくなるまで繰り返す
  // checkAns();
};

//タイマー
const timer = () => {
  // タイマー部分のHTML要素（p要素）を取得する
  time = count.textContent;
 
  const id = setInterval(() => {

    // カウントダウンする
    time--;
    count.textContent = time;

    // カウントが0になったらタイマーを停止する
    if(time <= 0) {
      gameOver(id);
    }
  }, 1000);
};

// ゲームを終了
const gameOver = id => {
  clearInterval(id);

  let message = '【OK】リトライ / 【キャンセル】終了'
  const result = confirm(message);

  // OKボタンをクリックされたらリロードする
  if(result == true) {
    window.location.reload();
  }
};