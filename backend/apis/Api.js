const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({1: "hello"});
})

app.get("/hello", (req, res) => {
    res.json({message: "hello from server"});
})

app.get('/title', (req, res) => {
    res.json(title);
})

module.exports = app;
