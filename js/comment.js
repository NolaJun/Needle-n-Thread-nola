/*
* @Author: yys_wlj
* @Date:   2016-05-11 15:26:19
* @Last Modified by:   yys_wlj
* @Last Modified time: 2016-05-16 10:25:50
*/

'use strict';
$(document).ready(function() {
	$('aside ul li').click(function() {
		$(this).siblings().removeClass('actived');
		$(this).addClass('actived');
		var t = $(this).index();
		$('article').eq(t).addClass('default-show').siblings().removeClass('default-show');
	});
	$('.select-num a .plus').click(function() {
		$(this).parent().siblings().children().show();
	});
	if($('.select-num a .sub,.select-num a .numbers').attr('display',"block")){
		var numbers = $('.number').val();
		$('.sub').click(function(event) {
			var val = $('input').val();
			val--;
			if(val<=0){
				val=0;
			}
			$('input').val(val);
		});/*数值自减1*/
		$('.plus').click(function(event) {
			var val = $('input').val();
			val++;
			$('input').val(val);
		});/*数值自增1*/
	}
	// if($('.select-num a .sub,.select-num a .numbers').is(":hidden")){
	// 	return;
	// }else{
	// 	var numbers = $('.number').val();
	// 	addNum(numbers);
	// 	subNum(numbers);
	// }
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

// function newCounter(decElId, incElId, inputElId, init) {
//   var n = init;
//   function inc(){
//     return ++n;
//   }
//   function dec(){
//     return --n;
//   }
//   var input = document.getElementsByClassName('inputElId');
// 	input.value = n;
//   document.getElementsByClassName('incElId').onclick =
//     function(){
//       input.value = inc();
//     };
//   document.getElementsByClassName('decElId').onclick =
//     function(){
//       input.value = dec();
//     };
// }
