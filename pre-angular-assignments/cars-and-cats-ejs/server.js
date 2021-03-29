const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 8000;

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/cats', (req, res) => {
	res.render('cats');
});

app.get('/cuddles', (req, res) => {
	context = {
		'name': 'Cuddles',
		'age': 8,
		'food': 'Spaghetti & Meatballs',
		'pic': 'images/cuddles.jpeg',
		'spots': ['The porch', 'In a sunbeam']
	};
	res.render('details', context);
});

app.get('/carie', (req, res) => {
	context = {
		name: "Carie",
		favFood: "Hamburgers",
		age: "7",
		pic: "images/totoro.jpeg",
		spots: ["Her bed", "Boxes", "Near the trash"]
	};
	res.render('details', context);
});

app.get('/tim', (req, res) => {
	context = {
		name: "Tim",
		favFood: "Pasta",
		age: "15",
		pic: "images/tony.jpeg",
		spots: ["In the blankets", "cat tree", "In the dog's bed"]
	};
	res.render('details', context);
});

app.listen(PORT, function () {
	console.log(`listening on port: ${PORT}`);
})