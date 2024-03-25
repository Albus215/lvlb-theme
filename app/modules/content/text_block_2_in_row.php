<?php

/**
 * Text block 2 in row
 * @var $title string
 * @var $repeater array 
 */
?>

<section class="text-block container">
    <div class="text-block__title">
        <h3><?= $title; ?></h3>
    </div>
    <?php if ($repeater) : ?>
        <div class="text-block__rep">
            <?php foreach ($repeater as $rep) : ?>
                <div class="text-block__rep-item">
                    <?= $rep['text']; ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endif; ?>
</section>