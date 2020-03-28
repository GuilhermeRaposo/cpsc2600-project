const express = require('express');
const app = express();

const connection = require('./db/connection.js');

const Location = require('./models/location');

// Static middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.js')
});

app.post('/location', (req,res) => {
    let location = new Location(req.body)

    location.save()
    .then(() => res.send(location))
    .catch((error) => res.status(500).send(error));
});

app.get('/locations', (req,res) => {
    Location.find()
    .exec((error, results) => {
        if (error) {
            res.send(error);
        }
        else {
            if (results.length == 0) {
                res.send('No locations found')
            }
            else {
                res.status(201).send(results)
            }   
        }
    });
});

connection.once('open', ()=>{
    const server = app.listen(process.env.PORT || 8080, ()=>{
    console.log("Connected and listening");
    });
});