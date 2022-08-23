function sumSalary(salaries) {
      let v = Object.values(salaries)
    let sum = 0
    for (let i=0;i<=v.length;i++) {
        isFinite(v[i])!= false ? sum+=v[i] : false
    }
    return sum
}
