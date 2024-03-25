<?php
/**
 * Footer template file
 */

use FahrradKruken\YAWP\Theme\Core;

$footerData = get_field('footer', 'options');
?>

<footer class="footer">
    <div class="footer-top flex-container">
        <div class="flex-grid">
            <div class="flex-col-md-5 flex-col-lg-5">
                <div class="footer-top__info-left the-content">
                    <?= do_shortcode($footerData['info_left']) ?>
                </div>
            </div>
            <div class="flex-col-md-7 flex-col-lg-7">
                <div class="footer__insta">
                    <?php if (!empty($footerData['instagram_widget']['title'])) : ?>
                        <div class="footer__insta-title">
                            <?= $footerData['instagram_widget']['title'] ?>
                        </div>
                    <?php endif; ?>
                    <?php if (!empty($footerData['instagram_widget']['widget_shortcode'])) : ?>
                        <div class="footer__insta-widget">
                            <?= do_shortcode($footerData['instagram_widget']['widget_shortcode']); ?>
                        </div>
                    <?php endif; ?>
                    <?php if (!empty($footerData['instagram_widget']['links'])) : ?>
                        <span class="footer__insta-links">
                            <?php foreach ($footerData['instagram_widget']['links'] as $fiLink) : ?>
                                <a class=""
                                   href="<?= $fiLink['link']['url'] ?>"
                                   target="<?= $fiLink['link']['target'] ?>">
                                    <?= $fiLink['link']['title'] ?>
                                </a><br>
                            <?php endforeach; ?>
                        </span>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <?= str_replace('[YEAR]', date('Y'), $footerData['info_bottom']) ?>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>
