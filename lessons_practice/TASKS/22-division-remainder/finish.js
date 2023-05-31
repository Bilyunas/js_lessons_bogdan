/** ЗАДАЧА 22 - Остаток от деления
 *
 * 1. Выведите в консоль остаток от деления "myNumber1" на "myNumber2".
 *
 * 2. Какой приоритет и ассоциативность
 * имеет оператор остаток от деления?
 *
 * 3. Проверьте ассоциативность самостоятельно
 */

const myNumber1 = 320 // 10 = 3 + 3 + 3 + 1
const myNumber2 = 3

console.log(
	`Num ${myNumber1} divide on num ${myNumber2} result = ${Math.round(
		myNumber1 / myNumber2
	)}. Remainder of the division = ${myNumber1 % myNumber2}`
)
