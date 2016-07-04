$(document).ready(function (){
	var he = window.innerHeight;
	var wi = window.innerWidth;
	var al;
	var transition_to_sec3 = $('.transition_to_sec3');

	var bl_wi = Math.sqrt(Math.pow(he/2, 2) + Math.pow(wi/2, 2));
	transition_to_sec3.css('width', bl_wi);
	var bl_he = Math.sqrt(Math.pow(he, 2) + Math.pow(wi, 2));
	transition_to_sec3.css('height', bl_he);
	al = Math.atan(wi / he);
	transition_to_sec3.css({ WebkitTransform: 'rotate(' + al + 'rad)'});
 //    '-moz-transform': 'rotate(' + al + ')',
 //    '-o-transform': 'rotate(' + al + ')',
 //    '-ms-transform': 'rotate(' + al + ')',
 //    'transform': 'rotate(' + al + ')',
	// });
});