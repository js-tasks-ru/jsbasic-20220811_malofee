function factorial(n) {
  let count=n
let result=1
  for (let i =0;i<count;i++) {
    result*=(n-i)
  }
  return result
}
