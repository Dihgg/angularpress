<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>gamefoss</title>
  <base href="<?php echo home_url() ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root
    id="<?php echo get_queried_object()->ID  ?>"
    post-type="<?php echo get_queried_object()->post_type ?>"
  ></app-root>
</body>
</html>
