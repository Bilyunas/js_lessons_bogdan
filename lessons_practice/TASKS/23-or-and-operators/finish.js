/** ЗАДАЧА 23 - ИЛИ и И операторы
 *
 * Что будет выведено в консоль?
 */

console.log(3 || (true && null) || false)
// (true && null) = null
// (3 || null || false) ferst 'true' = 3
// console.log(3 || (true && null) || false) = 3

// console.log(false || (true && null) || false || true || 99) // true
