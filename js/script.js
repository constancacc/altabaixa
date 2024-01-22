let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;
  let reveals = document.querySelectorAll('.artigo2');
  let animation2 = document.querySelectorAll('.animation2');
  let animation3 = document.querySelectorAll('.animation3');

  for(let i=0; i<reveals.length; i++){
    
    var windowheigth = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint= 150;

    if(revealtop < windowheigth - revealpoint){
      reveals[i].classList.add('scroll');

      for (let j = 0; j < animation2.length; j++) {
        if (animation2[j].closest('.artigo2') === reveals[i]) {
          animation2[j].style.animation = "slide-in-from-left 2.5s forwards";
        }
      }

      for(let y=0; y<animation3.length; y++){
        if (animation2[y].closest('.artigo2') === reveals[i]) {
          animation3[y].style.animation = "slide-in-from-right 2.5s forwards";
        }
      
    }
    }
  }

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.navbar').classList.remove('show');
    document.querySelector('.navbar').classList.add('hidden');

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
