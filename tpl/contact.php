<?php
/**
 * Template Name: Contact
 */

use FahrradKruken\YAWP\Theme\Core;
use YAWPT\theme\PageBuilder;

get_header();

$pageHeader = get_field('page_header');
$pageHeader['content'] = $pageHeader['content'] ?
    $pageHeader['content'] :
    '<h1>' . get_the_title() . '</h1>';
$pageSections = get_field('page_sections');

Core::load()->component('header/header-half-image-contact', $pageHeader);

PageBuilder::render($pageSections);

get_footer();