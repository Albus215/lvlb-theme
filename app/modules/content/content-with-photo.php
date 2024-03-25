<?php
/**
 * Content With Photo (image)
 *
 * @var $photo   array
 * @var $content string
 */

use FahrradKruken\YAWP\Theme\Core;

?>
<section class="content-wi flex-grid">
    <div class="flex-col-md-5 pl-0">
        <div class="content-wi__img-wrap">
            <div class="content-wi__img-frame"
                 data-paroller-factor="-0.05"
                 data-paroller-type="foreground"
                 data-paroller-direction="vertical"></div>
            <img class="content-wi__img"
                 src="<?= Core::thumbnail()->acfImg($photo) ?>"
                 alt="<?= $photo['alt'] ?>">
        </div>
    </div>
    <div class="flex-col-half-container-7-right">
        <div class="the-content content-wi__txt">
            <?= do_shortcode($content) ?>
        </div>
    </div>
</section>
