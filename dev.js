const express = require('express');
const app = express();

app.use(express.static('_site'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/_site/index.html');
});

app.listen(8080, () => {
	console.log('Your Jekyll website is available at http://localhost:8080');
});
