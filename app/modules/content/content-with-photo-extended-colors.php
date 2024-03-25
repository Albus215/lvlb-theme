<?

/**
 * 
 * Content with photo extended colors
 * @var $image array
 * @var $content string
 * @var $repeater array
 */
?>
<section class="content-colors container flex-grid">
    <div class="content-colors__image flex-col-md-4 pl-0">
        <img src="<?= $image['url']; ?>" alt="<?= $image['alt']; ?>">
    </div>
    <div class="content-colors__block flex-col-md-8">
        <div class="content-colors__content"><?= $content; ?></div>
        <div class="content-colors__rep flex-grid">
            <?php foreach ($repeater as $rep) : ?>
                <div class="flex-col-lg-6">
                    <div class="content-colors__infoblock flex-col-lg-12" style="flex-direction: <?= $rep['text_position']; ?>; background-color: <?= $rep["background_color"]; ?>">
                        <?php if ($rep['title']) : ?>
                            <h2 class="content-colors__infoblock-title"><?= $rep['title']; ?></h2>
                        <?php endif; ?>
                        <?php if ($rep['text']) : ?>
                            <div class="content-colors__infoblock-text"><?= $rep['text']; ?></div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>