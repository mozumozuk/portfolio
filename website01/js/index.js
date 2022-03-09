/*
「.offs」が付いた要素をスクロールしたらふわっと表示する
（「.offs」が付いた要素に対して、表示領域に入ったら「.ons」にクラスを変更する。）
・判定タイミング：対象がブラウザの下から 10%以上 入ったら実行、一度表示したら表示し続ける
*/
// スクロール出現用関数（.offs ? .ons）
function scr_ani(scr, offs_max) {
  var window_h = $(window).height();
  var offs_length = $(".offs").length;
  if (offs_length) {
    var first_item = offs_max - offs_length;
    for (var i = 0; i < offs_length; i++) {
      var data_scr = first_item + i;
      var offs = $('.offs[data-scr="' + data_scr + '"]');
      var target = offs.offset().top;
      var trigger = target - (window_h + scr - window_h * 0.1); // 表示領域
      if (trigger < 0) {
        offs.removeClass("offs").addClass("ons");
      } else {
        break;
      }
    }
  }
}
$(function () {
  // スクロール出現
  var scr = $(window).scrollTop();
  // スクロール出現アイテムにナンバリング
  var offs_max = $(".offs").length;
  for (var i = 0; i < offs_max; i++) {
    $(".offs").eq(i).attr("data-scr", i);
  }
  scr_ani(scr, offs_max);
  // スクロール時
  $(window).on("scroll", function () {
    var scr = $(window).scrollTop();
    // スクロール出現
    scr_ani(scr, offs_max);
  }); // end scroll
}); // end function

// ナビゲーションの開閉
$(function() {
	$("#nav-toggle").on("click",function(){
		$("nav ul").slideToggle();
		$(this).toggleClass("open");
	});
});
var windowWidth = $(window).width(); // ウィンドウズサイズ
var windowSm = 810; // レスポンシブのスクリーンサイズ
if (windowWidth <= windowSm) {
	// 横幅810以下のとき（スマホ時）
	$(function() {
		// ナビゲーションのリンクがクリックされたら、ナビゲーションを閉じる
		$('nav li a').click(function() {
			$('#nav-toggle').click()
  });
});
}
// GOTOPボタンを100pxスクロールしたら出現させる
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
      $(".gotop").fadeIn();
  } else {
    $(".gotop").fadeOut();
  }
});