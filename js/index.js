$(document).ready(function(){
	$(".firstP").hover(function(){
    $('.firstPinDiv').slideDown(500);
    }, function(){
    $('.firstPinDiv').slideUp(1);
});
$(".secondP").hover(function(){
    $('.secondPinDiv').fadeIn(500);
    }, function(){
    $('.secondPinDiv').fadeOut(1);
});
$(".thirdP").hover(function(){
    $('.thirdPinDiv').slideDown(500);
    }, function(){
    $('.thirdPinDiv').slideUp(1);
});

if ($(window).scrollTop()==10) {
	$('h1').addClass('.fixed');
} else {
	$('h1').removeClass('.fixed');
}
});