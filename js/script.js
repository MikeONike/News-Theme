$(document).ready(() => {

   /////////////////////////////////////
   // search input hide / show on click
   /////////////////////////////////////

   $('.header-search-icon').on('click', () => {
      if ($('.header-search-input').height() == 0) {
         $('.header-search-icon').addClass('header-search-icon-close')
         $('.header-search-input').css({
            'height': `57px`,
            'padding': `10px`
         });
      } else {
         $('.header-search-icon').removeClass('header-search-icon-close')
         $('.header-search-input').css({
            'height': `0`,
            'padding': `0 1rem`
         });
      }
   })

   ///////////////////////////////////////
   // show / hide sub menu items on hover
   ///////////////////////////////////////

   var headerNavItem = $('.header-nav ul');
   var item;

   headerNavItem.on('click', (e) => {
      console.log($(e.target))
      if($(window).outerWidth() < 992) {
         if ($(e.target).next('ul').css('height') == '0px') {
            // $('.header-nav a').next('ul').css('height', '0px');
            $(e.target).next('ul').css('min-height', `${$(e.target).next('ul')[0].scrollHeight}px`);
            $(e.target).addClass('arrow-down-up').removeClass('arrow-down-down')
         } else {
            $(e.target).next('ul').css('min-height', `0`);
            $(e.target).addClass('arrow-down-down').removeClass('arrow-down-up')
         }
      }
   })

   //////////////////////////////////////
   // show / hide menu on click
   //////////////////////////////////////

   $('.header-nav a.fas.fa-times').on('click', (e) => {
      e.preventDefault();

      $('.header-nav').css('display', 'none');
   })

   $('.ham-menu').on('click', () => {

      $('.header-nav').css('display', 'flex');
   })


   ////////////////////////////////////////
   // add down arrow to first level items
   ////////////////////////////////////////

   $(window).on('resize', () => {

      for (i = 0; i < $('.header-nav li').length; i++) {

         if($(window).outerWidth() >= 992) {
            $($('.header-nav li')[i]).children('a').removeClass('arrow-down')
         } else {
            if ($($('.header-nav li')[i]).children('ul').length > 0) {
               $($('.header-nav li')[i]).children('a').addClass('arrow-down')
            }
         }


      }

   })




})