function showSalary(users, age) {
  let arr=  []
    for (let elem of users) {
      elem.age <= age ? arr.push(elem.name+`,`,` `,elem.balance,`\n`):false
    }
    arr.splice(arr.length-1,1)
    return arr.join(``)
}
