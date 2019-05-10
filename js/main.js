/* -------------------------------------------- POPOVER (=PAROLE MAGICHE) --------------------------------------------*/

$(function () {
	$('[data-toggle="popover"]').popover()
})

/* -------------------------------------------- TIMELINE ANIMATION --------------------------------------------*/



$(document).ready(function () {
	$(".mobile-filter").click(function () {
		$("#mobile-group").toggle();
	});

	$(".fixed-filter").click(function () {
		$("#fixed-gruop").toggle();
	});
	$(".population-filter").click(function () {
		$("#population-gruop").toggle();
	});



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
});
