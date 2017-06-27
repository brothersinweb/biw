$(document).ready(function(){
	$('div').on('click', function() {
      $(this).toggleClass('show-description');
  });
	$('.preko').hover(function() {
      $('div').toggleClass('show-description');
  });

if ($(window).scrollTop()==10) {
	$('h1').addClass('.fixed');
} else {
	$('h1').removeClass('.fixed');
}
});