<?php


namespace YAWPT\entities;


class CustomTaxonomies
{
    public static function init()
    {
        add_action('init', function() {

//            register_taxonomy('taxonomy', array('post'), array(
//                'label'                 => '', // определяется параметром $labels->name
//                'labels'                => array(
//                    'name'              => 'Genres',
//                    'singular_name'     => 'Genre',
//                    'search_items'      => 'Search Genres',
//                    'all_items'         => 'All Genres',
//                    'view_item '        => 'View Genre',
//                    'parent_item'       => 'Parent Genre',
//                    'parent_item_colon' => 'Parent Genre:',
//                    'edit_item'         => 'Edit Genre',
//                    'update_item'       => 'Update Genre',
//                    'add_new_item'      => 'Add New Genre',
//                    'new_item_name'     => 'New Genre Name',
//                    'menu_name'         => 'Genre',
//                ),
//                'description'           => '', // описание таксономии
//                'public'                => true,
//                'publicly_queryable'    => null, // равен аргументу public
//                'show_in_nav_menus'     => true, // равен аргументу public
//                'show_ui'               => true, // равен аргументу public
//                'show_in_menu'          => true, // равен аргументу show_ui
//                'show_tagcloud'         => true, // равен аргументу show_ui
//                'show_in_rest'          => null, // добавить в REST API
//                'rest_base'             => null, // $taxonomy
//                'hierarchical'          => false,
//                //'update_count_callback' => '_update_post_term_count',
//                'rewrite'               => true,
//                //'query_var'             => $taxonomy, // название параметра запроса
//                'capabilities'          => array(),
//                'meta_box_cb'           => null, // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
//                'show_admin_column'     => false, // Позволить или нет авто-создание колонки таксономии в таблице ассоциированного типа записи. (с версии 3.5)
//                '_builtin'              => false,
//                'show_in_quick_edit'    => null, // по умолчанию значение show_ui
//            ) );

        });
    }
}