const express = require('express');
const app = express();
const PORT = 8000;


app.use(express.static(__dirname + '/public/dist/public'));
app.use(express.json({ extended: true }));


app.get('/', (req, res) => {
  console.log('Angular application served.');
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));