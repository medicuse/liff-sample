// main.js

async function main() {
  // ここに取得したLIFF IDを入れる
  const liffId = "2008359636-XaAq31G6"; // ← 例: "1651234567-abcdefg"

  // LIFF初期化
  try {
    await liff.init({ liffId });
    console.log("LIFF初期化完了");

    // LINEにログインしていなければログイン
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      console.log("すでにログイン済み");
    }
  } catch (err) {
    console.error("LIFF初期化失敗:", err);
  }
}

// 実行
main()


