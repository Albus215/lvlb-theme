<?php


namespace YAWPT;


use YAWPT\entities\CustomPostTypes;
use YAWPT\entities\CustomTaxonomies;
use YAWPT\theme\ACFOptions;
use YAWPT\theme\Assets;

class Setup
{
    public static function init()
    {
        add_filter('show_admin_bar', '__return_false');

        // -- Theme setup
        add_action('after_setup_theme', function () {
            add_theme_support('title-tag');
            add_theme_support('post-thumbnails');
            add_theme_support(
                'html5',
                [
                    'search-form',
                    'comment-form',
                    'comment-list',
                    'gallery',
                    'caption',
                ]
            );

            register_nav_menus([
                'main_left'  => 'Main Menu Left',
                'main_right' => 'Main Menu Right',
            ]);
        });
        // --
        // -- Other functions
        // --
        Assets::init();
//        CustomPostTypes::init();
//        CustomTaxonomies::init();
        ACFOptions::init();
    }
}