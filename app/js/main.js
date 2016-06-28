$(document).ready(function (){
	 setTimeout('$( "h1" ).addClass( "visible" )', 500);
	 setTimeout('$( "p" ).addClass( "visible" )', 0);
	 // $( "#StringAppear" ).addClass( "string" );
	  setTimeout('$( "#StringAppear" ).addClass( "string" );', 2500);
	  setTimeout('$( "#10" ).addClass( "innovateWide" );', 2500);
});

function SlideDown(){
	$('#up').addClass('Display');
	$('#down').removeClass('Display');
	$('#down').addClass('noDisplay');
	$('#up').removeClass('noDisplay');
	$('nav').addClass('openedNav');
	$('nav').removeClass('closedNav');
	setTimeout('$( "#navMenu" ).addClass( "displayMenu" )', 0);

}

function SlideUp(){
	$('nav').addClass('closedNav');
	$('nav').removeClass('openedNav');
	$('#up').removeClass('Display');
	$('#up').addClass('noDisplay');
	$('#down').removeClass('noDisplay');
	$('#down').addClass('Display');
	$( "#navMenu" ).removeClass( "displayMenu" );
}