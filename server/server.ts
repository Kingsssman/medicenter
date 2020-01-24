const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Medicenter', { useNewUrlParser: true }, (error: any) => {
    if (!error) {
        console.log('Success');
    }
    else
    {
        console.log('Error connection to db');
    }
});


const app = express();

app.get('/', (req:any,res:any) => {
    res.send('Home Page');
});

app.listen(5000, () => console.log('Server is running'));