// Первый способ создания функции
let a = 5
let b = 3
function sum(a, b) {
	const c = a + b
	console.log(c)
}
// sum(a, b) // 8
a = 8
b = 12
// sum(a, b) // 20

function myFn(a, b) {
	let c
	a = a + 1
	c = a + b
	return c
}
myFn(10, 3) // 14

// Колбэк функция
function printMyName() {
	console.log('Kostya')
}
setTimeout(printMyName, 3000) // выполнение функции printMyName() через 3 секунды
