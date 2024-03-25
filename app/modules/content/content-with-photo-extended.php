<?php

/**
 * Content With Photo (image)
 *
 * @var $photo   array
 * @var $content string
 * @var $content_additional string 
 * @var $content_or_image string 
 * @var $left_image array
 * @var $link array
 * @var $info_blocks array
 */

use FahrradKruken\YAWP\Theme\Core;

?>
<section class="content-wie flex-grid pt-6 pb-6">
    <div class="flex-col-md-4 pl-0 content-wie__block">
        <?php if (Core::thumbnail()->acfImg($photo)) : ?>
            <div class="content-wi__img-wrap">
                <div class="content-wi__img-frame" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical"></div>
                <img class="content-wi__img" src="<?= Core::thumbnail()->acfImg($photo) ?>" alt="<?= $photo['alt'] ?>">
            </div>
        <?php endif; ?>

        <?php if (get_sub_field('content_or_image') == 1) : ?>
            <div class="the-content content-wi__txt-additional">
                <div class="pl-sm-0 pr-sm-0 pl-3 pr-3 pt-6">
                    <?= do_shortcode($content_additional) ?>
                </div>
            </div>
        <?php else : ?>
            <div class="the-content content-wi__left-img">
                <div class="pl-sm-0 pr-sm-0 pl-3 pr-3 pt-0">
                    <?php if ($left_image) : ?>
                        <div class="the-content content-wi__left-parallax" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical" style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;"></div>
                        <img src="<?php echo esc_url($left_image['url']); ?>" alt="<?php echo esc_attr($left_image['alt']); ?>" />
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>

    </div>
    <div class="flex-col-half-container-8-right pl-lg-6 pl-md-3  content-wie__block">
        <div class="the-content content-wi__txt pb-6">
            <?= do_shortcode($content) ?>
        </div>
        <div class="flex-grid">
            <div class="flex-col-lg-6 pl-lg-0 pl-md-3 pr-lg-3 pr-md-3 content-wie__infoblock-wrap">
                <div class="content-wie__infoblock">
                    <h2 class="content-wie__infoblock-title">
                        <?= $info_blocks['title_1'] ?>
                    </h2>
                    <div class="content-wie__infoblock-txt">
                        <?= $info_blocks['content_1'] ?>
                    </div>
                </div>
            </div>
            <div class="flex-col-lg-6 pr-lg-0 pr-md-3 pl-lg-3 pl-md-3 content-wie__infoblock-wrap">
                <div class="content-wie__infoblock content-wie__infoblock-2">
                    <div class="content-wie__infoblock-txt">
                        <?= $info_blocks['content_2'] ?>
                    </div>
                    <h2 class="content-wie__infoblock-title">
                        <?= $info_blocks['title_2'] ?>
                    </h2>
                </div>
            </div>
        </div>
        <?php if (!empty($link['url'])) : ?>
            <div class="the-content txt-center pt-6 pb-6">
                <a class="btn__black" href="<?= $link['url'] ?>" target="<?= $link['target'] ?>">
                    <?= $link['title'] ?>
                </a>
            </div>
        <?php endif; ?>
    </div>
</section>