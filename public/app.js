$( document ).ready(function() {

	$.get('https://pinballmap.com/api/v1/machines', function(response){
		for(let i=0; i<response.machines.length; i++){
			let data =  response.machines[i];
			console.log(data)
			
			//Populator
			// $.ajax({
			// 	url : '/api/machines',
			// 	method : 'POST',
			// 	data : data,
			// 	success : function(response){
			// 	console.log(response)
			// 	}
			// })

		}
	})
       
});