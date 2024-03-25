<?php

/**
 * Masters list
 * 
 * @var $master_repeater array  
 */

?>
<?php if ($masters_repeater) : ?>
    <section class="masters">
        <?php foreach ($masters_repeater as $item) : ?>
            <div class="masters__item">
                <div class="masters__item-img">
                    <div class="masters__item-img__inner">
                        <div class="masters__item-img__parallax" data-paroller-factor="-0.05" data-paroller-type="foreground" data-paroller-direction="vertical" style="transform: unset; transition: transform 0.1s ease 0s; will-change: transform;"></div>
                        <img src="<?= $item['master_foto']['url'];  ?>" alt="<?= $item['master_foto']['alt'];  ?>">
                    </div>
                    <?php if (!empty($item['book_with'])) : ?>
                        <a class="btn__yellow-black" href="<?= $item['book_with']['url'] ?>"><?= $item['book_with']['title'] ?></a>
                    <?php endif; ?>
                </div>
                <div class="masters__item-desc">
                    <div class="masters__item-text">
                        <?= $item['description'] ?>
                    </div>
                    <div class="masters__item-bottom">
                        <div class="masters__item-left">
                            <?= $item['favorite']['title']; ?>
                            <img src="<?= $item['favorite']['image']['url']; ?>" alt="<?= $item['favorite']['image']['alt']; ?>">
                        </div>
                        <div class="masters__item-right">
                            <?php if ($item['favorite']) : ?>
                                <ul>
                                    <?php foreach ($item['favorite']['list'] as $fav) : ?>
                                        <li>
                                            <?php if ($fav['title']) : ?>
                                                <h4><?= $fav['title'] ?></h4>
                                            <?php endif; ?>
                                            <?php if ($fav['description']) : ?>
                                                <p><?= $fav['description'] ?></p>
                                            <?php endif; ?>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </section>
<?php endif; ?>