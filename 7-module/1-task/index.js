import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {

  ribbon = createElement(`<div class="ribbon">
  </div>`)
  button_left = createElement(`<button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
</button>`)
   inner = createElement(`<nav class="ribbon__inner">
   </nav>`)
   button_right= createElement(`<button class="ribbon__arrow ribbon__arrow_right">
   <img src="/assets/images/icons/angle-icon.svg" alt="icon">
 </button>`)
   elem = this.ribbon


  constructor(categories) {
    this.categories = categories
    this.render()
    this.addEventListener()
  }


  render () {
    this.ribbon.append(this.button_left,this.inner,this.button_right)
    this.categories.map((item,index)=>{
      let a = createElement(`<a href="#" class="ribbon__item" data-id=""></a>`)
      a.dataset.id = item.id
      a.innerHTML = item.name
      index == 0 ? a.className = `ribbon__item ribbon__item_active`:false
      this.inner.append(a)
    })
    this.tittles = Array.from(this.inner.children)  
    this.button_left.classList.remove(`ribbon__arrow_visible`)
    this.button_right.classList.add(`ribbon__arrow_visible`)
  }

  addEventListener () {
    this.inner.addEventListener(`scroll`,()=>{
      let scrollWidth= this.inner.scrollWidth
      let scrollLeft = this.inner.scrollLeft
      let clientWidth = this.inner.clientWidth
      let scrollRight = scrollWidth - scrollLeft - clientWidth
      scrollLeft != 0 ? this.button_left.classList.add(`ribbon__arrow_visible`) :
      scrollLeft == 0 ? this.button_left.classList.remove(`ribbon__arrow_visible`) 
      && this.button_right.classList.add(`ribbon__arrow_visible`) : false

      scrollRight < 1 ? this.button_right.classList.remove(`ribbon__arrow_visible`):false
    })
    

    this.ribbon.addEventListener(`click`,(e)=>{
    e.target.closest(`.ribbon__arrow_left`) ? this.inner.scrollBy(-350,0) : false
    e.target.closest(`.ribbon__arrow_right`) ? this.inner.scrollBy(350,0) : false
    
    if (e.target.closest(`.ribbon__item`)) {
      e.preventDefault()
      this.tittles.forEach(elem => {elem.classList.remove(`ribbon__item_active`)})
      e.target.classList.add(`ribbon__item_active`)
      this.ribbon.dispatchEvent(new CustomEvent(`ribbon-select`,{
        detail: e.target.dataset.id,
        bubbles: true
      }))
    }

    })

  }






  
}


