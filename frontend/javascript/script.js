// script.js

// グローバル変数：lecture.jsonのデータを格納する配列
let lectureList = [
    {
        "Lecture Name": "英語読解（１）ａ",
        "Schedule": "金４",
        "Instructor": "笠原　一郎"
    },
    {
        "Lecture Name": "英語読解（１）ａ",
        "Schedule": "金４",
        "Instructor": "叶澤　恵"
    },
    {
        "Lecture Name": "英語読解（１）ａ",
        "Schedule": "金４",
        "Instructor": "飯塚　秀樹"
    },
    {
        "Lecture Name": "宗教学講義ｂ",
        "Schedule": "木２",
        "Instructor": "土居　由美"
    }
  ];
  
  /**
   * 全角数字を半角に変換する関数
   * 例: "４" → "4"
   * @param {string} str - 変換したい文字列
   * @returns {string} - 半角に変換された文字列
   */
  function convertToHalfWidth(str) {
    return str.replace(/[０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
  }
  
  // ① ページ読み込み時にlecture.jsonをフェッチする
  window.addEventListener('load', function() {
    fetch('../data/lecture.json')
      .then(response => response.json())
      .then(data => {
        lectureList = data;
        console.log('lecture.jsonの読み込み完了:', lectureList);
      })
      .catch(error => {
        console.error('lecture.jsonの読み込みエラー:', error);
      });
  });
  
  // ② 検索ボタンのイベントリスナー
  document.getElementById('searchLecture').addEventListener('click', function() {
    // 各フィルター項目の値を取得（前後の空白は削除）
    const filterLectureName = document.getElementById('filterLectureName').value.trim();
    const filterDay = document.getElementById('filterDay').value;       // 空文字（""）なら未指定
    const filterPeriod = document.getElementById('filterPeriod').value; // 同上
    const filterInstructor = document.getElementById('filterInstructor').value.trim();
  
    // フィルター処理
    const filtered = lectureList.filter(item => {
      let match = true;
      // 講義名（部分一致）
      if (filterLectureName) {
        if (!item["Lecture Name"].includes(filterLectureName)) {
          match = false;
        }
      }
      // 曜日・時限の両方が指定された場合
      if (filterDay && filterPeriod) {
        if (item["Schedule"] !== (filterDay + filterPeriod)) {
          match = false;
        }
      } else if (filterDay) {
        // 曜日のみ指定の場合：Scheduleの先頭1文字が一致するか
        if (item["Schedule"].charAt(0) !== filterDay) {
          match = false;
        }
      } else if (filterPeriod) {
        // 時限のみ指定の場合：Scheduleの残りの文字列（数字部分）が一致するか
        if (item["Schedule"].substring(1) !== filterPeriod) {
          match = false;
        }
      }
      // 講師名（部分一致）
      if (filterInstructor) {
        if (!item["Instructor"].includes(filterInstructor)) {
          match = false;
        }
      }
      return match;
    });
  
    // 結果表示エリアのクリア
    const resultsDiv = document.getElementById('lectureResults');
    resultsDiv.innerHTML = '';
  
    if (filtered.length === 0) {
      resultsDiv.textContent = '該当する講義は見つかりませんでした。';
      return;
    }
  
    // ③ フィルター結果をリスト状に表示
    filtered.forEach((item, index) => {
      // 各結果を囲むdiv
      const div = document.createElement('div');
      div.className = 'lecture-item';
  
      // 講義名、Schedule、講師名を表示
      const info = document.createElement('p');
      info.textContent = `講義名: ${item["Lecture Name"]}　｜　スケジュール: ${item["Schedule"]}　｜　講師: ${item["Instructor"]}`;
      div.appendChild(info);
  
      // 登録ボタンを作成
      const regButton = document.createElement('button');
      regButton.textContent = '登録';
      // 登録ボタンをクリックしたときの処理
      regButton.addEventListener('click', function() {
        registerLecture(item);
      });
      div.appendChild(regButton);
  
      resultsDiv.appendChild(div);
    });
  });
  // ④ 登録ボタンが押されたときに、講義情報を時間割テーブルに追加する関数
function registerLecture(item) {
    // item["Schedule"]は例:"金４"となっているので、1文字目が曜日、残りが時限
    const scheduleStr = item["Schedule"];
    const day = scheduleStr.charAt(0);          // 例: "金"
    let period = scheduleStr.substring(1);      // 例: "４" ※全角数字の場合もある
  
    console.log("registerLecture: もとの時限文字列（全角可能性）:", period);
    
    // 全角数字を半角に変換
    period = convertToHalfWidth(period);
    console.log("registerLecture: 変換後の時限文字列（半角）:", period);
    
    // セルを取得（table内のdata-day, data-periodの属性が一致するセル）
    // ※ HTMLのセルでは、data-period 属性は半角数字の文字列（例:"4"）で設定されている前提です。
    const selector = `#scheduleTable td[data-day="${day}"][data-period="${period}"]`;
    console.log("registerLecture: セレクタ:", selector);
    
    const cell = document.querySelector(selector);
    if (cell) {
      console.log("registerLecture: セルが見つかりました:", cell);
      // セルに講義名と講師名を2行で表示するため、innerHTMLを使用して<br>で改行
      cell.innerHTML = item["Lecture Name"] + "<br>" + item["Instructor"];
      console.log("registerLecture: セルに登録された内容:", cell.innerHTML);
    } else {
      alert(`スケジュール ${item["Schedule"]} のセルが見つかりません。`);
      console.error("registerLecture: セルが見つからない。");
    }
  }
  
  
  // ⑤ リセットボタンのイベントリスナー
  document.getElementById('resetButton').addEventListener('click', function() {
    // 検索フォームのリセット
    document.getElementById('lectureSearchForm').reset();
    // 検索結果のクリア
    document.getElementById('lectureResults').innerHTML = '';
    // 時間割テーブルの全セルをクリア
    const cells = document.querySelectorAll('#scheduleTable td');
    cells.forEach(cell => cell.textContent = "");
    console.log("リセットしました。");
  });
  