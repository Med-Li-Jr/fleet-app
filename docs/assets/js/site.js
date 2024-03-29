﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Init BS Tooltip
tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});



// Initialize menu
//----------------- 

// if (typeof layoutMenuEl === 'undefined' || layoutMenuEl == null)
//   layoutMenuEl = document.querySelectorAll('#layout-menu');
// layoutMenuEl.forEach(function (element) {
//   menu = new Menu(element, {
//     orientation: 'vertical',
//     closeChildren: false
//   });
//   // Change parameter to true if you want scroll animation
//   window.Helpers.scrollToActive((animate = false));
//   window.Helpers.mainMenu = menu;
// });

// // Initialize menu togglers and bind click on each
// if (typeof menuToggler === 'undefined' || menuToggler == null)
//   menuToggler = document.querySelectorAll('.layout-menu-toggle');
// menuToggler.forEach(item => {
//   item.addEventListener('click', event => {
//     event.preventDefault();
//     window.Helpers.toggleCollapsed();
//   });
// });

// // Display menu toggle (layout-menu-toggle) on hover with delay
// if (typeof delay === 'undefined' || delay == null)
//   delay = function (elem, callback) {
//     let timeout = null;
//     elem.onmouseenter = function () {
//       // Set timeout to be a timer which will invoke callback after 300ms (not for small screen)
//       if (!Helpers.isSmallScreen()) {
//         timeout = setTimeout(callback, 300);
//       } else {
//         timeout = setTimeout(callback, 0);
//       }
//     };

//     elem.onmouseleave = function () {
//       // Clear any timers set to timeout
//       document.querySelector('.layout-menu-toggle').classList.remove('d-block');
//       clearTimeout(timeout);
//     };
//   };
// if (document.getElementById('layout-menu')) {
//   delay(document.getElementById('layout-menu'), function () {
//     // not for small screen
//     if (!Helpers.isSmallScreen()) {
//       document.querySelector('.layout-menu-toggle').classList.add('d-block');
//     }
//   });
// }

// // Display in main menu when menu scrolls
// if (typeof menuInnerContainer === 'undefined' || menuInnerContainer == null)
//   menuInnerContainer = document.getElementsByClassName('menu-inner'),
//     menuInnerShadow = document.getElementsByClassName('menu-inner-shadow')[0];
// if (menuInnerContainer.length > 0 && menuInnerShadow) {
//   menuInnerContainer[0].addEventListener('ps-scroll-y', function () {
//     if (this.querySelector('.ps__thumb-y').offsetTop) {
//       menuInnerShadow.style.display = 'block';
//     } else {
//       menuInnerShadow.style.display = 'none';
//     }
//   });
// }