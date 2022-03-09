
// メイン画像をカルーセルにする
$(function(){
	$(".slide").carouFredSel({
		responsive:true
	});
});
// 社長のメッセージのReadMoreボタンを開閉する
$(function() {
	$(".message .inner .readmorebtn").on("click",function(){
			$(".message_text").slideToggle();
	});
});
// 先輩からのメッセージのReadMoreボタンを開閉する
$(function() {
	$(".sec3 .readmorebtn").on("click",function(){
		$(".sec3 .interview_text").slideToggle();
	});
});
// ナビゲーションの開閉ボタン
$(function() {
	$("#nav-toggle").on("click",function(){
		$("nav ul").slideToggle();
		$(this).toggleClass("open");
	});
});
// FAQの質問をクリックしたときの動作
$(function() {
  $('.question').click(function() {
    //クリックされた質問の子要素のspan以外からはopenというクラスを外す
    $('.question').not(this).children('span').removeClass('open');
    //クリックされた質問部分に対する回答以外は全て閉じる
    $('.question').not(this).next().slideUp(400);
    
    //クリックされた質問の子要素のspanにopenクラスが付与されいなければ付与し、付与されていれば外す
    $(this).children('span').toggleClass('open');
    //クリックされた質問に対する回答を表示する
    $(this).next().slideToggle(400);
  });
});
var windowWidth = $(window).width(); // ウィンドウズサイズ
var windowSm = 1060; // レスポンシブのスクリーンサイズ
if (windowWidth <= windowSm) {
	//横幅1060以下のとき（スマホ時）
	$(function() {
		// ナビゲーションのリンクがクリックされたら、ナビゲーションを閉じる
		$('nav li a').click(function() {
			$('#nav-toggle').click()
  });
});
}
// ボタンをマウスオーバーしたときの動作
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
/*
スクロール出現
（「.offs」が付いた要素に対して、表示領域に入ったら「.ons」にクラスを変更する。）
・判定タイミング：対象がブラウザの下から 30%以上 入ったら実行、画面から出たら戻す
*/
// スクロール出現用関数（.offs ⇄ .ons）
function scr_ani(scr, offs_max) {
  var window_h = $(window).height(),
    offs_length = $(".offs").length,
    ons_length = $(".ons").length;
  if (offs_length) {
    var first_item = offs_max - offs_length;
    for (var i = 0; i < offs_length; i++) {
      var data_scr = first_item + i;
      var offs = $('.offs[data-scr="' + data_scr + '"]');
      var target = offs.offset().top;
      var trigger = target - (window_h + scr - window_h * 0.1);
      if (trigger < 0) {
        offs.removeClass("offs").addClass("ons");
      } else {
        break;
      }
    }
  }
  if (ons_length) {
    var last_item = ons_length - 1;
    for (var i = 0; i < ons_length; i++) {
      var data_scr = last_item - i;
      var ons = $('.ons[data-scr="' + data_scr + '"]');
      var target = ons.offset().top;
      var trigger = target - (window_h + scr);
/*      if (trigger > 0) {
        ons.removeClass("ons").addClass("offs");
      } else {
        break;
      }*/
    }
  }
}

$(function () {
  /*
  スクロール出現
  */
  var scr = $(window).scrollTop();
  // スクロール出現アイテムにナンバリング
  var offs_max = $(".offs").length;
  for (var i = 0; i < offs_max; i++) {
    $(".offs").eq(i).attr("data-scr", i);
  }

  scr_ani(scr, offs_max);

  /************
  スクロール時
  ************/
  $(window).on("scroll", function () {
    var scr = $(window).scrollTop();
    /*
    スクロール出現
    */
    scr_ani(scr, offs_max);
  }); // end scroll
}); // end function