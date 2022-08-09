const mongoose = require('mongoose');
const app= require('express');
const dbURI = 'mongodb+srv://ananth27:291101@cluster0.ca2lshi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));