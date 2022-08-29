function toggleText() {
  let button = document.querySelector(`.toggle-text-button`)
  let text = document.getElementById(`text`)
  button.addEventListener(`click`,(e)=>{
    text.hasAttribute(`hidden`) ? text.removeAttribute(`hidden`) :
    text.setAttribute(`hidden`,`1`)
  })
}
