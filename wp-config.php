<?php
define( 'WP_CACHE', true ); // Added by WP Rocket

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'jobportal' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'f]w.&~Z`Zq,e/mTY[G7u0#jcf|wFc_C%eZ<P*n92bIu)diRIp`?$!GUXw,r4 C`>' );
define( 'SECURE_AUTH_KEY',  ',)kg$2i&OrBG*eYxkZ&J[pg K6f>LE6N/d1&Ild4STj,HkT`[[nY9yQuc!}[!c@X' );
define( 'LOGGED_IN_KEY',    '15RKtv_4y_0Se.yVl+3n4Ukl5`w<ut{J#93[^ 2*A^v<1:K<VMg(_J@jvE7QMHHy' );
define( 'NONCE_KEY',        ')8}]vQzh43U$J1%:7[pF|h3cEoh()  l1{.9xh1bD$cUesrE[ kJpe};GLTKBdFf' );
define( 'AUTH_SALT',        '#^`-V(PH}E9H:SjWL@[;s2x]MocJe9peCUXG@k!7T<cxg)]O;rKuV@4SGDAwNNKc' );
define( 'SECURE_AUTH_SALT', 'U{VQ+20v!3N@oZm+VXZz $d~5kc1H+/CR{&:BBWG|[3z74d1tCO{%K&7i?3v*CVc' );
define( 'LOGGED_IN_SALT',   'jhzwB5laHn$A%P8EIW~d7!u>P=tu974oQ69}R8xz~lJHHj?|Lbo`&}W6pFRkO91O' );
define( 'NONCE_SALT',       'vh23?60pjO))o`%$M^M7>]=NPHyL]0DgXX[CX+-L6ET}kThiX6}+=EsAt8o=Y!K`' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
