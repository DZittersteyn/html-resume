$(function(){
	$('#time').change(function(obj){
		console.log(obj.target.value)
		if(obj.target.value == 1){
			console.log(1);
			$(".1" ).slideDown('slow','swing');
			$(".5" ).slideUp('slow','swing');
			$(".15").slideUp('slow','swing');
		}else if(obj.target.value == 5){
			console.log(5);
			$(".1" ).slideDown('slow','swing');
			$(".5" ).slideDown('slow','swing');
			$(".15").slideUp('slow','swing');
		}else if(obj.target.value == 15){
			console.log(15);
			$(".1" ).slideDown('slow','swing');
			$(".5" ).slideDown('slow','swing');
			$(".15").slideDown('slow','swing');
		}
	});
})