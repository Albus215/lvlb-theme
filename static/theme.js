/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_oembed_iframe_height_adjuster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/oembed/_iframe-height-adjuster */ "./app/modules/oembed/_iframe-height-adjuster.js");
/* harmony import */ var _modules_element_click_active_element_click_only_active__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/element-click-active/_element-click-only-active */ "./app/modules/element-click-active/_element-click-only-active.js");
/* harmony import */ var _modules_social_share_social_share__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/social-share/social-share */ "./app/modules/social-share/social-share.js");
/* harmony import */ var _modules_nav_nav_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/nav/nav-header */ "./app/modules/nav/nav-header.js");
/* harmony import */ var _modules_forms_nf_on_submit_success__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/forms/_nf-on-submit-success */ "./app/modules/forms/_nf-on-submit-success.js");
/* harmony import */ var _modules_content_simple_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/content/_simple-tabs */ "./app/modules/content/_simple-tabs.js");
/**
 * package.js
 */








__webpack_require__(/*! ./modules/content/paroller.js */ "./app/modules/content/paroller.js");

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  new _modules_social_share_social_share__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _modules_nav_nav_header__WEBPACK_IMPORTED_MODULE_4__["default"]('.header-nav', '.header-nav__toggle');
  var $window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-paroller-factor]').length && $window.width() >= 1200) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-paroller-factor]').paroller();
    setTimeout(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("html,body").scrollTop(3);
    }, 200);
    $window.on('scroll', function () {
      if ($window.scrollTop() < 3) jquery__WEBPACK_IMPORTED_MODULE_0___default()("html,body").scrollTop(3);
    });
  } // -- your modules

});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).load(function () {
  setTimeout(function () {
    var nfContactForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nf-contact-form'),
        nfContactContent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nf-contact-content');

    if (nfContactForm.length) {
      new _modules_forms_nf_on_submit_success__WEBPACK_IMPORTED_MODULE_5__["default"](function (response) {
        var replaceMsg = response.data.actions.success_message;
        nfContactContent.html(replaceMsg);
      });
    }
  }, 1000);
  var acuity_iframes = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.appointments-iframe');

  if (acuity_iframes.length) {
    acuity_iframes.each(function (idx, el) {
      new _modules_oembed_iframe_height_adjuster__WEBPACK_IMPORTED_MODULE_1__["default"](el);
    });
  }

  new _modules_element_click_active_element_click_only_active__WEBPACK_IMPORTED_MODULE_2__["default"]('.services__box', 'active');
  new _modules_content_simple_tabs__WEBPACK_IMPORTED_MODULE_6__["default"]();
});

/***/ }),

/***/ "./app/modules/content/_simple-tabs.js":
/*!*********************************************!*\
  !*** ./app/modules/content/_simple-tabs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleTabs)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var SimpleTabs = /*#__PURE__*/function () {
  function SimpleTabs() {
    _classCallCheck(this, SimpleTabs);

    this.tabLinkSelector = '[data-simple-tabs-link]';
    this.tabBoxSelector = '[data-simple-tabs]';
    this.tabSelector = '[data-simple-tabs-id]';
    this.tabIdAttr = 'data-simple-tabs-id';
    this.tabLinks = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.tabLinkSelector);
    this.activeClass = 'active';

    if (this.tabLinks.length) {
      this.tabLinks.on('click', this.switchTabs.bind(this));
    }
  }

  _createClass(SimpleTabs, [{
    key: "switchTabs",
    value: function switchTabs(event) {
      event.preventDefault();
      var tabLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target);
      var tabBox = tabLink.closest(this.tabBoxSelector);
      var tabLinksAll = tabBox.find(this.tabLinkSelector);
      var tabsAll = tabBox.find(this.tabSelector);
      var tab = tabBox.find('[' + this.tabIdAttr + '=' + tabLink.attr('href') + ']');

      if (tab.length) {
        tabLinksAll.removeClass(this.activeClass);
        tabsAll.removeClass(this.activeClass);
        tabLink.addClass(this.activeClass);
        tab.addClass(this.activeClass);
      }
    }
  }]);

  return SimpleTabs;
}();



