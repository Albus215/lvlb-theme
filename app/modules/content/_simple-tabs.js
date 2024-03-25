import $ from 'jquery'

export default class SimpleTabs {
    constructor() {
        this.tabLinkSelector = '[data-simple-tabs-link]';
        this.tabBoxSelector = '[data-simple-tabs]';
        this.tabSelector = '[data-simple-tabs-id]';
        this.tabIdAttr = 'data-simple-tabs-id';

        this.tabLinks = $(this.tabLinkSelector);

        this.activeClass = 'active';
        if (this.tabLinks.length) {
            this.tabLinks.on('click', this.switchTabs.bind(this));
        }
    }

    switchTabs(event) {
        event.preventDefault();
        let tabLink = $(event.target);
        let tabBox = tabLink.closest(this.tabBoxSelector);
        let tabLinksAll = tabBox.find(this.tabLinkSelector);
        let tabsAll = tabBox.find(this.tabSelector);
        let tab = tabBox.find('[' + this.tabIdAttr + '=' + tabLink.attr('href') + ']');
        if (tab.length) {
            tabLinksAll.removeClass(this.activeClass);
            tabsAll.removeClass(this.activeClass);
            tabLink.addClass(this.activeClass);
            tab.addClass(this.activeClass);
        }
    }

}