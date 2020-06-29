<?php
	register_rest_field('post', 'date_formatted', array(
		'get_callback' => function($post) {
			return get_the_time(get_option('date_format'), $post);
		}
	));