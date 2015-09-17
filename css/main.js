$(function(){

	var today = new Date();

	month = today.getMonth() + 1;
	date = today.getDate();

	if(month === 9){
		var count = 31 + 30 - date;
		// console.log(count);
		$("#count_down p").append(count);
	}else if(month === 10){
		var count = 31 - date;
		$("#count_down p").append(count);
	}

});