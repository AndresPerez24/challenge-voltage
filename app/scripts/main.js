$(document).ready(function() {
  const $hamburgerButton = $('.js-hamburger-button');
  const $navigation = $('.js-navigation');
  const $close = $('#custom-close');

  // MENU
  $hamburgerButton.click(() => {
    $hamburgerButton.toggleClass('is-active');
    $navigation.toggleClass('is-active');
    $html.toggleClass('menu-active');
  });

});
