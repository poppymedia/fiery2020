/** @preserve
 *
 * slippry v1.4.0 - Responsive content slider for jQuery
 * http://slippry.com
 *
 * Authors: Lukas Jakob Hafner - @saftsaak
 *          Thomas Hurd - @SeenNotHurd
 *
 * Copyright 2016, booncon oy - http://booncon.com
 *
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(a){"use strict";var b;b={slippryWrapper:'<div class="sy-box" />',slideWrapper:'<div class="sy-slides-wrap" />',slideCrop:'<div class="sy-slides-crop" />',boxClass:"sy-list",elements:"li",activeClass:"sy-active",fillerClass:"sy-filler",loadingClass:"sy-loading",adaptiveHeight:!0,start:1,loop:!0,captionsSrc:"img",captions:"overlay",captionsEl:".sy-caption",initSingle:!0,responsive:!0,preload:"visible",pager:!0,pagerClass:"sy-pager",controls:!0,controlClass:"sy-controls",prevClass:"sy-prev",prevText:"Previous",nextClass:"sy-next",nextText:"Next",hideOnEnd:!0,transition:"fade",kenZoom:120,slideMargin:0,transClass:"transition",speed:800,easing:"swing",continuous:!0,useCSS:!0,auto:!0,autoDirection:"next",autoHover:!0,autoHoverDelay:100,autoDelay:500,pause:4e3,onSliderLoad:function(){return this},onSlideBefore:function(){return this},onSlideAfter:function(){return this}},a.fn.slippry=function(c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A;return e=this,0===e.length?this:e.length>1?(e.each(function(){a(this).slippry(c)}),this):(d={},d.vars={},n=function(){var a,b,c;b=document.createElement("div"),c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",MSTransition:"msTransitionEnd",OTransition:"oTransitionEnd",transition:"transitionEnd transitionend"};for(a in c)if(void 0!==b.style[a])return c[a]},w=function(){var a=document.createElement("div"),b=["Khtml","Ms","O","Moz","Webkit"],c=b.length;return function(d){if(d in a.style)return!0;for(d=d.replace(/^[a-z]/,function(a){return a.toUpperCase()});c--;)if(b[c]+d in a.style)return!0;return!1}}(),z=function(b,c){var d,e,f,g;return d=c.split("."),e=a(b),f="",g="",a.each(d,function(a,b){b.indexOf("#")>=0?f+=b.replace(/^#/,""):g+=b+" "}),f.length&&e.attr("id",f),g.length&&e.attr("class",a.trim(g)),e},A=function(){var a,b,c,e;c={},e={},a=100-d.settings.kenZoom,e.width=d.settings.kenZoom+"%",d.vars.active.index()%2===0?(e.left=a+"%",e.top=a+"%",c.left="0%",c.top="0%"):(e.left="0%",e.top="0%",c.left=a+"%",c.top=a+"%"),b=d.settings.pause+2*d.settings.speed,d.vars.active.css(e),d.vars.active.animate(c,{duration:b,easing:d.settings.easing,queue:!1})},l=function(){d.vars.fresh?(d.vars.slippryWrapper.removeClass(d.settings.loadingClass),d.vars.fresh=!1,d.settings.auto&&e.startAuto(),d.settings.useCSS||"kenburns"!==d.settings.transition||A(),d.settings.onSliderLoad.call(void 0,d.vars.active.index())):a("."+d.settings.fillerClass,d.vars.slideWrapper).addClass("ready")},q=function(b,c){var e,f,g;e=b/c,f=1/e*100+"%",g=a("."+d.settings.fillerClass,d.vars.slideWrapper),g.css({paddingTop:f}),l()},g=function(b){var c,d;void 0!==a("img",b).attr("src")?a("<img />").on("load",function(){c=b.width(),d=b.height(),q(c,d)}).attr("src",a("img",b).attr("src")):(c=b.width(),d=b.height(),q(c,d))},f=function(){if(0===a("."+d.settings.fillerClass,d.vars.slideWrapper).length&&d.vars.slideWrapper.append(a('<div class="'+d.settings.fillerClass+'" />')),d.settings.adaptiveHeight===!0)g(a("."+d.settings.activeClass,e));else{var b,c,f;c=0,f=0,a(d.vars.slides).each(function(){a(this).height()>c&&(b=a(this),c=b.height()),f+=1,f===d.vars.count&&(void 0===b&&(b=a(a(d.vars.slides)[0])),g(b))})}},p=function(){d.settings.pager&&(a("."+d.settings.pagerClass+" li",d.vars.slippryWrapper).removeClass(d.settings.activeClass),a(a("."+d.settings.pagerClass+" li",d.vars.slippryWrapper)[d.vars.active.index()]).addClass(d.settings.activeClass))},u=function(){!d.settings.loop&&d.settings.hideOnEnd&&(a("."+d.settings.prevClass,d.vars.slippryWrapper)[d.vars.first?"hide":"show"](),a("."+d.settings.nextClass,d.vars.slippryWrapper)[d.vars.last?"hide":"show"]())},i=function(){var b,c;d.settings.captions!==!1&&(b="img"!==d.settings.captionsSrc?d.vars.active.attr("title"):void 0!==a("img",d.vars.active).attr("title")?a("img",d.vars.active).attr("title"):a("img",d.vars.active).attr("alt"),c="custom"!==d.settings.captions?a(d.settings.captionsEl,d.vars.slippryWrapper):a(d.settings.captionsEl),void 0!==b&&""!==b?c.html(b).show():c.hide())},e.startAuto=function(){void 0===d.vars.timer&&void 0===d.vars.delay&&(d.vars.delay=window.setTimeout(function(){d.vars.autodelay=!1,d.vars.timer=window.setInterval(function(){d.vars.trigger="auto",t(d.settings.autoDirection)},d.settings.pause)},d.vars.autodelay?d.settings.autoHoverDelay:d.settings.autoDelay),d.settings.autoHover&&d.vars.slideWrapper.unbind("mouseenter").unbind("mouseleave").bind("mouseenter",function(){void 0!==d.vars.timer?(d.vars.hoverStop=!0,e.stopAuto()):d.vars.hoverStop=!1}).bind("mouseleave",function(){d.vars.hoverStop&&(d.vars.autodelay=!0,e.startAuto())}))},e.stopAuto=function(){window.clearInterval(d.vars.timer),d.vars.timer=void 0,window.clearTimeout(d.vars.delay),d.vars.delay=void 0},e.refresh=function(){d.vars.slides.removeClass(d.settings.activeClass),d.vars.active.addClass(d.settings.activeClass),d.settings.responsive?f():l(),u(),p(),i()},s=function(){e.refresh()},m=function(){d.vars.moving=!1,d.vars.active.removeClass(d.settings.transClass),d.vars.fresh||d.vars.old.removeClass("sy-ken"),d.vars.old.removeClass(d.settings.transClass),d.settings.onSlideAfter.call(void 0,d.vars.active,d.vars.old.index(),d.vars.active.index()),d.settings.auto&&(d.vars.hoverStop&&void 0!==d.vars.hoverStop||e.startAuto())},r=function(){var b,c,f,g,h,i,j;d.settings.onSlideBefore.call(void 0,d.vars.active,d.vars.old.index(),d.vars.active.index()),d.settings.transition!==!1?(d.vars.moving=!0,"fade"===d.settings.transition||"kenburns"===d.settings.transition?(d.vars.fresh?(d.settings.useCSS?d.vars.slides.css({transitionDuration:d.settings.speed+"ms",opacity:0}):d.vars.slides.css({opacity:0}),d.vars.active.css("opacity",1),"kenburns"===d.settings.transition&&d.settings.useCSS&&(h=d.settings.pause+2*d.settings.speed,d.vars.slides.css({animationDuration:h+"ms"}),d.vars.active.addClass("sy-ken")),m()):d.settings.useCSS?(d.vars.old.addClass(d.settings.transClass).css("opacity",0),d.vars.active.addClass(d.settings.transClass).css("opacity",1),"kenburns"===d.settings.transition&&d.vars.active.addClass("sy-ken"),a(window).off("focus").on("focus",function(){d.vars.moving&&d.vars.old.trigger(d.vars.transition)}),d.vars.old.one(d.vars.transition,function(){return m(),this})):("kenburns"===d.settings.transition&&A(),d.vars.old.addClass(d.settings.transClass).animate({opacity:0},d.settings.speed,d.settings.easing,function(){m()}),d.vars.active.addClass(d.settings.transClass).css("opacity",0).animate({opacity:1},d.settings.speed,d.settings.easing)),s()):("horizontal"===d.settings.transition||"vertical"===d.settings.transition)&&(i="horizontal"===d.settings.transition?"left":"top",b="-"+d.vars.active.index()*(100+d.settings.slideMargin)+"%",d.vars.fresh?(e.css(i,b),m()):(j={},d.settings.continuous&&(!d.vars.jump||"controls"!==d.vars.trigger&&"auto"!==d.vars.trigger||(c=!0,g=b,d.vars.first?(f=0,d.vars.active.css(i,d.vars.count*(100+d.settings.slideMargin)+"%"),b="-"+d.vars.count*(100+d.settings.slideMargin)+"%"):(f=(d.vars.count-1)*(100+d.settings.slideMargin)+"%",d.vars.active.css(i,-(100+d.settings.slideMargin)+"%"),b=100+d.settings.slideMargin+"%"))),d.vars.active.addClass(d.settings.transClass),d.settings.useCSS?(j[i]=b,j.transitionDuration=d.settings.speed+"ms",e.addClass(d.settings.transition),e.css(j),a(window).off("focus").on("focus",function(){d.vars.moving&&e.trigger(d.vars.transition)}),e.one(d.vars.transition,function(){return e.removeClass(d.settings.transition),c&&(d.vars.active.css(i,f),j[i]=g,j.transitionDuration="0ms",e.css(j)),m(),this})):(j[i]=b,e.stop().animate(j,d.settings.speed,d.settings.easing,function(){return c&&(d.vars.active.css(i,f),e.css(i,g)),m(),this}))),s())):(s(),m())},v=function(a){d.vars.first=d.vars.last=!1,"prev"===a||0===a?d.vars.first=!0:("next"===a||a===d.vars.count-1)&&(d.vars.last=!0)},t=function(b){var c,f;d.vars.moving||("auto"!==d.vars.trigger&&e.stopAuto(),c=d.vars.active.index(),"prev"===b?(f=b,c>0?b=c-1:d.settings.loop&&(b=d.vars.count-1)):"next"===b?(f=b,c<d.vars.count-1?b=c+1:d.settings.loop&&(b=0)):(b-=1,f=c>b?"prev":"next"),d.vars.jump=!1,"prev"===b||"next"===b||b===c&&!d.vars.fresh||(v(b),d.vars.old=d.vars.active,d.vars.active=a(d.vars.slides[b]),(0===c&&"prev"===f||c===d.vars.count-1&&"next"===f)&&(d.vars.jump=!0),r()))},e.goToSlide=function(a){d.vars.trigger="external",t(a)},e.goToNextSlide=function(){d.vars.trigger="external",t("next")},e.goToPrevSlide=function(){d.vars.trigger="external",t("prev")},j=function(){if(d.settings.pager&&d.vars.count>1){var b,c,e;for(b=d.vars.slides.length,e=a('<ul class="'+d.settings.pagerClass+'" />'),c=1;b+1>c;c+=1)e.append(a("<li />").append(a('<a href="#'+c+'">'+c+"</a>")));d.vars.slippryWrapper.append(e),a("."+d.settings.pagerClass+" a",d.vars.slippryWrapper).click(function(){return d.vars.trigger="pager",t(parseInt(this.hash.split("#")[1],10)),!1}),p()}},k=function(){d.settings.controls&&d.vars.count>1&&(d.vars.slideWrapper.append(a('<ul class="'+d.settings.controlClass+'" />').append('<li class="'+d.settings.prevClass+'"><a href="#prev">'+d.settings.prevText+"</a></li>").append('<li class="'+d.settings.nextClass+'"><a href="#next">'+d.settings.nextText+"</a></li>")),a("."+d.settings.controlClass+" a",d.vars.slippryWrapper).click(function(){return d.vars.trigger="controls",t(this.hash.split("#")[1]),!1}),u())},o=function(){d.settings.captions!==!1&&("overlay"===d.settings.captions?d.vars.slideWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />",d.settings.captionsEl))):"below"===d.settings.captions&&d.vars.slippryWrapper.append(a('<div class="sy-caption-wrap" />').html(z("<div />",d.settings.captionsEl))))},y=function(){t(d.vars.active.index()+1)},x=function(b){var c,e,f,g;return g="all"===d.settings.preload?b:d.vars.active,f=a("img, iframe",g),c=f.length,0===c?void y():(e=0,void f.each(function(){a(this).one("load error",function(){++e===c&&y()}).each(function(){this.complete&&a(this).trigger("load")})}))},e.getCurrentSlide=function(){return d.vars.active},e.getSlideCount=function(){return d.vars.count},e.destroySlider=function(){d.vars.fresh===!1&&(e.stopAuto(),d.vars.moving=!1,d.vars.slides.each(function(){void 0!==a(this).data("sy-cssBckup")?a(this).attr("style",a(this).data("sy-cssBckup")):a(this).removeAttr("style"),void 0!==a(this).data("sy-classBckup")?a(this).attr("class",a(this).data("sy-classBckup")):a(this).removeAttr("class")}),void 0!==e.data("sy-cssBckup")?e.attr("style",e.data("sy-cssBckup")):e.removeAttr("style"),void 0!==e.data("sy-classBckup")?e.attr("class",e.data("sy-classBckup")):e.removeAttr("class"),d.vars.slippryWrapper.before(e),d.vars.slippryWrapper.remove(),d.vars.fresh=void 0)},e.reloadSlider=function(){e.destroySlider(),h()},h=function(){var f;return d.settings=a.extend({},b,c),d.vars.slides=a(d.settings.elements,e),d.vars.count=d.vars.slides.length,d.settings.useCSS&&(w("transition")||(d.settings.useCSS=!1),d.vars.transition=n()),e.data("sy-cssBckup",e.attr("style")),e.data("sy-classBackup",e.attr("class")),e.addClass(d.settings.boxClass).wrap(d.settings.slippryWrapper).wrap(d.settings.slideWrapper).wrap(d.settings.slideCrop),d.vars.slideWrapper=e.parent().parent(),d.vars.slippryWrapper=d.vars.slideWrapper.parent().addClass(d.settings.loadingClass),d.vars.fresh=!0,d.vars.slides.each(function(){a(this).addClass("sy-slide "+d.settings.transition),d.settings.useCSS&&a(this).addClass("useCSS"),"horizontal"===d.settings.transition?a(this).css("left",a(this).index()*(100+d.settings.slideMargin)+"%"):"vertical"===d.settings.transition&&a(this).css("top",a(this).index()*(100+d.settings.slideMargin)+"%")}),d.vars.count>1||d.settings.initSingle?(-1===a("."+d.settings.activeClass,e).index()?(f="random"===d.settings.start?Math.round(Math.random()*(d.vars.count-1)):d.settings.start>0&&d.settings.start<=d.vars.count?d.settings.start-1:0,d.vars.active=a(d.vars.slides[f]).addClass(d.settings.activeClass)):d.vars.active=a("."+d.settings.activeClass,e),k(),j(),o(),x(d.vars.slides),void 0):this},h(),this)}}(jQuery);


























/**
 * Module to add a shipping rates calculator to cart page.
 *
 * Copyright (c) 2011-2016 Caroline Schnapp (11heavens.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Modified by David Little, 2016
 */
