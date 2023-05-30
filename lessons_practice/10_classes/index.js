class Comment {
	constructor(text) {
		this.text = text
		this.voteQty = 0
	}
	upvote() {
		this.voteQty += 1
	}
	// создадим новый метод используя static
	static mergeComments(first, second) {
		return `${first} ${second}`
	}
}

// Создаем новый коментарий используя класс 'Comment'
const firstComment = new Comment('First comment')

firstComment instanceof Comment // true
firstComment instanceof Object // true

// Вызов методов:
firstComment.upvote()
firstComment.voteQty // 1
firstComment.upvote()
firstComment.voteQty // 2

// Проверки принадлежности свойств экземпляров объекта
firstComment.hasOwnProperty('text') // true
firstComment.hasOwnProperty('voteQty') // true
firstComment.hasOwnProperty('upvote') // false
firstComment.hasOwnProperty('hasOwnProperty') // false

// метод static
const res = Comment.mergeComments('First text.', 'Second text.')
res // First text. Second text.
// static создает метод
// который доступен как свойство класса Comment
// и не наследуется экземплярами класса

// Расширение других классов
class NumbArray extends Array {
	sum() {
		return this.reduce((el, acc) => (acc += el), 0)
	}
}
const myArray = new NumbArray(2, 5, 7, 3)

console.log(myArray)
const res2 = myArray.sum()
console.log(res2)
