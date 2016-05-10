jQuery(window).load(function(){
	jQuery("#leftAdsense").find("iframe").appendTo("#left-adsense").css("position", "inherit"); 
		//jQuery("#leftAdsense").remove();
		jQuery("#rightAdsense").find("iframe").appendTo("#right-adsense").css("position", "inherit"); 
		//jQuery("#rightAdsense").remove();
});


function getLeftbar(){
	var leftbar = jQuery('#leftbar');
	leftbar.empty();
	var tempDiv = jQuery("<div />");
	tempDiv.load('/forum_blank #leftbar:eq(0)', function(){    
		leftbar.html(tempDiv.children('#leftbar:eq(0)').html());
		jQuery("#leftAdsense").find("iframe").appendTo("#left-adsense").css("position", "inherit"); 
		jQuery("#leftAdsense").remove();
	});
}

function getRightbar(){
	var rightbar = jQuery('#sidebars');
	rightbar.empty();
	var tempDiv = jQuery("<div />");
	tempDiv.load('/forum_blank #sidebars', function(){    
		rightbar.html(tempDiv.children('#sidebars').html());
		jQuery("#rightAdsense").find("iframe").appendTo("#right-adsense").css("position", "inherit"); 
		jQuery("#rightAdsense").remove();
	});
}
