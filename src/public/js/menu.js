$(document).ready(function () {
  $('.pancakes').click(() => {
    $('.navigation').animate({left: '0'});
    $('.pancakes').animate({left: '-100px'});
    $('.container-shade').fadeIn('slow');
    $('.container-shade').click(() => {
      $('.navigation').animate({left: '-305px'});
      $('.pancakes').animate({left: '0'});
      $('.container-shade').fadeOut('slow');
    });
  });
});
