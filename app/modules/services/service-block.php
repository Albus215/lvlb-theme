<?php
/**
 * Service Block
 *
 * @var $header string
 * @var $price string
 * @var $link array
 * @var $description string
 * @var $color_text string
 * @var $color_block string
 */

use FahrradKruken\YAWP\Theme\Core;

$serviceHeader = $header;
$serviceTxt = $description;
$servicePrice = $price;
$serviceLink = is_array($link) && !empty($link['url']) ?
    $link :
    [
        'url'    => '',
        'target' => '',
        'title'  => __('Book Now'),
    ];
$serviceBgColorClass = Core::dynamicContent()->setStyle(['background' => $color_block,]);
$serviceTxtColorClass = Core::dynamicContent()->setStyle(['color' => $color_text,]);

$serviceBtnClass = Core::dynamicContent()->setStyle([
    'color' => $color_text,
]);
$serviceBtnClass .= ' ' . Core::dynamicContent()->setStyle([
        'border-color' => $color_text,
    ], '::before');
$serviceBtnClass .= ' ' . Core::dynamicContent()->setStyle([
        'color'            => $color_block,
        'background-color' => $color_text,
    ], ':hover');

?>
<div class="services__box-wrap pl-3 pr-3">
    <div class="services__box <?= $serviceBgColorClass ?>">
        <div class="services__box-header <?= $serviceTxtColorClass ?>"
             data-paroller-factor="-0.05"
             data-paroller-type="foreground"
             data-paroller-direction="vertical">
            <?= $serviceHeader ?>
        </div>
        <div class="services__box-price <?= $serviceTxtColorClass ?>">
            <?= $servicePrice ?>
        </div>
        <div class="services__box-btn">
            <a class="btn__adaptive <?= $serviceBtnClass ?>"
               href="<?= $serviceLink['url'] ?>"
               target="<?= $serviceLink['target'] ?>">
                <?= __('Book Now') ?>
            </a>
        </div>
    </div>
    <h6 class="services__box-txt">
        <?= $serviceTxt ?>
    </h6>
</div>