// var toggle = document.querySelector('.menu input')
// document.querySelector('body').addEventListener('click', () => {
//   clearInterval(animate);
// })

$(function () {

  //==================Preloader Start==================

  $(window).on("load", function () {
    $(".preloader-main").delay(500).fadeOut(300);
  });

  //==================Preloader End==================

  $('.menu input').click(function () {
    $('.humber-menu').toggleClass('menu-open');
  });

  $('.close-icon img').click(function () {
    $('.humber-menu').toggleClass('menu-open');
  });

  //====== Sticky Menu Start ======

  $(window).on("scroll", function () {
    var scrolling = $(this).scrollTop();
    if (scrolling >= 100) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
  });

  //====== Sticky Menu End =======

  $('.banner-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '.left',
    nextArrow: '.right',
    asNavFor: '.banner-img-slide',
  });

  $('.banner-img-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    asNavFor: '.banner-slide',
  });
  //////////////
  $('.banner-mob-img-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    prevArrow: '.left-mob',
    nextArrow: '.right-mob',
    asNavFor: '.banner-mob-slide',
  });

  $('.banner-mob-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: false,
    arrows: false,
    asNavFor: '.banner-mob-img-slide',
  });
  ////////////////////////////
  $('.gallery-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '.left2',
    nextArrow: '.right2',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.bread-top-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '.left3',
    nextArrow: '.right3',
    asNavFor: '.bs-text',
  });

  $('.bs-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: false,
    arrows: false,
    asNavFor: '.bread-top-slide',
  });

  $('.pp-slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '.left4',
    nextArrow: '.right4',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.druk-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    infinite: true,
    dots: false,
    arrows: true,
    prevArrow: '.left5',
    nextArrow: '.right5',
  });

  $('.brand-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

wow = new WOW(
  {
  mobile:       false,       // default
}
)
wow.init();