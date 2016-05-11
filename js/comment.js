/*
* @Author: yys_wlj
* @Date:   2016-05-11 15:26:19
* @Last Modified by:   yys_wlj
* @Last Modified time: 2016-05-11 18:21:50
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
		addNum(numbers);
		subNum(numbers);
		// function(){
		  // newCounter("sub", "plus", "number", 0);
		  // newCounter("dec2", "inc2", "cnt2", 3);
		// }
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
