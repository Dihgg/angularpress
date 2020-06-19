<?php
add_filter('allowed_block_types', function ($allowed_blocks) {
	return array(
		'core/heading',
		'core/paragraph',
		'core/image',
		'core/list',
		'core/gallery',
		'core/quote',
		'core/table',
		'core/code',
		'core/html',
		'core/freeform',
		'core/separator',
		'core/latest-posts',
		'core-embed/youtube',
		'core-embed/twitter',
		'core-embed/facebook',
		'core-embed/instagram',
		'core-embed/spotify',
		'core-embed/imgur',
		'core-embed/reddit',
	);
});
