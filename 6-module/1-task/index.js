/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  nav = [`Имя`,`Возраст`,`Зарплата`,`Город`]
  table = document.createElement(`table`)
  thead= document.createElement(`thead`)
  tbody = document.createElement (`tbody`)
  elem = this.table
  
  constructor(rows) {
    for (let i = 0;i<=this.nav.length;i++) {
      if (i==0) {
      let tr =document.createElement(`tr`)
      this.thead.append(tr)
      }
      let th = document.createElement(`th`)
      i!=this.nav.length ? th.innerHTML = this.nav[i] : false
      this.thead.children[0].append(th)
      i==this.nav.length ? this.table.append (this.thead) : false
    }
    for (let i = 0;i<rows.length;i++) {
        let tr =document.createElement(`tr`)
        this.tbody.append(tr)
        outer:for (let j=0;j<=Object.keys(rows[i]).length;j++){
          if (j==Object.keys(rows[i]).length) {
            let td =document.createElement(`td`)
            let but = document.createElement(`button`)
            but.innerHTML = `X`
            td.append(but)
            this.tbody.children[i].append(td)
            this.table.append(this.tbody)
            break outer
          }
          let td =document.createElement(`td`)
          td.innerHTML = Object.values(rows[i])[j]
          this.tbody.children[i].append(td)
        }
    }  

    this.table.addEventListener(`click`,(e)=>{
      e.target.tagName==`BUTTON` ? e.target.parentNode.parentNode.remove():
      false
    })
 
    }
}
