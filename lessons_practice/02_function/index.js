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
// setTimeout(printMyName, 3000) // выполнение функции printMyName() через 3 секунды

// Стрелочные функции
function multByFactor(value, multiplier = 1) {
	return value * multiplier
}
multByFactor(10, 2) // 20
multByFactor(5) // 5

const fnSum = (value, multiplier = 2) => value * multiplier
fnSum(33, 2) // 66
fnSum(13) // 26

const newPost = (post, addedAt = Date()) => ({
	...post,
	addedAt,
})
const firstPost = {
	id: 1,
	author: 'Konstantin',
}
const newP = newPost(firstPost)
// {
// 	id: 1,
// 	author: 'Konstantin',
// 	addedAt: 'Thu May 25 2023 11:56:50 GMT+0300 (Москва, стандартное время)'
// }
