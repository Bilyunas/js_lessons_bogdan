// ложные значения
Boolean('') // false
Boolean(0) // false
Boolean(false) // false
Boolean(undefined) // false
Boolean(null) // false

// Оператор typeof:
typeof 10 // number
typeof 'text' // string
typeof 10 === 'number' // true

// Оператор ! - не  и !! - не не
!true // false
!0 // true
!10 // false
!'' // true

// Оператор !! (не не) позволяет нам привести значение переменной или объекта в boolean
let myName = 'Konstantin'
!!myName // true
let myNumber = 0
!!myNumber // false
const a = {}
!!a // true

// Оператор &&  (и)
3 > 1 && 3 > 2 // true
3 > 1 && 3 > 3 // false
3 > 3 && 3 > 2 // false

// Оператор || (или)
'Ferst name' || 'Second name' // Ferst name
'' || 'Second name' // Second name
'' || '' //

// Оператор ... - разделение объекта на свойства
const button = {
	width: 200,
	text: 'Buy',
}
const redButton = {
	...button,
	color: 'red',
}
// console.log(redButton) // { width: 200, text: 'Buy', color: 'red' }

// Соединение строк
'Hello ' + 'world' // Hello world - первый вариант
const hello = 'Hello'
const world = 'world'
const greeting = hello + ' ' + world // Hello world - второй вариант с испольщованием переменных
const greetingUp = `${hello} my ${world}` // Hello my world - вариант с испольщованием шаблонной строки ` `
