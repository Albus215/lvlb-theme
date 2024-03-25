<?php

/**
 * 
 *  Assistans block
 * @var $title
 * @var $repeater array
 * 
 */
?>
<section class="assistans container">
    <div class="assistans__title">
        <h4><?= $title; ?></h4>
    </div>
    <?php if ($repeater) : ?>
        <div class="assistans__rep">
            <?php foreach ($repeater as $rep) : ?>
                <div class="assistans__rep-item">
                    <img src="<?= $rep['image']['url']; ?>" alt="<?= $rep['image']['alt']; ?>">
                    <h3><?= $rep['name']; ?></h3>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>

</section>