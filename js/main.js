$(function() {
  console.log( "jQuery ready and happy!" );

  const landing = $('.landing');
  const about = $('.about');
  const projects = $('.projects');
  const contact = $('.contact');
  const viewportX = $(document.body).width();
  const viewportY = $(document.body).height();


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


// Closes off jQuery Load-Check
});