"object"==typeof Countries&&(Countries.updateProvinceLabel=function(e,t){if("string"==typeof e&&Countries[e]&&Countries[e].provinces){if("object"!=typeof t&&(t=document.getElementById("address_province_label"),null===t))return;t.innerHTML=Countries[e].label;var r=jQuery(t).parent();r.find("select");r.find(".custom-style-select-box-inner").html(Countries[e].provinces[0])}}),"undefined"==typeof Shopify.Cart&&(Shopify.Cart={}),Shopify.Cart.ShippingCalculator=function(){var _config={submitButton:"Calculate shipping",submitButtonDisabled:"Calculating...",templateId:"shipping-calculator-response-template",wrapperId:"wrapper-response",customerIsLoggedIn:!1,moneyFormat:"$"},_render=function(e){var t=jQuery("#"+_config.templateId),r=jQuery("#"+_config.wrapperId);if(t.length&&r.length){var templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var n=Handlebars.compile(jQuery.trim(t.text())),a=n(e);if(jQuery(a).appendTo(r),"undefined"!=typeof Currency&&"function"==typeof Currency.convertAll){var i="";jQuery("[name=currencies]").size()?i=jQuery("[name=currencies]").val():jQuery("#currencies span.selected").size()&&(i=jQuery("#currencies span.selected").attr("data-currency")),""!==i&&Currency.convertAll(shopCurrency,i,"#wrapper-response span.money, #estimated-shipping span.money")}}},_enableButtons=function(){jQuery(".get-rates").removeAttr("disabled").removeClass("disabled").val(_config.submitButton)},_disableButtons=function(){jQuery(".get-rates").val(_config.submitButtonDisabled).attr("disabled","disabled").addClass("disabled")},_getCartShippingRatesForDestination=function(e){var t={type:"POST",url:"/cart/prepare_shipping_rates",data:jQuery.param({shipping_address:e}),success:_pollForCartShippingRatesForDestination(e),error:_onError};jQuery.ajax(t)},_pollForCartShippingRatesForDestination=function(e){var t=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(r,n,a){200===a.status?_onCartShippingRatesUpdate(r.shipping_rates,e):setTimeout(t,500)},error:_onError})};return t},_fullMessagesFromErrors=function(e){var t=[];return jQuery.each(e,function(e,r){jQuery.each(r,function(r,n){t.push(e+" "+n)})}),t},_onError=function(XMLHttpRequest,textStatus){jQuery("#estimated-shipping").hide(),jQuery("#estimated-shipping em").empty(),_enableButtons();var feedback="",data=eval("("+XMLHttpRequest.responseText+")");feedback=data.message?data.message+"("+data.status+"): "+data.description:"Error : "+_fullMessagesFromErrors(data).join("; ")+".","Error : country is not supported."===feedback&&(feedback="We do not ship to this destination."),_render({rates:[],errorFeedback:feedback,success:!1}),jQuery("#"+_config.wrapperId).show()},_onCartShippingRatesUpdate=function(e,t){_enableButtons();var r="";if(t.zip&&(r+=t.zip+", "),t.province&&(r+=t.province+", "),r+=t.country,e.length){"0.00"==e[0].price?jQuery("#estimated-shipping em").html("FREE"):jQuery("#estimated-shipping em").html(_formatRate(e[0].price));for(var n=0;n<e.length;n++)e[n].price=_formatRate(e[n].price)}_render({rates:e,address:r,success:!0}),jQuery("#"+_config.wrapperId+", #estimated-shipping").fadeIn()},_formatRate=function(e){function t(e,t){return"undefined"==typeof e?t:e}function r(e,r,n,a){if(r=t(r,2),n=t(n,","),a=t(a,"."),isNaN(e)||null==e)return 0;e=(e/100).toFixed(r);var i=e.split("."),o=i[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+n),s=i[1]?a+i[1]:"";return o+s}if("function"==typeof Shopify.formatMoney)return Shopify.formatMoney(e,_config.moneyFormat);"string"==typeof e&&(e=e.replace(".",""));var n="",a=/\{\{\s*(\w+)\s*\}\}/,i=_config.moneyFormat;switch(i.match(a)[1]){case"amount":n=r(e,2);break;case"amount_no_decimals":n=r(e,0);break;case"amount_with_comma_separator":n=r(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":n=r(e,0,".",",")}return i.replace(a,n)};return _init=function(){new Shopify.CountryProvinceSelector("address_country","address_province",{hideElement:"address_province_container"});var e=jQuery("#address_country"),t=jQuery("#address_province_label").get(0);"undefined"!=typeof Countries&&(Countries.updateProvinceLabel(e.val(),t),e.change(function(){Countries.updateProvinceLabel(e.val(),t)})),jQuery(".get-rates").click(function(){_disableButtons(),jQuery("#"+_config.wrapperId).empty().hide();var e={};e.zip=jQuery("#address_zip").val()||"",e.country=jQuery("#address_country").val()||"",e.province=jQuery("#address_province").val()||"",_getCartShippingRatesForDestination(e)}),_config.customerIsLoggedIn&&jQuery(".get-rates:eq(0)").trigger("click")},{show:function(e){e=e||{},jQuery.extend(_config,e),jQuery(function(){_init()})},getConfig:function(){return _config},formatRate:function(e){return _formatRate(e)}}}();
/* 
var hasCalculator = document.getElementById('shipping-calculator');
if(hasCalculator){
};
*/


window.slate = window.slate || {};
window.theme = window.theme || {};

/*================ Slate ================*/
/**
 * A11y Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help make your theme more accessible
 * to users with visual impairments.
 *
 *
 * @namespace a11y
 */

slate.a11y = {

  /**
   * For use when focus shifts to a container rather than a link
   * eg for In-page links, after scroll, focus shifts to content area so that
   * next `tab` is where user expects if focusing a link, just $link.focus();
   *
   * @param {JQuery} $element - The element to be acted upon
   */
  pageLinkFocus: function($element) {
    var focusClass = 'js-focus-hidden';

    $element.first()
      .attr('tabIndex', '-1')
      .focus()
      .addClass(focusClass)
      .one('blur', callback);

    function callback() {
      $element.first()
        .removeClass(focusClass)
        .removeAttr('tabindex');
    }
  },

  /**
   * If there's a hash in the url, focus the appropriate element
   */
  focusHash: function() {
    var hash = window.location.hash;

    // is there a hash in the url? is it an element on the page?
    if (hash && document.getElementById(hash.slice(1))) {
      this.pageLinkFocus($(hash));
    }
  },

  /**
   * When an in-page (url w/hash) link is clicked, focus the appropriate element
   */
  bindInPageLinks: function() {
    $('a[href*=#]').on('click', function(evt) {
      this.pageLinkFocus($(evt.currentTarget.hash));
    }.bind(this));
  },

  /**
   * Traps the focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {jQuery} options.$elementToFocus - Element to be focused when focus leaves container
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  trapFocus: function(options) {
    var eventName = options.eventNamespace
      ? 'focusin.' + options.eventNamespace
      : 'focusin';

    if (!options.$elementToFocus) {
      options.$elementToFocus = options.$container;
    }

    options.$container.attr('tabindex', '-1');
    options.$elementToFocus.focus();

    $(document).on(eventName, function(evt) {
      if (options.$container[0] !== evt.target && !options.$container.has(evt.target).length) {
        options.$container.focus();
      }
    });
  },

  /**
   * Removes the trap of focus in a particular container
   *
   * @param {object} options - Options to be used
   * @param {jQuery} options.$container - Container to trap focus within
   * @param {string} options.namespace - Namespace used for new focus event handler
   */
  removeTrapFocus: function(options) {
    var eventName = options.namespace
      ? 'focusin.' + options.namespace
      : 'focusin';

    if (options.$container && options.$container.length) {
      options.$container.removeAttr('tabindex');
    }

    $(document).off(eventName);
  }
};

/**
 * Cart Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Cart template.
 *
 * @namespace cart
 */


slate.cart = {
  
  /**
   * Browser cookies are required to use the cart. This function checks if
   * cookies are enabled in the browser.
   */
  cookiesEnabled: function() {
    var cookieEnabled = navigator.cookieEnabled;

    if (!cookieEnabled){
      document.cookie = 'testcookie';
      cookieEnabled = (document.cookie.indexOf('testcookie') !== -1);
    }
    return cookieEnabled;
  }  

};


/**
 * Utility helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions for dealing with arrays and objects
 *
 * @namespace utils
 */

slate.utils = {

  /**
   * Return an object from an array of objects that matches the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  findInstance: function(array, key, value) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  },

  /**
   * Remove an object from an array of objects by matching the provided key and value
   *
   * @param {array} array - Array of objects
   * @param {string} key - Key to match the value against
   * @param {string} value - Value to get match of
   */
  removeInstance: function(array, key, value) {
    var i = array.length;
    while(i--) {
      if (array[i][key] === value) {
        array.splice(i, 1);
        break;
      }
    }

    return array;
  },

  /**
   * _.compact from lodash
   * Remove empty/false items from array
   * Source: https://github.com/lodash/lodash/blob/master/compact.js
   *
   * @param {array} array
   */
  compact: function(array) {
    var index = -1;
    var length = array == null ? 0 : array.length;
    var resIndex = 0;
    var result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  },

  /**
   * _.defaultTo from lodash
   * Checks `value` to determine whether a default value should be returned in
   * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
   * or `undefined`.
   * Source: https://github.com/lodash/lodash/blob/master/defaultTo.js
   *
   * @param {*} value - Value to check
   * @param {*} defaultValue - Default value
   * @returns {*} - Returns the resolved value
   */
  defaultTo: function(value, defaultValue) {
    return (value == null || value !== value) ? defaultValue : value
  }
};

/**
 * Rich Text Editor
 * -----------------------------------------------------------------------------
 * Wrap videos in div to force responsive layout.
 *
 * @namespace rte
 */

slate.rte = {

  wrapTable: function() {
    $('.rte table').wrap('<div class="rte__table-wrapper"></div>');
  },

  iframeReset: function() {
    var $iframeVideo = $('.rte iframe[src*="youtube.com/embed"], .rte iframe[src*="player.vimeo"]');
    var $iframeReset = $iframeVideo.add('.rte iframe#admin_bar_iframe');

    $iframeVideo.each(function() {
      // Add wrapper to make video responsive
      $(this).wrap('<div class="rte__video-wrapper"></div>');
    });

    $iframeReset.each(function() {
      // Re-set the src attribute on each iframe after page load
      // for Chrome's "incorrect iFrame content on 'back'" bug.
      // https://code.google.com/p/chromium/issues/detail?id=395791
      // Need to specifically target video and admin bar
      this.src = this.src;
    });
  }
};

slate.Sections = function Sections() {
  this.constructors = {};
  this.instances = [];

  $(document)
    .on('shopify:section:load', this._onSectionLoad.bind(this))
    .on('shopify:section:unload', this._onSectionUnload.bind(this))
    .on('shopify:section:select', this._onSelect.bind(this))
    .on('shopify:section:deselect', this._onDeselect.bind(this))
    .on('shopify:section:reorder', this._onReorder.bind(this))
    .on('shopify:block:select', this._onBlockSelect.bind(this))
    .on('shopify:block:deselect', this._onBlockDeselect.bind(this));
};

slate.Sections.prototype = $.extend({}, slate.Sections.prototype, {
  _createInstance: function(container, constructor) {
    var $container = $(container);
    var id = $container.attr('data-section-id');
    var type = $container.attr('data-section-type');

    constructor = constructor || this.constructors[type];

    if (typeof constructor === 'undefined') {
      return;
    }

    var instance = $.extend(new constructor(container), {
      id: id,
      type: type,
      container: container
    });

    this.instances.push(instance);
  },

  _onSectionLoad: function(evt) {
    var container = $('[data-section-id]', evt.target)[0];
    if (container) {
      this._createInstance(container);
    }
  },

  _onSectionUnload: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (!instance) {
      return;
    }

    if (typeof instance.onUnload === 'function') {
      instance.onUnload(evt);
    }

    this.instances = slate.utils.removeInstance(this.instances, 'id', evt.detail.sectionId);
  },

  _onSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onSelect === 'function') {
      instance.onSelect(evt);
    }
  },

  _onDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onDeselect === 'function') {
      instance.onDeselect(evt);
    }
  },

  _onReorder: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onReorder === 'function') {
      instance.onReorder(evt);
    }
  },

  _onBlockSelect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockSelect === 'function') {
      instance.onBlockSelect(evt);
    }
  },

  _onBlockDeselect: function(evt) {
    var instance = slate.utils.findInstance(this.instances, 'id', evt.detail.sectionId);

    if (instance && typeof instance.onBlockDeselect === 'function') {
      instance.onBlockDeselect(evt);
    }
  },

  register: function(type, constructor) {
    this.constructors[type] = constructor;

    $('[data-section-type=' + type + ']').each(function(index, container) {
      this._createInstance(container, constructor);
    }.bind(this));
  }
});

