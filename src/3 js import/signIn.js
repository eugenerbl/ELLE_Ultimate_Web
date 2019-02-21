$(function(){
	$('#btnLogin').click(function(){	
		$.ajax({
			url: '/login',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
				localStorage.setItem('access-token', response['access_token']);
				localStorage.setItem('refresh-token', response['refresh_token']);
				let head = "Bearer";
				head = head + " " + localStorage.getItem('access-token');
				localStorage.setItem('head', head);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});