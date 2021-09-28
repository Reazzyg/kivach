$(document).ready(function () {
  //подключение табов
  var tabItem = $('.content-tab__item');
  var contentItem = $('.content__area');

  tabItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    contentItem.removeClass('content__area-active');
    tabItem.removeClass('content-tab__item-active');
    $(activeContent).addClass('content__area-active');
    $(this).addClass('content-tab__item-active');
  });
  //подключение мобильной кнопки меню
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
  $(document).scroll(function () {
    $('.navbar__fixed').removeClass('navbar__fixed-visible');
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
  var modalButton = $('[data-toggle="modal"]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  function openModal() {
    var modalOverlay = $('.modal');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  $(document).on('keydown', function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $('.modal');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  $(document).click(function (event) {
    if (
      !$(event.target).closest('.modal__dialog, [data-toggle=modal]').length
    ) {
      var modalOverlay = $('.modal');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
  function closeThanks(event) {
    event.preventDefault();
    var thanksOverlay = $('.thanks');
    var thanksDialog = $('.thanks__dialog');
    thanksOverlay.removeClass('thanks--visible');
    thanksDialog.removeClass('thanks__dialog--visible');
  }
  $(document).on('keydown', function (e) {
    if (e.keyCode == 27) {
      var thanksOverlay = $('.thanks');
      var thanksDialog = $('.thanks__dialog');
      thanksOverlay.removeClass('thanks--visible');
      thanksDialog.removeClass('thanks__dialog--visible');
    }
  });
  $(document).click(function (event) {
    if (
      !$(event.target).closest('.modal__dialog, [data-toggle=modal]').length
    ) {
      var thanksOverlay = $('.thanks');
      var thanksDialog = $('.thanks__dialog');
      thanksOverlay.removeClass('thanks--visible');
      thanksDialog.removeClass('thanks__dialog--visible');
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
  $('#navbar').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 500);
  });
  $('#comments').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 500);
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
      return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
    },
    'Только буквы латинского алфавита'
  );
  jQuery.validator.addMethod(
    'password',
    function (value, element) {
      return this.optional(element) || /^[0-9'".]/i.test(value);
    },
    'Только цифры'
  );
  $('.form').on('change', function () {
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
        messageLogin: {
          required: true,
          lettersonly: true,
          maxlength: 4,
        },
        messagePass: {
          required: true,
          maxlength: 4,
          password: true,
        },
      },

      messages: {
        theme: {
          required: 'Пожалуйста, выберите тему',
        },

        messageEmail: {
          required: 'Введите ваш Email',
          email: 'Формат Email user@domain.qa',
        },
        messageLogin: {
          required: 'Введите ваш логин',
          maxlength: 'Введите не более 4х символов',
        },
        messagePass: {
          required: 'Введите ваш пароль',
          maxlength: 'Введите не более 4х символов',
          password: 'Пароль должен состоять только из цифр',
        },
        messageText: {
          required: 'Введите сообщение',
        },
        checkbox: {
          required: 'Подтвердите согласие',
        },
        Comment: {
          required: 'Это поле обязательно для заполнения',
          minlength: 'Минимум 100 символов',
        },
        subscribe: {
          required: 'Введите ваш Email',
          email: 'Email должен быть в формате name@domain.com',
        },
      },
    });
  });

  const hotSlider = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 5000,
    },

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
  $('.navbar__button-small').on('click', function () {
    $('body').toggleClass('font');
  });

  var closeThanksButton = $('.thanks__close');
  closeThanksButton.on('click', closeModal);

  $('.modal__button').on('click', function (e) {
    e.preventDefault();
    var firstInput = $('#firstInput').attr('aria-invalid').split(/\s+/);
    var secondInput = $('#secondInput').attr('aria-invalid').split(/\s+/);
    console.log(firstInput);
    console.log(secondInput);
    if (firstInput == 'false' && secondInput == 'false') {
      //do something
      console.log(123);
      var thanksOverlay = $('.thanks');
      var thanksDialog = $('.thanks__dialog');
      thanksOverlay.addClass('thanks--visible');
      thanksDialog.addClass('thanks__dialog--visible');
      modalOverlay.removeClass('modal--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });
});
