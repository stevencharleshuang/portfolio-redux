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

  $(window).scroll(() => {
    if ($(this).scrollTop() > 100) {
      $('.nav').toggleClass('.fixed');
    }
  })

  // Footer Icon Replacement
  $('#git-link').on('mouseenter', (e) => {
    $('#git-link').append('&nbsp<span id="git-text">Git</span>');
    e.stopPropogation();
  })
  $('#git-link').on('mouseleave', () => {
    $('#git-link').remove('#git-text')
  })
  // $('#git-link').on('mouseleave', () => {
  //   $('#git').replaceWith('<img id="git-icon" src="./img/github.png" alt="git">')
  // })

// Closes off jQuery Load-Check
});
