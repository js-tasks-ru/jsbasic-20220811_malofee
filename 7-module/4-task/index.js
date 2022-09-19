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


  thumb.addEventListener(`pointerdown`,(e)=>{
 
  let onMouseMove = e => {

    this.elem.classList.add(`slider_dragging`)

    let sliderWidth = this.elem.offsetWidth
    thumb.style.left = Math.round(e.pageX -this.elem.getBoundingClientRect().left) + `px`
    let coordinate = e.pageX 
    let paddingLeft = this.elem.getBoundingClientRect().left
    let realPercents = ((coordinate-paddingLeft)/sliderWidth)*100
    if (coordinate <= paddingLeft){
      thumb.style.left = 0 +`px`
      coordinate = paddingLeft
    }   else if (coordinate-paddingLeft>=sliderWidth) {
      thumb.style.left = sliderWidth +`px`
      coordinate = sliderWidth + paddingLeft
      realPercents = 100
    }

     this.number = Math.round((coordinate-paddingLeft)/sliderWidth*(this.categoties-1))
     this.spans_array.forEach(item=>{item.classList.remove(`slider__step-active`)})
     this.leftPercents = this.number*this.step_Percent;
     this.elem.querySelector(`.slider__value`).innerHTML = this.number
     progress.style.width = `${realPercents}%`;
  }

  document.addEventListener(`pointermove`,onMouseMove) 

  document.addEventListener(`pointerup`,()=>{
    document.removeEventListener(`pointermove`,onMouseMove) 
    this.elem.classList.remove(`slider_dragging`)
    thumb.style.left = `${this.leftPercents}%`;
    progress.style.width = `${this.leftPercents}%`;
    this.spans_array[this.number].classList.add(`slider__step-active`)

    this.elem.dispatchEvent(new CustomEvent(`slider-change`,{
         detail: this.number,
         bubbles:true
       }))
    
  }, { once: true })

  })

  }
}
