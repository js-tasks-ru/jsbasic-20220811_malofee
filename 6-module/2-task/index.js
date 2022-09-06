import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  card =  createElement(`
  <div class="card">
  <div class="card__top">
    <img  class="card__image" alt="product">
    <span class="card__price"></span>
  </div>
  <div class="card__body">
    <div class="card__title"></div>
    <button type="button" class="card__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>
</div>
`)
top = this.card.children [0]
body = this.card.children [1]
elem = this.card
product= {}

  constructor(product) {
    this.product = product
    
    for (let elem of this.top.children ) {
       elem.tagName == `IMG`? elem.src =`/assets/images/products/${product.image}`:false
       elem.tagName == `SPAN`? elem.innerHTML =`€${product.price.toFixed(2)}`:false
    }
  
    for (let elem of this.body.children){
      elem.tagName == `DIV` ? elem.innerHTML =`${product.name}`:false
    }

    this.elem.addEventListener(`click`,(e)=>{
      
      if (e.target.parentNode.className == `card__button` || e.target.className==`card__button`) {
        let id =null
        e.target.parentNode.className == `card__button`? id = e.target.parentNode.parentNode.parentNode.dataset.id :
        id =e.target.parentNode.parentNode.dataset.id
        this.elem.dispatchEvent(new CustomEvent("product-add",{
        detail : this.product.id,
        bubbles: true
       }))
      }

    })

  }
}
