const messages = require('../controllers/messages.controller.js')
const comments = require('../controllers/comments.controller.js')

module.exports = function (app) {
	app.get('/', (req, res) => {
		messages.index(req, res)
	});

	app.post('/messages', (req, res) => {
		messages.create(req, res)
	});

	app.post('/comments/:id', (req, res) => {
		comments.create(req, res)
	})
}