<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Envioriment settings
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

/** environment settings */
define('DEV_FOLDER', '/angularpress');
switch ($_SERVER['SERVER_NAME']) {
	case "localhost":
		define('WP_ENV', 'development');
		break;
	default:
		define('WP_ENV', 'production');
		break;
}

/** protocol settings */
define('WP_PROTOCOL', $_SERVER['HTTPS'] ? "https://" : "http://");

// ** MySQL settings ** //
switch (WP_ENV) {
	case "development":
		define('DB_NAME', 'angularpress');
		define('DB_USER', 'root');
		define('DB_PASSWORD', '');
		define('DB_HOST', 'localhost');
		break;
	default:
		define('DB_NAME', '');
		define('DB_USER', '');
		define('DB_PASSWORD', '');
		define('DB_HOST', '');
		break;
}

define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' Q8%0)+7hZ~k2~ GH1UI>o!)-Hv&Z6/7g*x8D&#2,YeGdr4t^zc5I1#&O}f?X -+');
define('SECURE_AUTH_KEY',  '?|UFL+)pZ;ENjk3([Mf.-%GFP#/<W_2]J/`~.~hz={+q,j6;n:eG#3 :Sb`td-B|');
define('LOGGED_IN_KEY',    ' /4. [y^*j+k&UPqJv-0>25T,,J1ia0uD}kHDs-5)Ab;v0:c>QGG|a)6SSq{/bua');
define('NONCE_KEY',        '/~$},s-3.Y:dAyQl|-[}C=*/r7nZ606BNaTGOC>*#W{2M9*aK(D<_dp^>N|^V7[^');
define('AUTH_SALT',        'fzV~yI2PpB$+-L+216 h)9hMs cnVD,<D..u;]=&Cd::1Tiv$J-(Hqu8-+S^W?g,');
define('SECURE_AUTH_SALT', 'bQpa}5|?n1D6Q&P+L|r4lKD1rssMs($h~4}i7w|nx]63o]?+XglQF/NL^)Kw;~)N');
define('LOGGED_IN_SALT',   'J+{)0eRz{|aHVly9-&2N1~+hnss |llT7!*u?YDX+7/:^80-pY|J7&CdL<-U85*[');
define('NONCE_SALT',       'E6XYC&,(DC^<-/h-vB{T&Y(N^cPXgEehqCSd2kJ_9a#>A$U/$;Gxk.lzEVniYb?]');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'jzzlotzqb6_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
switch (WP_ENV) {
	case 'development':
		define('WP_DEBUG', true);
		break;
	default:
		define('WP_DEBUG', false);
		break;
}

/**
 * Setup wordpress urls
 */

switch (WP_ENV) {
	case 'development':
		define('WP_HOME', WP_PROTOCOL . $_SERVER['SERVER_NAME'] . DEV_FOLDER);
		define('WP_CONTENT_DIR', $_SERVER['DOCUMENT_ROOT'] . DEV_FOLDER .'/wp-content');
		break;

	default:
		define('WP_HOME', WP_PROTOCOL . $_SERVER['SERVER_NAME']);
		define('WP_CONTENT_DIR', $_SERVER['DOCUMENT_ROOT'] . '/wp-content');
		break;
}

define('WP_SITEURL', WP_HOME . '/wordpress');

define('WP_CONTENT_URL', WP_HOME . '/wp-content');


/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
