class Comment {
	constructor(text) {
		this.text = text
		this.voteQty = 0
	}
	upvote() {
		this.voteQty += 1
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
