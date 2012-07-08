$(function(){


	$('#time').change(function(obj){
		if(obj.target.value == 1){
			$("#minutes").html("");
			$(".1" ).show();
			$(".5" ).hide();
			$(".15").hide();
		}else if(obj.target.value == 5){
			$("#minutes").html("s");
			$(".1" ).show();
			$(".5" ).show();
			$(".15").hide();
		}else if(obj.target.value == 15){
			$("#minutes").html("s");
			$(".1" ).show();
			$(".5" ).show();
			$(".15").show();
		}
	});


	$('#time').prop('selectedIndex','1');

});