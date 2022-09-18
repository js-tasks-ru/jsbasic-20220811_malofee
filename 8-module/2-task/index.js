import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';


export default class ProductGrid {

  constructor(products) {
    this.products = products;
    this.render();
    this.filters = {};
  }


  render () {
    this.cards_array = []

    this.elem = createElement(`<div class="products-grid">
    <div class="products-grid__inner">
      <!--ВОТ ТУТ БУДУТ КАРТОЧКИ ТОВАРОВ-->
    </div>
  </div>`)

  this.products.forEach(item => {
     let products_card = new ProductCard(item)
     this.elem.querySelector(`.products-grid__inner`).append(products_card.elem)
     this.cards_array.push(products_card)
  });


  this.arr_Nuts = []
  this.none_Vegetarian =[]
  this.spiciness = []
  this.category = []
  }




  updateFilter(filters) {
   let inner_array_lenght = Array.from(this.elem.querySelector(`.products-grid__inner`).children).length
   Object.assign(this.filters,filters)
   let keys_filters= Object.keys(this.filters)
   let inner_grid =this.elem.querySelector(`.products-grid__inner`)

   console.log (this.filters)

   for (let elem_filters of keys_filters) {

    if (elem_filters === `noNuts`)  {

      if (this.filters.noNuts == true) {
        
       this.cards_array.forEach((elem)=>{
         let obj = elem.product
         let keys_obj= Object.keys(obj)
         if (keys_obj.indexOf(`nuts`)!=-1) {
          
          obj.nuts==true ?  this.arr_Nuts.push(elem) && elem.elem.remove() :false

         }
       })
       delete_Elem(this.cards_array,this.arr_Nuts)

      } else {
        this.arr_Nuts.forEach(item=>{
          inner_grid.append(item.elem)
        })
        push_Elem(this.cards_array,this.arr_Nuts)
        this.arr_Nuts=[]
      }
      console.log (this.cards_array)
      

  }  else if (elem_filters === `vegeterianOnly`)  {

    if (this.filters.vegeterianOnly == true) {
        
      this.cards_array.forEach((elem)=>{
        let obj = elem.product
        let keys_obj= Object.keys(obj)
        if (keys_obj.indexOf("vegeterian")==-1) {
         this.none_Vegetarian.push(elem)
         elem.elem.remove()
        } else {
          obj.vegetarian==false ? this.none_Vegetarian.push(elem) : false
        }
      })

      delete_Elem(this.cards_array,this.none_Vegetarian)

     } else {
         this.none_Vegetarian.forEach(item=>{
         inner_grid.append(item.elem)
       })
       push_Elem(this.cards_array,this.none_Vegetarian)
       this.none_Vegetarian=[]
     }
     console.log (this.cards_array)

    }else if (elem_filters === `maxSpiciness`)  {

      if (this.filters.maxSpiciness != 4) {
        
          this.cards_array.forEach((elem)=>{
          let obj = elem.product
          obj.spiciness >= this.filters.maxSpiciness ? 
          this.spiciness.push(elem) && elem.elem.remove() : false
          
        })
  
        delete_Elem(this.cards_array,this.spiciness)
  
       } else {
        this.spiciness.forEach(item=>{
           inner_grid.append(item.elem)
         })
         push_Elem(this.cards_array,this.spiciness)
         this.spiciness=[]
       }
       console.log (this.cards_array)

    }else if (elem_filters === `category`)  {

      if (this.filters.category != '') {
        
          this.cards_array.forEach((elem)=>{
          let obj = elem.product
          obj.category != this.filters.category ? 
          this.category.push(elem) && elem.elem.remove() : false
        })
  
        delete_Elem(this.cards_array,this.category )
  
       } else {
           this.category.forEach(item=>{
           inner_grid.append(item.elem)
         })
         push_Elem(this.cards_array,this.category)
         this.category=[]
       }

    } 
    console.log (inner_array_lenght)
   }

  }

}


function delete_Elem (arr1,arr2) {
  arr2.forEach((item)=>{
    arr1.indexOf(item) !=-1 ? arr1.splice(arr1.indexOf(item),1) :false     //ВОЗВРАЩАЕТ -1, если не нашёл        
  })
}


function push_Elem (arr1,arr2) {
  arr2.forEach((item)=>{
    arr1.push(item)            
  })
}

