<?php


namespace YAWPT\entities;


class CustomPostTypes
{
    public static function init()
    {
        add_action('init', function() {

//            register_post_type('book', array(
//                'labels'             => array(
//                    'name'               => 'Книги', // Основное название типа записи
//                    'singular_name'      => 'Книга', // отдельное название записи типа Book
//                    'add_new'            => 'Добавить новую',
//                    'add_new_item'       => 'Добавить новую книгу',
//                    'edit_item'          => 'Редактировать книгу',
//                    'new_item'           => 'Новая книга',
//                    'view_item'          => 'Посмотреть книгу',
//                    'search_items'       => 'Найти книгу',
//                    'not_found'          =>  'Книг не найдено',
//                    'not_found_in_trash' => 'В корзине книг не найдено',
//                    'parent_item_colon'  => '',
//                    'menu_name'          => 'Книги'
//
//                ),
//                'public'             => true,
//                'publicly_queryable' => true,
//                'show_ui'            => true,
//                'show_in_menu'       => true,
//                'query_var'          => true,
//                'rewrite'            => true,
//                'capability_type'    => 'post',
//                'has_archive'        => true,
//                'hierarchical'       => false,
//                'menu_position'      => null,
//                'supports'           => array('title','editor','author','thumbnail','excerpt','comments')
//            ) );

        });
    }
}