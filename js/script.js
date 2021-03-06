$(document).ready(() => {

   /////////////////////////////////////
   // search input hide / show on click
   /////////////////////////////////////

   $('.header-search-icon').on('click', (e) => {
      e.preventDefault();
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

   // var headerNavItem = $('.header-nav ul');
   // var item;

   // headerNavItem.on('click', (e) => {
   //    console.log($(e.target))
   //    if($(window).outerWidth() < 992) {
   //       if ($(e.target).next('ul').css('height') == '0px') {
   //          // $('.header-nav a').next('ul').css('height', '0px');
   //          $(e.target).next('ul').css('min-height', `${$(e.target).next('ul')[0].scrollHeight}px`);
   //          $(e.target).addClass('arrow-down-up').removeClass('arrow-down-down')
   //       } else {
   //          $(e.target).next('ul').css('min-height', `0`);
   //          $(e.target).addClass('arrow-down-down').removeClass('arrow-down-up')
   //       }
   //    }
   // })

   ////////////////////////

   // $('header').on('click', '.toggle-submenu', function () {

   //    $(this).toggleClass('arrow-down-up');

   //    $(this).parent().next().slideToggle()
   // })

   ////////////////////////

   $('.header-nav .toggle-submenu').on('click', (e) => {

      var target = $(e.target).parent().parent().children('ul');

      $(e.target).toggleClass('arrow-down-up');

      if (target.height() == 0) {
         if (target.parent().parent('.sub-menu').length > 0) {
            target.parent().parent('.sub-menu').css('min-height', `${target[0].scrollHeight +  target.parent().parent('.sub-menu')[0].scrollHeight}px`);
         } else {
            target.parent().parent('.sub-menu').css('min-height', `${target[0].scrollHeight}px`);
         }
         target.css('min-height', `${target[0].scrollHeight}px`);
      } else {
         target.parent().parent('.sub-menu').css('min-height', `${target[0].scrollHeight}px`);
         target.css('min-height', `0px`);
      }

   });


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

   // $(window).on('resize', () => {

   //    for (i = 0; i < $('.header-nav li').length; i++) {

   //       if ($(window).outerWidth() >= 992) {
   //          $($('.header-nav li')[i]).children('a').removeClass('arrow-down')
   //       } else {
   //          if ($($('.header-nav li')[i]).children('ul').length > 0) {
   //             $($('.header-nav li')[i]).children('a').addClass('arrow-down')
   //          }
   //       }
   //    }
   // })

   //////////////////////////////////////
   // remove span arrow on desktop
   //////////////////////////////////////

   if ($(window).outerWidth() >= 992) {
      $('.toggle-submenu').css('display', 'none')
   } else {
      $('.toggle-submenu').css('display', 'inline')
   }

   $(window).on('resize', () => {
      if ($(window).outerWidth() >= 992) {
         $('.toggle-submenu').css('display', 'none')
      } else {
         $('.toggle-submenu').css('display', 'inline')
      }
   })

   ///////////////////////////////////////
   // header fixed on scroll
   ///////////////////////////////////////

   var bottomHeaderPos = $('.bottom-header').offset().top;
   var containerWidth = $('.container').outerWidth();

   if ($(window).outerWidth() < 992) {
      $('.top-header').css('display', 'none');
   }

   $(window).on('resize scroll', () => {
      containerWidth = $('.container').outerWidth();
      // bottomHeaderPos = $('.bottom-header').offset().top;
   })

   $(window).on("scroll resize", () => {
      if ($(window).outerWidth() >= 992) {
         if ($(this).scrollTop() >= bottomHeaderPos) {
            // $('.bottom-header').scrollTop(0);
            $('.header').css({
               'position': 'fixed',
               'width': '100%'
               // 'width': `${containerWidth}px`
            });
            $('.top-header').css('display', 'none');
            $('main').css('margin-top', '180px');
         } else {
            $('.header').css({
               'position': 'relative',
               'width': 'auto'
            });
            $('.top-header').css('display', 'block');
            $('main').css('margin-top', '10px');
         }
      } else {
         $('.top-header').css('display', 'none');
         $('.header').css({
            // 'width': 'auto',
            // 'position': 'relative'
         });
         $('main').css('margin-top', '60px');
      }
   })

   //////////////////////////////

   function setLiBottomMargin() {
      if ($(window).outerWidth() >= 576) {

         var ulOffsetTop = $('.footer .footer-top .footer-menu > ul').offset().top + $('.footer .footer-top .footer-menu > ul').height();
         var liOffsettop = $('.footer .footer-top .footer-menu > ul li:nth-of-type(5)').offset().top + $('.footer .footer-top .footer-menu > ul li:nth-of-type(5)').height();

         console.log(ulOffsetTop, liOffsettop);
         $('.footer .footer-top .footer-menu > ul li:nth-of-type(5)').css('margin-bottom', `${ulOffsetTop - liOffsettop}px`);
      } else {
         $('.footer .footer-top .footer-menu > ul li:nth-of-type(5)').css('margin-bottom', '0px');
      }
   }

   setLiBottomMargin();

   $(window).resize(() => {
      setLiBottomMargin();
   })


   /////////////////////
   // owl carousel
   /////////////////////

   $(".owl-carousel").owlCarousel({
      'items': 1,
      'loop': true,
      'autoplay': true,
      'autoplayTimeout': 8000,
      'autoplayHoverPause': true,

   });
})