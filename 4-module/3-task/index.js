function highlight(table) {
  for (let i=0;i<table.rows.length;i++) {
    for (let j=0;j<table.rows[i].children.length;j++) {
        if (j==3 && i>0) {
            if (table.rows[i].children[j].hasAttribute(`data-available`)) {
                table.rows[i].children[j].getAttribute(`data-available`) == 
                `true` ? table.rows[i].classList.add(`available`) :
                table.rows[i].classList.add(`unavailable`)
            } else 
            table.rows[i].setAttribute(`hidden`,``)
        }
        if (j==2 && i>0) {
           table.rows[i].children[j].innerHTML == `m`? 
           table.rows[i].classList.add(`male`) :
           table.rows[i].classList.add(`female`)
        }
        if (j==1 && i>0) {
           table.rows[i].children[j].innerHTML < 18 ? 
           table.rows[i].style=`text-decoration: line-through`:
           table.rows[i]
        }
        
    }
}
}
