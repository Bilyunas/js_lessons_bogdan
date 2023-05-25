// Формат записи массива:
const myArray = [1, 2, 3]
// console.log(myArray) // [ 1, 2, 3 ]

const myArray2 = new Array(1, 2, 3)
// console.log(myArray2) // [ 1, 2, 3 ]

const newArray = [1, true, 'Kostya', 35]
newArray.length // 4
newArray[3] // 35
const newArray2 = [1, true, 'Kostya', 35]
newArray === newArray2 // false
const newArray3 = newArray
newArray3 === newArray // true
newArray[2] = 'Konstantin' // 'Kostya' поменяется на 'Konstantin

// Методы массива
// PUSH - добавление элемента в конец массива
const oneArrey = [1, 3, 'Bob', true]
oneArrey // [1, 3, 'Bob', true]
oneArrey.push('Gray')
oneArrey // [1, 3, 'Bob', true, 'Gray']

// POP - удаление последнего элемента в массиве
oneArrey.pop()
oneArrey // [1, 3, 'Bob', true]
// Удаленное значение мы можем присвоить к переменной
const reEl = oneArrey.pop()

reEl // true
oneArrey // [ 1, 3, 'Bob' ]

// UNSHIFT - добавляет элемент в начало массива
oneArrey.unshift(true)
oneArrey // [ true, 1, 3, 'Bob' ]

// FOREACH
oneArrey.forEach(el => console.log(el))

// MAP
const twoArray = oneArrey.map((el, ind) => `item ${ind + 1}: ${el}`)
twoArray // [ 'item 1: true', 'item 2: 1', 'item 3: 3', 'item 4: Bob' ]

// FILTER
const arr = [4, -5, 1, 7, -3, 2, -2, 1]
const res = arr.filter(el => el > 0)
res // [ 4, 1, 7, 2, 1 ]
