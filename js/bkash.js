/*Cufon.replace('.ei-title h2', {textShadow: '0px 2px 2px #e7e7e7'});
Cufon.replace('.ei-title a', {textShadow: '0px .5px -1px #c11133'});
Cufon.replace('.ei-title p, .bkash-slogan, .sti-menu li a h2, .sti-menu li a h3');*/

function accordionMenu() {
	$('.accordion-content .view-content .item-list > ul' ).addClass("accordion-menu");
	$('.accordion-menu .accordion-detail').hide();
	$('.accordion-menu li a').click(
	function() {
	  var checkElement = $(this).next();
	  if((checkElement.is('.accordion-detail')) && (checkElement.is(':visible'))) {
				$('.accordion-menu .accordion-detail:visible').slideToggle(400, function (){
					$(this).parent().find('a').removeClass("up-arro");
				});
			return false;
		}
	  if((checkElement.is('.accordion-detail')) && (!checkElement.is(':visible'))) {
			$('.accordion-menu .accordion-detail:visible').slideUp('slow');
		  	$('.accordion-menu .accordion-detail:visible').parent().find('a').removeClass("up-arro");
			checkElement.slideDown('normal');
		  	$(this).parent().find('a').addClass("up-arro");
		return false;
		}
	  }
	);
}

function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto();
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto();
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

