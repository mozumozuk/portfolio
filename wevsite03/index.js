  (function(d) {
    var config = {
      kitId: 'tua8ggm',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

// ナビゲーションの開閉
$(function() {
	$("#nav-toggle").on("click",function(){
      $(this).toggleClass("active");
      $(this).toggleClass("open");
      $("#g-nav").toggleClass('panelactive');
	});
});
//ナビゲーションのリンクがクリックされたとき
$(function() {
	$("#g-nav a").on("click",function(){
      $("#nav-toggle").removeClass('open');
      $("#nav-toggle").removeClass('active');
      $("#g-nav").removeClass('panelactive');
	});
});
// GOTOPボタンを100pxスクロールしたら出現させる
$(window).on("scroll", function() {
  if ($(this).scrollTop() > 100) {
      $("#page_top").fadeIn();
  } else {
    $("#page_top").fadeOut();
  }
});
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


