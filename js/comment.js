/*
* @Author: yys_wlj
* @Date:   2016-05-11 15:26:19
* @Last Modified by:   yys_wlj
* @Last Modified time: 2016-05-11 15:36:03
*/

'use strict';
$(document).ready(function() {
	$('.select-num a .plus').click(function() {
		$(this).parents('.select-num a').children().show();
	});
});
