$(document).ready(function() {
  // initialises flipbook full-screen
  $('.flipbook').turn({
    width: $(window).width(),
    height: $(window).height(),
    display: 'double',     // show two pages (open magazine)
    autoCenter: true,
    gradients: true,
    elevation: 100,
    duration: 1200
  });

  /* starts the magazine opened to pages 1 and 2 
     turn.js shows a double spread when the current page is 2 */
     //------------------------//
  $('.flipbook').turn('page', 2);

  /* reveals flipbook now that turn.js initialised to avoid initial layout flash
     sets inline visibility in case the element had an inline style */   
     //------------------------//
  $('.flipbook').addClass('is-ready').css('visibility','visible');

  // window resize handler to keep flipbook full-screen
  $(window).resize(function() {
    $('.flipbook').turn('size', $(window).width(), $(window).height());
  });

  // triggers page flips 
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    const href = $(this).attr('href');
    //------------------------//
    /* after the cover, 
       1 = home, 2 = tshirts, 3 = socks, 4 = mugs, 5 = basket */
    //------------------------//
    if (href === '#home') $('.flipbook').turn('page', 1);
    if (href === '#tshirts') $('.flipbook').turn('page', 2);
    if (href === '#socks') $('.flipbook').turn('page', 3);
    if (href === '#mugs') $('.flipbook').turn('page', 4);
    if (href === '#basket') $('.flipbook').turn('page', 5);
  });
  
     //------------------------//
  /* prevents flipping to nonexistent pages before page 1
     if turn targets page 0 or less, cancel it to stay open
     to the left-most spread */
     //------------------------//
  $('.flipbook').on('turn', function(e, page) {
    if (page < 1) {
      // cancels turn
      return false;
    }
  });
});
