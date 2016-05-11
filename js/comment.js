/*
* @Author: yys_wlj
* @Date:   2016-05-11 15:26:19
* @Last Modified by:   yys_wlj
* @Last Modified time: 2016-05-11 16:44:27
*/

'use strict';
$(document).ready(function() {
	$('aside ul li').click(function() {
		$(this).siblings().removeClass('actived');
		$(this).addClass('actived');
	});
	$('.select-num a .plus').click(function() {
		$(this).parent().siblings().children().show();
	});
	var numbers = $('numbers').val();
	if($('.select-num a .sub,.select-num a .numbers').attr('display',"block")){
		addNum();
		subNum();
	}
});
function addNum(){
	var numbers = $('.number').val();
	$('.plus').click(function() {
		numbers ++;
		$('.number').text(numbers);
	});
}
function subNum(){
	var numbers = $('.number').val();
	$('.sub').click(function() {
		if(numbers >= 1){
			numbers --;
		}else{
			numbers = 0;
		}
		$('.number').text(numbers);
	});
}
