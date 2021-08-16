<?php defined('ABSPATH') or die(); ?>
<?php get_header(); ?>

<!-- MAIN -->
<main>
    <section class="fourty">
        <h1>404</h1>
        <h2><?= apply_filters('the_title', get_post_field('post_title', 96)); ?></h2>
        <a href="<?= get_home_url(); ?>" class="btn btn-primary"><?= apply_filters('the_title', get_post_field('post_title', 97)); ?></a>
    </section>
</main>

<?php get_footer(); ?>
