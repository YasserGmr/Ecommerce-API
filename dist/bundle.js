/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
eval("console.log('Yeaah');\r\n\n\n//# sourceURL=webpack://template/./src/js/index.js?");
})();

(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
eval("/*  ---------------------------------------------------\n    Template Name: Male Fashion\n    Description: Male Fashion - ecommerce teplate\n    Author: Colorib\n    Author URI: https://www.colorib.com/\n    Version: 1.0\n    Created: Colorib\n---------------------------------------------------------  */\n\n\n\n(function ($) {\n  /*------------------\n        Preloader\n    --------------------*/\n  $(window).on('load', function () {\n    $('.loader').fadeOut();\n    $('#preloder').delay(200).fadeOut('slow');\n\n    /*------------------\n            Gallery filter\n        --------------------*/\n    $('.filter__controls li').on('click', function () {\n      $('.filter__controls li').removeClass('active');\n      $(this).addClass('active');\n    });\n    if ($('.product__filter').length > 0) {\n      var containerEl = document.querySelector('.product__filter');\n      var mixer = mixitup(containerEl);\n    }\n  });\n\n  /*------------------\n        Background Set\n    --------------------*/\n  $('.set-bg').each(function () {\n    var bg = $(this).data('setbg');\n    $(this).css('background-image', 'url(' + bg + ')');\n  });\n\n  //Search Switch\n  $('.search-switch').on('click', function () {\n    $('.search-model').fadeIn(400);\n  });\n\n  $('.search-close-switch').on('click', function () {\n    $('.search-model').fadeOut(400, function () {\n      $('#search-input').val('');\n    });\n  });\n\n  /*------------------\n\t\tNavigation\n\t--------------------*/\n  $('.mobile-menu').slicknav({\n    prependTo: '#mobile-menu-wrap',\n    allowParentLinks: true,\n  });\n\n  /*------------------\n        Accordin Active\n    --------------------*/\n  $('.collapse').on('shown.bs.collapse', function () {\n    $(this).prev().addClass('active');\n  });\n\n  $('.collapse').on('hidden.bs.collapse', function () {\n    $(this).prev().removeClass('active');\n  });\n\n  //Canvas Menu\n  $('.canvas__open').on('click', function () {\n    $('.offcanvas-menu-wrapper').addClass('active');\n    $('.offcanvas-menu-overlay').addClass('active');\n  });\n\n  $('.offcanvas-menu-overlay').on('click', function () {\n    $('.offcanvas-menu-wrapper').removeClass('active');\n    $('.offcanvas-menu-overlay').removeClass('active');\n  });\n\n  /*-----------------------\n        Hero Slider\n    ------------------------*/\n  $('.hero__slider').owlCarousel({\n    loop: true,\n    margin: 0,\n    items: 1,\n    dots: false,\n    nav: true,\n    navText: [\n      \"<span class='arrow_left'><span/>\",\n      \"<span class='arrow_right'><span/>\",\n    ],\n    animateOut: 'fadeOut',\n    animateIn: 'fadeIn',\n    smartSpeed: 1200,\n    autoHeight: false,\n    autoplay: false,\n  });\n\n  /*--------------------------\n        Select\n    ----------------------------*/\n  $('select').niceSelect();\n\n  /*-------------------\n\t\tRadio Btn\n\t--------------------- */\n  $(\n    '.product__color__select label, .shop__sidebar__size label, .product__details__option__size label'\n  ).on('click', function () {\n    $(\n      '.product__color__select label, .shop__sidebar__size label, .product__details__option__size label'\n    ).removeClass('active');\n    $(this).addClass('active');\n  });\n\n  /*-------------------\n\t\tScroll\n\t--------------------- */\n  $('.nice-scroll').niceScroll({\n    cursorcolor: '#0d0d0d',\n    cursorwidth: '5px',\n    background: '#e5e5e5',\n    cursorborder: '',\n    autohidemode: true,\n    horizrailenabled: false,\n  });\n\n  /*------------------\n        CountDown\n    --------------------*/\n  // For demo preview start\n  var today = new Date();\n  var dd = String(today.getDate()).padStart(2, '0');\n  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n  var yyyy = today.getFullYear();\n\n  if (mm == 12) {\n    mm = '01';\n    yyyy = yyyy + 1;\n  } else {\n    mm = parseInt(mm) + 1;\n    mm = String(mm).padStart(2, '0');\n  }\n  var timerdate = mm + '/' + dd + '/' + yyyy;\n  // For demo preview end\n\n  // Uncomment below and use your date //\n\n  /* var timerdate = \"2020/12/30\" */\n\n  $('#countdown').countdown(timerdate, function (event) {\n    $(this).html(\n      event.strftime(\n        \"<div class='cd-item'><span>%D</span> <p>Days</p> </div>\" +\n          \"<div class='cd-item'><span>%H</span> <p>Hours</p> </div>\" +\n          \"<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>\" +\n          \"<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>\"\n      )\n    );\n  });\n\n  /*------------------\n\t\tMagnific\n\t--------------------*/\n  $('.video-popup').magnificPopup({\n    type: 'iframe',\n  });\n\n  /*-------------------\n\t\tQuantity change\n\t--------------------- */\n  var proQty = $('.pro-qty');\n  proQty.prepend('<span class=\"fa fa-angle-up dec qtybtn\"></span>');\n  proQty.append('<span class=\"fa fa-angle-down inc qtybtn\"></span>');\n  proQty.on('click', '.qtybtn', function () {\n    var $button = $(this);\n    var oldValue = $button.parent().find('input').val();\n    if ($button.hasClass('inc')) {\n      var newVal = parseFloat(oldValue) + 1;\n    } else {\n      // Don't allow decrementing below zero\n      if (oldValue > 0) {\n        var newVal = parseFloat(oldValue) - 1;\n      } else {\n        newVal = 0;\n      }\n    }\n    $button.parent().find('input').val(newVal);\n  });\n\n  var proQty = $('.pro-qty-2');\n  proQty.prepend('<span class=\"fa fa-angle-left dec qtybtn\"></span>');\n  proQty.append('<span class=\"fa fa-angle-right inc qtybtn\"></span>');\n  proQty.on('click', '.qtybtn', function () {\n    var $button = $(this);\n    var oldValue = $button.parent().find('input').val();\n    if ($button.hasClass('inc')) {\n      var newVal = parseFloat(oldValue) + 1;\n    } else {\n      // Don't allow decrementing below zero\n      if (oldValue > 0) {\n        var newVal = parseFloat(oldValue) - 1;\n      } else {\n        newVal = 0;\n      }\n    }\n    $button.parent().find('input').val(newVal);\n  });\n\n  /*------------------\n        Achieve Counter\n    --------------------*/\n  $('.cn_num').each(function () {\n    $(this)\n      .prop('Counter', 0)\n      .animate(\n        {\n          Counter: $(this).text(),\n        },\n        {\n          duration: 4000,\n          easing: 'swing',\n          step: function (now) {\n            $(this).text(Math.ceil(now));\n          },\n        }\n      );\n  });\n})(jQuery);\n\n\n//# sourceURL=webpack://template/./src/js/main.js?");
})();

/******/ })()
;