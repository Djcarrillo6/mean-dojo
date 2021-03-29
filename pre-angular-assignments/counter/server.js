const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = 8000;
const session = require('express-session');

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
	secret: 'password',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));
app.use(function (req, res, next) {
	res.locals.views = req.session.views;
	next();
});


app.get('/', (req, res) => {
	req.session.views += 1;
	console.log("Views: ", req.session.views);
	res.render('index', { title: 'my root route' });
});

app.post('/addTwo', (req, res) => {
	req.session.views += 1;
	res.redirect('/')
});

app.post('/delete', (req, res) => {
	req.session.destroy();
	res.redirect('/');
});


app.listen(PORT, () => console.log(`listening on port: ${PORT}`));