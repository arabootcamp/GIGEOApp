$(function () {
  // Handler for .ready() called.
  const breakpoint=575.98;//767.98;

  //settting load
  window.addEventListener("load", function () {
    if ($(window).width() <= breakpoint) {
      $('.navbar').addClass('position-relative');
      $('.navbar__menu').addClass('position-absolute top-100 end-0 bg-light ');
    }
    $('.navbar__menu').removeClass('invisible');
    $('.navbar__menu').hide();
  });

  //click bars
  $('.button--bars').click(function () {
    $('.navbar__menu').toggle();
  });

  //position to lower the menu
  $(window).resize(function () {
    if ($(window).width() <= breakpoint) {
      $('.navbar').addClass('position-relative');
      $('.navbar__menu').addClass('position-absolute top-100 end-0 bg-light ');
    } else {
      $('.navbar').removeClass('position-relative');
      $('.navbar__menu').removeClass('position-absolute top-100 end-0 bg-light ');
    }
  });

});