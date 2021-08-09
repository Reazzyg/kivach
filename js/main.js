$(document).ready(function () {
  var tabItem = $('.content-tab__item');
  var contentItem = $('.content__area');

  tabItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    contentItem.removeClass('content__area-active');
    tabItem.removeClass('content-tab__item-active');
    $(activeContent).addClass('content__area-active');
    $(this).addClass('content-tab__item-active');
  });
  var menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', function () {
    document
      .querySelector('.navbar__fixed')
      .classList.toggle('navbar__fixed-visible');
    document;

    document
      .querySelector('.menu-button__line')
      .classList.toggle('menu-button__line-active');
  });

  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).on('keydown', function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  $(document).click(function (event) {
    if (
      !$(event.target).closest('.modal__dialog, [data-toggle=modal]').length
    ) {
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  var bookMarkArticle = $('.main-news__path');
  bookMarkArticle.on('click', function () {
    $(this).toggleClass('main-news__path-active');
  });
  var bookMarkNews = $('.news-card__path');
  bookMarkNews.on('click', function () {
    $(this).toggleClass('news-card__path-active');
  });

  $('.modal__input-phone').mask('+7 (000) 000-00-00');
  $('.footer__input-phone').mask('+7 (000) 000-00-00');
  //Обработка форм валидации
  $.validator.methods.email = function (value, element) {
    return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value);
  };
  jQuery.validator.addMethod(
    'lettersonly',
    function (value, element) {
      return this.optional(element) || /^[a-zA-Zа-яА-ЯёЁ]+$/i.test(value);
    },
    'Letters and spaces only please'
  );
  $('.form').each(function () {
    $(this).validate({
      errorClass: 'invalid',
      rules: {
        messageName: {
          required: true,
          lettersonly: true,
        },
        name: {
          required: true,
          lettersonly: true,
        },
      },
      messages: {
        messageName: {
          required: 'Please specify your name',
          minlength: 'Name must be at least 2 symbols',
          lettersonly: 'No digits are allowed in this field',
        },
        name: {
          required: 'Please specify your name',
          lettersonly: 'No digits are allowed in this field',
        },
        phone: {
          required: 'Please specify your phone number',
        },
        messageEmail: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
        messagePhone: {
          required: 'Please specify your phone number',
        },
        newsletter: {
          required: 'We need your email address to contact you',
          email: 'Your email address must be in the format of name@domain.com',
        },
      },
    });
  });
  const hotSlider = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //  delay: 5000,
    //  },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const articleSlider = new Swiper('.hero-article__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //  delay: 5000,
    //  },
    navigation: {
      nextEl: '.hero-article__button-next',
      prevEl: '.hero-article__button-prev',
    },

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
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
});
