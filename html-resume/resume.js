$(function(){


	$('#time').change(function(obj){
		$('.1, .5, .15').hide();
		if(obj.target.value == 1){
			$("#minutes").html("");
			$(".1" ).show();
		}else if(obj.target.value == 5){
			$("#minutes").html("s");
			$(".5" ).show();
		}else if(obj.target.value == 15){
			$("#minutes").html("s");
			$(".15" ).show();		
		}
	});


	$('#time').prop('selectedIndex','1');
	$('#time').change();

});