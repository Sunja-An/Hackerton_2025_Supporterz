document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ

    // ユーザーが入力したIDとパスワードを取得
    const userId = document.querySelector("input[name='ID']").value;
    const password = document.querySelector("input[name='password']").value;

    // 簡単なバリデーション（空欄チェック）
    if (userId.trim() === '' || password.trim() === '') {
      alert('IDとパスワードを入力してください。');
      return;
    }

    // 仮の認証処理（本番ではAPIリクエストなどに置き換える）
    if (userId === 'admin' && password === 'password123') {
      window.location.href = 'index.html'; // ログイン成功時にindex.htmlへ
    } else {
      alert('IDまたはパスワードが間違っています。');
    }
  });
});
