// fetch('https://jsonplaceholder.typicode.com/todos/')
// 	.then(response => {
// 		console.log(response)
// 		return response.json()
// 	})
// 	.then(json => console.log(json))
// 	.catch(error => console.log(error))

//
const getData3 = url =>
	new Promise((resolve, reject) =>
		fetch(url)
			.then(response => response.json())
			.then(json => resolve(json))
			.catch(error => reject(error))
	)

getData3('https://jsonplaceholder.typicode.com/todos')
	.then(data => console.log(data))
	.catch(error => console.log(error.message))

//
const asyncFn2 = async () => {
	throw new Error('There was an error!')
}
asyncFn2()
	.then(value => console.log(value))
	.catch(error => console.log(error.message))

console.log('next')

//
const timerPromise = () =>
	new Promise((resolve, reject) => setTimeout(() => resolve(), 3000))

const asyncFn = async () => {
	console.log('Timer starts')
	const startTime = performance.now()
	await timerPromise()
	const endTime = performance.now()
	console.log('Timer end', endTime - startTime)
}

asyncFn()

// Переход с промисов на async/await
const getData = async url => {
	const res = await fetch(url)
	const json = await res.json()
	return json
}

const url = 'https://jsonplaceholder.typicode.com/todos'
try {
	const data = await getData(url)
} catch (error) {
	console.log(error.message)
}
