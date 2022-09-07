import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
 carousel = createElement( `<div class="carousel">
 </div>`)
 nav1 = createElement (`<div class="carousel__arrow carousel__arrow_right">
 <img src="/assets/images/icons/angle-icon.svg" alt="icon">
 </div>`)
 nav2 = createElement (`<div class="carousel__arrow carousel__arrow_left">
 <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
 </div>`)

 inner = createElement (`<div class="carousel__inner">
 </div>`)
 slide = createElement (`<div class="carousel__slide" data-id="">
 <img src="" class="carousel__img" alt="slide">
 <div class="carousel__caption">
   <span class="carousel__price"></span>
   <div class="carousel__title"></div>
   <button type="button" class="carousel__button">
     <img src="/assets/images/icons/plus-icon.svg" alt="icon">
   </button>
 </div>`)
 slidesC = []
 elem = this.carousel

  constructor(slides) {
    let slideNumber = 0; // Добавили счётчик номера слайда
    this.carousel.append(this.nav1,this.nav2,this.inner)
    this.slides = slides;
    let c_l = this.slides.length
    for (let i=0;i<c_l;i++) {
     this.slidesC[i] = this.slide.cloneNode(true)
     this.slidesC[i].dataset.id = `${this.slides[i].id}`
     this.slidesC[i].querySelector(`.carousel__img`).src = `/assets/images/carousel/${this.slides[i].image}`
     this.slidesC[i].querySelector(`.carousel__price`).innerHTML=`€${this.slides[i].price.toFixed(2)}`
     this.slidesC[i].querySelector(`.carousel__title`).innerHTML = `${this.slides[i].name}`
     this.inner.append (this.slidesC[i])
    }
  
    this.nav2.style.display = 'none'
    this.carousel.addEventListener(`click`,(e)=>{

     if (e.target.closest('.carousel__arrow_right')){
      slideNumber++;
      this.nav2.style.display = ''
      if (slides.length - 1 === slideNumber) {
        e.target.closest('.carousel__arrow_right').style.display = 'none';
      } else {
        e.target.closest('.carousel__arrow_right').style.display = '';
      }
      let offset = -this.elem.offsetWidth * slideNumber;
      this.inner.style.transform = `translateX(${offset}px)`;
    }

     if (e.target.closest('.carousel__arrow_left')){
      this.nav1.style.display = ''
      slideNumber--;
      if (slideNumber === 0) {
        e.target.closest('.carousel__arrow_left').style.display = 'none';
      } else {
        e.target.closest('.carousel__arrow_left').style.display = '';
      }
      let offset = -this.elem.offsetWidth * slideNumber;
      this.inner.style.transform = `translateX(${offset}px)`;

      }

      if (e.target.closest(`.carousel__button`)){
        let id =null
        e.target.parentNode.className == `carousel__button`? id = e.target.parentNode.parentNode.parentNode.dataset.id :
        id =e.target.parentNode.parentNode.dataset.id
        this.elem.dispatchEvent(new CustomEvent("product-add",{
        detail : id,
        bubbles: true
       }))
      }

    })
 
  }
}
