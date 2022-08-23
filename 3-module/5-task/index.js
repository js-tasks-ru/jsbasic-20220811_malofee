function getMinMax(str) {
  let numbs =[0,1,2,3,4,5,6,7,8,9,`.`,`-`]
 let arr = str.split(` `)
let str2 = ``
let obj = {}
for (let elem of arr) {
for (let i=0;i<elem.length;i++){
    for (let j=0;j<numbs.length;j++){
      if (elem[i] == numbs[j]) {
        str2+=elem[i]
        i == elem.length-1 ?  str2+=` `:i
      }        
    }
}
}
let str3 = str2.split(` `)
str3.splice (str3.length-1,1)
str3.sort((min,max)=>{return min-max})
obj.min = +str3[0]
obj.max = +str3[str3.length-1]
return obj
}
