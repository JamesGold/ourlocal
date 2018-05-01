//site js here
$(function() {


	$('#mainNavList').removeClass('show');
	$('#hamIcon').removeClass('open');

	// if javascript works, we want to show hide the nav list so it we can toggle it	});
	});
	
	
$(function() {
$("#iconContain").click (function(){ //open and close the widget
	$("#hamIcon").toggleClass('open');
	$('#mainNavList').slideToggle('show');
	
	});
});	


/*
$(function() {
$("#cookieClose").click (function(){ //open and close the widget
	$("#cookieNotes").fadeOut(500);
	
		});
});	
*/

/////// experiment

$(function() {
//if cookienotes exists the hide cookie notice

if( Cookies.get('cookienote') ==="true") {
	$("#cookieNotes").addClass('hide');
	};
	
	$("#cookieClose").click (function(){ //open and close the widget
	$("#cookieNotes").fadeOut(500);
	Cookies.set('cookienote', "true", { expires: 1 });
	});

});		
 



