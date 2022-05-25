// console.log("hello mir")

// let x = [2+3, 4+3] 
// console.log(x) // [5, 7]

let y = [[1+3,3], [2+4]]
console.log(y) // [[4, 3], [6]]
console.log(y[0]) // [4,3]
console.log(y[0][1]) // 3

let x = [1,2,,,,6] 
console.log(x[2]) //undefined
console.log(x[5]) //6

let p = {x : 1.2, y : 3 }
let q = {}
q.x = 1.2
q.y = 3
console.log(q === p) //false
q = p
console.log(q === p) // true