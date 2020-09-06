(function(_global){

  var monster, number, idurl, statusid, status;
  monster = 150;//通常モンスター数

  idurl = window.prompt("URL,または動画IDを入力してください。","")//プレイヤーにURLや動画IDを入力してもらう
  const videoid = idurl.replace(/[^0-9]/g, '');//動画IDから値を抽出

  if (videoid == 18008585)//うんこちゃん モンスターファーム2 Part01 12/6/3
  {
    number = monster + 1;//特定キャラの指定(通常キャラの最大値+αで指定)
  }
  else//その他の動画
  {
    number = videoid % monster;//余剰で参照に使用する値を計算
  }

alert(number)

\gameActors.actor(number). setup(number)//キャラステータスの初期化
\gameParty. addActor(number)//該当するキャラをパーティーに追加する

for (let statusid = 0; statusid < 6; statusid++)//個体ごとに異なるステータスを設定
{
  status = Math.floor( Math.random() * 20 );
  \gameActors.actor(number). addParm(statusid, status);
}

/gameMesage.add()


})();