/***/ }),

/***/ "./app/modules/content/paroller.js":
/*!*****************************************!*\
  !*** ./app/modules/content/paroller.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var working = false;

  var scrollAction = function scrollAction() {
    working = false;
  };

  var setDirection = {
    bgVertical: function bgVertical(elem, bgOffset) {
      return elem.css({
        'background-position': 'center ' + -bgOffset + 'px'
      });
    },
    bgHorizontal: function bgHorizontal(elem, bgOffset) {
      return elem.css({
        'background-position': -bgOffset + 'px' + ' center'
      });
    },
    vertical: function vertical(elem, elemOffset, transition, oldTransform) {
      oldTransform === 'none' ? oldTransform = '' : true;
      return elem.css({
        '-webkit-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        '-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        'transform': 'translate(0,' + elemOffset + 'px)' + oldTransform,
        'transition': transition,
        'will-change': 'transform'
      });
    },
    horizontal: function horizontal(elem, elemOffset, transition, oldTransform) {
      oldTransform === 'none' ? oldTransform = '' : true;
      return elem.css({
        '-webkit-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        '-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        'transform': 'translate(' + elemOffset + 'px, 0)' + oldTransform,
        'transition': transition,
        'will-change': 'transform'
      });
    }
  };
  var setMovement = {
    factor: function factor(elem, width, options) {
      var dataFactor = elem.data('paroller-factor');
      var factor = dataFactor ? dataFactor : options.factor;

      if (width < 576) {
        var dataFactorXs = elem.data('paroller-factor-xs');
        var factorXs = dataFactorXs ? dataFactorXs : options.factorXs;
        return factorXs ? factorXs : factor;
      } else if (width <= 768) {
        var dataFactorSm = elem.data('paroller-factor-sm');
        var factorSm = dataFactorSm ? dataFactorSm : options.factorSm;
        return factorSm ? factorSm : factor;
      } else if (width <= 1024) {
        var dataFactorMd = elem.data('paroller-factor-md');
        var factorMd = dataFactorMd ? dataFactorMd : options.factorMd;
        return factorMd ? factorMd : factor;
      } else if (width <= 1200) {
        var dataFactorLg = elem.data('paroller-factor-lg');
        var factorLg = dataFactorLg ? dataFactorLg : options.factorLg;
        return factorLg ? factorLg : factor;
      } else if (width <= 1920) {
        var dataFactorXl = elem.data('paroller-factor-xl');
        var factorXl = dataFactorXl ? dataFactorXl : options.factorXl;
        return factorXl ? factorXl : factor;
      } else {
        return factor;
      }
    },
    bgOffset: function bgOffset(offset, factor) {
      return Math.round(offset * factor);
    },
    transform: function transform(offset, factor, windowHeight, height) {
      return Math.round((offset - windowHeight / 2 + height) * factor);
    }
  };
  var clearPositions = {
    background: function background(elem) {
      return elem.css({
        'background-position': 'unset'
      });
    },
    foreground: function foreground(elem) {
      return elem.css({
        'transform': 'unset',
        'transition': 'unset'
      });
    }
  };

  $.fn.paroller = function (options) {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height(); // default options

    var options = $.extend({
      factor: 0,
      // - to +
      factorXs: 0,
      // - to +
      factorSm: 0,
      // - to +
      factorMd: 0,
      // - to +
      factorLg: 0,
      // - to +
      factorXl: 0,
      // - to +
      transition: 'transform .1s ease',
      // CSS transition
      type: 'background',
      // foreground
      direction: 'vertical' // horizontal

    }, options);
    return this.each(function () {
      var $this = $(this);
      var width = $(window).width();
      var offset = $this.offset().top;
      var height = $this.outerHeight();
      var dataType = $this.data('paroller-type');
      var dataDirection = $this.data('paroller-direction');
      var dataTransition = $this.data('paroller-transition');
      var oldTransform = $this.css('transform');
      var transition = dataTransition ? dataTransition : options.transition;
      var type = dataType ? dataType : options.type;
      var direction = dataDirection ? dataDirection : options.direction;
      var factor = 0;
      var bgOffset = setMovement.bgOffset(offset, factor);
      var transform = setMovement.transform(offset, factor, windowHeight, height);

      if (type === 'background') {
        if (direction === 'vertical') {
          setDirection.bgVertical($this, bgOffset);
        } else if (direction === 'horizontal') {
          setDirection.bgHorizontal($this, bgOffset);
        }
      } else if (type === 'foreground') {
        if (direction === 'vertical') {
          setDirection.vertical($this, transform, transition, oldTransform);
        } else if (direction === 'horizontal') {
          setDirection.horizontal($this, transform, transition, oldTransform);
        }
      }

      $(window).on('resize', function () {
        var scrolling = $(this).scrollTop();
        width = $(window).width();
        offset = $this.offset().top;
        height = $this.outerHeight();
        factor = setMovement.factor($this, width, options);
        bgOffset = Math.round(offset * factor);
        transform = Math.round((offset - windowHeight / 2 + height) * factor);

        if (!working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }

        if (type === 'background') {
          clearPositions.background($this);

          if (direction === 'vertical') {
            setDirection.bgVertical($this, bgOffset);
          } else if (direction === 'horizontal') {
            setDirection.bgHorizontal($this, bgOffset);
          }
        } else if (type === 'foreground' && scrolling <= documentHeight) {
          clearPositions.foreground($this);

          if (direction === 'vertical') {
            setDirection.vertical($this, transform, transition);
          } else if (direction === 'horizontal') {
            setDirection.horizontal($this, transform, transition);
          }
        }
      });
      $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        var scrollTop = $(document).scrollTop();

        if (scrollTop === 0) {
          factor = 0;
        } else {
          factor = setMovement.factor($this, width, options);
        }

        bgOffset = Math.round((offset - scrolling) * factor);
        transform = Math.round((offset - windowHeight / 2 + height - scrolling) * factor);

        if (!working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }

        if (type === 'background') {
          if (direction === 'vertical') {
            setDirection.bgVertical($this, bgOffset);
          } else if (direction === 'horizontal') {
            setDirection.bgHorizontal($this, bgOffset);
          }
        } else if (type === 'foreground' && scrolling <= documentHeight) {
          if (direction === 'vertical') {
            setDirection.vertical($this, transform, transition, oldTransform);
          } else if (direction === 'horizontal') {
            setDirection.horizontal($this, transform, transition, oldTransform);
          }
        }
      });
    });
  };
});

/***/ }),

