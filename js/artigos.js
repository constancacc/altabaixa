let artigo1= document.querySelector("#btn1");
let artigo2= document.querySelector("#btn2");
let text_article1 = document.querySelector("#artigo1");
let text_article2 = document.querySelector("#artigo2");

artigo1.addEventListener("click", function(){
    text_article2.classList.remove("show"); 
    text_article1.classList.remove("hide"); 
    text_article1.classList.add("show"); 
    text_article2.classList.add("hide"); 
});

artigo2.addEventListener("click", function(){
    text_article1.classList.remove("show"); 
    text_article2.classList.remove("hide"); 
    text_article2.classList.add("show"); 
    text_article1.classList.add("hide"); 
    });