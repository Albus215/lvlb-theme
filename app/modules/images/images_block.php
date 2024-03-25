<?php

/**
 * Images block
 *
 * @var $title string
 * @var $first_image array
 * @var $second_image array
 * @var $last_image array
 * @var $images_repeater array
 */

use FahrradKruken\YAWP\Theme\Core;

$imageClass = Core::dynamicContent()->setStyle([
    'background-image' =>
    'url(' . Core::thumbnail()->acfImg($background_image, 'medium', 'large') . ')',
]);

?>
<section class="images-block pt-6">
    <div class="images-block__container">
        <div class="images-block__title pb-3">
            <h3><?= do_shortcode($title); ?></h3>
        </div>
        <div class="images-block__rep display-flex p-0 pt-5">
            <div class="images-block__rep-left">
                <div class="content-wi__img-frame" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical" style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;"></div>
                <img src="<?= $first_image['url']; ?>" alt="<?= $first_image['alt']; ?>">
            </div>
            <div class="images-block__rep-right"><img src="<?= $second_image['url']; ?>" alt="<?= $second_image['alt']; ?>"></div>
            <?php if ($images_repeater) : ?>
                <div class="images-block__rep-bottom pt-4">
                    <?php foreach ($images_repeater as $image) : ?>
                        <div class="images-block__rep-img">
                            <img class="<?= $imageClass; ?>" src="<?= esc_url($image['image']['url']) ?>" alt="<?= $image['image']['alt'] ?>">
                        </div>
                    <?php endforeach; ?>
                    <div class="images-block__rep-img">
                        <div class="images-block__rep-parallax" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical" style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;"></div>
                        <img class="<?= $imageClass; ?>" src="<?= esc_url($last_image['url']) ?>" alt="<?= $last_image['alt'] ?>">
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</section>