const myCity = {
	city: 'New York',
}

// Добавляем новые свойства при помощи точки и квадратных скобок
myCity.popular = true
myCity['country'] = 'USA' // Скобочная запись (Bracket notation)

// Второй способ добавления используется в случае если необходимо присвоить переменную в значение
const usaCurrency = 'currency'
myCity[usaCurrency] = 'dollar'
console.log(myCity)

// Удаляем свойства из объекта при помощи оператора 'delete'
delete myCity.popular

// Так же можно добавить вложенное свойство
myCity.info = { timezone: '+12', timeformat: 'Am/Pm' }
console.log(myCity.info.timeformat)

console.log(myCity)

// Так же можно собрать объект уже из созданных переменных
const userName = 'Kostya'
const postsQty = 13

const userProfile = {
	userName: userName,
	postsQty: postsQty,
	online: false,
}
console.log(userProfile)

// Можно использовать сокращенный формат записи свойств, если имя переменной = имени свойств
const newUserProfile = {
	userName,
	postsQty,
	online: false,
	status: function () {
		console.log('I"m sleeping...')
	},
	// Можно создать функцию без ключевого слова "function"
	message() {
		console.log('Hello')
	},
}
console.log(newUserProfile)
newUserProfile.status()
newUserProfile.message()

// Конвертация объекта в JSON формат и обратно
newObject = JSON.stringify(newUserProfile)
console.log(newObject)
newObjectTwo = JSON.parse(newObject)
console.log(newObjectTwo)
