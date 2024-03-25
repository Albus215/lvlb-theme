<?php


namespace YAWPT\theme;

class Assets
{

    public static function init()
    {
        $staticURL = get_template_directory_uri() . '/static/';
        $staticDIR = get_template_directory() . '/static/';

        // -- Styles
        add_action('wp_enqueue_scripts', function () use ($staticURL, $staticDIR) {
            // disable emoji
            remove_action('wp_head', 'print_emoji_detection_script', 7);
            remove_action('admin_print_scripts', 'print_emoji_detection_script');
            remove_action('wp_print_styles', 'print_emoji_styles');
            remove_action('admin_print_styles', 'print_emoji_styles');
            remove_filter('the_content_feed', 'wp_staticize_emoji');
            // add styles
            wp_register_style('theme-g-fonts',
                'https://fonts.googleapis.com/css?family=Lora:400,700|Tajawal:400,700&display=swap',
                [], null);
            wp_enqueue_style('theme-style', $staticURL . 'theme.css',
                ['theme-g-fonts', 'dashicons'],
                filemtime($staticDIR . 'theme.css'));
        });
        // --

        // -- Scripts
        add_action('wp_enqueue_scripts', function () use ($staticURL, $staticDIR) {
            wp_deregister_script('wp-embed');
            wp_enqueue_script('theme-script', $staticURL . 'theme.js',
                ['jquery'],
                filemtime($staticDIR . 'theme.js'), true);
        });
        // --

        // -- Admin Styles / Scripts
        add_action('admin_enqueue_scripts', function () use ($staticURL, $staticDIR) {
            wp_enqueue_style('theme-style-admin', $staticURL . 'theme.admin.css',
                [],
                filemtime($staticDIR . 'theme.admin.css'));
            wp_enqueue_script('theme-script-admin', $staticURL . 'theme.admin.js',
                ['jquery'],
                filemtime($staticDIR . 'theme.admin.js'), true);
        });
        // --

        // -- Login / SignUp styles
        add_action('login_head', function () use ($staticURL, $staticDIR) {
            remove_action('login_head', 'wp_shake_js', 12);
            echo '<link rel="stylesheet" href="' . $staticURL . 'theme.auth.css?ver=' .
                filemtime($staticDIR . 'theme.auth.css') . '">';
        });
        // --

        // -- After Setup
        add_action('after_setup_theme', function () {
            // -- OEmbed Fix
            $oEmbedFixFunctions = function ($html) {
                return '<div class="embed-container">' . $html . '</div>';
            };
            add_filter('oembed_result', $oEmbedFixFunctions, 99, 1);
            add_filter('video_embed_html', $oEmbedFixFunctions); // Jetpack
            // -- Add Editor Style
            add_editor_style('static/theme.editor.css');
        });
        // --

        // disable ninja form styles
        add_action('nf_display_enqueue_scripts', function () {
            wp_dequeue_style('nf-display');
        });
        // --

        // register palette
        add_filter('tiny_mce_before_init', function ($tmce) {
            $palette = [
                'Blue Dark'  => '131f3c',
                'Yellow'     => 'e4c8aa',
                'Red'        => 'aa8a65',
                'Brown'      => 'ff1d68',
                'Gray Light' => 'dcdee0',
            ];
            if (!empty($palette)) {
                $customColors = [];
                foreach ($palette as $colorName => $colorValue) {
                    $customColors[] = '"' . strtoupper($colorValue) . '"';
                    $customColors[] = '"' . $colorName . '"';
                }
                $tmce['textcolor_map'] = '[' . implode(',', $customColors) . ']';
                $tmce['textcolor_rows'] = ceil(count($customColors) / 2 / 6);
                $tmce['textcolor_cols'] = 6;
            }
            return $tmce;
        });
        // --
    }
}