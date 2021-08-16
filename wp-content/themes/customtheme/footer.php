<?php defined('ABSPATH') or die(); ?>

<footer class="footer">
    <div class="container">
        <div class="footer__content">
            <div class="footer__items">
                <div class="footer__item">
                    <p><?= apply_filters('the_title', get_post_field('post_title', 20)); ?></p>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- LOADER CONTAINER -->
<div class="load-container d-none">
    <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    </div>
</div>

<?php wp_footer(); ?>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/front/build/assets/js/script.min.js"></script>
</body>
</html>