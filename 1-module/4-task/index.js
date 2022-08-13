function checkSpam(str) {
  let str1 = `XXX`
let str2 = `1xBet`
return str.toLowerCase().indexOf(str1.toLowerCase()) != -1 || 
str.toLowerCase().indexOf(str2.toLowerCase()) != -1 ? true:false 
}
