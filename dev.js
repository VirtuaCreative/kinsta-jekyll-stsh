const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('_site'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/_site/index.html');
});

app.listen(8080, () => {
	console.log('Jekyll Static Site listening on port http://localhost:8080');
});
