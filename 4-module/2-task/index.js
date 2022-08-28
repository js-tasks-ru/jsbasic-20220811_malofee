function makeDiagonalRed(table) {
  console.log (table.rows[1])
  for (let i=0;i<table.rows.length;i++) {
    for (let j=0;j<table.rows[i].children.length;j++) {
      i==j ? table.rows[i].children[j].style= `background-color: red`: false
    }
  }
  
}

