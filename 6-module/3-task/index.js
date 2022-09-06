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
    let w = this.inner.querySelector(`.carousel__img`).width
    let count = null
    this.carousel.addEventListener(`click`,(e)=>{

     if (e.target.parentNode.className == `carousel__arrow carousel__arrow_right`||e.target.className == `carousel__arrow carousel__arrow_right`){
      if (count>-(c_l-1)*w) {
        count-=w
        this.inner.style.transform = `translateX(${count}px)`
        count == - (c_l-1)*w ? this.nav1.style.display = 'none' : 
        count == - (c_l-3)*w ? this.nav2.style.display = '' : false
      }}

     if (e.target.parentNode.className == `carousel__arrow carousel__arrow_left`||e.target.className == `carousel__arrow carousel__arrow_left`){
      if ((count >= -(c_l-1)*w) && (count<0)) {
        count+=w
        this.inner.style.transform = `translateX(${count}px)`
        count == - (c_l-2)*w ? this.nav1.style.display = '' : 
        count == 0 ? this.nav2.style.display = 'none' : false
      }}

      if (e.target.parentNode.className == `carousel__button` || e.target.className==`carousel__button`) {
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

// name: 'Chicken springrolls',
//     price: 6.5,
//     image: 'chicken_loempias.png',
//     id: 'chicken-springrolls'