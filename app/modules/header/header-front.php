<?php
/**
 * Header Main
 *
 * @var $content string
 * @var $image_1 array
 * @var $image_2 array
 */

use FahrradKruken\YAWP\Theme\Core;

$image_2_Class = Core::dynamicContent()->setStyle([
    'background-image' => 'url(' . Core::thumbnail()->acfImg($image_2, 'thumbnail', 'thumbnail') . ')',
]);
?>
<div class="header-front">
    <?php Core::load()->component('nav/nav-header'); ?>
    <div class="flex-container header-front__wrap">
        <div class="flex-grid">
            <div class="flex-col-lg-5 header-front__content">
                <div class="the-content">
                    <?= do_shortcode($content) ?>
                </div>
            </div>
            <div class="flex-col-lg-7 header-front__images">
                <img class="header-front__img-1"
                     data-paroller-factor="-0.10"
                     data-paroller-type="foreground"
                     data-paroller-direction="vertical"

                     src="<?= Core::thumbnail()->acfImg($image_1, 'thumbnail') ?>"
                     alt="<?= $image_1['alt'] ?>">
                <div class="header-front__img-2 <?= $image_2_Class ?>"
                     data-paroller-factor="-0.1"
                     data-paroller-type="foreground"
                     data-paroller-direction="vertical">
                    <div class="header-front__img-2-frame"
                         data-paroller-factor="0.05"
                         data-paroller-type="foreground"
                         data-paroller-direction="vertical"></div>
                </div>
            </div>
        </div>
    </div>
</div>
