/**
 * package.js
 */

import $ from 'jquery'

import iFrameHeightAdjuster from "./modules/oembed/_iframe-height-adjuster";
import ElementClickOnlyActive from "./modules/element-click-active/_element-click-only-active";

import SocialButtons from './modules/social-share/social-share'
import NavHeader from './modules/nav/nav-header'
import NFOnSubmitSuccess from "./modules/forms/_nf-on-submit-success";

import SimpleTabs from "./modules/content/_simple-tabs";

require('./modules/content/paroller.js');

$(document).ready(function() {
    new SocialButtons();
    new NavHeader('.header-nav', '.header-nav__toggle');

    const $window = $(window);
    if ($('[data-paroller-factor]').length && $window.width() >= 1200) {
        $('[data-paroller-factor]').paroller();
        setTimeout(function() {
            $("html,body").scrollTop(3);
        }, 200);
        $window.on('scroll', function() {
            if ($window.scrollTop() < 3) $("html,body").scrollTop(3);
        });
    }
    // -- your modules

});

$(window).load(function() {
    setTimeout(function() {
        let nfContactForm = $('.nf-contact-form'),
            nfContactContent = $('.nf-contact-content');
        if (nfContactForm.length) {
            new NFOnSubmitSuccess(function(response) {
                let replaceMsg = response.data.actions.success_message;
                nfContactContent.html(replaceMsg);
            });
        }
    }, 1000);

    let acuity_iframes = $('.appointments-iframe');
    if (acuity_iframes.length) {
        acuity_iframes.each(function(idx, el) {
            new iFrameHeightAdjuster(el);
        });
    }

    new ElementClickOnlyActive('.services__box', 'active');

    new SimpleTabs();
});