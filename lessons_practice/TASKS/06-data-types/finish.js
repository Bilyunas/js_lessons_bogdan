/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const text = 'Hello'
const num = 33
const workNow = true
const age = null
let status
const userInfo = {
	name: 'Konstantin',
	secondName: 'Bob',
	age: 33,
}
const justNum = [2, 3, -4, 5, 7]

console.log('Строка: ', typeof text)
console.log('Число: ', typeof num)
console.log('Логическое: ', typeof workNow)
console.log('null: ', typeof age)
console.log('undefined: ', typeof status)
console.log('Объект: ', typeof userInfo)
console.log('Массив: ', typeof justNum)
