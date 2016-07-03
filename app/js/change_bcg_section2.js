$(document).ready(function (){

	$('#con1').on('click', function() {
		$(this).toggleClass('rotate');
		$(this).children('.info1').toggleClass('rotate2');
	});

	$('#con2').on('click', function() {
		$(this).toggleClass('rotate');
		$(this).children('.info2').toggleClass('rotate2');
	});

	$('#con3').on('click', function() {
		$(this).toggleClass('rotate');
		$(this).children('.info3').toggleClass('rotate2');
	});

	$('#con4').on('click', function() {
		$(this).toggleClass('rotate');
		$(this).children('.info4').toggleClass('rotate2');
	});

	$('#con5').on('click', function() {
		$(this).toggleClass('rotate');
		$(this).children('.info5').toggleClass('rotate2');
	});
});