/***/ "./app/modules/element-click-active/_element-click-only-active.js":
/*!************************************************************************!*\
  !*** ./app/modules/element-click-active/_element-click-only-active.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementClickOnlyActive)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ElementClickOnlyActive = /*#__PURE__*/_createClass(function ElementClickOnlyActive(selector, activeClass) {
  _classCallCheck(this, ElementClickOnlyActive);

  this.element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
  var elementActiveClass = activeClass;

  if (this.element.length) {
    this.element.on('click', function (event) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass(elementActiveClass);
    });
  }
});



/***/ }),

/***/ "./app/modules/forms/_nf-on-submit-success.js":
/*!****************************************************!*\
  !*** ./app/modules/forms/_nf-on-submit-success.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NFOnSubmitSuccess)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var NFOnSubmitSuccess = /*#__PURE__*/_createClass(function NFOnSubmitSuccess(onSubmitHandler) {
  _classCallCheck(this, NFOnSubmitSuccess);

  var NFSH = Marionette.Object.extend({
    initialize: function initialize() {
      this.listenTo(Backbone.Radio.channel('forms'), 'submit:response', onSubmitHandler);
    }
  });
  new NFSH();
});



/***/ }),

/***/ "./app/modules/nav/nav-header.js":
/*!***************************************!*\
  !*** ./app/modules/nav/nav-header.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavHeader)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var NavHeader = /*#__PURE__*/function () {
  function NavHeader(navSelector, navToggleSelector) {
    _classCallCheck(this, NavHeader);

    this.navElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(navSelector);
    this.navToggleElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(navToggleSelector);
    this.navMobileToggleClass = 'nav-open';

    if (this.navElement.length) {
      if (this.navToggleElement.length) {
        this.navToggleElement.on('click', this.onMobileToggle.bind(this));
      }

      this.menuDDClass = 'open';
      this.menuDD = this.navElement.find('.menu-item-has-children');
      this.navElement.find('.menu-item-has-children > a').on('click', this.onMobileDDOpen.bind(this));
      this.navElement.find('.menu-item-back > a').on('click', this.onMobileDDback.bind(this));
    }
  }

  _createClass(NavHeader, [{
    key: "onMobileToggle",
    value: function onMobileToggle(event) {
      if (!this.navElement.hasClass(this.navMobileToggleClass)) {
        this.navElement.addClass(this.navMobileToggleClass);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').addClass('body-' + this.navMobileToggleClass);
      } else {
        this.menuDD.removeClass(this.menuDDClass);
        this.navElement.removeClass(this.navMobileToggleClass);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html').removeClass('body-' + this.navMobileToggleClass);
      }
    }
  }, {
    key: "onMobileDDOpen",
    value: function onMobileDDOpen(event) {
      event.preventDefault();

      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent().hasClass(this.menuDDClass)) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent().removeClass(this.menuDDClass);
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent().addClass(this.menuDDClass);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parent().siblings('.' + this.menuDDClass).removeClass(this.menuDDClass);
      }
    }
  }, {
    key: "onMobileDDback",
    value: function onMobileDDback(event) {
      event.preventDefault();
      this.menuDD.removeClass(this.menuDDClass);
    }
  }]);

  return NavHeader;
}();



