<?php
/**
 * Services
 *
 * @var $header        string
 * @var $services_list array
 * @var $button        array
 */

use FahrradKruken\YAWP\Theme\Core;

if (!empty($services_list)) : ?>
    <section class="flex-container services pt-lg-6 pb-lg-6 pt-md-6 pb-md-6 pt-3 pb-3">
        <div class="flex-grid">
            <div class="flex-col-sm-12 pl-3 pr-3">
                <h2 class="txt-wide services__header"><?= $header ?></h2>
            </div>
        </div>
        <div class="flex-grid services__boxes">
            <?php foreach ($services_list as $serviceKey => $service) : ?>
                <div class="flex-col-md-4 pl-0 pr-0">
                    <?php Core::load()->component('services/service-block', $service); ?>
                </div>
            <?php endforeach; ?>
        </div>
        <?php if (!empty($button['url'])) : ?>
            <div class="flex-grid">
                <div class="flex-col-sm-12 txt-center services__btn">
                    <a class="btn__yellow-black"
                       href="<?= $button['url'] ?>"
                       target="<?= $button['target'] ?>">
                        <?= $button['title'] ?>
                    </a>
                </div>
            </div>
        <?php endif; ?>
    </section>
<?php endif;