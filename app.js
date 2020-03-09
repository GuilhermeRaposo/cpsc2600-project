const express = require('express');
const app = express();

// Static middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.js')
});

app.listen(8080, () => console.log('Listening on 8080'));