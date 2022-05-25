// console.log("hello mir")

// let x = [2+3, 4+3] 
// console.log(x) // [5, 7]

// let y = [[1+3,3], [2+4]]
// console.log(y) // [[4, 3], [6]]
// console.log(y[0]) // [4,3]
// console.log(y[0][1]) // 3

// let x = [1,2,,,,6] 
// console.log(x[2]) //undefined
// console.log(x[5]) //6

// let p = {x : 1.2, y : 3 }
// let q = {}
// q.x = 1.2
// q.y = 3
// console.log(q === p) //false
// q = p
// console.log(q === p) // true

// let x = {
//     a : {x : 1, y : 3},
//     b : {x : 2, y : 5}
// }

// console.log(x) // {a : {x : 1, y : 3}, b : {x : 2, y : 5}}
// console.log(x.a) // a : {x : 1, y : 3}
// console.log(x.a.x) // 1

// let a = [1, 2, [4, 5]]
// console.log(a[0])

// function squer(x, log){
//     log?.(x)
//     return console.log(log)
// }

// squer(2,4)

// let x = 2 + 4 * 3 
// console.log(x) // 14

// x = 3 * (2 + 2)
// console.log(x) //12
// let a = 3
// a**=2 // 9 
// console.log(a) // 9

let b = 1 + 3 + ' Helo'
console.log(b) // 4 Hello
b = 1 + (3 + ' Hello') 
console.log(b) // 13 Hello

let i = 1
t = i++ // t = 1; i = 2
console.log(t) 
j = ++i // j = 3; i = 3

console.log(j) // j = 3, i = 3  
console.log('13' != 13)  //false
console.log('13' !== 13) // true
let a = [2,3,4]
let c = [2,3,4]
console.log(a === c) // false

let f = [2,3,4]
let d = f
console.log( f === d) // true