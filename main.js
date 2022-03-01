let slides = document.querySelectorAll('.slider__slide'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next');

let index = 0;


prev.addEventListener('click', () => slider(prev));
next.addEventListener('click', () => slider(next));



function slider(btn) {
   slides.forEach(slide => slide.classList.remove('active'));

   if(btn == next){
       index++
       if(index == slides.length) {
           index = 0;
        }
   }
   if(btn == prev) {
       index--
       if(index < 0) {
           index = slides.length - 1
       }
   }



   slides[index].classList.add('active');
}


let timer = 3000;
let autoplay = true;

function autoplaying() {
  if(autoplay == true) {
    slides.forEach(slide => slide.classList.remove('active'));

    index++
    if(index == slides.length){
        index = 0;
    }
    setTimeout(() => autoplaying(), timer);
    slides[index].classList.add('active')
  }
}
setTimeout(() => autoplaying(), timer);