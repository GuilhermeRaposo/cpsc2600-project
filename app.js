const express = require('express');
const app = express();

const connection = require('./db/connection.js');

const router = require('./routes/index.js')

// Static middleware
app.use(express.static('public'));

app.use(express.json());

// Routes
app.use('/api', router); 

// error handler
app.use((error,req,res,next)=>{
    res.send(error);
})

connection.once('open', ()=>{
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected and listening");
    });
});