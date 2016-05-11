/*
* @Author: yys_wlj
* @Date:   2016-05-11 15:26:19
* @Last Modified by:   yys_wlj
* @Last Modified time: 2016-05-11 17:01:22
*/

'use strict';
$(document).ready(function() {
	$('aside ul li').click(function() {
		$(this).siblings().removeClass('actived');
		$(this).addClass('actived');
		var t = $(this).index();
		$('article').index(t).addClass('default-show').siblings().hide();
	});
	$('.select-num a .plus').click(function() {
		$(this).parent().siblings().children().show();
	});
	var numbers = $('numbers').val();
	if($('.select-num a .sub,.select-num a .numbers').attr('display',"block")){
		var numbers = $('.number').val();
		addNum(numbers);
		subNum(numbers);
	}
});
function addNum(numbers){
	// var numbers = $('.number').val();
	$('.plus').click(function() {
		numbers ++;
		$('.number').text(numbers);
	});
	return numbers;
}
function subNum(numbers){
	// var numbers = $('.number').val();
	$('.sub').click(function() {
		if(numbers >= 1){
			numbers --;
		}else{
			numbers = 0;
		}
		$('.number').text(numbers);
	});
}
