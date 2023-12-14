let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    /*
    document.querySelector('.navbar').classList.remove('show');
    document.querySelector('.navbar').classList.add('hidden');*/

  } else {
    // user has scrolled down
    document.querySelector('.navbar').classList.remove('hidden');
    document.querySelector('.navbar').classList.add('show');

  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});