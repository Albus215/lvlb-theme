<?php
/**
 * Header (Main) Navigation
 */

use FahrradKruken\YAWP\Theme\Core;

$headerLogoImgSrc = get_field('header', 'options')['logo']['url'];

?>

<!--<div class="header-nav__spacer"></div>-->
<div class="header-nav">
    <div class="header-nav__container flex-container">
        <?= wp_nav_menu([
            'theme_location' => 'main_left',
            'container'      => '',
            'menu_class'     => 'header-nav__links-left',
            'echo'           => false,
            'fallback_cb'    => false,
            'before'         => '',
            'after'          => '',
            'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        ]); ?>
        <a class="header-nav__logo" href="<?= home_url() ?>">
            <img class="header-nav__logo-img" src="<?= $headerLogoImgSrc ?>" alt="Header Logo">
        </a>
        <?= wp_nav_menu([
            'theme_location' => 'main_right',
            'container'      => '',
            'menu_class'     => 'header-nav__links-right',
            'echo'           => false,
            'fallback_cb'    => false,
            'before'         => '',
            'after'          => '',
            'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
        ]); ?>
        <button type="button" class="header-nav__toggle">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="header-nav__wrap-mobile">
            <?= wp_nav_menu([
                'theme_location' => 'main_left',
                'container'      => '',
                'menu_class'     => 'header-nav__links-mobile',
                'echo'           => false,
                'fallback_cb'    => false,
                'before'         => '',
                'after'          => '',
                'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
            ]); ?>
            <?= wp_nav_menu([
                'theme_location' => 'main_right',
                'container'      => '',
                'menu_class'     => 'header-nav__links-mobile',
                'echo'           => false,
                'fallback_cb'    => false,
                'before'         => '',
                'after'          => '',
                'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
            ]); ?>
        </div>
    </div>
</div>
