$(function () {




  // menu.html

  // Menuタブ選択時
  $('#Menu-a-link').on('click', function() {
    $('#food-menu-window').css('display', 'block');
    $('#wine-list-window').css('display', 'none');
    $('#drinks-window').css('display', 'none');
    $('#spirits-window').css('display', 'none');
  });
  // wine listタブ選択時
  $('#wine-a-link').on('click', function() {
    $('#food-menu-window').css('display', 'none');
    $('#wine-list-window').css('display', 'block');
    $('#drinks-window').css('display', 'none');
    $('#spirits-window').css('display', 'none');
  });
  // Drinksタブ選択時
  $('#drinks-a-link').on('click', function() {
    $('#food-menu-window').css('display', 'none');
    $('#wine-list-window').css('display', 'none');
    $('#drinks-window').css('display', 'block');
    $('#spirits-window').css('display', 'none');
  });
  // Spiritsタブ選択時
  $('#spirits-a-link').on('click', function() {
    $('#food-menu-window').css('display', 'none');
    $('#wine-list-window').css('display', 'none');
    $('#drinks-window').css('display', 'none');
    $('#spirits-window').css('display', 'block');
  });


});