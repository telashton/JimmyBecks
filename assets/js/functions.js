$( document ).ready(function() {

  // Get started!

});

$('span.menu').click(function(){

  if ($(this).hasClass('open')) {

    $('nav').removeClass('show');
    $(this).removeClass('open');

  } else {

    $('nav').addClass('show');
    $(this).addClass('open');

  }

});
