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

  this.elem.addEventListener(`click`,(e)=>{

    let coordinate = e.clientX 
    let paddingLeft = this.elem.getBoundingClientRect().left
    let sliderWidth = this.elem.offsetWidth
    let relative_coordinate = Math.round((coordinate-paddingLeft)/sliderWidth*(this.categoties-1))

    this.spans_array.forEach(item=>{item.classList.remove(`slider__step-active`)})
    let number = relative_coordinate
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let leftPercents = number*this.step_Percent;
    this.elem.querySelector(`.slider__value`).innerHTML = number

    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;
    
    e.target.classList.add(`slider__step-active`)
    
    this.elem.dispatchEvent(new CustomEvent(`slider-change`,{
      detail: number,
      bubbles:true
    }))

  })


  }

}



  