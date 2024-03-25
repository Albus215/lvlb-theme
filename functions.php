<?php
/**
 * ACMWPT functions and definitions
 *
 * @package ACMWPT
 */

use YAWPT\Setup;
use FahrradKruken\YAWP\Theme\Core;
use YAWPT\theme\PageBuilder;

require 'vendor/autoload.php';

Core::init([
    'path' => [ // loader constants
                'page_templates' => get_template_directory() . '/tpl/',
                'components'     => get_template_directory() . '/app/modules/',
    ],
    'acf'  => [ // ACF integration constants
                'path' => get_template_directory() . '/acf/',       // where is your ACF folder in your theme
                'url'  => get_template_directory_uri() . '/acf/',   // the same, but URL
                'json' => get_template_directory() . '/app/acf-json/',  // where your fields data will be stored
    ],
]);

Setup::init();

PageBuilder::configure([
    'services'                    => 'services/services',
    'services_with_image'         => 'services/services-with-image',
    'service_block_with_image'    => 'services/service-block-with-image',
    'content_with_photo'          => 'content/content-with-photo',
    'content_with_photo_multiple' => 'content/content-with-photo-multiple',
    'content_with_photo_extended' => 'content/content-with-photo-extended',
    'content_with_photo_extended_colors' => 'content/content-with-photo-extended-colors',
    'content'                     => 'content/content',
    'assistans'                   => 'content/assistans',
    'classes'                     => 'content/classes',
    'testimonials'                => 'content/testimonials',
    'text_block_2_in_row'         => 'content/text_block_2_in_row',
    'spacer'                      => 'content/spacer',
    'content_contact'             => 'content/content-contact',
    'link_to_master'              => 'content/link_to_master',
    'masters_list_block'          => 'content/masters_list',
    'embed_code_raw'              => 'content/embed-code-raw',
    'images_block'                => 'images/images_block',
    'content_with_image_simple'   => 'images/text_and_image_simple',
    'images_block_3_in_row'       => 'images/images_three_in_row',
    
]);

add_action('init', function () {
    if (!session_id()) session_start();
}, 1);