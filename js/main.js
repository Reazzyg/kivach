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
});
