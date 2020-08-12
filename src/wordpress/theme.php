<?php

function check_dependencies()
{
	include_once(ABSPATH . 'wp-admin/includes/plugin.php');
	if (is_admin()) {
		return;
	} else {
		if (!is_plugin_active('wp-rest-blocks/wp-rest-blocks.php')) {
			echo "<p>" . __('Warning: The theme needs Plugin wp-rest-blocks to function', 'angularpress') . "</p>";
			echo "<p>" . __('Download it', 'angularpress') . " ";
			echo "<a href='https://github.com/spacedmonkey/wp-rest-blocks.git'>" . __('here', 'angularpress') . "</a>";
			echo ".</p>";
			die;
		}
	}
}

/**
 * THEME SETUP
 */
if (function_exists('add_theme_support')) {

	// Add Menu Support
	add_theme_support('menus');

	// Add Thumbnail Theme Support
	add_theme_support('post-thumbnails');

	// ADD MENUS
	require_once('theme/menu.php');
	

	check_dependencies();
}

add_action('after_setup_theme', function () {
	load_theme_textdomain('angularpress', get_template_directory() . '/assets/languages');
});

// Filters
require_once('filters/filters.php');

// Customizer
require_once('customizer/customizer.php');
