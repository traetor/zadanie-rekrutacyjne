<?php defined('ABSPATH') or die(); ?>
<?php get_header(); ?>

<!-- MAIN -->
<main>
    <section class="main">
        <div class="container">
            <div class="headerName">
                <?= apply_filters('the_title', get_post_field('post_content', 25)); ?>
            </div>
            <div class="opinions">
                <div class="opinions__slider">
                    <?php
                    $opinions = get_posts(
                        array(
                            'posts_per_page' => -1,
                            'post_type' => 'opinions'
                        )
                    );
                    foreach ($opinions as $opinion): ?>
                        <div class="opinions__slider__item">
                            <div class="box box--bg">
                                <div class="content">
                                    <?= apply_filters('the_title', get_post_field('post_content', $opinion->ID));  ?>
                                </div>
                                <div class="content">
                                    <div class="author">
                                        <p><?= apply_filters('the_title', get_post_field('post_title', $opinion->ID));  ?></p>
                                        <p><?= apply_filters('the_title', get_post_field('post_excerpt', $opinion->ID));  ?></p>
                                    </div>
                                    <?php $opinionDetails = get_cfc_meta('opinions_info', $opinion->ID); ?>
                                    <p><?= $opinionDetails[0]['opinions_info__company']; ?></p>
                                </div>
                                <div class="quote">
                                    <?php include "components/icons/svg/quote.svg"; ?>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
                <div class="slider-nav">
                    <div class="container-large">
                        <div class="slider-nav__content slider-nav__content--banner">
                            <button class="btn-nav prev">
                                <?php include "components/icons/svg/prev-arrow.svg"; ?>
                            </button>
                            <button class="btn-nav next">
                                <?php include "components/icons/svg/next-arrow.svg"; ?>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
