function initCarousel() {
let b_r =document.querySelector(`.carousel__arrow_right`)
let b_l =document.querySelector(`.carousel__arrow_left`)
let c_in = document.querySelector(`.carousel__inner`)
let w = c_in.offsetWidth
let slides = document.querySelector(`.carousel__inner`).children.length
let count = null
b_l.style.display = 'none'
b_r.addEventListener(`click`,()=>{

  if (count>-(slides-1)*w) {
    count-=w
    c_in.style.transform = `translateX(${count}px)`
    console.log (count)
    count == - (slides-1)*w ? b_r.style.display = 'none' : 
    count == - (slides-3)*w ? b_l.style.display = '' : false
  }
})

b_l.addEventListener(`click`,()=>{
  if ((count>=-(slides-1)*w) && (count<0)) {
    count+=w
    console.log (count)
    c_in.style.transform = `translateX(${count}px)`
    count == - (slides-2)*w ? b_r.style.display = '' : 
    count == 0 ? b_l.style.display = 'none' : false
  }
})
}
