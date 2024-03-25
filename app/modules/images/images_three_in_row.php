<?php

/**
 * Images 3 in a row
 * 
 * @var $title string  
 * @var $repeater array 
 */

?>
<section class="row_images container">
    <div class="row_images__title">
        <h3><?= do_shortcode($title); ?></h3>
    </div>
    <?php if ($repeater) : ?>
        <div class="row_images__rep">
            <?php foreach ($repeater as $item) : ?>
                <div class="row_images__rep-item">
                    <div class="row_images__rep-img">
                        <img src="<?= $item['image']['url']; ?>" alt="<?= $item['image']['alt']; ?>">
                    </div>
                    <div class="row_images__rep-text">
                        <p><?= $item['description']; ?></p>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>