$(document).ready(function(){
	$('div').on('click', function() {
      $(this).toggleClass('show-description');
  });
	$('.preko').hover(function() {
      $('div').toggleClass('show-description');
  });


})