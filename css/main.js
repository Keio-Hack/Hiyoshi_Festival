$(function(){

	var today = new Date();

	month = today.getMonth() + 1;
	date = today.getDate();

	if(month === 9){

		var count = 31 + 30 - date;
		$("#count_down p").append(count);

	}else if(month === 10){

		var count = 31 - date;
		$("#count_down p").append(count);

	}


	$(".time_table").each(function(){
		var $window = $(window),
			$header = $(this).find(".title"),
			$back = $(this).find(".place"),
			header_offset_top = $header.offset().top - 50,
			header_offset_bottom =header_offset_top + 90 ;


			$window.on("scroll",function(){

				if($window.scrollTop() > header_offset_top){
					// $header.addClass("sticky");
					$header.css({
						position:"fixed",
						top:"50px"
					});
					// $(".time").find("#first").addClass("sti_now");
				}else if($window.scrollTop() > header_offset_bottom - 60){
					// $header.removeClass("sticky");
					$header.css({opacity:0});
					// $(".time").find("#first").removeClass("sti_now");
				}else{
					$header.css({position:"absolute"});
					$header.css({top:0});
				}

			});
	});

});