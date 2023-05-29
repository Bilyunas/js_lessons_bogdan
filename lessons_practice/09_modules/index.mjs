// Импорт функции используя экспорт по умолчанию, 'sumNumbers' - название можен не совпадать с экпортным названием
import sumNumbers from './module.mjs'
// Импорт нескольких переменных, имена переменных должны быть такими же как и при экспорте
// При необходимости можно переименовать, переменную 'one' переименовали используя 'as' в 'first'
import { one as first, two } from './module.mjs'

const res = sumNumbers(10, 2)
console.log(res)

console.log(first)
console.log(two)
