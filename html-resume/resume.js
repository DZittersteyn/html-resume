$(function(){
	$('#timeselect').html(	'I have ' +
							'<select id="time"> ' +
								'<option value="1" >  1 </option>' +
								'<option value="5" >  5 </option>' +
								'<option value="15"> 15 </option>' +
							'</select>' +
							' minute<span id="minutes">s</span> to read this');

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