/**
 * Currency Helpers
 * -----------------------------------------------------------------------------
 * A collection of useful functions that help with currency formatting
 *
 * Current contents
 * - formatMoney - Takes an amount in cents and returns it as a formatted dollar value.
 *
 */

slate.Currency = (function() {
  var moneyFormat = '$';
  


  /**
   * Format money values based on your shop currency settings
   * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents
   * or 3.00 dollars
   * @param  {String} format - shop money_format setting
   * @return {String} value - formatted value
   */
  function formatMoney(cents, format) {
    if (typeof cents === 'string') {
      cents = cents.replace('.', '');
    }
    var value = '';
    var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
    var formatString = (format || moneyFormat);

    function formatWithDelimiters(number, precision, thousands, decimal) {
      precision = slate.utils.defaultTo(precision, 2);
      thousands = slate.utils.defaultTo(thousands, ',');
      decimal = slate.utils.defaultTo(decimal, '.');

      if (isNaN(number) || number == null) {
        return 0;
      }

      number = (number / 100.0).toFixed(precision);

      var parts = number.split('.');
      var dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands);
      var centsAmount = parts[1] ? (decimal + parts[1]) : '';

      return dollarsAmount + centsAmount;
    }

    switch (formatString.match(placeholderRegex)[1]) {
      case 'amount':
        value = formatWithDelimiters(cents, 2);
        break;
      case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0);
        break;
      case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',');
        break;
      case 'amount_no_decimals_with_space_separator':
        value = formatWithDelimiters(cents, 0, ' ');
        break;
    }

    return formatString.replace(placeholderRegex, value);
  }

  return {
    formatMoney: formatMoney
  };
})();

