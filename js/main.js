$(function() {
  console.log( "jQuery ready and happy!" );

  // let lastScrollTop = 0;
  // let delta = 150;
  // let navbarHeight = $(‘header’).outerHeight();

  // let didScroll;
  // // on scroll, let the interval function know the user has scrolled
  // $(window).scroll(function(event){
  //   didScroll = true;
  // });
  // // run hasScrolled() and reset didScroll status
  // setInterval(function() {
  //   if (didScroll) {
  //     hasScrolled();
  //     didScroll = false;
  //   }
  // }, 250);

  // function hasScrolled() {
  //   let st = $(this).scrollTop();

  //   if (Math.abs(lastScrollTop — st) <= delta) {
  //   return;
  //   }

  //   // If current position > last position AND scrolled past navbar...
  //   if (st > lastScrollTop && st > navbarHeight){
  //     // Scroll Down
  //     $(‘header’).removeClass(‘nav-down’).addClass(‘nav-up’);
  //   } else {
  //     // Scroll Up
  //     // If did not scroll past the document (possible on mac)...
  //     if(st + $(window).height() < $(document).height()) {
  //       $(‘header’).removeClass(‘nav-up’).addClass(‘nav-down’);
  //     }
  //   }
  //   lastScrollTop = st;
  // }

  // Nav Links E-Listeners
  // Nav-About
  // $('.about-link').on('click', () => {
  //   console.log('jQ: clicked nav about-link');
  // })

  // // Nav-Projects
  // $('.projects-link').on('click', () => {
  //   console.log('jQ: clicked nav projects-link');
  // })

  // // Nav-Contact
  // $('.contact-link').on('click', () => {
  //   console.log('jQ: clicked nav contact-link');
  // })

  // let navPos = $('.nav')[0].getBoundingClientRect();
  // let headerPos = $('.header')[0].getBoundingClientRect();
  // console.log('.headerPos is:', headerPos)

  // $(window).scroll(() => {
  //   if ($(this).scrollTop() > 100) {
  //     $('.nav').toggleClass('.fixed');
  //   }
  // })
  //



  $('.show-git').on('mouseenter', () => {
    $('.git-icon').css('visibility', 'visible');
  })

  // Footer Icon Replacement
  $('#git-link').on('mouseenter', (e) => {
    $('.footer-banner').html('<span id="git-text">Git</span>');
  })
  $('#git-link').on('mouseleave', () => {
    $('.footer-banner').html('<span>check it</span>');
  })
  $('#linkedin-link').on('mouseenter', (e) => {
    $('.footer-banner').html('<span id="linkedin-text">linkedin</span>');
  })
  $('#linkedin-link').on('mouseleave', () => {
    $('.footer-banner').html('<span>check it</span>');
  })
  $('#resume-link').on('mouseenter', (e) => {
    $('.footer-banner').html('<span id="resume-text">resume</span>');
  })
  $('#resume-link').on('mouseleave', () => {
    $('.footer-banner').html('<span>check it</span>');
  })
  // $('#git-link').on('mouseleave', () => {
  //   $('#git').replaceWith('<img id="git-icon" src="./img/github.png" alt="git">')
  // })

// Closes off jQuery Load-Check
});
