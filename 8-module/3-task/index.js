export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;

  }


  addProduct(product) {
    

 if (product!=undefined && product!=null){
  let cartItem = {}

  let find_index = this.cartItems.findIndex((item) => {
    return item.product.id == product.id
  });
  
  if (find_index == -1) {
    cartItem= {product,count:1}
    this.cartItems.push (cartItem)
  } else {
    this.cartItems[find_index].count++
    cartItem = this.cartItems[find_index]
  }
  this.onProductUpdate(cartItem)
 }

  }

  updateProductCount(productId, amount) {
    let cartItem={}

    let find_index = this.cartItems.findIndex(item=>{
    return item.product.id == productId
   })
    
   if (find_index!=-1) {
    amount ==1 ? this.cartItems[find_index].count++:
    this.cartItems[find_index].count--
    this.cartItems[find_index].count == 0? 
    this.cartItems.splice(find_index,1) : cartItem = this.cartItems[find_index]
   }

   this.onProductUpdate(cartItem)
  //  console.log (this.cartItems)

  }

  isEmpty() {
  return this.cartItems.length == 0 
   
  }

  getTotalCount() {
    let count = null
    this.cartItems.forEach(item => count+=item.count)
    return count 
   
   
  }

  getTotalPrice() {
     let price = null
     this.cartItems.forEach(item => {
     item.count == 1 ? price+=item.product.price:
     price+=item.count*item.product.price
     })
     return price
    
    
  }

  onProductUpdate(cartItem) {
  this.cartIcon.update(this)
  }

}
