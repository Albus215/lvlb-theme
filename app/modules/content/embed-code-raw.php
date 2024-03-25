<?php
/**
 * Code Raw
 *
 * @var $code string
 * @var $widgets_tabs array
 * @var $use_multiple_embed_widgets_on_tabs bool
 */

if ($use_multiple_embed_widgets_on_tabs && !empty($widgets_tabs)) : ?>
    <div class="flex-container">
        <div class="flex-grid">
            <div class="flex-col-sm-12 pl-0 pr-0 pl-sm-1 pr-sm-1">
                <section class="simple-tabs" data-simple-tabs>
                    <div class="simple-tabs__header">
                        <?php foreach ($widgets_tabs as $wtk => $widgets_tab) : ?>
                            <a class="simple-tabs__link <?= !$wtk ? 'active' : '' ?>"
                               data-simple-tabs-link
                               href="#<?= $wtk . '-' . sanitize_title($widgets_tab['title']) ?>">
                                <?= $widgets_tab['title'] ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                    <div class="simple-tabs__content">
                        <?php foreach ($widgets_tabs as $wtk => $widgets_tab) : ?>
                            <div class="simple-tabs__tab <?= !$wtk ? 'active' : '' ?>"
                                 data-simple-tabs-id="#<?= $wtk . '-' . sanitize_title($widgets_tab['title']) ?>">
                                <?= $widgets_tab['code'] ?>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </section>
            </div>
        </div>
    </div>
<?php elseif (!empty(trim($code))) : ?>
    <div class="flex-container">
        <div class="flex-grid">
            <div class="flex-col-sm-12">
                <?= $code ?>
            </div>
        </div>
    </div>
<?php endif; ?>