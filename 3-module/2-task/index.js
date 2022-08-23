function filterRange(arr, a, b) {
      let arr2 = []
    if (a>b) {
        arr.map (item=>{
            item <= a && item >= b ? arr2.push(item):item
           })
    } else {
        arr.map (item=>{
            item >= a && item <= b ? arr2.push(item):item
           })
    }
return arr2 
}
