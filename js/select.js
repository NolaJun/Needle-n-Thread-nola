/*
* @Author: yys_wlj
* @Date:   2016-05-13 10:44:36
* @Last Modified by:   yys_wlj
* @Last Modified time: 2016-05-13 11:16:55
*/

'use strict';
/*Select2 Initlization*/
$(document).ready(function() {
	$('.js-example-basic-single').select2({
	  theme: "flat"
	});

	$('.js-example-basic-multiple').select2({
	  theme: "flat"
	});

	$("#singleSelectExample").select2({
	  placeholder: 'Select an option...',
	  theme: "flat",
	  allowClear: true
	});
	$(".js-example-placeholder-single").select2({
	  placeholder: 'Select an option...',
	  theme: "flat",
	  allowClear: true
	});

	$(".js-example-placeholder-multiple").select2({
	  placeholder: "Select a option",
	  theme: "flat"
	});
});

