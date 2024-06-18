// 「1」から「コマンドライン引数で与えられた数」までを合計して出力するプログラムです

'use strict' // JavaScript を Strict モードで利用するための記述。
const number = process.argv[2] || 0; // コマンドライン引数が指定されていればその値、そうでなければ 0 を変数 number に代入する。
let sum = 0;
for (let i = 1; i <= number; i++) { // 1 から開始、number の数値 まで、1 ずつ足す。
  sum = sum + i;
}
console.log(sum); // sum の値を出力する。

/*
  コマンドライン引数とは、シェルからコマンドを実行するときに、コマンドと一緒に書いた引数をプログラムに渡す仕組みのことです。

    ・process.argv : Node.js がデフォルトで提供してくれる、コマンドライン引数が入った配列です。

  なぜ添字に 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、
  1 番には実行しているプログラムのファイルのパスが入る、という決まりがあるためです。
  そのため、コマンドの後ろに書いた最初の引数は process.argv[2] となるのです。

    たとえば、

    node app.js 100 200

    というコマンドで引数 2 つを指定して app.js を起動した場合、

    process.argv[0] = '/usr/local/bin/node'  // nodeのパスの例
    process.argv[1] = '/nodejs-study/app.js' // app.jsのパスの例
    process.argv[2] = '100'                  // コマンドライン引数の 1 つ目
    process.argv[3] = '200'                  // コマンドライン引数の 2 つ目

    の 4 つが配列の形でプログラムに渡されます。

  また、|| を普通の式の中で使う書き方が、初めて出ています。
  このコードが実行されると、process.argv[2] が 未入力 の場合、number には 0 が代入されます。

  論理和は、先に左側の値を見て truthy であれば、その値を結果として使います。
  + そして左側の値が falsy 、つまり 0 や null、undefined などであれば、その右側の値を結果として使う、という特性があります。

  その特性を利用して、選択的な代入をしています。

    null || 1;      // 1 と表示
    undefined || 1; // 1 と表示
    0 || 1;         // 1 と表示
    2 || 1;         // 2 と表示



  文字列や数値自体を if 文で判定しようとする状況で、true に変換される値を truthy (トゥルーシー)、
  false に変換される値を falsy (フォールシー) といいます。

    ・truthy な値
      true
      0 以外の数値
      1 文字以上含まれている文字列（string）
      オブジェクト
      コレクション
      関数
*/