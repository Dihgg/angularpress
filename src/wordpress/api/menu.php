<?php
	register_rest_route('wp/v2', '/menu', array(
		'methods' => 'GET',
		'args' => array(
			'name'
		),
		'callback' => function($params) {
			$location = $params['location'];

			// Get all locations
			$locations = get_nav_menu_locations();

			// Get object id by location
			$menu_obj = wp_get_nav_menu_object( $locations[$location] );

			// Get menu items by menu name
			$menu_items = wp_get_nav_menu_items($menu_obj->name);
			if ($menu_items) {
				return $menu_items;
			}
			return array();
		}
	));