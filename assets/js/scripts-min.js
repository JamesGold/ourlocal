//site js here
$(function() {


	$('#mainNavList').removeClass('show');
	$('#hamIcon').removeClass('open');

	// if javascript works, we want to hide the nav list so it we can toggle it	});
	});
	
	
$(function() {
$("#iconContain").click (function(){ //open and close the widget
	$("#hamIcon").toggleClass('open');
	$('#mainNavList').slideToggle().toggleClass('contract expand');
	
	});
});	


$(function() {

$(window).resize(function() {

	if ($(window).width() > 1223 ) {
		$('#mainNavList').css('display','flex');
		}
	else if
	 ($(window).width() < 1223 && $('#mainNavList').hasClass('expand') ) {  
	$('#mainNavList').css('display','block');
	}
	else if
	 ($(window).width() < 1223 && $('#mainNavList').hasClass('contract') ) {  
	$('#mainNavList').css('display','none');
	}
});

});



//cookie function to show show and hide the cookie notice

$(function() {
//if cookienotes exists the hide cookie notice

if( Cookies.get('cookienote') ==="true") {
	$("#cookieNotes").addClass('hide');
	};
	
	$("#cookieClose").click (function(){ //open and close the widget
	$("#cookieNotes").fadeOut(500);
	Cookies.set('cookienote', "true", { expires: 7 });
	});

});		



// promopage menu show button 


//site js here
$(function() {


	$('#promoMenu').removeClass('show');

	// if javascript works, we want to hide the nav list so it we can toggle it	});
	});
	
	
$(function() {
$("#showMenu").click (function(){ //open and close the widget
	$("#promoMenu").toggleClass('show');
	
	});
});	