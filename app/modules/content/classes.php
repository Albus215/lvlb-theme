<?php

/**
 * Classes
 * @var $left_content_title string
 * @var $left_content string
 * @var $center_content string
 * @var $image array
 */
?>
<section class="classes">
    <div class="classes__wrapper">
        <div class="classes__left flex-col-sm-12">
            <h2><?= $left_content_title; ?></h2>
            <?= $left_content; ?>
        </div>
        <div class="classes__center flex-col-sm-12">
            <?= $center_content; ?>
        </div>
        <div class="classes__right flex-col-sm-12">
            <div class="classes__right-frame" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical"></div>
            <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
        </div>
    </div>
</section>