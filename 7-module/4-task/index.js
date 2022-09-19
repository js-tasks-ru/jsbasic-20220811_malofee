import createElement from '../../assets/lib/create-element.js';


export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.categoties = steps
    this.render()
    this.addEventListener()
  }


  render () {
   this.elem = createElement(`<div class="slider">
   <div class="slider__thumb" style="left: 50%;">
     <span class="slider__value">2</span>
   </div>
   <div class="slider__progress" style="width: 50%;"></div>
   <div class="slider__steps">
   </div>
 </div>`)

   for (let i = 0;i<this.categoties;i++){
    let span = createElement(`<span></span>`)
    i==0 ? span.classList.add(`slider__step-active`) : false
    this.elem.querySelector(`.slider__steps`).append(span)
   }

   this.step_Percent = 100/(this.categoties-1)
   this.spans_array = Array.from(this.elem.querySelector(`.slider__steps`).children)

  }
  

  addEventListener () {

 
  let progress = this.elem.querySelector('.slider__progress');
  let thumb = this.elem.querySelector(`.slider__thumb`)
  thumb.ondragstart = ()=>{false}
  let segments = this.categoties - 1;
  let approximateValue,value,left,leftRelative,leftPercents  = null
  thumb.addEventListener(`pointerdown`,(e)=>{
 
  let onMouseMove = e => {

    this.elem.classList.add(`slider_dragging`)
    left = e.clientX - this.elem.getBoundingClientRect().left;
    leftRelative = left / this.elem.offsetWidth;
    if (leftRelative < 0) {
      leftRelative = 0;
    }
    
    if (leftRelative > 1) {
      leftRelative = 1;
    }
    leftPercents = leftRelative * 100;
    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
    approximateValue = leftRelative * segments;
    value= Math.round(approximateValue);
     this.spans_array.forEach(item=>{item.classList.remove(`slider__step-active`)})
     this.spans_array[value].classList.add(`slider__step-active`)
     this.elem.querySelector(`.slider__value`).innerHTML = value

  
  }

  document.addEventListener(`pointermove`,onMouseMove) 

  document.addEventListener(`pointerup`,()=>{

    document.removeEventListener(`pointermove`,onMouseMove) 
    this.elem.classList.remove(`slider_dragging`)
    thumb.style.left = `${value*this.step_Percent}%`;
    progress.style.width = `${value*this.step_Percent}%`;
    this.spans_array[value].classList.add(`slider__step-active`)


    
    this.elem.dispatchEvent(new CustomEvent(`slider-change`,{
         detail: value,
         bubbles:true
       }))
    
  }, { once: true })

  })


  this.elem.addEventListener(`click`,e=>{
    left = e.clientX - this.elem.getBoundingClientRect().left;
    leftRelative = left / this.elem.offsetWidth;
    if (leftRelative < 0) {
      leftRelative = 0;
    }
    
    if (leftRelative > 1) {
      leftRelative = 1;
    }
    leftPercents = leftRelative * 100;
    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
    approximateValue = leftRelative * segments;
    value= Math.round(approximateValue);
     this.spans_array.forEach(item=>{item.classList.remove(`slider__step-active`)})
     this.spans_array[value].classList.add(`slider__step-active`)
     this.elem.querySelector(`.slider__value`).innerHTML = value
    thumb.style.left = `${value*this.step_Percent}%`;
    progress.style.width = `${value*this.step_Percent}%`;


     
    this.elem.dispatchEvent(new CustomEvent(`slider-change`,{
      detail: value,
      bubbles:true
    }))






    
    
  })

  }
}