/***/ }),

/***/ "./app/modules/oembed/_iframe-height-adjuster.js":
/*!*******************************************************!*\
  !*** ./app/modules/oembed/_iframe-height-adjuster.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ iFrameHeightAdjuster)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var iFrameHeightAdjuster = /*#__PURE__*/function () {
  function iFrameHeightAdjuster(iframeSelector) {
    _classCallCheck(this, iFrameHeightAdjuster);

    this.iframeElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()(iframeSelector);

    if (this.iframeElement.length) {
      window.addEventListener('message', this.iFrameElementResize.bind(this));
    }
  }

  _createClass(iFrameHeightAdjuster, [{
    key: "iFrameElementResize",
    value: function iFrameElementResize(event) {
      console.dir(event.data);

      if (event.data && event.data.indexOf('sizing') !== -1) {
        var size = event.data.replace('sizing:', '');
        this.iframeElement.css({
          height: size + 'px'
        });
      }
    }
  }]);

  return iFrameHeightAdjuster;
}();



/***/ }),

/***/ "./app/modules/social-share/social-share.js":
/*!**************************************************!*\
  !*** ./app/modules/social-share/social-share.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialButtons)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/**
 * Class that handles sharing of current page in social networks
 */

var SocialButtons = /*#__PURE__*/function () {
  /**
   * New instance of SocialButtons
   */
  function SocialButtons() {
    _classCallCheck(this, SocialButtons);

    this.socialWindowRef = null;
    this.openWindow = this.openWindow.bind(this);
    this.init();
  }
  /**
   * Initializes behavior of Social Buttons
   */


  _createClass(SocialButtons, [{
    key: "init",
    value: function init() {
      var self = this;
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-social-share-facebook]').click(function (e) {
        e.preventDefault();
        var url = self.buildFacebookURL();
        self.openWindow(url);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-social-share-linkedin]').click(function (e) {
        e.preventDefault();
        var url = self.buildLinkedInURL();
        self.openWindow(url);
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-social-share-twitter]').click(function (e) {
        e.preventDefault();
        var url = self.buildTwitterURL();
        self.openWindow(url, {
          height: 253
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-social-share-google]').click(function (e) {
        e.preventDefault();
        var url = self.buildGoogleURL();
        self.openWindow(url, {
          height: 505,
          width: 515
        });
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-social-share-email]').click(function (e) {
        e.preventDefault();
        var url = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).attr('href') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).closest('a').attr('href');
        url += "?subject=".concat(self.pageTitle(), "&body=").concat(self.pageUrl());
        self.openWindow(encodeURI(url));
      });
    }
    /**
     * Builds facebook sharing url
     *
     * @returns {string} - Facebook share URL
     */

  }, {
    key: "buildFacebookURL",
    value: function buildFacebookURL() {
      return "https://www.facebook.com/sharer/sharer.php?u= + ".concat(this.pageUrl());
    }
    /**
     * Builds facebook sharing url
     *
     * @returns {string} - Facebook share URL
     */

  }, {
    key: "buildLinkedInURL",
    value: function buildLinkedInURL() {
      return "https://www.linkedin.com/sharing/share-offsite/?url=".concat(this.pageUrl()); // return `https://www.linkedin.com/shareArticle?mini=true&` +
      //     `url=${this.pageUrl()}&` +
      //     `title=${this.pageTitle()}&`;
    }
    /**
     * Builds twitter sharing url
     *
     * @returns {string} - Twitter share URL
     */

  }, {
    key: "buildTwitterURL",
    value: function buildTwitterURL() {
      return "https://twitter.com/intent/tweet?url=".concat(this.pageUrl(), "&text=").concat(this.pageTitle());
    }
    /**
     * Builds google sharing url
     *
     * @returns {string} - Google share URL
     */

  }, {
    key: "buildGoogleURL",
    value: function buildGoogleURL() {
      var escapedURL = encodeURIComponent(this.pageUrl());
      return "https://plus.google.com/share?url=".concat(escapedURL);
    }
    /**
     * Returns current page url
     *
     * @returns {string} - Current Page Url
     */

  }, {
    key: "pageUrl",
    value: function pageUrl() {
      return window.location.href;
    }
    /**
     * Returns current page url
     *
     * @returns {string} - Current Page Title
     */

  }, {
    key: "pageTitle",
    value: function pageTitle() {
      return document.title;
    }
    /**
     * Opens a new window on demand
     *
     * @param {string} url - Url of the new window
     * @param {object} options - Options for the new window
     */

  }, {
    key: "openWindow",
    value: function openWindow(url) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = options.width || 575;
      var height = options.height || 400;
      var left = (window.outerWidth - width) / 2;
      var top = (window.outerHeight - height) / 2;
      var opts = "status=1,width=".concat(width, ",height=").concat(height, ",top=").concat(top, ",left=").concat(left);

      if (this.socialWindowRef && !this.socialWindowRef.closed) {
        this.socialWindowRef.close();
      }

      setTimeout(function () {
        _this.socialWindowRef = window.open(url, 'A17', opts);
        _this.socialWindowRef.opener = null;
      }, 250);
    }
  }]);

  return SocialButtons;
}();



