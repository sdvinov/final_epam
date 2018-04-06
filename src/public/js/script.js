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
  
  $('.form-switcher').click((e) => {
    e.preventDefault();
    if($('.register-form').is(":visible")) {
      $('.form-switcher').text('Don\'t have an account?');
    } else if($('.login-form').is(":visible")) {
      $('.form-switcher').text('Already have an account?');
    }
    $('.register-form').toggle();
    $('.login-form').toggle();
  });
});