/**
 * Image Helper Functions
 * -----------------------------------------------------------------------------
 * A collection of functions that help with basic image operations.
 *
 */

slate.Image = (function() {

  /**
   * Preloads an image in memory and uses the browsers cache to store it until needed.
   *
   * @param {Array} images - A list of image urls
   * @param {String} size - A shopify image size attribute
   */

  function preload(images, size) {
    if (typeof images === 'string') {
      images = [images];
    }

    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      this.loadImage(this.getSizedImageUrl(image, size));
    }
  }

  /**
   * Loads and caches an image in the browsers cache.
   * @param {string} path - An image url
   */
  function loadImage(path) {
    new Image().src = path;
  }

  /**
   * Find the Shopify image attribute size
   *
   * @param {string} src
   * @returns {null}
   */
  function imageSize(src) {
    var match = src.match(/.+_((?:pico|icon|thumb|small|compact|medium|large|grande)|\d{1,4}x\d{0,4}|x\d{1,4})[_\.@]/);

    if (match) {
      return match[1];
    } else {
      return null;
    }
  }

  /**
   * Adds a Shopify size attribute to a URL
   *
   * @param src
   * @param size
   * @returns {*}
   */
  function getSizedImageUrl(src, size) {
    if (size === null) {
      return src;
    }

    if (size === 'master') {
      return this.removeProtocol(src);
    }

    var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

    if (match) {
      var prefix = src.split(match[0]);
      var suffix = match[0];

      return this.removeProtocol(prefix[0] + '_' + size + suffix);
    } else {
      return null;
    }
  }

  function removeProtocol(path) {
    return path.replace(/http(s)?:/, '');
  }

  return {
    preload: preload,
    loadImage: loadImage,
    imageSize: imageSize,
    getSizedImageUrl: getSizedImageUrl,
    removeProtocol: removeProtocol
  };
})();

