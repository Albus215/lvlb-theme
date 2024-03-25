<?php
/**
 * Template Name: Services
 */

use FahrradKruken\YAWP\Theme\Core;
use YAWPT\theme\PageBuilder;

get_header();

$pageHeader = get_field('page_header');
$pageHeader['title'] = $pageHeader['title'] ? $pageHeader['title'] : get_the_title();
$pageSections = get_field('page_sections');

Core::load()->component('header/header-half-image', $pageHeader);

PageBuilder::render($pageSections);

get_footer();