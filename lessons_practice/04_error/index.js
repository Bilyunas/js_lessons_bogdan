// Создаем функцию которая вызовит ошибку:
// const fnWithError = () => {
// 	throw new Error('Some error')
// }
// Вызываем ошибку:
// fnWithError()
// Вызываем вывод "Продолжение..." в консоль
// console.log('Continue...')
// После вызова функции ошибки, код программы - останавливается, "Продолжение..." - не выполнится

// Создаем ту же функцию
const fnWithError = () => {
	throw new Error('Some error')
}
// Заключаем нашу функцию ошибки в tray and catch
try {
	fnWithError()
} catch (error) {
	console.error(error)
	console.log(error.message)
}
// Когда в блоке try функция выдает ошибку, выполняется блок catch, который выдаст текст ошибки
// При этом выполнения кода программы не прекращается
console.log('Continue...') // Выполняется в консоле: "Continue..."
