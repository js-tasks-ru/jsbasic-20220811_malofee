function makeFriendsList(friends) {
let ul = document.createElement(`ul`)
for (let el of friends ) {
        let li = document.createElement(`li`)
        li.innerHTML = el.firstName + ` ` + el.lastName
        ul.append(li)
}
return ul
 
}