/**
 * Variant Selection scripts
 * ------------------------------------------------------------------------------
 *
 * Handles change events from the variant inputs in any `cart/add` forms that may
 * exist. Also updates the master select and triggers updates when the variants
 * price or image changes.
 *
 * @namespace variants
 */

slate.Variants = (function() {

  /**
   * Variant constructor
   *
   * @param {object} options - Settings from `product.js`
   */
  function Variants(options) {
    this.$container = options.$container;
    this.product = options.product;
    this.singleOptionSelector = options.singleOptionSelector;
    this.originalSelectorId = options.originalSelectorId;
    this.enableHistoryState = options.enableHistoryState;
    this.currentVariant = this._getVariantFromOptions();

    $(this.singleOptionSelector, this.$container).on('change', this._onSelectChange.bind(this));
    //$('.selector-wrapper a').on('click', this._getVariantClick.bind(this));
  }

  Variants.prototype = $.extend({}, Variants.prototype, {

    /**
     * Get the currently selected options from add-to-cart form. Works with all
     * form input elements.
     *
     * @return {array} options - Values of currently selected variants
     */
    _getCurrentOptions: function() {
      var currentOptions = $.map($(this.singleOptionSelector, this.$container), function(element) {
        var $element = $(element);
        var type = $element.attr('type');
        var currentOption = {};

        if (type === 'radio' || type === 'checkbox') {
          if ($element[0].checked) {
            currentOption.value = $element.val();
            currentOption.index = $element.data('index');

            return currentOption;
          } else {
            return false;
          }
        } else {
          currentOption.value = $element.val();
          currentOption.index = $element.data('index');

          return currentOption;
        }
      });

      // remove any unchecked input values if using radio buttons or checkboxes
      currentOptions = slate.utils.compact(currentOptions);

      return currentOptions;
    },

    /**
     * Find variant based on selected values.
     *
     * @param  {array} selectedValues - Values of variant inputs
     * @return {object || undefined} found - Variant object from product.variants
     */
    _getVariantFromOptions: function() {
      //alert('Checking Variants');
      var selectedValues = this._getCurrentOptions();
      var variants = this.product.variants;
      var found = false;

      variants.forEach(function(variant) {
        var satisfied = true;

        selectedValues.forEach(function(option) {
          if (satisfied) {            
            satisfied = (option.value === variant[option.index]);
          }
        });

        if (satisfied) {
          //alert(variant);
          //console.log(variant)
          found = variant;
        }
      });

      return found || null;
    },
    
    _getVariantClick: function() {
      	//alert('Clicked');
        this._updateMasterSelect(variant);
        this._updateImages(variant);
        this._updatePrice(variant);
        this.currentVariant = variant;

        if (this.enableHistoryState) {
          this._updateHistoryState(variant);
        }
    },

    /**
     * Event handler for when a variant input changes.
     */
    _onSelectChange: function() {
      var variant = this._getVariantFromOptions();
      //alert(variant);

      this.$container.trigger({
        type: 'variantChange',
        variant: variant
      });

      if (!variant) {
        return;
      }

      this._updateMasterSelect(variant);
      this._updateImages(variant);
      this._updatePrice(variant);
      this.currentVariant = variant;

      if (this.enableHistoryState) {
        this._updateHistoryState(variant);
      }
    },

    /**
     * Trigger event when variant image changes
     *
     * @param  {object} variant - Currently selected variant
     * @return {event}  variantImageChange
     */
    _updateImages: function(variant) {
      var variantImage = variant.featured_image || {};
      var currentVariantImage = this.currentVariant.featured_image || {};

      if (!variant.featured_image || variantImage.src === currentVariantImage.src) {
        return;
      }

      this.$container.trigger({
        type: 'variantImageChange',
        variant: variant
      });
    },

    /**
     * Trigger event when variant price changes.
     *
     * @param  {object} variant - Currently selected variant
     * @return {event} variantPriceChange
     */
    _updatePrice: function(variant) {
      if (variant.price === this.currentVariant.price && variant.compare_at_price === this.currentVariant.compare_at_price) {
        return;
      }

      this.$container.trigger({
        type: 'variantPriceChange',
        variant: variant
      });
    },

    /**
     * Update history state for product deeplinking
     *
     * @param  {variant} variant - Currently selected variant
     * @return {k}         [description]
     */
    _updateHistoryState: function(variant) {
      if (!history.replaceState || !variant) {
        return;
      }

      var newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?variant=' + variant.id;
      window.history.replaceState({path: newurl}, '', newurl);
    },

    /**
     * Update hidden master select of variant change
     *
     * @param  {variant} variant - Currently selected variant
     */
    _updateMasterSelect: function(variant) {
      $(this.originalSelectorId, this.$container)[0].value = variant.id;
    }
  });

  return Variants;
})();


