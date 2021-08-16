<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'projectpeople' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
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
define( 'AUTH_KEY',         'IWKA]]$PT&bsAR4o3x/Xi_(btg`,qLY4l,!8bsj+M_i2ZNN-V/`m`$!T,JT6dO0C' );
define( 'SECURE_AUTH_KEY',  'CJ>6D>1V]|y2i(GD;;:F79 9@tWx<<L-:w~,MNdlTVuqEPvgI6NCjt~tT(<oHP)!' );
define( 'LOGGED_IN_KEY',    '$cJJS@/ZoZf?inwCH4f]Ar2S7lEf(N}hTTJlCS}Xm,).ugvK&6xQH IyLpRZ]q<#' );
define( 'NONCE_KEY',        '>>3umb}TqJ9bPpX5bvB?b.ho1]Ya Plw1BQ~)9Eu5l+BABRuWezmmDF==Pz9iq2C' );
define( 'AUTH_SALT',        '-qkA$^i4OE*$%x?S#RSyB?ut}0zp}5>ATIZNHy!2 dINKN5W^%ipbKY}NX+O-Jk|' );
define( 'SECURE_AUTH_SALT', 'w%1rqP];ppLb5V~({WB_m.#.e,li;Y8=B4<DAV;PVKXZ}x3i3`pcw9os2Ln?ESC$' );
define( 'LOGGED_IN_SALT',   '9,Zy ,GG4<^*RE&#j0pLys;5{K6MdP#fPLWO)qgKmPJj9w#$VE__H@9rx2$G.%Q]' );
define( 'NONCE_SALT',       '>LgU1NFp%$>B0<ysg3#*@+C#[SCIx%0rG~Ff_$J,ZpF%ps(Mn7hGofmo?{n/)$+Y' );

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
