$(document).ready(function(){
	function changeBackgroundHeader(){
		var header = $("#mainHeader");
		$(window).on("scroll", function(){
			var scrollInTop = $(window).scrollTop() === 0;
			if(!scrollInTop){
				header.addClass("bg-white");
			}else{
				header.removeClass("bg-white");
			}
		});
	};
	changeBackgroundHeader();
});