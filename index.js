
// ナビゲーションの開閉
$(function() {
  $(".nav-toggle").on("click",function(){
      $("nav ul, .subpage nav ul").slideToggle();
      $(this).toggleClass("open");
  });
});
var windowWidth = $(window).width(); // ウィンドウズサイズ
var windowSm = 1060; // レスポンシブのスクリーンサイズ
//横幅1060以下のとき（スマホ時）
if (windowWidth <= windowSm) {
  $(function() {
    // ナビゲーションのリンクがクリックされたら、ナビゲーションを閉じる
    $('nav li a').click(function() {
    $("nav ul").slideToggle();
    $(this).toggleClass("open");  
	});
  });
}