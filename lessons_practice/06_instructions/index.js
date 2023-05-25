let val = 10
if (val > 5) {
	val += 20
}
console.log(val)

// IF
const person = {
	age: 20,
}
if (!person.name) {
	console.log('Name is not defined')
}

// IF ELSE
if (!person.age) {
	console.log('Age is not defined')
} else {
	console.log('Age is: ', person.age)
}

// IF ELSE IF
const age = 25
if (age > 18) {
	console.log('Is adult')
} else if (age >= 12) {
	console.log('Is teenager')
} else {
	console.log('Is child')
}

if (age >= 18) {
	console.log('Is adult')
}
if (age >= 12 && age < 0) {
	console.log('Is teenager')
}
if (age < 12) {
	console.log('Is child')
}

// Использование условной инструкции в функции:
const sumPositiveNum = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number') {
		return 'One of the arguments is not a number'
	}
	if (a <= 0 || b <= 0) {
		return 'Numbers are not positive'
	}
	return a + b
}
sumPositiveNum(3, 'bob') // One of the arguments is not a number
sumPositiveNum(3, -5) // Numbers are not positive
sumPositiveNum(3, 5) // 8

const month = a => {
	switch (a) {
		case 12:
			console.log('December')
			break
		case 1:
			console.log('Januar')
			break
		case 2:
			console.log('Febury')
			break
		default:
			console.log('This is not a month')
	}
}
month(12) // December
