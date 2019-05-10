
/* -------------------------------------------- POPOVER BOOTSTRAP  --------------------------------------------*/

$(function () {
	$('[data-toggle="popover"]').popover()
})

	/* -------------------------------------------- TIMELINE ANIMATION --------------------------------------------*/

	$(".btn-berec").click(function () {
		$("#timeline .btn-info").addClass('nascosto');
		$(".info-berec").removeClass('nascosto');
	});
	$(".btn-fcc").click(function () {
		$("#timeline .btn-info").addClass('nascosto');
		$(".info-fcc").removeClass('nascosto');
	});
	$(".btn-tim").click(function () {
		$("#timeline .btn-info").addClass('nascosto');
		$(".info-tim").removeClass('nascosto');
	});



/* -------------------------------------------- MOBILE-FIXED --------------------------------------------*/


$(document).ready(function(){
    $(".mobile-filter").click(function(){
		$("#subscription #mobile-group").toggle();
    });
	$(".fixed-filter").click(function(){
		$("#subscription #fixed-group").toggle();
    });
	$(".population-filter").click(function(){
		$("#subscription #population-group").toggle();
    });
});


