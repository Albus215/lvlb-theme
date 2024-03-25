<?php
/**
 * Content With Photo (image)
 *
 * @var $content_with_photo_blocks array
 */

use FahrradKruken\YAWP\Theme\Core;

if (!empty($content_with_photo_blocks)) :

    $photo = [];
    $content = '';

    if (empty(session_id())) {
        $photo = $content_with_photo_blocks[0]['image'];
        $content = $content_with_photo_blocks[0]['content'];
    } else {

        $block_id = 'lvlb_theme_img_content_block_key';
        if (isset($_SESSION[$block_id])) {
            $block_key_prev = intval($_SESSION[$block_id]);
            $block_key_max = count($content_with_photo_blocks);
            $block_key = ($block_key_max <= $block_key_prev + 1) ? 0 : ($block_key_prev + 1);
            $_SESSION[$block_id] = $block_key;
        } else {
            $block_key = 0;
            $_SESSION[$block_id] = $block_key;
        }

        $photo = $content_with_photo_blocks[$block_key]['photo'];
        $content = $content_with_photo_blocks[$block_key]['content'];

        if (!is_user_logged_in()) wp_update_post(['id' => get_the_ID()]);
    } ?>
    <section class="content-wi flex-grid">
        <div class="flex-col-md-5 pl-0">
            <div class="content-wi__img-wrap">
                <div class="content-wi__img-frame"
                     data-paroller-factor="-0.05"
                     data-paroller-type="foreground"
                     data-paroller-direction="vertical"></div>
                <img class="content-wi__img"
                     src="<?= Core::thumbnail()->acfImg($photo) ?>"
                     alt="<?= $photo['alt'] ?>">
            </div>
        </div>
        <div class="flex-col-half-container-7-right">
            <div class="the-content content-wi__txt">
                <?= do_shortcode($content) ?>
            </div>
        </div>
    </section>
<?php endif; ?>
<script>
    
</script>