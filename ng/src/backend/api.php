<?php

add_action('rest_api_init', function () {
	register_rest_route('wp/v2', '/menu', array(
		'methods' => 'GET',
		'callback' => 'api_get_menu',
		'args' => array(
			'name'
		)
	));
});

function api_get_menu($params)
{
	return wp_get_nav_menu_items($params['name']);
}
