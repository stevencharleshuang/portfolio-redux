$(function() {
  console.log( "jQuery ready and happy!" );

  const landing = $('.landing');
  const about = $('.about');
  const projects = $('.projects');
  const contact = $('.contact');
  let viewportX = $(document.body).width();
  let viewportY = $(document.body).height();

  $(window).resize(() => {
    viewportX = $(document.body).width();
    viewportY = $(document.body).height();
    landing.css({ width: viewportX, height: viewportY });
    about.css({ width: viewportX, height: viewportY });
    projects.css({ width: viewportX, height: viewportY });
    contact.css({ width: viewportX, height: viewportY });
  });

  console.log(`viewportX: ${viewportX}  viewportY: ${viewportY}`);

  landing.css({ width: viewportX, height: viewportY, bottom: 0 });
  about.css({ width: viewportX, height: viewportY, bottom: viewportY });
  projects.css({ width: viewportX, height: viewportY, bottom: viewportY });
  contact.css({ width: viewportX, height: viewportY, bottom: viewportY });

  function showThisHideThat(show, hide1, hide2, hide3) {
      // show.css({ bottom: 0, visibility: 'visible' });
      show.animate({ bottom: 0 }, 1000)
      hide1.animate({ bottom: viewportY }, 1000);
      hide2.animate({ bottom: viewportY }, 1000);
      hide3.animate({ bottom: viewportY }, 1000);
  }

  $('#landing-btn').on('click', () => {
    showThisHideThat(landing, about, projects, contact);
  });
  $('#about-btn').on('click', () => {
    showThisHideThat(about, landing, projects, contact);
  });
  $('#projects-btn').on('click', () => {
    showThisHideThat(projects, landing, about, contact);
  });
  $('#contact-btn').on('click', () => {
    showThisHideThat(contact, landing, about, projects);
  });

  $(window).scroll(() => {
    console.log('>>> Client Scrolled');
  });


  /**
   * MyStuff Links
   */
  $('#git-link').on('mouseenter', () => {
    $('#stuff').text('Git')
  });
  $('#git-link').on('mouseleave', () => {
    $('#stuff').text('Stuff')
  });
  $('#linkedin-link').on('mouseenter', () => {
    $('#stuff').text('LinkedIn')
  });
  $('#linkedin-link').on('mouseleave', () => {
    $('#stuff').text('Stuff')
  });
  $('#resume-link').on('mouseenter', () => {
    $('#stuff').text('Resume')
  });
  $('#resume-link').on('mouseleave', () => {
    $('#stuff').text('Stuff')
  });


  /**
   * w3 slideshow sample - Modded
   * src: https://www.w3schools.com/howto/howto_js_slideshow.asp
   */
  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = $('.mySlides');
    let dots = $('.dot');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).css({ 'display': 'none' });
    }
    for (i = 0; i < dots.length; i += 1) {
      $(dots[i]).toggleClass( "active" );
    }
    $(slides[slideIndex-1]).css({ 'display': 'block' });
    $(dots[slideIndex-1]).toggleClass( "active" );
  }
  /* My Mods */
  // E-Handlers
  // Dots
  $('.dot').on('click', (e) => {
    currentSlide(e.target.dataset.id);
    // console.log('e =', e.target.dataset.id);
  })

  //
  $('.gal-btn').on('click', (e) => {
  //   // console.log('e =', e.target.dataset.val);
    plusSlides(e.target.dataset.val);
  })

// Closes off jQuery Load-Check
});
