<?php

/**
 * Text and image simple
 * 
 * @var $content string
 * @var $image array  
 */

use FahrradKruken\YAWP\Theme\Core;

$imageClass = Core::dynamicContent()->setStyle([
    'background-image' =>
    'url(' . Core::thumbnail()->acfImg($background_image, 'medium', 'large') . ')',
]);

?>
<section class="text-image container pb-5 pt-5">
    <div class="text-image__text">
        <?= do_shortcode($content); ?>
    </div>
    <div class="text-image__image">
       <img src="<?= do_shortcode($image['url']); ?>" alt="<?= do_shortcode($image['alt']); ?>"> 
    </div>
</section>