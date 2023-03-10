"use strict"

$('.slider-for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.slider-nav',
   prevArrow: '<div class="slider__buttons-item slider__buttons-item--left"><button class="slider__buttons-btn slider__buttons-btn--left"></button> </div>',
  nextArrow: '<div class="slider__buttons-item slider__buttons-item--right"><button class="slider__buttons-btn slider__buttons-btn--right"></button></div>',
});
$('.slider-nav').slick({
  
   draggable: false,
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.slider-for',
   dots: false,
   centerMode: true,
   focusOnSelect: true,
 
 });
 
 
 let itemsWorksTitle = document.querySelectorAll('.item-works-title');
 let tabsContainer = document.querySelector('.container-tabs');
 let contentContainer = document.querySelector('.container-content');
 let loadMore = document.querySelector('.load-morebtn');
 let loadText = document.querySelector('.btn-text');  

 let listItems = document.querySelectorAll('.works-item');
 let loader = document.querySelector('.container-loading');
 // ----------------------------------------------------
 tabsContainer.addEventListener('click', (e) => {
   tabsContainer.querySelector('.tabs-active')?.classList.toggle('tabs-active')
   let target = e.target;
   
   if(e.target.closest('li')){
     e.target.classList.toggle('tabs-active')
    }
    const currentId = target.dataset.forTab;
    console.log(currentId);
    contentContainer.querySelector('.content-active')?.classList.toggle('content-active');
    contentContainer.querySelector(`.content[data-tab="${currentId}"]`)?.classList.toggle("content-active");
  });



// -----------------------------------------------------------------------------------

function work() {
   const wrapper = document.querySelector(".works-content-wrapper");
 
   for (let i = 1; i <= 12; i++) {
     const array = [
       "word-press",
       "web-design",
       "landing-pages",
       "graphic-design",
     ];
     const index = Math.floor(Math.random(1) * array.length);
     const data = array[index];
     const newData = data.replace(/(\s?-\s?)|\s/g, " ");
     const li = `
       <li class="item-works-content" data-filter-choise = "${data}" >
       <img src="./img/amazing-work${i}.png" alt="works-photo" width="285" height="211"> 
       <div class="hidden-block">
       <div class="hidden-imgs">
       <svg width="88" height="43" viewBox="0 0 88 43" fill="none" xmlns="http://www.w3.org/2000/svg">
       <g clip-path="url(#clip0_2143_233)">
       <rect x="1" y="2" width="41" height="40" rx="20" stroke="#18CFAB"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9131 17.7282L25.0948 15.8913C24.2902 15.0809 22.983 15.0759 22.1768 15.8826L20.1592 17.8926C19.3516 18.6989 19.3482 20.0103 20.1505 20.8207L21.3035 19.689C21.1868 19.3284 21.3304 18.9153 21.6159 18.6295L22.8995 17.3519C23.3061 16.9462 23.9584 16.9491 24.3595 17.3543L25.4513 18.458C25.8528 18.8628 25.8511 19.5171 25.447 19.9232L24.1634 21.2024C23.8918 21.473 23.4461 21.6217 23.1002 21.5263L21.9709 22.6589C22.7745 23.4718 24.0803 23.4747 24.8889 22.6684L26.9039 20.6592C27.7141 19.8525 27.7167 18.5398 26.9131 17.7282ZM19.5261 25.0918C19.6219 25.4441 19.4686 25.8997 19.1909 26.1777L17.9923 27.3752C17.5807 27.7845 16.916 27.7833 16.5067 27.369L15.393 26.2475C14.9847 25.8349 14.9873 25.1633 15.3982 24.7547L16.598 23.5577C16.8903 23.2661 17.3104 23.1202 17.6771 23.2438L18.8335 22.0715C18.0149 21.2462 16.6825 21.2421 15.8606 22.0632L13.9152 24.0042C13.0923 24.8266 13.0884 26.1629 13.9065 26.9886L15.7582 28.8618C16.576 29.6846 17.9072 29.6912 18.7311 28.8701L20.6765 26.9287C21.4985 26.1054 21.5024 24.7717 20.6855 23.9443L19.5261 25.0918ZM19.2579 24.5631C18.9801 24.8419 18.5343 24.8411 18.2618 24.5581C17.9879 24.2743 17.9901 23.8204 18.2661 23.5399L21.5907 20.1611C21.8668 19.8823 22.3117 19.8831 22.5851 20.164C22.8605 20.4457 22.8588 20.9009 22.5817 21.183L19.2579 24.5631Z" fill="#1FDAB5"/>
       <path fill-rule="evenodd" clip-rule="evenodd" d="M66.5973 1.99795C77.8653 1.99795 86.9999 10.9523 86.9999 21.9979C86.9999 33.0432 77.8653 41.9979 66.5973 41.9979C55.3292 41.9979 46.1946 33.0432 46.1946 21.9979C46.1946 10.9523 55.3292 1.99795 66.5973 1.99795Z" fill="#18CFAB"/>
       <rect x="60" y="17" width="12" height="11" fill="white"/>
       </g>
       <defs>
       <clipPath id="clip0_2143_233">
       <rect width="88" height="43" fill="white"/>
       </clipPath>
       </defs>
       </svg>  
       </div>
       <p class="hidden-text">Creative desing</p>
       <p class="hidden-class">${newData}</p>
       
       </div>   
       </li>   
    `;
     wrapper.innerHTML += li;
   }
 }
 
 function filter() {
  const btn = document.querySelector('.works-item-wrapper');
  const tab = document.querySelectorAll('.item-works-title');
  const image = document.querySelectorAll('.item-works-content');
  btn.addEventListener('click',  (el) => {
     console.log(el.target);
     if(el.target.tagName === 'P'){
      tab.forEach((element)=>{
       element.classList.remove('active');
       el.target.classList.add('active');
      })
      image.forEach((img)=>{
         if(el.target.dataset.choise === "all"){
            img.style.display = 'block';
         } else if (el.target.dataset.choise === img.dataset.filterChoise){
            img.style.display = "block";
         } else {
            img.style.display = 'none'
         }
      })
     }
  })
  }

 
         loadMore.addEventListener("click", () => {
            loader.classList.remove("active");
            loadMore.remove();  
                 
                  function addLi() { 
                     work();
                     filter();
    loader.remove();

   }
   setTimeout(addLi, 3000);
});

work();
filter();

// ----------------------------------------------------


  




const slickSlide = document.querySelectorAll('.slick-slide');
// console.log(slickSlide);
for(let i = 0; i<slickSlide.length; i++){
  if( i <=3 ){
    continue
  } else{
    slickSlide[i].style.cssText = `
    width: 100px; margin-right: 10px; margin-left: 15px`;
  }
} 



$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  stamp: '.stamp',
  gutter: 13,
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
          }
