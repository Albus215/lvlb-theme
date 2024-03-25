<?

/**
 * Testimonials
 * @var $title string
 * @var $video array
 * @var $content_v1 string
 * @var $content_v2 string
 * @var $content_v3 string
 * @var $content_v4 string
 */
?>
<section class="testimonials">
    <div class="testimonials__wrapper">
        <div class="testimonials__title">
            <h4><?= esc_html($title); ?></h4>
        </div>
        <div class="testimonials__block">
            <video src="<?= $video['url']; ?>" controls autoplay></video>
            
            <div class="testimonials__block-content">
                <div class="testimonials__block-item"><?= $content_v1; ?></div>
                <div class="testimonials__block-item"><?= $content_v2; ?></div>
            </div>
        </div>
        <div class="testimonials__bottom">
            <div class="testimonials__bottom-item"><?= $content_v3; ?></div>
            <div class="testimonials__bottom-item"><?= $content_v4; ?></div>
        </div>
    </div>
</section>