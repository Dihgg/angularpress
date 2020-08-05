<?php require_once('wordpress/languages.php'); ?>
<?php require_once('wordpress/theme-options.php'); ?>
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <?php wp_head(); ?>
  <title>
    <?php echo wp_title() ?>
    <?php echo bloginfo('name'); ?>
  </title>
  <base href="<?php echo home_url() ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
  <?php wp_admin_bar_render(); ?>
  <app-root
    data-theme="<?php echo theme_options() ?>"
    data-translation="<?php echo translations() ?>"
  ></app-root>
  <?php get_footer(); ?>
  <?php require_once('theme.css.php'); ?>
  <script type="text/javascript">
    const BASE_HREF = `<?php echo home_url() ?>`;
    const TAGS = {
      html: `<?php echo get_language_attributes() ?>`,
      body: `<?php echo body_class(array('theme--bg', 'theme--color')) ?>`
    };
  </script>

</body>

</html>