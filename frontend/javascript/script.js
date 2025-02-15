/*
 * script.js
 *
 * このファイルでは、講義情報送信用の処理を実装しています。
 * 講義情報送信ボタンをクリックすると、入力データが関数 XXXXX.xxx に渡され、
 * 返り値（講義情報の場合は 0 または 1）に応じて、該当する曜日・時限のセルを更新します。
 *
 * ※ XXXXX.xxx は、実際のバックエンド処理に合わせた関数名に変更してください。
 */

// --------------------------------------------------
// 1. 講義情報送信ボタンのクリックイベント
// --------------------------------------------------
document.getElementById('submitLecture').addEventListener('click', function () {
  // 1-1. 講義情報の各入力値を取得
  const lectureName = document.getElementById('lectureName').value.trim();
  const dayOfWeek = document.getElementById('dayOfWeek').value;
  const period = document.getElementById('period').value;
  const lecturerName = document.getElementById('lecturerName').value.trim();

  // 1-2. 入力チェック（すべての項目が入力されているか）
  if (!lectureName || !dayOfWeek || !period || !lecturerName) {
    alert('全ての講義情報を入力してください。');
    return;
  }

  // 1-3. 送信用データオブジェクトを作成
  const lectureData = {
    lectureName: lectureName,
    dayOfWeek: dayOfWeek,
    period: period,
    lecturerName: lecturerName
  };
  console.log('送信する講義情報:', lectureData);

  // 1-4. 講義情報送信用関数 XXXXX.xxx を呼び出し、講義の有無（0 or 1）を取得
  //     ※ 実際の環境では、ここをバックエンド通信等に置き換えてください。
  // 新コード例：simulateLectureResponse を呼び出す
  const hasLecture = simulateLectureResponse(lectureData);//test
  console.log('講義情報送信の返り値:', hasLecture);

  // 1-5. 返り値に応じて、指定された曜日・時限のセルの内容を更新
  const tableCellSelector = '#scheduleTable td[data-day="' + dayOfWeek + '"][data-period="' + period + '"]';
  const tableCell = document.querySelector(tableCellSelector);
  if (hasLecture === 1) {
    tableCell.textContent = lectureName;
  } else {
    tableCell.textContent = "講義なし";
  }
});

// --------------------------------------------------
// 2. リセットボタンのクリックイベント
// --------------------------------------------------
document.getElementById('resetButton').addEventListener('click', function () {
  // 2-1. 講義フォームの入力内容をリセット
  document.getElementById('lectureForm').reset();

  // 2-2. 時間割テーブルの全セルの内容をクリア
  const cells = document.querySelectorAll('#scheduleTable td');
  cells.forEach(cell => {
    cell.textContent = "";
  });
});
