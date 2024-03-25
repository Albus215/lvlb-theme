<?php
/**
 * Service-block With Image
 *
 * @var $image array
 * @var $service array
 */
use FahrradKruken\YAWP\Theme\Core;

?>
<div class="flex-grid">
    <div class="flex-col-md-7 pl-0">
        <div class="content-wi__img-wrap">
            <div class="content-wi__img-frame"
                 data-paroller-factor="-0.05"
                 data-paroller-type="foreground"
                 data-paroller-direction="vertical"></div>
            <img class="content-wi__img"
                 src="<?= Core::thumbnail()->acfImg($image) ?>"
                 alt="<?= $image['alt'] ?>">
        </div>
    </div>
    <div class="flex-col-half-container-5-right pl-lg-6 pl-md-3">
        <?php Core::load()->component('services/service-block', $service); ?>
    </div>
</div>