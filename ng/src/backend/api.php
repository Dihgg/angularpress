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

add_action('rest_api_init', function () {
	if (!function_exists('use_block_editor_for_post_type'))
		require ABSPATH . 'wp-admin/includes/post.php';

	// Surface all Gutenberg blocks in the WordPress REST API
	$post_types = get_post_types_by_support(['editor']);
	foreach ($post_types as $post_type) {
		if (use_block_editor_for_post_type($post_type))
			register_rest_field($post_type, 'blocks', [
				'get_callback' => function (array $post) {
					return parse_blocks($post['content']['raw']);
				},
			]);
	}
});

function api_get_menu($params)
{
	return wp_get_nav_menu_items($params['name']);
}
