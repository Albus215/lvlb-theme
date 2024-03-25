<?php
/**
 * Template Name: Front Page
 */

use FahrradKruken\YAWP\Theme\Core;
use YAWPT\theme\PageBuilder;

$pageHeader = get_field('page_header');
$pageSections = get_field('page_sections');

get_header();

Core::load()->component('header/header-front', $pageHeader);

PageBuilder::render($pageSections);

get_footer();