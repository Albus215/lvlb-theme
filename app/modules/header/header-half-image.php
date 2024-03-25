<?php
/**
 * Header Main
 *
 * @var $background_image array
 * @var $title string
 */

use FahrradKruken\YAWP\Theme\Core;

$imageClass = Core::dynamicContent()->setStyle([
    'background-image' =>
        'url(' . Core::thumbnail()->acfImg($background_image, 'medium', 'large') . ')',
]);
?>
<div class="header-himg">
    <?php Core::load()->component('nav/nav-header'); ?>
    <div class="flex-container header-himg__wrap">
        <div class="flex-grid">
            <div class="flex-col-sm-12 header-himg__content">
                <div class="the-content">
                    <h1 class="header-himg__title"><?= $title ?></h1>
                </div>
            </div>
        </div>
    </div>
    <div class="header-himg__bg <?= $imageClass ?>"
         data-paroller-factor="0.2"
         data-paroller-type="background"
         data-paroller-direction="vertical"></div>
</div>
