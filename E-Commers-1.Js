

//--------------Nav---------Bar--------Section------------//
let navbar = document.querySelector('.navbar')
document.querySelector('#menu-bar').onclick = () =>{
    navbar.classList.toggle('active');
};

document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
};
 //--------------Nav---------Bar--------Section------------//




//--------------Scroll---------Header--------Section------------//
window.onscroll = () =>{
    if(window.scrollY > 100){
      document.querySelector('header').classList.add('active');
    }
    else{
        document.querySelector('header').classList.remove('active'); 
    }
};
//--------------Scroll---------Header--------Section------------//




//----------Home--------Swiper--------Slider--------//
var swiper = new Swiper(".home-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
  delay: 2000,
  disableOnInteraction: false,
},
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
});
//----------Home--------Swiper--------Slider--------//





//--------------Product-----------Swiper------------Slider-----------//
var Swiper = new Swiper(".product-slider", {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  autoplay: {
     delay: 2000,
     disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
//--------------Product-----------Swiper------------Slider-----------//




//------------Featured--------------Product-------------Img--------------//
document.querySelectorAll('.small-image-1').forEach(images =>{
  images.onclick = () =>{
    document.querySelector('.big-image-1').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-image-2').forEach(images =>{
  images.onclick = () =>{
    document.querySelector('.big-image-2').src = images.getAttribute('src');
  }
});

document.querySelectorAll('.small-image-3').forEach(images =>{
  images.onclick = () =>{
    document.querySelector('.big-image-3').src = images.getAttribute('src');
  }
});
//------------Featured--------------Product-------------Img--------------//




//--------------Deal-------------Counter------------Start---------------//
let countDate = new Date('aug, 2023 00:00:00').getTime();
function countDown(){
  let now = new Date().getTime();
  gap = now - countDate;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let day = hours * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % (day)) / (hours));
  let m = Math.floor((gap % (hours)) / (minutes));
  let s = Math.floor((gap % (minutes)) / (seconds));

  document.getElementById('days').innerText = d;
  document.getElementById('hours').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('seconds').innerText = s;
}

setInterval(function(){
  countDown()
},1000);
//--------------Deal-------------Counter------------End---------------//


//--------------Review-------------Slider----------Strat---------------//
var swiper = new Swiper(".review-slider", {  
  spaceBetween: 20,
  loop:true,
  autoplay: {
      delay: 1000,
      disableOnInteraction: false,
  },
  
  breakpoints: {
      640: {
          slidesPerView: 1,
      },
      770: {
          slidesPerView: 2,
      },
      1200: {
          slidesPerView: 3,
      },
  },
  
  });
  //--------------Review-------------Slider----------Strat---------------//