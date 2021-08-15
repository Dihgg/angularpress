<?php

/*
 * Set permlinks on theme activate
 */
add_action('after_switch_theme', function () {
	$current_setting = get_option('permalink_structure');

	// Abort if already saved to something else
	if ($current_setting) {
		return;
	}

	// Save permalinks to a custom setting, force create of rules file
	global $wp_rewrite;
	update_option("rewrite_rules", FALSE);
	$wp_rewrite->set_permalink_structure('/post/%postname%/');
	$wp_rewrite->flush_rules(true);
});