/*================ Sections ================*/
/**
 * Product Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Product template.
 *
   * @namespace product
 */

slate.Product = (function() {

  var selectors = {
    addToCart: '[data-add-to-cart]',
    addToCartText: '[data-add-to-cart-text]',
    comparePrice: '[data-compare-price]',
    comparePriceText: '[data-compare-text]',
    originalSelectorId: '[data-product-select]',
    priceWrapper: '[data-price-wrapper]',
    productFeaturedImage: '[data-product-featured-image]',
    productJson: '[data-product-json]',
    productPrice: '[data-product-price]',
    productThumbs: '[data-product-single-thumbnail]',
    singleOptionSelector: '[data-single-option-selector]'
  };

  /**
   * Product section constructor. Runs on page load as well as Theme Editor
   * `section:load` events.
   * @param {string} container - selector for the section container DOM element
   */
  function Product(container) {
    this.$container = $(container);
    var sectionId = this.$container.attr('data-section-id');

    this.settings = {};
    this.namespace = '.product';

    // Stop parsing if we don't have the product json script tag when loading
    // section in the Theme Editor
    if (!$(selectors.productJson, this.$container).html()) {
      return;
    }

    this.productSingleObject = JSON.parse($(selectors.productJson, this.$container).html());
    this.settings.imageSize = slate.Image.imageSize($(selectors.productFeaturedImage, this.$container).attr('src'));

    slate.Image.preload(this.productSingleObject.images, this.settings.imageSize);

    this.initVariants();
  }

  Product.prototype = $.extend({}, Product.prototype, {

    /**
     * Handles change events from the variant inputs
     */
    initVariants: function() {
      var options = {
        $container: this.$container,
        enableHistoryState: this.$container.data('enable-history-state') || false,
        singleOptionSelector: selectors.singleOptionSelector,
        originalSelectorId: selectors.originalSelectorId,
        product: this.productSingleObject
      };

      this.variants = new slate.Variants(options);

      this.$container.on('variantChange' + this.namespace, this.updateAddToCartState.bind(this));
      this.$container.on('variantImageChange' + this.namespace, this.updateProductImage.bind(this));
      this.$container.on('variantPriceChange' + this.namespace, this.updateProductPrices.bind(this));
    },

    /**
     * Updates the DOM state of the add to cart button
     *
     * @param {boolean} enabled - Decides whether cart is enabled or disabled
     * @param {string} text - Updates the text notification content of the cart
     */
    updateAddToCartState: function(evt) {
      var variant = evt.variant;

      if (variant) {
        $(selectors.priceWrapper, this.$container).removeClass('hide');
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.unavailable);
        $(selectors.priceWrapper, this.$container).addClass('hide');
        return;
      }

      if (variant.available) {
        $(selectors.addToCart, this.$container).prop('disabled', false);
        $(selectors.addToCartText, this.$container).html(theme.strings.addToCart);
      } else {
        $(selectors.addToCart, this.$container).prop('disabled', true);
        $(selectors.addToCartText, this.$container).html(theme.strings.soldOut);
      }
      
    },

    /**
     * Updates the DOM with specified prices
     *
     * @param {string} productPrice - The current price of the product
     * @param {string} comparePrice - The original price of the product
     */
    updateProductPrices: function(evt) {
      var variant = evt.variant;
      var $comparePrice = $(selectors.comparePrice, this.$container);
      var $compareEls = $comparePrice.add(selectors.comparePriceText, this.$container);

      $(selectors.productPrice, this.$container)
        .html(slate.Currency.formatMoney(variant.price, theme.moneyFormat));

      if (variant.compare_at_price > variant.price) {
        $comparePrice.html(slate.Currency.formatMoney(variant.compare_at_price, theme.moneyFormat));
        $compareEls.removeClass('hide');
      } else {
        $comparePrice.html('');
        $compareEls.addClass('hide');
      }
    },

    /**
     * Updates the DOM with the specified image URL
     *
     * @param {string} src - Image src URL
     */
    updateProductImage: function(evt) {
      var variant = evt.variant;
      var sizedImgUrl = slate.Image.getSizedImageUrl(variant.featured_image.src, this.settings.imageSize);

      $(selectors.productFeaturedImage, this.$container).attr('src', sizedImgUrl);
    },

    /**
     * Event callback for Theme Editor `section:unload` event
     */
    onUnload: function() {
      this.$container.off(this.namespace);
    }
  });

  return Product;
})();


