<?php

add_action('customize_register', 'color_customizer');
add_action('customize_register', 'logo_customizer');
add_action('customize_register', 'options_customizer');

function color_customizer($wp_customize)
{
	$wp_customize->add_section('theme_colors_settings', array(
		'title' => __('Colors', 'angularpress'),
		'priority' => 5,
	));

	$theme_colors = array(
		// Background Color
		array(
			'slug' => 'background_color',
			'default' => '#ffffff',
			'label' => __('Background', 'angularpress')
		),
		// Menus Background
		array(
			'slug' => 'menu_background_color',
			'default' => '#666666',
			'label' => __('Menu Background', 'angularpress')
		),
		// Text Colors
		array(
			'slug' => 'text_color',
			'default' => '#000000',
			'label' => __('Text', 'angularpress')
		),
		// Menu Text color
		array(
			'slug' => 'menu_text_color',
			'default' => '#ffffff',
			'label' => __('Menu Color', 'angularpress')
		)
	);

	foreach ($theme_colors as $color) {

		$wp_customize->add_setting(
			$color['slug'],
			array(
				'default' => $color['default'],
				'sanitize_callback' => 'sanitize_hex_color',
				'type' => 'theme_mod',
				'capability' => 'edit_theme_options',
				'transport' => 'refresh'
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Color_Control(
				$wp_customize,
				$color['slug'],
				array(
					'label' => $color['label'],
					'section' => 'theme_colors_settings',
					'settings' => $color['slug']
				)
			)
		);
	}
}

function logo_customizer($wp_customize) {
	$wp_customize->add_section('theme_logo_settings', array(
		'title' => __('Logos', 'angularpress'),
		'priority' => 5,
	));
	
	$theme_logos = array(
		// Desktop logo
		array(
			'slug' => 'desktop_logo_image',
			'default' => '',
			'label' => __('Desktop Logo', 'angularpress')
		),
		array(
			'slug' => 'desktop_logo_image_footer',
			'default' => '',
			'label' => __('Desktop Logo (Footer)', 'angularpress')
		),
		// Mobile logo
		array(
			'slug' => 'mobile_logo_image',
			'default' => '',
			'label' => __('Mobile Logo', 'angularpress')
		),
		array(
			'slug' => 'mobile_logo_image_footer',
			'default' => '',
			'label' => __('Mobile Logo (Footer)', 'angularpress')
		)
	);

	foreach($theme_logos as $logo) {
		
		$wp_customize->add_setting(
			$logo['slug'],
			array(
				'default' => $logo['default'],
				'sanitize_callback' => 'angularpress_sanitize_file',
				'type' => 'theme_mod',
				'capability' => 'edit_theme_options',
				'transport' => 'refresh'
			)
		);

		$wp_customize->add_control(
			new WP_Customize_Image_Control(
				$wp_customize,
				$logo['slug'],
				array(
					'label' => $logo['label'],
					'section' => 'theme_logo_settings',
					'settings' => $logo['slug']
				)
			)
		);
	}
}

function options_customizer($wp_customize) {

	$sections = array(
		'theme_header_settings' => array(
			// Options for HEADER
			'label' => __('Header', 'angularpress'),
			'options' => array(
				// Show socials
				array(
					'slug' => 'header_show_socials',
					'default' => 'on',
					'type'	=> 'radio',
					'choices' => array(
						'on' => __( 'On', 'angularpress' ),
						'off' => __( 'Off', 'angularpress' )
					),
					'sanitize_callback' => 'angularpress_sanitize_select',
					'label' => __('Show Socials', 'angularpress'),
					'description' => __( 'Show Socials menu.', 'angularpress' )
				),
			)
		),
		'theme_footer_settings' => array(
			// Options for HEADER
			'label' => __('Footer', 'angularpress'),
			'options' => array(
				// Show socials
				array(
					'slug' => 'footer_show_socials',
					'default' => 'off',
					'type'	=> 'radio',
					'choices' => array(
						'on' => __( 'On', 'angularpress' ),
						'off' => __( 'Off', 'angularpress' )
					),
					'sanitize_callback' => 'angularpress_sanitize_select',
					'label' => __('Show Socials', 'angularpress'),
					'description' => __( 'Show Socials menu.', 'angularpress' )
				),
				array(
					'slug' => 'footer_disclaimer',
					'default' => '',
					'type'	=> 'textarea',
					'choices' => null,
					'sanitize_callback' => 'sanitize_textarea_field',
					'label' => __('Disclaimer', 'angularpress'),
					'description' => __( 'Text of footer Disclaimer.', 'angularpress' )
				),
			)
		),
	);
	
	foreach ($sections as $id => $section) {
		$wp_customize->add_section($id, array(
			'title' => $section['label'],
			'priority' => 6,
		));

		foreach($section['options'] as $option) {
		
			$wp_customize->add_setting(
				$option['slug'],
				array(
					'default' => $option['default'],
					'sanitize_callback' => $option['sanitize_callback'],
					'type' => 'theme_mod',
					'capability' => 'edit_theme_options',
					'transport' => 'refresh'
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Control(
					$wp_customize,
					$option['slug'],
					array(
						'type' => $option['type'],
						'section' => $id,
						'label' => $option['label'],
						'description' => $option['description'],
						'choices' => $option['choices'],
					)
				)
			);
	
			/* $wp_customize->add_control( $option['slug'], array(
				'type' => 'radio',
				'section' => $id,
				'label' => $option['label'],
				'description' => $option['description'],
				'choices' => $option['choices'],
			) ); */
		}
	}
}


// SANITIZERS
function angularpress_sanitize_file( $file, $setting ) {
          
	//allowed file types
	$mimes = array(
		'jpg|jpeg|jpe' => 'image/jpeg',
		'gif'          => 'image/gif',
		'png'          => 'image/png'
	);
	  
	//check file type from file name
	$file_ext = wp_check_filetype( $file, $mimes );
	  
	//if file has a valid mime type return it, otherwise return default
	return ( $file_ext['ext'] ? $file : $setting->default );
}

function angularpress_sanitize_select( $input, $setting ) {

	// Ensure input is a slug.
	$input = sanitize_key( $input );
  
	// Get list of choices from the control associated with the setting.
	$choices = $setting->manager->get_control( $setting->id )->choices;
  
	// If the input is a valid key, return it; otherwise, return the default.
	return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
  }