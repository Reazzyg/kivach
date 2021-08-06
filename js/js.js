$(document).ready(function () {
  var tabsItem = $('.main-tabs__item');
  var contentItem = $('.content__item');
  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('main-tabs__item--active');
    contentItem.removeClass('content__item--active');
    $(activeContent).addClass('content__item--active');
    $(this).addClass('main-tabs__item--active');
  });
  var menuButton = $('.menu-button');
  menuButton.on('click', function () {
    $('.header-navbar').toggleClass('header-navbar--visible');
  });
  $(document).scroll(function () {
    $('.header-navbar').removeClass('header-navbar--visible');
  });
  var toTop = $('.to-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      toTop.addClass('to-top--visible');
    } else {
      toTop.removeClass('to-top--visible');
    }
  });
  $('.to-top').click(function () {
    $('body,html').animate({ scrollTop: 0 }, 400);
  });
  $('#navbar').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });
  $('.comments__add').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });
  var bookMark = $('.news-item__bookmark');
  bookMark.on('click', function () {
    $(this).toggleClass('news-item__bookmark--active');
  });
  var bigMark = $('.main-news__bookmark');
  bigMark.on('click', function () {
    $(this).toggleClass('main-news__bookmark--active');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll([
    '.news-item__text',
    '.news-recent__text',
    '.articles__text',
  ]);
  wrappers.forEach((item) => {
    let options = { ellipsis: '\u2026 ', truncate: 'word' };
    new Dotdotdot(item, options);
  });
});

const swiper = new Swiper('.career-swiper', {
  loop: !0,
  pagination: { el: '.choice__pagination', clickable: !0 },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});
const swiperArticle = new Swiper('.hero-article__swiper', {
  loop: !0,
  keyboard: { enabled: !0, onlyInViewport: !1 },
  navigation: {
    nextEl: '.hero-article__slide-button--next',
    prevEl: '.hero-article__slide-button--prev',
  },
});
var modalButton = $('[data-toggle=modal]');
modalButton.on('click', openModal);
function openModal() {
  var modal = $('.modal');
  modal.addClass('modal--visible');
  $('body').addClass('overflow');
}
var closeModalButton = $('.modal__close');
closeModalButton.on('click', closeModal);
function closeModal(event) {
  event.preventDefault();
  var modal = $('.modal');
  modal.removeClass('modal--visible');
  $('body').removeClass('overflow');
}
$(document).keyup(function (e) {
  if (e.key === 'Escape' || e.keyCode === 27) {
    e.preventDefault();
    var modal = $('.modal');
    modal.removeClass('modal--visible');
    $('body').removeClass('overflow');
  }
});
$(document).click(function (event) {
  if (!$(event.target).closest('.modal__dialog, [data-toggle=modal]').length) {
    $('body').find('.modal').removeClass('modal--visible');
    $('body').removeClass('overflow');
  }
});
$(function () {
  $('.comments__item').slice(0, 4).show();
  $('#loadMore').on('click', function (e) {
    e.preventDefault();
    $('.comments__item:hidden').slice(0, 4).slideDown();
    if ($('.comments__item:hidden').length == 0) {
      $('#loadMore').attr('disabled', !0);
    }
  });
});
$('.form').each(function () {
  $(this).validate({
    errorClass: 'invalid',
    onclick: !0,
    messages: {
      theme: { required: 'Выберите тему' },
      email: {
        required: 'Введите свою электронную почту',
        email: 'Электронная почта формата имя@домен.com',
      },
      message: {
        minlength: 'Введите минимум 10 символов',
        required: 'Введите свой сообщение ',
      },
      comment: {
        minlength: 'Введите минимум 100 символов',
        required: 'Введите свой комментарий',
      },
      checkbox: { required: 'Обязательное поле' },
    },
  });
});
