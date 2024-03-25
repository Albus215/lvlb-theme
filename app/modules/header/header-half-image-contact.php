<?php

/**
 * Header Main
 *
 * @var $background_image array
 * @var $content string
 * @var $form string
 * @var $link_1 array
 * @var $link_2 array
 * @var $first_image array
 * @var $second_image array
 */

use FahrradKruken\YAWP\Theme\Core;

$imageClass = Core::dynamicContent()->setStyle([
    'background-image' =>
    'url(' . Core::thumbnail()->acfImg($background_image, 'medium', 'large') . ')',
]);
?>
<div class="header-himgc">
    <?php Core::load()->component('nav/nav-header'); ?>
    <div class="flex-grid header-himgc__wrap">
        <div class="flex-col-half-container-left header-himgc__left">
            <div class="the-content">
                <div class="nf-contact-content  pt-4">
                    <?= do_shortcode($content) ?>
                    <div class="header-himgc__links">
                        <a class="header-himgc__link" href="<?= $link_1['url'] ?>" target="<?= $link_1['target'] ?>">
                            <?= $link_1['title'] ?>
                        </a>
                        <a class="header-himgc__link" href="<?= $link_2['url'] ?>" target="<?= $link_2['target'] ?>">
                            <?= $link_2['title'] ?>
                        </a>
                    </div>
                </div>
                <div class="nf-contact-form">
                    <?= do_shortcode($form) ?>
                </div>
            </div>
        </div>
        <div class="flex-col-sm-12 flex-col-md-6 header-himgc__right">
            <div class="header-himgc__right-imgs pt-6">
                <div class="header-himgc__right-inner">
                    <img src="<?= esc_url($first_image['url']); ?>" alt="<?= esc_url($first_image['alt']); ?>">
                </div>
                <div class="header-himgc__right-inner">
                <div class="images-block__rep-parallax" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical" style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;"></div>
                    <img src="<?= esc_url($second_image['url']); ?>" alt="<?= esc_url($second_image['alt']); ?>">
                </div>
            </div>
        </div>
    </div>