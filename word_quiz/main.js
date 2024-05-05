// 変数宣言
let displayEng = '';
let random = '';
let answer = '';
let time = '';
let aaa = 0;

let ansFirst = '';
let ansSecond = '';
let ansThird = '';

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
const wordList = ['apple', 'banana', 'orange', 'berry', 'lemon', 'melon', 'peach', 'grape'];

// 単語の意味
const japWord = ['りんご', 'バナナ', 'みかん', 'ベリー', 'レモン', 'メロン', '桃', 'ぶどう'];


// 実行される処理
start.addEventListener('click', () => {
  start.style.display = 'none';
  ans.style.display = 'block';

  // timer();

  displayWord();
  
});


//関数リスト

//問題表示
const displayWord = () => {
  
  //配列からランダムに問題用の単語を取得
  random = Math.floor(Math.random() * wordList.length);
  quiz.textContent = wordList[random];

  aaa++;
  console.log('今回の問題はこれ：' + wordList[random] + aaa + '回目');

  //配列からランダムに解答用の単語を取得
  answer = japWord[random];

  // 発言を作成
  const speak = new SpeechSynthesisUtterance(quiz.textContent);
  speak.lang = 'en-EN';
  // 発言を再生
  speechSynthesis.speak(speak);

  //参考動画　https://www.youtube.com/watch?v=PnIJNYPse9w&ab_channel=%E3%82%BB%E3%82%A4
  // addeventlistener https://qiita.com/rukiadia/items/03aaa8955c0f6576a5e7

  let extraJap = japWord.concat();
  console.log(extraJap);
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
  console.log('今回の解答はこれ：' + answer);
  
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

  checkAns();
};

//回答の正誤判定
const checkAns = () => {

  //選択された解答を判定
  selected.forEach(function(element){
    element.addEventListener('click', (e) => {

      console.log('正解は' + answer);
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
        chosenDiv.style.backgroundColor = '#cff7f7';
        // displayWord();
        // checkAns(answer);
      }, 500);
      displayWord();
      
    });
  });
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