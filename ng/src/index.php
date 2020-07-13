<?php require_once('wordpress/languages.php'); ?>
<!doctype html>
<html <?php echo get_language_attributes() ?>>

<head>
  <meta charset="utf-8">
  <?php wp_head(); ?>
  <title><?php echo wp_title('|', true) ?></title>
  <base href="<?php echo home_url() ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body <?php body_class(array('theme--bg', 'theme--color')) ?>>
  <?php wp_admin_bar_render(); ?>
  <app-root></app-root>
  <?php get_footer(); ?>
  <?php require_once('theme.css.php'); ?>
  <script type="text/javascript">
    const BASE_HREF = `<?php echo home_url() ?>`;
    const THEME = {
      TEMPLATE_URI: `<?php echo get_template_directory_uri() ?>`,
      logos: {
        mobile: `<?php echo get_theme_mod('mobile_logo_image'); ?>`,
        desktop: `<?php echo get_theme_mod('desktop_logo_image'); ?>`,
        footer: {
          mobile: `<?php echo get_theme_mod('mobile_logo_image_footer'); ?>`,
          desktop: `<?php echo get_theme_mod('desktop_logo_image_footer'); ?>`,
        }
      },
      options: {
        header: {
          socials: <?php echo (get_theme_mod('header_show_socials', 'on') === 'on') ? 'true' : 'false'; ?>
        },
        footer: {
          socials: <?php echo (get_theme_mod('footer_show_socials', 'off') === 'on') ? 'true' : 'false'; ?>,
          disclaimer: `<?php echo get_theme_mod('footer_disclaimer'); ?>`
        }
      }
    };

    const TRANSLATION = <?php echo translations(); ?>;
  </script>

</body>

</html>