<?php

add_action('rest_api_init', function () {
	register_rest_route('wp/v2', '/base', array(
		'methods' => 'GET',
		'callback' => 'api_get_base',
	));
});

function api_get_base() {
	return array(
		'header' => wp_get_nav_menu_items('Main Menu'),
		'footer' => wp_get_nav_menu_items('Footer Links')
	);
}
