<?php
function translations()
{
	return htmlspecialchars(
		json_encode(
			array(
				'All rights reserved'	=> __('All rights reserved', 'angularpress'),
				'Developed by'			=> __('Developed by', 'angularpress'),
				'You searched by'		=> __('You searched by', 'angularpress'),
				'No results found'		=> __('No results found', 'angularpress'),
				'Results found'			=> __('Results found', 'angularpress'),
				'Search'				=> __('Search', 'angularpress'),
				'Load More'				=> __('Carregar Mais', 'angularpress'),
			)
		),
		ENT_QUOTES,
		'UTF-8'
	);
}
