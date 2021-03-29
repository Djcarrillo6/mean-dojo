const express = require('express');
const app = express();
const PORT = 8000;


const ejs = require('ejs');
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.post('/result', (req,res) => {
    console.log(req.body);
    user = {
        'name': req.body.name,
        'location': req.body.location,
        'language': req.body.language,
        'comment': req.body.comment
    }
    console.log('user.name is:', user.name);
    res.render('result',user)
});


app.listen(PORT, () => console.log(`listening on port: ${PORT}`));