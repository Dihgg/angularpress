<?php
	register_rest_route('wp/v2', '/menu', array(
		'methods' => 'GET',
		'args' => array(
			'name'
		),
		'callback' => function($params) {
			return wp_get_nav_menu_items($params['name']);
		}
	));