/*================ Templates ================*/
/**
 * Customer Addresses Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Customer Addresses
 * template.
 *
 * @namespace customerAddresses
 */

theme.customerAddresses = (function() {
  var $newAddressForm = $('#AddressNewForm');

  if (!$newAddressForm.length) {
    return;
  }

  // Initialize observers on address selectors, defined in shopify_common.js
  if (Shopify) {
    new Shopify.CountryProvinceSelector('AddressCountryNew', 'AddressProvinceNew', {
      hideElement: 'AddressProvinceContainerNew'
    });
  }

  // Initialize each edit form's country/province selector
  $('.address-country-option').each(function() {
    var formId = $(this).data('form-id');
    var countrySelector = 'AddressCountry_' + formId;
    var provinceSelector = 'AddressProvince_' + formId;
    var containerSelector = 'AddressProvinceContainer_' + formId;

    new Shopify.CountryProvinceSelector(countrySelector, provinceSelector, {
      hideElement: containerSelector
    });
  });

  // Toggle new/edit address forms
  $('.address-new-toggle').on('click', function() {
    $newAddressForm.toggleClass('hide');
  });

  $('.address-edit-toggle').on('click', function() {
    var formId = $(this).data('form-id');
    $('#EditAddress_' + formId).toggleClass('hide');
  });

  $('.address-delete').on('click', function() {
    var $el = $(this);
    var formId = $el.data('form-id');
    var confirmMessage = $el.data('confirm-message');
    if (confirm(confirmMessage || 'Are you sure you wish to delete this address?')) {
      Shopify.postLink('/account/addresses/' + formId, {parameters: {_method: 'delete'}});
    }
  });
})();

