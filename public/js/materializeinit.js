$(document).ready(function() {
	$(".fixed-action-btn").click(function() {
		$("#nav-icon3").toggleClass("open");
	});
});

// Floating Action Button
document.addEventListener("DOMContentLoaded", function() {
	// tooltips
	var elems_tooltip = document.querySelectorAll(".tooltipped");
	M.Tooltip.init(elems_tooltip, {});

	var elems_modal = document.querySelectorAll(".modal");
	M.Modal.init(elems_modal, {});

	var elems_taptarget = document.querySelectorAll(".tap-target");
	M.TapTarget.init(elems_taptarget, {});
});
