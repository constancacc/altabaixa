let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.pageYOffset;
  let reveals = document.querySelectorAll('.artigo2-2');
  let animation2 = document.querySelectorAll('.animation2');
  let animation3 = document.querySelectorAll('.animation3');

  for(let i=0; i<reveals.length; i++){
    
    var windowheigth = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint= 150;

    if(revealtop < windowheigth - revealpoint){
      reveals[i].classList.add('scroll');

      for (let j = 0; j < animation2.length; j++) {
        if (animation2[j].closest('.artigo2-2') === reveals[i]) {
          animation2[j].style.animation = "slide-in-from-left 2.5s forwards";
        }
      }

      for(let y=0; y<animation3.length; y++){
        if (animation2[y].closest('.artigo2-2') === reveals[i]) {
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


/* BOTÕES */
function mostrarArtigo(id) {
  // Oculta todos os artigos
  var artigos = document.querySelectorAll('.art');
  artigos.forEach(function(artigo) {
    artigo.style.visibility = 'hidden';
    artigo.style.opacity = 0;
    artigo.style.height = '0';
  });

  // Mostra o artigo clicado
  var artigoSelecionado = document.getElementById(id);
  artigoSelecionado.style.visibility = 'visible';
  artigoSelecionado.style.opacity = 1;
  artigoSelecionado.style.height = 'auto';
}

/*mudar font-weight dos botoes*/
function selecionarArtigo(elemento) {

  // Remove a classe de todos os elementos com a classe "artigo"
  var elementosArtigo = document.querySelectorAll('.artigo');
  elementosArtigo.forEach(function (el) {
    el.classList.remove('seleciona-artigo');
  });

  // Adiciona a classe ao elemento clicado
  elemento.classList.add('seleciona-artigo');
}

/*botão para o topo*/
function scrollToTop() {
  const startingY = window.pageYOffset;
  const targetY = 0;
  const distance = targetY - startingY;
  const duration = 1000; // Tempo em milissegundos

  let start_time;

  window.requestAnimationFrame(function step(currentTime) {
      if (!start_time) {
          start_time = currentTime;
      }

      const elapsed_time = currentTime - start_time;
      const progress = Math.min(elapsed_time / duration, 1);

      window.scrollTo(0, startingY + distance * progress);

      if (elapsed_time < duration) {
          window.requestAnimationFrame(step);
      }
  });
}

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
              }, index * 100); 
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





