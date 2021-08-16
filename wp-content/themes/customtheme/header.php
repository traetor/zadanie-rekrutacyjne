<?php
session_start();
defined('ABSPATH') or die();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> style="margin-top: 0 !important;">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">

    <title><?php wp_title(); ?></title>
    <?php
    $options = get_option('bicbswp_theme_options');
    if ($options['favicon'] != '') {
        echo '<link type="image/x-icon" href="' . $options['favicon'] . '" rel="Shortcut Icon">';
    }
    ?>

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
    <!-- main.css -->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/front/build/assets/css/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <!--    <link rel="icon" href="-->
    <?php //echo get_template_directory_uri(); ?><!--/images/icon.png" sizes="16x16" type="image/x-icon">-->
    <?php wp_head(); ?>


</head>
<body <?php body_class();  ?>>

<header class="the-header clearfix">
    <?php $homeInfo = get_cfc_meta('home_more', 7); ?>
    <div class="container">
        <a href="<?= get_home_url(); ?>" class="brand">
            <?php
            $options = get_option('bicbswp_theme_options');

            if ($options['logo'] != '') {
                echo '<img src="' . $options['logo'] . '" class="img-responsive animated" alt="' . get_bloginfo('name') . '">';
            } else {
                echo '';
            }?>
        </a>
        <p><?php wp_title(); ?></p>
        <a href="#" class="btn btn-primary"><?= apply_filters('the_title', get_post_field('post_title', 19)); ?></a>
    </div>
</header>


