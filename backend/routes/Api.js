const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.json({"check": "hello"});
})

app.get("/hello", (req, res) => {
    res.json({message: "hello from server"});
})

app.get('/title', (req, res) => {
    res.json({sed:"title"});
})

app.get('/list', (req, res) => {
    const dir = path.join(__dirname,'../../assets/albums');
    //console.log(dir);
    fs.readdir(dir, (err, files) => {
        if(err) {
            console.log(err);
            res.json({err});
        } else {
            console.log(files);
            res.json({files});
        }
    });

})

module.exports = app;
