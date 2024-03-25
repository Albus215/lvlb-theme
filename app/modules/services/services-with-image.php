<?php
/**
 * Services with image
 *
 * @var $header string
 * @var $image array
 * @var $services array
 */

use FahrradKruken\YAWP\Theme\Core;

if (!empty($services_list)) : ?>
    <section class="services pt-lg-6 pb-lg-6 pt-md-6 pb-md-6 pt-3 pb-3">
        <div class="flex-container">
            <div class="flex-grid">
                <div class="flex-col-sm-12 pl-3 pr-3">
                    <h2 class="txt-wide services__header"><?= $header ?></h2>
                </div>
            </div>
        </div>
        <div class="flex-grid services__boxes">
            <div class="flex-col-md-4 pl-0">
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
            <div class="flex-col-half-container-8-right">
                <div class="flex-grid">
                    <?php foreach ($services_list as $serviceKey => $service) : ?>
                        <?php if ($service['template'] === 'default') : ?>
                            <div class="flex-col-md-6 pl-0 pr-0">
                                <?php Core::load()->component('services/service-block', $service); ?>
                            </div>
                        <?php else :
                            $serviceDescription = $service['description'];
                            $service['description'] = ''; ?>
                            <div class="flex-col-md-6 pl-0 pr-0">
                                <?php Core::load()->component('services/service-block', $service); ?>
                            </div>
                            <div class="flex-col-md-6 pl-3">
                                <div class="the-content services__box-wrap pb-0 pb-sm-3 pb-md-6 pb-lg-6">
                                    <?= $serviceDescription ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
<?php endif;
