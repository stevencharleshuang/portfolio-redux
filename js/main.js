$(function() {
  console.log( "jQuery ready and happy!" );

  // Nav Links E-Listeners
  // Nav-About
  $('.about-link').on('click', () => {
    console.log('jQ: clicked nav about-link');
  })

  // Nav-Projects
  $('.projects-link').on('click', () => {
    console.log('jQ: clicked nav projects-link');
  })

  // Nav-Contact
  $('.contact-link').on('click', () => {
    console.log('jQ: clicked nav contact-link');
  })

  let navPos = $('.nav')[0].getBoundingClientRect();
  let headerPos = $('.header')[0].getBoundingClientRect();
  console.log('.headerPos is:', headerPos)
  // window.onscroll = function() {scrollFunction()};
  // Nav Scroller
  // $('.nav').css({
  //   'position': 'absolute',
  //   'bottom': '0px',
  // });
  // $(window).scroll(() => {
  //   ($('.nav').scrollTop(700))
  //   console.log('navPos is:', navPos);
  // });
  // function scrollFunction() {
  //   console.log('scrollTop: ', document.body.scrollTop)
  //   if (document.body.scrollTop < headerPos.height) {
  //       $('navbar').css({
  //         'position': 'absolute;',
  //         'bottom': $(window).scrollTop() + "px"
  //       });
  //   } else {
  //       $('navbar').css({'bottom': '0'});
  //   }
  // }
  // When the user scrolls the page, execute myFunction
  // window.onscroll = function() {myFunction()};

  // // Get the navbar
  // let navbar = $('.navbar');

  // // Get the offset position of the navbar
  // let sticky = navbar.offsetBottom;

  // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  let stickyNavTop = $('.nav').offset().bottom;

        // our function that decides weather the navigation bar should have "fixed" css position or not.
        let stickyNav = function(){
          let scrollTop = $(window).scrollTop(); // our current vertical position from the top

          // if we've scrolled more than the navigation, change its position to fixed to stick to top,
          // otherwise change it back to relative
          if (scrollTop > stickyNavTop) {
              $('.nav').addClass('sticky');
          } else {
              $('.nav').removeClass('sticky');
          }
      };

      stickyNav();
      // and run it again every time you scroll
      $(window).scroll(function() {
        stickyNav();
      });
// Closes off jQuery Load-Check
});
