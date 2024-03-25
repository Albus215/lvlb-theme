<?php

/**
 * Header Main
 * 
 * @var $background_image array
 * @var $content string
 * @var $content_additional string  
 * @var $content_first string
 * @var $content_second string
 * @var $content_right_v4 string
 */

use FahrradKruken\YAWP\Theme\Core;

$imageClass = Core::dynamicContent()->setStyle([
    'background-image' =>
    'url(' . Core::thumbnail()->acfImg($background_image, 'medium', 'large') . ')',
]);

$switcher = get_field('header_switcher');

?>
<div class="header-himgc">
    <?php Core::load()->component('nav/nav-header'); ?>

    <div class="flex-grid header-himgc__wrap">
        <?php if ($switcher === 'header_v1') : ?>
            <div class="flex-col-half-container-left header-himgc__left" <?php if ($switcher === 'header_v2') : ?> style="height:fit-content;" <?php endif; ?>>
                <div class="the-content">
                    <?= do_shortcode($content) ?>
                </div>
            </div>
            <div class="flex-col-sm-12 flex-col-md-6 header-himgc__right p-0 <?php if ($switcher === 'header_v2') : ?> pb-3 <?php endif; ?>">
                <div class="header-himgc__bg <?= $imageClass ?>" data-paroller-factor="0.2" data-paroller-type="background" data-paroller-direction="vertical"></div>

                <div class="flex-col-half-container-12-right pt-lg-6 pl-lg-6 pt-md-3 pl-md-3">
                    <div class="the-content header-himgc__content-additional">
                        <?= do_shortcode($content_additional) ?>
                    </div>
                </div>
            </div>
        <?php elseif ($switcher === 'header_v2') : ?>
            <div class="flex-col-half-container-left header-himgc__left" <?php if ($switcher === 'header_v2') : ?> style="height:fit-content;" <?php endif; ?>>
                <div class="the-content">
                    <?= do_shortcode($content) ?>
                </div>
            </div>
            <div class="flex-col-sm-12 flex-col-md-6 header-himgc__right p-0 <?php if ($switcher === 'header_v2') : ?> pb-3 <?php endif; ?>">
                <div class="header-himgc__bg <?= $imageClass ?>" data-paroller-factor="0.2" data-paroller-type="background" data-paroller-direction="vertical"></div>
            </div>
            <div class="flex-grid header-himgc__wrap-container">
                <div class="flex-col-sm-12 flex-col-md-5 header-himgc__wrap-left p-0">
                    <?= do_shortcode($content_first) ?>
                </div>

                <div class="flex-col-sm-12 flex-col-md-5 header-himgc__wrap-right p-0">
                    <?= do_shortcode($content_second) ?>
                </div>
            </div>

        <?php elseif ($switcher === 'header_v3') : ?>
            <div class="flex-col-sm-12 flex-col-md-8 header-himgc__left header_third">
                <div class="the-content">
                    <?= do_shortcode($content) ?>
                </div>
            </div>
            <div class="flex-col-sm-12 flex-col-md-4 header-himgc__right p-0">
                <div class="header-himgc__bg <?= $imageClass ?>" data-paroller-factor="0.2" data-paroller-type="background" data-paroller-direction="vertical"></div>
            </div>
            <div class="flex-grid header-himgc__wrap-container">
                <div class="flex-col-sm-12 flex-col-md-5 header-himgc__wrap-left mt-0 p-0 without-margin">
                    <?= do_shortcode($content_third) ?>
                </div>

                <div class="flex-col-sm-12 flex-col-md-5 header-himgc__wrap-right p-0">
                    <?= do_shortcode($content_second) ?>
                </div>
            </div>
        <?php elseif ($switcher === 'header_v4') : ?>
            <div class="flex-col-sm-12 flex-col-md-6 header-himgc__left header_v4">
                <div class="the-content">
                    <?= do_shortcode($content) ?>
                </div>
            </div>
            <div class="flex-col-sm-12 flex-col-md-6 header-himgc__right p-0 header_v4">
                <div class="header-himgc__bg <?= $imageClass ?>" data-paroller-factor="0.2" data-paroller-type="background" data-paroller-direction="vertical"></div>
            </div>
            <div class="flex-grid header-himgc__wrap-container">
                <div class="flex-col-sm-12 flex-col-md-5 header-himgc__wrap-left mt-0 p-0 without-margin">
                    <?= do_shortcode($content_third) ?>
                </div>

                <div class="flex-col-sm-12 flex-col-md-6 header-himgc__wrap-right p-0">
                    <div class="header-himgc__img-frame" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical"></div>
                    <?= do_shortcode($content_right_v4); ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>

<script>
    (function($) {
        function fix_margin_for_header() {
            var first = $('.flex-grid .header-himgc__wrap-container');
            var second = $('.header-himgc__left.header_v3 .the-content, .header-himgc__left.header_v4 .the-content');
            if (first.length && second.length) second.css('margin-left', first.css('margin-left'));
        }

        $(document).ready(fix_margin_for_header);
        $(window).on('resize', fix_margin_for_header);
    })(jQuery);
</script>