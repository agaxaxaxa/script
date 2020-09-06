(function(_global){

  var monster, number, idurl, statusid, status;
  monster = 150;//通常モンスター数

  idurl = window.prompt("URL,または動画IDを入力してください。","")//プレイヤーにURLや動画IDを入力
  const videoid = idurl.replace(/[^0-9]/g, '');//動画IDから値を抽出

  if (videoid == 18008585)//うんこちゃん モンスターファーム2 Part01 12/6/3
  {
    number = monster + 1;//特定キャラの指定(通常キャラの最大値+αで指定)
  }
  else//その他の動画
  {
    number = videoid % monster;//余剰で参照に使用する値を計算
  }

  $gameParty.removeActor(0)//先頭キャラの追い出し

  $gameActors.actor(number). setup(number)//キャラステータスの初期化
  $gameParty. addActor(number)//該当するキャラをパーティーに追加

  for (let statusid = 0; statusid < 6; statusid++)//個体ごとに異なるステータスを設定
  {
    status = Math.floor( Math.random() * 21 );//0～20の間でスタータスの加算する値を決定
    $gameParty.members(0).addParm(statusid, status);//0番目にキャラへステータス情報の反映
  }

  $gameMesage.add($gameParty.members(0).name);//パーティに追加されたキャラの名前を表示

})();
