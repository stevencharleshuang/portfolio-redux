$(function() {
  console.log( "jQuery ready and happy!" );

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
