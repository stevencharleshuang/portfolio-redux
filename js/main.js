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

  // https://codepen.io/cooljockey/pen/uyeHz
  animateDiv('.a');
  animateDiv('.b');
  animateDiv('.c');
  animateDiv('.d');

  const gBCR = $('.splash')[0].getBoundingClientRect();
  console.log('gBCR:', gBCR);

  function makeNewPosition(){
      
      // Get viewport dimensions (remove the dimension of the div)
      // var h = $('.splash').height() - 100;
      // var w = $('.splash').width() - 100;
      
      var h = $('.splash')[0].getBoundingClientRect().top - 10;
      var w = $('.splash')[0].getBoundingClientRect().left - 10;

      // let gBCR = 

      var nh = Math.floor(Math.random() * h);
      var nw = Math.floor(Math.random() * w);
      
      return [nh,nw];    
      
  }

  function animateDiv(myclass){
      var newq = makeNewPosition();
      $(myclass).animate({ top: newq[0], left: newq[1] }, 2000,   function(){
        animateDiv(myclass);        
      });
      
  };

// Closes off jQuery Load-Check
});
