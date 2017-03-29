///// SMOOTH SCROLLING /////

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 600);
        return false;
      }
    }
  });
});

///// HEADER /////

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 600) {
    $("header").css("margin-top", "0");
  } else {
    $("header").css("margin-top", "-150px");
  }
});