/***/ }),

/***/ "./app/app.scss":
/*!**********************!*\
  !*** ./app/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/app-admin.scss":
/*!****************************!*\
  !*** ./app/app-admin.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/app-auth.scss":
/*!***************************!*\
  !*** ./app/app-auth.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./app/app-editor.scss":
/*!*****************************!*\
  !*** ./app/app-editor.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/static/theme": 0,
/******/ 			"static/theme.editor": 0,
/******/ 			"static/theme.auth": 0,
/******/ 			"static/theme.admin": 0,
/******/ 			"static/theme": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmaf"] = self["webpackChunkmaf"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["static/theme.editor","static/theme.auth","static/theme.admin","static/theme"], () => (__webpack_require__("./app/app.js")))
/******/ 	__webpack_require__.O(undefined, ["static/theme.editor","static/theme.auth","static/theme.admin","static/theme"], () => (__webpack_require__("./app/app.scss")))
/******/ 	__webpack_require__.O(undefined, ["static/theme.editor","static/theme.auth","static/theme.admin","static/theme"], () => (__webpack_require__("./app/app-admin.scss")))
/******/ 	__webpack_require__.O(undefined, ["static/theme.editor","static/theme.auth","static/theme.admin","static/theme"], () => (__webpack_require__("./app/app-auth.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["static/theme.editor","static/theme.auth","static/theme.admin","static/theme"], () => (__webpack_require__("./app/app-editor.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;