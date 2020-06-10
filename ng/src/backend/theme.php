<?php

/**
 * THEME SETUP
 */
if (function_exists('add_theme_support')) {

	// Add Menu Support
	add_theme_support('menus');

	// Add Thumbnail Theme Support
	add_theme_support('post-thumbnails');

	// ADD MENUS
	register_nav_menus(
		array(
			'main-nav' => __('Main Menu', 'theme'),   // main nav in header
			'footer-links' => __('Footer Links', 'theme') // secondary nav in footer
		)
	);
}
