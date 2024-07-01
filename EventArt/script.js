$(function () {

  $('#menu-button').on('click', function() {
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
  });

  //ナビゲーションの開閉処理  上記のようにif文で
  $('#menu-button').on('click', function() {

      // ナビゲーション非表示時
    if ($('#burger-menu').css('display') == 'block') {
      $('#burger-menu').css('display', 'none');
      $('#header').removeClass('open');
    } else {
      // ナビゲーション表示時
      $('#burger-menu').css('display', 'block');
      $('#header').addClass('open');
      // alert('clicked');
    }
  });

  // ナビゲーション項目クリック時の動作
  $('.menu').on('click', function() {
    $('#burger-menu').css('display', 'none');
    $('#header').removeClass('open');
    $('.menu-btn').toggleClass('menu-btn2');
  });
  
  // バーガーメニューの色切り替え
  $('.menu-btn').on('click', function(){
    $(this).toggleClass('menu-btn2');
  });

  // カルーセル
  $('.carousel').slick({
    arrows: false,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }
    ]
  });


  // Artist欄 画像クリック制御
  // $('.artist-img').click(function() {
  //   $('.description').hide();
  //   $(this).siblings('.description').show();
  //   if (('.description').css('display') != 'none') {
  //     $(this).siblings('.description').toggle();
  //   }
  // });
  $(document).ready(function() {
    $('.artist-img').click(function() {
        // クリックしていない要素の説明欄を非表示にする
        $('.description').not($(this).siblings('.description')).hide();
        // クリックしていない要素の画像サイズを300pxに戻す
        $('.description').parent().not($(this).parent()).removeClass('artist-div-highlight').addClass('artist-div');

        // クリックされた画像の説明欄だけを表示/非表示に切り替える
        $(this).siblings('.description').toggle();
        if ($(this).siblings('.description').css('display') == 'block') {
          $(this).parent().removeClass('artist-div').addClass('artist-div-highlight');
        } else {
          $(this).parent().removeClass('artist-div-highlight').addClass('artist-div');
        }
    });
  });
  
  // $('.artist-img').click(function() {
    // すべての説明を非表示にする
    // $('.description').hide();
    
    // クリックされた画像の説明を表示する
    // $(this).siblings('.description').show();
// });


});