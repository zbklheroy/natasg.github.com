// JavaScript Document
$(document).ready(function() {
$("#login").click(function(){
	$("#signwhat").html("sign in......");
	$('#myModal').modal({
		backdrop:true,
		keyboard:true,
		show:true
	});
});	
$("#sign").click(function(){
	$("#signwhat").html("sign up......");
});
});