$(document).ready(function() {
	$('.menu-holder > ul').addClass("sdt_menu");
	
//==============================================Submit button values==================================================// 		
	$('#search-block-form #edit-submit').val('');
	$('#user-register #edit-submit').val('Create Account');	
	$('#user-pass #edit-submit').val('New Password');
	
//==============================================End of submit button values==================================================// 	
	
	
//==============================================Accordion Menu==================================================//     
	accordionMenu();
//==============================================End of Accordion Menu==================================================//
	
//==============================================Search Holder==================================================//
$('.search-input-holder #edit-search-block-form-1').focus(function(){
		 $(this).stop().animate({'width' : '165'}, 300);
	})
	.blur(function(){$(this).stop().animate({'width' : '100'}, 400);
	});

$('.search-input-holder form input.form-submit').hover(
	function(){ // Change the input image's source when we "roll on"
		$(this).addClass("search-button-hover");
	},
	function(){ // Change the input image's source back to the default on "roll off"
		$(this).removeClass("search-button-hover");                
	}
);
//==============================================End of Search Holder==================================================//	

//==============================================Home Slider==================================================//
$(window).load(function(){     
if ($('div').hasClass('ei-slider')) {
	//if (!$.support.opacity){
		$('#ei-slider').eislideshow({
			animation			: 'center',// sides
			easing				: 'easeOutExpo',
			titleeasing			: 'easeOutExpo',
			autoplay			: true,
			speed				: 1200,
			slideshow_interval	: 6000,
			titlespeed			: 800
		});
	/*}
	else {
		$('#ei-slider').eislideshow({
			animation			: 'sides',//center 
			easing				: 'easeOutExpo',
			titleeasing			: 'easeOutExpo',
			autoplay			: true,
			speed				: 1200,
			slideshow_interval	: 6000,
			titlespeed			: 800
		});
	}*/
	$('.ei-slider-thumbs li a').hover(function(){
		 $(this).next('img').stop().animate({opacity: 1,'bottom' : '11'}, 400);
	},
	function(){$(this).next('img').stop().animate({opacity: 0, 'bottom' : '25'}, 300);
	}); 
}
$('.ei-slider').fadeIn(500);
});
//==============================================End of home Slider==================================================//	

//==============================================Partner page ==================================================//
/* partner logos */
/*$(".each-partner > a.popup").each(function (index, domEle) {
	// domEle == this
	var $elem = $(this);
	var left_position = ($elem.width() - $elem.find('img').width())/2;
	var top_position = ($elem.height() - $elem.find('img').height())/2;
	$(domEle).find('img').css({'left':left_position});  
	$(domEle).find('img').css({'top':top_position});  
});
*/
/*partner popup */
$('.overlay, #lightbox2-overlay').css({opacity:0.75});

$('.each-partner > a, .each-director > a, a.img-popup ' ).click(function() {
	//alert("test");
	$(this).parent().parent().find('.overlay').fadeIn(800);	
	$(this).parent().parent().find('.partner-popup, .director-popup, .news-popup').fadeIn(800);
	
	var popup_height = $(this).parent().parent().find('.partner-popup, .director-popup, .news-popup').height();
	
	$(this).parent().parent().find('.partner-popup').css({marginTop:-(popup_height+30)/2});
	$(this).parent().parent().find('.director-popup').css({marginTop:-(popup_height+60)/2});
	$(this).parent().parent().find('.news-popup').css({marginTop:-(popup_height+60)/2});
});
$('.close-button').click(function() {
	$(this).parent().fadeOut(800);	
	$(this).parent().prev().fadeOut(800);	
});
$(document).keyup(function(e) { 
	if (e.keyCode == 27) { // esc keycode
	$('.close-button').parent().fadeOut(800);	
	$('.close-button').parent().prev().fadeOut(800);	
	}
});

//==============================================end of Partner page==================================================//

//==============================================Director photo==================================================//
$('.each-director a').hover(function(){
		 $(this).find('img.black-white').stop().animate({opacity: 0}, 400);
	},
	function(){$(this).find('img.black-white').stop().animate({opacity: 1}, 300);
	});
$('.primary-link-holder ul li a span div').addClass("pngfix");
//==============================================end of Director photo==================================================//

//==============================================Sticky Menu==================================================//
$('.menu-holder').fadeIn(500);
$('.menu-holder ul.sdt_menu li span span.sdt_link').css({'opacity':0});
$('.menu-holder > ul').attr('id', 'sdt_menu');
$("#sdt_menu > li").each(function (index, domEle) {
	// domEle == this
	var $elem = $(this);
	var img_position = ($elem.width() - $elem.find('.sdt_link').width())/2-10;	
	var text_position = ($elem.width() - $elem.find('.sdt_link').width())/2+10;
	$(domEle).find('img').css({'left':img_position});
	$(domEle).find('.sdt_link, .sdt_descr').css({'left':text_position});  
});

$(".menu-holder ul#sdt_menu li > ul li").each(function (index, domElee) {
	if($(this).parents('#sdt_menu').children().length == $(this).parent().parent().index()+1 || $(this).parents('#sdt_menu').children().length == $(this).parent().parent().index()+2) {
		$(this).find('a').css({'backgroundPosition':'0 12px', 'width':'152px','paddingLeft':'10px'});
	}
});	

$(".menu-holder ul#sdt_menu li > ul li.expanded").each(function (index, domElee) {
	if($(this).parents('#sdt_menu').children().length == $(this).parent().parent().index()+1 || $(this).parents('#sdt_menu').children().length == $(this).parent().parent().index()+2) {
		$(this).find('a:first').css({'backgroundPosition':'0 -5px', 'width':'152px','paddingLeft':'10px'});
	}
});	
	
var submenu_height = 0;
var max_li = 0;
var temp_li = 0;
$('.menu-holder ul.sdt_menu  > li > ul').each(function() {
	temp_li = 0;
	$(this).find('> li').each(function(){
		temp_li++;
		});	
	if(max_li<temp_li)
		max_li = temp_li;
});		
		//alert(max_li);
submenu_height += max_li*28/*$('.menu-holder ul.sdt_menu > li > ul li').height()*/;

$('.menu-holder #sdt_menu > li').bind('mouseenter',function(){
	var $elem = $(this);
	var centerposition = ($elem.width() - $elem.find('.sdt_link').width())/2;
	$elem.find('img')
		 .stop(true)
		 .animate({
			'height':'50px',
			'left':'70px',
			'bottom':submenu_height/2+10
		 },700,'easeOutBack')
		 .andSelf()
		 .find('.sdt_link')
		 .stop(true)
		 .animate({'top':-submenu_height, 'left':centerposition, 'opacity':1},600,'easeOutBack')
		 .andSelf()
		 .find('.sdt_descr')
		 .stop(true)
		 .animate({'left':centerposition},900,'easeOutBack')
		 .andSelf()
		 .find('.sdt_active')
		 .stop(true)
		 .animate({'height':submenu_height+19},400,function(){
		var $sub_menu = $elem.find('ul:first');
		var $all_sub_menu = $elem.find('ul');
		$all_sub_menu.css({'height':submenu_height});
		if($sub_menu.length){
			var left = '192px';
			if($elem.parent().children().length == $elem.index()+1 || $elem.parent().children().length == $elem.index()+2)
				left = '-192px';
			$sub_menu.show().stop(true).animate({'left':left},600);
		}	
	});
}).bind('mouseleave',function(){
	var $elem = $(this);
	var img_position = ($elem.width() - $elem.find('.sdt_link').width())/2-10;	
	var text_position = ($elem.width() - $elem.find('.sdt_link').width())/2+10;
	var $sub_menu = $elem.find('ul:first');
	if($sub_menu.length)
		$sub_menu.hide().css('left','0px');
	
	$elem.find('.sdt_active')
		 .stop(true)
		 .animate({'height':'0px'},300)
		 .andSelf().find('img')
		 .stop(true)
		 .animate({
			'height':'13px',
			'left':img_position,
			'bottom':'12px'},600,'easeOutExpo')
		 .andSelf()
		 .find('.sdt_link')
		 .stop(true)
		 .animate({'top':'12px', 'left':text_position, 'opacity':0},500)
		 .andSelf()
		 .find('.sdt_descr')
		 .stop(true)
		 .animate({'left':text_position},500);
});	
$('.menu-holder ul.sdt_menu li > ul li').hover(
function(){ // Change the input image's source when we "roll on"					
	if($(this).parents('#sdt_menu').children().length == $(this).parent().parent().index()+1 || $(this).parents('#sdt_menu').children().length == $(this).parent().parent().index()+2) {
		$(this).find('ul').show().stop().animate({'left':'-192px'},800);
		$(this).find('a:first').css({'color':'#f6ff00'});
	}
	else {
		$(this).find('ul').show().stop().animate({'left':'192px'},800);
		$(this).find('a:first').css({'color':'#f6ff00'});
	}
},
function(){ // Change the input image's source back to the default on "roll off"
	$(this).find('ul').hide().stop().animate({'left':'0'},800); 
		$(this).find('a:first').css({'color':'#FFFFFF'});            
});
/*$('.menu-holder ul.sdt_menu li ul li.active-trail').find('a:first').css({'color':'#f6ff00'});*/
//==============================================End of Sticky Menu==================================================//

//==============================================Social Link==================================================//
$('.fb-button a, .twt-button a, .in-button a, .youtube-button a').hover(function(){
   $(this).stop().animate({'opacity' : '0'}, 700);
   $(this).parent().stop().animate({'right':'-1'}, 300);
 }, function(){
	$(this).stop().animate({'opacity' : '1'}, 500);
	$(this).parent().stop().animate({'right':'-6'}, 300);
  });
//==============================================End of Social Link==================================================//

//==============================================Block Holder==================================================//
if ($('div').hasClass('block-holder')) {
	$('.sti-menu li a ').hover(function(){
		 $(this).find('span span').stop().animate({'opacity' : '0'}, 300);
	}, function(){$(this).find('span span').stop().animate({'opacity' : '1'}, 200);});
}
//==============================================End of Block Holder==================================================//

//======================================for_no_margin_images===========================================//
	$("div").each(function(){
		if ( $(this).hasClass("view-partners") ) 
			{
				if ($("div").hasClass("view-content")) 
				{
					$('.views-row').filter( function() { 
			 		var cName = this.className;			//e.g. views-row views-row-1 views-row-odd views-row-first
			 		var temp1 = cName.split(' ');     	//e.g. views-row, views-row-1, views-row-odd, views-row-first
			 		var temp2 = temp1[1].split("-");	//e.g. views, row, 1
			 		var picNo = parseInt(temp2[2]);     //e.g. 1
			 		var noMargin = picNo%4;
			 		if(noMargin==0)
						{
							if ( $("div").hasClass("each-partner") ) 
							{
								$(this).find(".each-partner").addClass("no-margin");    //e.g. <div class="each-partner no-margin">
			
							}
						}
					}); 
				}
			}
		});
		
		$("div").each(function(){
		if ( $(this).hasClass("view-board-of-directors") ) 
			{
				if ($("div").hasClass("view-content")) 
				{
					$('.views-row').filter( function() { 
			 		var cName = this.className;			//e.g. views-row views-row-1 views-row-odd views-row-first
			 		var temp1 = cName.split(' ');     	//e.g. views-row, views-row-1, views-row-odd, views-row-first
			 		var temp2 = temp1[1].split("-");	//e.g. views, row, 1
			 		var picNo = parseInt(temp2[2]);     //e.g. 1
			 		var noMargin = picNo%4;
			 		if(noMargin==0)
						{
							if ( $("div").hasClass("each-director") ) 
							{
								$(this).find(".each-director").addClass("no-margin");    //e.g. <div class="each-partner no-margin">
			
							}
						}
					}); 
				}
			}
		});	
	
//==============================end of for_no_margin_images==============================================//

//==============================================Jcarosal and Pirobox==================================================//
if ($('div').hasClass('caro-container')) {
	if($(".slider-container li").size()>5) {
		jQuery('.jcarousel-skin-tango').jcarousel({
			auto	: 	4,	
			wrap	: 	'circular',
			initCallback: mycarousel_initCallback
		});		
	}
	else {
		jQuery('.jcarousel-skin-tango').jcarousel({
			auto	: 	0,
			wrap	: 	'none',
			initCallback: mycarousel_initCallback
		});	
	}
	$().piroBox({
		my_speed: 500, //animation speed
		bg_alpha: 0.75, //background opacity
		slideShow : true, // true == slideshow on, false == slideshow off
		slideSpeed : 5, //slideshow duration in seconds(3 to 6 Recommended)
		close_all : '.piro_close,  .piro_overlay'// add class .piro_overlay(with comma)if you want overlay click close piroBox	
	});
}
//==============================================End of Jcarosal and Pirobox==================================================//

//==============================================Selectbox & File Upload==================================================//
/*$('select').wrap("<div class='select-holder'></div>");
	if ($('div').hasClass('select-holder')) {
		$('.form-select').selectbox();
}*/
/*	$('input.form-file').wrap("<div class='file-up'></div>");
	$('.file-up').append("<span>...</span>");
	$(".file-up input").change(function () {
		var str = $(this).val();
		$(this).parent().find('span').text(str);
	})*/

//==============================================End of Selectbox & File Upload==================================================//

//==============================================Youtube video url==================================================//
$("iframe").each(function(){
        var ifr_source = $(this).attr('src');
        var wmode = "wmode=transparent&autoplay=1&rel=0";
        if(ifr_source.indexOf('?') != -1) {
            var getQString = ifr_source.split('?');
            var oldString = getQString[1];
            var newString = getQString[0];
            $(this).attr('src',newString+'?'+wmode+'&'+oldString);
        }
        else $(this).attr('src',ifr_source+'?'+wmode);
    });
	
//==============================================end of Youtube video url==================================================//

//==============================================Search keyword==================================================//	
var srch_value = $("#edit-keys-wrapper input#edit-keys").val();
if (srch_value == "") {
	$('#search-info span.search-value').html('Please enter the search content !');
} else {
	$('#search-info span.search-value').html('for " ' + srch_value + ' "');
}
//============================================== End of  Search keyword==================================================//

//==============================================Verticle Scroll==================================================//
/*if ($('div').hasClass('detail-wrapper')) {
 $('.detail-wrapper').jScrollPane({
 showArrows: false
 });
}
$('.single-tab, .fb-feed').hover(
 function(){ // Change the input image's source when we "roll on"
  $(this).find('.jspTrack').fadeIn(200);
 },
 function(){ // Change the input image's source back to the default on "roll off"
  $(this).find('.jspTrack').fadeOut(400);    
 }
);*/
//==============================================End of Verticle Scroll==================================================//

	
// End jQuery


});