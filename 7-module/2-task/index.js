import createElement from '../../assets/lib/create-element.js';

export default class Modal {



  constructor() {
    this.render()
    this.addEventListener()
    this.check()

  }



  render () {
    this.elem = createElement(`<div class="modal">
  
       <div class="modal__overlay"></div>
  
       <div class="modal__inner">
         <div class="modal__header">

           <button type="button" class="modal__close">
             <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
           </button>
  
           <h3 class="modal__title">

           </h3>
         </div>
  
         <div class="modal__body">
     
         </div>
       </div>
  
     </div>`)
    
  }

  open (){
   document.body.append(this.elem)
   document.body.classList.add(`is-modal-open`)
  }

  setTitle (modal__title) {
    this.elem.querySelector(`.modal__title`).innerHTML = modal__title
  } 

  setBody(node) {
    let modal__body = this.elem.querySelector(`.modal__body`)
    while (modal__body.firstChild) {
      modal__body.firstChild.remove()
    }
    modal__body.append(node)


  }

  close () {
  this.elem.remove()
  document.body.classList.remove(`is-modal-open`)
  }

  addEventListener () {

    this.elem.querySelector(`.modal__close`).addEventListener(`click`,()=>{
      this.elem.remove()
      document.body.classList.remove(`is-modal-open`)
    })


   let close = (event) => {
    if (event.code ===`Escape`) {
      this.elem.remove()
      document.body.classList.remove(`is-modal-open`)
      }
   }

      document.body.addEventListener(`keydown`,close)

  }

  check () {
    if (document.body.className==``) {
      document.body.removeEventListener(`keydown`,close)
    } 
  }
  
}




