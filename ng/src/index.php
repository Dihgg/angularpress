<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title><?php echo bloginfo('name') ?></title>
  <?php wp_head(); ?>
  <title><?php echo wp_title('|') ?></title>
  <base href="<?php echo home_url() ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script type="text/javascript">
    const BASE_HREF = `<?php echo home_url() ?>`;
  </script>
</head>

<body>
  <app-root></app-root>
  <?php get_footer(); ?>
</body>

</html>