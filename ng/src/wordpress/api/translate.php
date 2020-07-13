<?php
	register_rest_route('wp/v2', '/translate', array(
		'methods' => 'GET',
		'args' => array(
			'name'
		),
		'callback' => function($params) {
			$terms = json_decode($params['terms']);
			$translation = array();
			foreach ($terms as $term) {
				array_push($translation, array(
					'term' => $term->term,
					'translation'	=> __($term->term, 'angularpress')
				));
			}
			return array(
				'terms' => $translation
			);
		}
	));