/**
 * Password Template Script
 * ------------------------------------------------------------------------------
 * A file that contains scripts highly couple code to the Password template.
 *
 * @namespace password
 */

theme.customerLogin = (function() {
  var config = {
    recoverPasswordForm: '#RecoverPassword',
    hideRecoverPasswordLink: '#HideRecoverPasswordLink'
  };

  if (!$(config.recoverPasswordForm).length) {
    return;
  }

  checkUrlHash();
  resetPasswordSuccess();

  $(config.recoverPasswordForm).on('click', onShowHidePasswordForm);
  $(config.hideRecoverPasswordLink).on('click', onShowHidePasswordForm);

  function onShowHidePasswordForm(evt) {
    evt.preventDefault();
    toggleRecoverPasswordForm();
  }

  function checkUrlHash() {
    var hash = window.location.hash;

    // Allow deep linking to recover password form
    if (hash === '#recover') {
      toggleRecoverPasswordForm();
    }
  }

  /**
   *  Show/Hide recover password form
   */
  function toggleRecoverPasswordForm() {
    $('#RecoverPasswordForm').toggleClass('hide');
    $('#CustomerLoginForm').toggleClass('hide');
  }

  /**
   *  Show reset password success message
   */
  function resetPasswordSuccess() {
    var $formState = $('.reset-password-success');

    // check if reset password form was successfully submited.
    if (!$formState.length) {
      return;
    }

    // show success message
    $('#ResetSuccess').removeClass('hide');
  }
})();

$(document).ready(function() {
  //alert('JQUERY READY');
  var sections = new slate.Sections();
  sections.register('product', theme.Product);

  // Common a11y fixes
  slate.a11y.pageLinkFocus($(window.location.hash));

  $('.in-page-link').on('click', function(evt) {
    slate.a11y.pageLinkFocus($(evt.currentTarget.hash));
  });

  // Wrap videos in div to force responsive layout.
  slate.rte.wrapTable();
  slate.rte.iframeReset();

  
  // Apply a specific class to the html element for browser support of cookies.
  if (slate.cart.cookiesEnabled()) {
    document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies');
  }
  
  
	jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity.buttons input');
    jQuery('.quantity.buttons').each(function() {
        //alert('Quantity');
        var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

  

    Shopify.Cart.ShippingCalculator.show( {
      submitButton: theme.strings.shippingCalcSubmitButton,
      submitButtonDisabled: theme.strings.shippingCalcSubmitButtonDisabled,
      moneyFormat: theme.strings.shippingCalcMoneyFormat
    } );

    // Retain page position when hyperlinking variants
  	

  	//alert('hello');

  		// TO DO: Check if slideshow should be enabled
        var slipthumbs = jQuery('#thumbnails').slippry({
          // general elements & wrapper
          slippryWrapper: '<div class="slippry_box thumbnails" />',
          // options
          transition: 'horizontal',
          pager: false,
          auto: false,
          speed: 500,
          onSlideBefore: function (el, index_old, index_new) {
            jQuery('.thumbs a img').removeClass('active');
            jQuery('img', jQuery('.thumbs a')[index_new]).addClass('active');
          }
        });
		jQuery('.thumb-box').css('display', 'block');
  		jQuery('.thumbs li').first().find('a').addClass('current');
        jQuery('.thumbs a').click(function () {
	      $('.thumbs li a').removeClass('current');
	      $(this).addClass('current');
          
          //alert('CLICK');
          slipthumbs.goToSlide($(this).data('slide'));
          return false;
        });

  	// Display cart
	$('#cartbox').load('/cart #content form');

  	// Display search
	$('#searchbox').load('/search #content form');
  
  	// Run search autocomplete
  	if (typeof searchPreview === 'function') {
  		searchPreview();
    };

});

jQuery('#notify-me').click(function() {
jQuery('#notify-me-wrapper').fadeIn();
return false;
} );
