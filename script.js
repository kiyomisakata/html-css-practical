$(function () {

  // カルーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    arrows: false,
    fade: true
  });

  $('.hover').on('mouseover', function () {
    $(this).animate( { opacity: 0.5, }, 100);
  });
  $('.hover').on('mouseout', function () {
    $(this).animate( { opacity: 1.0, }, 100);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100 ) {
      $('#topbutton').fadeIn();
    } else {
      $('#topbutton').fadeOut();
    }
  });

  $(document).ready(function() {
    $('a').on('click', function(event) {
      let target = $(this).attr('href');
      if (target.indexOf('#') != -1 ) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 500);
      }
    });
  });

  $(window).scroll(function () {
    let top = $(window).scrollTop();
    let height = $(window).height();
    let fade_position = top + height - 100;
    $('.scroll-fade-up').each(function () {
      let this_position = $(this).offset().top;
      if (fade_position > this_position) {
        $(this).addClass('add');
      }
      if (fade_position < this_position) {
        $(this).removeClass('add');
      }
    });
  });

  $('.tomodal > img').on('click', function() {
    $('#modalimg').attr({
      src: $(this).attr('src'),
      alt: $(this).attr('alt'),
    });
    $('#modal').fadeIn();
  });
  $('#close').on('click', function() {
    $('#modal').fadeOut();
  });

});