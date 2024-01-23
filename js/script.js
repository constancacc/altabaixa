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






var slidePosition = 1;
var intervalTime = 3000; // tempo para mudar

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("container2");

  
  if (slidePosition > slides.length) {
    slidePosition = 1;
  }

  if (slidePosition < 1) {
    slidePosition = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slidePosition - 1].style.display = "inline-block";

  // Increment the slide position for the next iteration
  slidePosition++;

}

// Call the SlideShow function initially
/* SlideShow(); */

// Set the interval to call the SlideShow function every `intervalTime` milliseconds
/* var slideInterval = setInterval(SlideShow, intervalTime); */

// If you want to stop the slideshow, you can use clearInterval like this:
// clearInterval(slideInterval);

document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('.image-container1');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleVisibility() {
      images.forEach(function(image, index) {
          if (isElementInViewport(image)) {
              setTimeout(function() {
                  image.classList.add('visible');
              }, index * 200); 
          }
      });
  }

  window.addEventListener('scroll', handleVisibility);
  handleVisibility(); 
});

document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('.image-container2');

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function handleVisibility() {
      images.forEach(function(image, index) {
          if (isElementInViewport(image)) {
              setTimeout(function() {
                  image.classList.add('visible');
              }, index * 200); 
          }
      });
  }

  window.addEventListener('scroll', handleVisibility);
  handleVisibility(); 
});





