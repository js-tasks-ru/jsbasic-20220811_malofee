function camelize(str) {
  let str1 = Array.from(str)
    for (let i= 0; i<str1.length;i++) {
        if (str1[i] == `-` ) {
            str1[i+1] != undefined ? str1.splice(i+1,1,str1[i+1].toUpperCase()) : str1[i+1]
            str1.splice(i,1)
        }
    }
  return str1.join('')
}
