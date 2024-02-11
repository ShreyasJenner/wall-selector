const express = require('express');
const cors = require('cors');

const api = require('./apis/Api');

const app = express();
app.use(cors);

const port = 8080;

app.use(express.json())

app.listen(port, () => { 
    console.log(`Server started at post ${port}`) 
});

app.use('/api', api);