<?php
	add_action('rest_api_init', function () {
		require_once('api/menu.php');
		require_once('api/post.php');
		//  require_once('api/translate.php');
	});