$(document).ready(function() {
	$('#arrowBtn1').click(function() {
		$('.nav.child_menu').toggleClass('visible');
	});
	$('#navbarDropdown1').click(function() {
		$('.dropdown-menu.list-unstyled.msg_list').toggleClass('visible');
	});
	$('#navbarDropdown').click(function() {
		$('.dropdown-menu.dropdown-usermenu.pull-right').toggleClass('visible');
	});
	$('#navbarDropdown1').click(function() {
		$('.dropdown-menu.list-unstyled.msg_list').toggleClass('visible');
	});
	$('#menu_toggle').click(function() {
		$('.nav-md .container.body .col-md-3.left_col').toggleClass('active');
	});
});


