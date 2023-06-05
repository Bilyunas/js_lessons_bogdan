/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

// Первый способ
// const areArraysEqual = (firstArray, secondArray) => {
// 	return JSON.stringify(firstArray) === JSON.stringify(secondArray)
// 		? true
// 		: false
// }

// Второй способ
const areArraysEqual = (firstArray, secondArray) => {
	if (
		firstArray.length === secondArray.length &&
		firstArray.every((el, i) => el === secondArray[i])
	) {
		return true
	}

	return false
}

const a = [1, '2', 3]
const b = [1, '2', 3]

console.log(a === b) // false (Почему?) - сравнивается 2 объекта, не затрагивая элементы

const c = [2, 1, 3]
const d = [1, 2, 3, 4]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
