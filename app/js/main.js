$(document).ready(function (){
	var he = window.innerHeight;
	var wi = window.innerWidth;
	var transition_to_sec3 = $('.transition_to_sec3');
	var proj1 = $('.project1');
	var proj2 = $('.project2');

	setTimeout('$( "h1" ).addClass( "visible" )', 500);
	setTimeout('$( "p" ).addClass( "visible" )', 0);
	// $( "#StringAppear" ).addClass( "string" );
	setTimeout('$( "#StringAppear" ).addClass( "string" );', 1600);
	setTimeout('$( "#10" ).addClass( "innovateWide" );', 1600);

	transition_to_sec3.css({'width': wi / 2});
	proj1.css({
		'width': wi / 3,
		'height': he / 1.5,
		'left': wi / 8
	});
	proj2.css({
		'width': wi / 3,
		'height': he / 1.5,
		'right': wi / 8
	});

});

function SlideDown(){
	$('#down').removeClass('Display');
	$('#down').addClass('noDisplay');
	$('#up').removeClass('noDisplay');
	$('#up').addClass('Display');
	$('nav').removeClass('closedNav');
	$('nav').addClass('openedNav');
	$('.navPoint').removeClass('noDisp');


	setTimeout('$( "#navMenu" ).addClass( "displayMenu" )', 0);

}

function SlideUp(){
	$('nav').addClass('closedNav');
	$('nav').removeClass('openedNav');
	$('#up').removeClass('Display');
	$('#up').addClass('noDisplay');
	$('#down').removeClass('noDisplay');
	$('#down').addClass('Display');
	setTimeout("$('.navPoint').addClass('noDisp')", 500);

	$( "#navMenu" ).removeClass( "displayMenu" );
}

$(window).scroll(function() {
	var top_scroll = $(document).scrollTop();

	if (top_scroll < 1300){
		$('header').removeClass('absolute');
		$('header').addClass('fixed');
	}
	else {
		$('header').removeClass('fixed');
		$('header').addClass('absolute');
	};
});

// window.onscroll = function() {
// 	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   	if (scrolled < 2000){
// 		$('header').addClass('fixed');
// 	}
// 	else {
// 		$('header').addClass('static');
// 	};
// }