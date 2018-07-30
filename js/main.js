$(function() {
  /*
                               __        __                      __        __          __  __  __
                            /  |      /  |                    /  |      /  |        /  |/  |/  |
    ______   __    __   ____$$ |      $$ |  ______    ______  $$ |   __ $$/_______  $$ |$$ |$$ |
   /      \ /  |  /  | /    $$ |      $$ | /      \  /      \ $$ |  /  |$//       \ $$ |$$ |$$ |
  /$$$$$$  |$$ |  $$ |/$$$$$$$ |      $$ |/$$$$$$  |/$$$$$$  |$$ |_/$$/   $$$$$$$  |$$ |$$ |$$ |
  $$ |  $$ |$$ |  $$ |$$ |  $$ |      $$ |$$ |  $$ |$$ |  $$ |$$   $$<    $$ |  $$ |$$/ $$/ $$/
  $$ \__$$ |$$ \__$$ |$$ \__$$ |      $$ |$$ \__$$ |$$ \__$$ |$$$$$$  \   $$ |  $$ | __  __  __
  $$    $$ |$$    $$/ $$    $$ |      $$ |$$    $$/ $$    $$/ $$ | $$  |  $$ |  $$ |/  |/  |/  |
   $$$$$$$ | $$$$$$/   $$$$$$$/       $$/  $$$$$$/   $$$$$$/  $$/   $$/   $$/   $$/ $$/ $$/ $$/
  /  \__$$ |
  $$    $$/
   $$$$$$/

  */
  // console.log( "jQuery ready and happy!" );

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

  // console.log(`viewportX: ${viewportX}  viewportY: ${viewportY}`);

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

  // Moving Divs Source: https://codepen.io/cooljockey/pen/uyeHz
  // Refactored
  animateDiv('.a');
  animateDiv('.b');
  animateDiv('.c');
  animateDiv('.d');
  // console.log('gBCR:', gBCR);

  function makeNewPosition(){
    const gBCR = $('.splash')[0].getBoundingClientRect();
    const minHeight = gBCR.top;
    const minWidth = gBCR.left - 100;
    const maxHeight = gBCR.bottom - 100;
    const maxWidth = gBCR.right - 100;
    let newHeight = Math.floor(Math.random() * (maxHeight - minHeight) + minHeight);
    let newWidth = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
    // console.log('new height: ', newHeight);
    // console.log('new width: ', newWidth);
    return [newHeight,newWidth];
  }

  function animateDiv(myclass){
      let newVal = makeNewPosition();
      $(myclass).animate({ top: newVal[0], right: newVal[1] }, 2000,   function(){
        animateDiv(myclass);
      });
  };

// Closes off jQuery Load-Check
});
