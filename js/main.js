$(function(){

  // waypointanimation
    $('.event').waypoint(function(direction){
      let activePoint = $(this.element);
      if (direction === 'down') {
        activePoint.addClass('eventOn');
      // } else {
      //   activePoint.removeClass('eventOn');
      }
    },{offset : '75%'});

  //言語切り替え
  var en=$('.en'),
      ja=$('.ja'),
      btn_ja=$('.lang_ja'),
      btn_en=$('.lang_en');

  en.hide();
  btn_ja.css('color','#c5b482');

  btn_en.on('click',function(){
    ja.hide();
    en.show();
    btn_ja.css('color','#f6f6f6');
    btn_en.css('color','#c5b482');
  });
  btn_ja.on('click',function(){
    en.hide();
    ja.show();
    btn_en.css('color','#f6f6f6');
    btn_ja.css('color','#c5b482');
  });

  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

  $("#open-01").animatedModal({
		modalTarget:'modal-01',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  
  $("#open-02").animatedModal({
		modalTarget:'modal-02',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-03").animatedModal({
		modalTarget:'modal-03',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-04").animatedModal({
		modalTarget:'modal-04',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-05").animatedModal({
		modalTarget:'modal-05',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	//  モーダルウィンドウのエリア外の挙動
  });
  $("#open-06").animatedModal({
		modalTarget:'modal-06',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-07").animatedModal({
		modalTarget:'modal-07',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-08").animatedModal({
		modalTarget:'modal-08',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-09").animatedModal({
		modalTarget:'modal-09',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-09").animatedModal({
		modalTarget:'modal-09',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
  });
  $("#open-10").animatedModal({
		modalTarget:'modal-10',	// ポップアップさせるモーダルウィンドウを指定
		animatedIn: 'fadeInDown',	// モーダルウィンドウが開くときの動きを設定
		animatedOut: 'bounceOutDown',	// モーダルウィンドウが閉じるときの動きを設定
		animationDuration: '1s',	// アニメーションに要する時間
		color: '#fafafa', 	// モーダルウィンドウの背景色
		overflow: 'auto'	// モーダルウィンドウのエリア外の挙動
	});

});












