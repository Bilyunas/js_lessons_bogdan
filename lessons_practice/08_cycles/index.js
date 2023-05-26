// for
for (let i = 1; i <= 5; i++) {
	// console.log(i)
}
// так же цикл for можно испольщовать в массиве, но это не рекомундуется
const myArray = ['first', 'second', 'third']
for (let i = 0; i < myArray.length; i++) {
	// console.log(myArray[i])
}
// в случае перебора массива, лучше использовать foreach
// myArray.forEach(el => console.log(el))

// while
let e = 0
while (e < 5) {
	// console.log(e) // 0, 1, 2, 3, 4 (console.log - вызовится 5 раз)
	e++
}

// do while
e = 0
do {
	// console.log(e) // 0, 1, 2, 3, 4 (console.log - вызовится 5 раз)
	e++
} while (e < 5)

// for in
let obj = { a: 1, b: 2, c: 3 }
for (key in obj) {
	// console.log(key) // выводит ключи объекта: a, b, c
}
for (let key in obj) {
	// console.log(obj[key]) // выводит элементы объекта: 1, 2, 3
}

// keys & values
const myObj = { name: 'Kostya', age: 33 }
resOne = Object.keys(myObj)
resOne // [ 'name', 'age' ]
resTwo = Object.values(myObj)
resTwo // [ 'Kostya', 33 ]

// for of
const myName = 'Konstantin'
for (el of myName) {
	// console.log(el) // консоль выдаст (на каждой строке по букве) все буквы переменной name: "Konstantin"
}
