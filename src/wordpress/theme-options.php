<?php
function theme_options()
{
	return htmlspecialchars(
		json_encode(
			array(
				'NAME'			=> get_bloginfo('name'),
				'TEMPLATE_URI'	=> get_template_directory_uri(),
				'logos' => array(
					'header'	=> array(
						'mobile'	=> get_theme_mod('mobile_logo_image'),
						'desktop'	=> get_theme_mod('desktop_logo_image'),
					),
					'footer'	=> array(
						'mobile'	=> get_theme_mod('mobile_logo_image_footer'),
						'desktop'	=> get_theme_mod('desktop_logo_image_footer')
					)
				),
				'options'	=> array(
					'header' => array(
						'socials' => (get_theme_mod('header_show_socials', 'on') === 'on') ? 'true' : 'false'
					),
					'footer'	=> array(
						'socials'	=> (get_theme_mod('footer_show_socials', 'off') === 'on') ? 'true' : 'false',
						'disclaimer'	=> get_theme_mod('footer_disclaimer')
					),
					'posts_per_page' => get_option('posts_per_page')
				)
			)
		),
		ENT_QUOTES,
		'UTF-8'
	);
}
