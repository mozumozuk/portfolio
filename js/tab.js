$(function () {



  // タブメニュー リンク未使用
  $('.js-tab-btn').click(function () {
      var index = $('.js-tab-btn').index(this);

      $('.js-tab-btn').removeClass('is-btn-active');
      $(this).addClass('is-btn-active');
      $('.tab__contents-item').removeClass('is-contents-active');
      $('.tab__contents-item').eq(index).addClass('is-contents-active');
  });



});

