<?php


namespace YAWPT\theme;

use FahrradKruken\YAWP\Theme\Core;

class PageBuilder
{
    /**
     * @var null | PageBuilder
     */
    private static $instance = null;

    /**
     * @var array
     */
    private $templateNamePathMap = [];

    private function __construct()
    {
    }

    private function __clone()
    {
    }

    public static function getInstance()
    {
        if (!isset(self::$instance)) self::$instance = new self();
        return self::$instance;
    }

    public static function configure($templateNamePathMap = [])
    {
        self::getInstance()->setTemplateNamePathMap($templateNamePathMap);
    }

    public static function render($pageSectionsArray = [])
    {
        $templateMap = self::getInstance()->getTemplateNamePathMap();
        if (!empty($pageSectionsArray)) {
            foreach ($pageSectionsArray as $pageSection) {
                foreach ($templateMap as $templateName => $templatePath) {
                    if ($pageSection['acf_fc_layout'] === $templateName) {
                        Core::load()->component($templatePath, $pageSection);
                    }
                }
            }
        }
    }

    private function setTemplateNamePathMap($templateNamePathMap = [])
    {
        $this->templateNamePathMap = $templateNamePathMap;
    }

    private function getTemplateNamePathMap()
    {
        return $this->templateNamePathMap;
    }

}