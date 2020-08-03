$(document).ready(() => {

   /////////////////////////////////////
   // search input hide / show on click
   /////////////////////////////////////

   $('.header-search-icon').on('click', () => {
      if ($('.header-search-input').height() == 0) {
         $('.header-search-input').css({
            'height': `57px`,
            'padding': `10px`
         });
      } else {
         $('.header-search-input').css({
            'height': `0`,
            'padding': `0 1rem`
         });
      }
   })

   ///////////////////////////////////////
   // show / hide sub menu items on hover
   ///////////////////////////////////////

   // var headerNavItem = $('.header-nav li');
   // var item;

   // $('.header-nav li').hover((e) => {
   //    console.log($(e.target))
   //    item = $(e.target).next('ul');
   //    item.css('height', `${headerNavItem[0].scrollHeight}px`)
   // }, () => {
   //    item.css('height', `0`)
   // })




})