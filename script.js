let slides=document.querySelectorAll("#slideshow img")

let slideInterval;
let slideIndex=0;



function showSlide(index){
    slides.forEach((slide, i)=>{
        if(i==index){
            slide.style.display='block'
        }
        else{
            slide.style.display="none"
        }
    })
}
function stratSlideShow(){
    slideInterval=setInterval(function(){
          showSlide(slideIndex++)
    },1000)
}

function toggleSlideShow(){
    if(slideInterval){
        stopSlideShow();
        slideInterval=null
    }
    else{
        stratSlideShow()
    }
}