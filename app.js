const slides = document.querySelectorAll('.slide');
// console.log(slides);
let count = 0;
let interval;

slides.forEach(
    (slide,index )=>{
        slide.style.left = `${index * 100}%`;
        slide.style.transition = 'transform 1s ease-in-out';
    }
)

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count*100}%)`;
        }
    )
}


function prevSlide() {
    if(count > 0 ){
        count--; 
    } else {
        count = slides.length-1;
    }
    slideImage();
}

function nextSlide() {
    if(count < slides.length -1){
        count++;  
    } else {
        count=0;
    }
    slideImage();
}

function startAutoSlide() {
    interval = setInterval(() => {
        nextSlide();
    },3000);
}

function stopAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
}

startAutoSlide();

document.querySelector("#prev").addEventListener('click',() => {
    prevSlide();
    stopAutoSlide();
});
document.querySelector("#next").addEventListener('click',() => {
    nextSlide();
    stopAutoSlide();
});