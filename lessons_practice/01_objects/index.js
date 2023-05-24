const myCity = {
	city: 'New York',
}

// Добавляем новые свойства при помощи точки и квадратных скобок
myCity.popular = true
myCity['country'] = 'USA' // Скобочная запись (Bracket notation)

// Второй способ добавления используется в случае если необходимо присвоить переменную в значение
const usaCurrency = 'currency'
myCity[usaCurrency] = 'dollar'
// console.log(myCity) // { city: 'New York', popular: true, country: 'USA', currency: 'dollar' }

// Удаляем свойства из объекта при помощи оператора 'delete'
delete myCity.popular

// Так же можно добавить вложенное свойство
myCity.info = { timezone: '+12', timeformat: 'Am/Pm' }
// console.log(myCity.info.timeformat) // Am/Pm

// console.log(myCity)
// {
// 	city: 'New York',
// 	country: 'USA',
// 	currency: 'dollar',
// 	info: { timezone: '+12', timeformat: 'Am/Pm' }
//   }

// Так же можно собрать объект уже из созданных переменных
const userName = 'Kostya'
const postsQty = 13

const userProfile = {
	userName: userName,
	postsQty: postsQty,
	online: false,
}
// console.log(userProfile) // { userName: 'Kostya', postsQty: 13, online: false }

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
// console.log(newUserProfile)
// {
// 	userName: 'Kostya',
// 	postsQty: 13,
// 	online: false,
// 	status: [Function: status],
// 	message: [Function: message]
//   }
// newUserProfile.status() // I"m sleeping...
// newUserProfile.message() // Hello

// Конвертация объекта в JSON формат и обратно
newObject = JSON.stringify(newUserProfile)
// console.log(newObject) // {"userName":"Kostya","postsQty":13,"online":false}
newObjectTwo = JSON.parse(newObject)
// console.log(newObjectTwo) // { userName: 'Kostya', postsQty: 13, online: false }

// Как избежать мутации объекта, первый способ:
const person = {
	name: 'Bob',
	age: 25,
	photo: {
		id: 444,
		itemsName: 'pro3zz44',
	},
}
const person2 = Object.assign({}, person)
person2.age = 26
// console.log(person.age) // 25
// console.log(person2.age) // 26
// Второй вариант:
const person3 = { ...person }
person3.name = 'Kostya'
// console.log(person.name) // Bob
// console.log(person3.name) // Kostya

// Вариант 1 и 2 копирует объект, но если есть вложенные объекты,
// то копируются ссылки
person3.photo.id = 555
// console.log(person.photo.id) // 555
// console.log(person3.photo.id) // 555

// Полная копия объекта:
const personCopy = JSON.parse(JSON.stringify(person))
personCopy.photo.id = 111
// console.log(person.photo.id) // 555
// console.log(personCopy.photo.id) // 111
