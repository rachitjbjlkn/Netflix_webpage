const sign=document.getElementById('sign');
const log=document.getElementById('login');
const cross=document.querySelector('.cross');
sign.addEventListener('click',()=>{
    log.style.display="block";
})
cross.addEventListener('click',()=>{
    log.style.display="none";
})
let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
const szero=document.getElementById('szero');
const sone=document.getElementById('sone');
const stwo=document.getElementById('stwo');
const sthree=document.getElementById('sthree');
const sfour=document.getElementById('sfour');
const sfive=document.getElementById('sfive');
const zero=document.getElementById('zero');
const one=document.getElementById('one');
const two=document.getElementById('two');
const three=document.getElementById('three');
const four=document.getElementById('four');
const five=document.getElementById('five');
szero.addEventListener('click',()=>{
    zero.classList.toggle('d');
   
});
sone.addEventListener('click',()=>{
    one.classList.toggle('d');
   
});
stwo.addEventListener('click',()=>{
    two.classList.toggle('d');
   
});
sthree.addEventListener('click',()=>{
    three.classList.toggle('d');
   
});
sfour.addEventListener('click',()=>{
    four.classList.toggle('d');
   
});
sfive.addEventListener('click',()=>{
    five.classList.toggle('d');
    
});
const input = document.querySelector('.backin');
const button = document.querySelector('.start');

button.disabled = true;

input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
        button.disabled = false; 
    } else {
        button.disabled = true; 
    }
});

button.addEventListener('click', () => {
    if (!button.disabled) {
        window.location.href = 'netflixnextpage.html';
    }
});