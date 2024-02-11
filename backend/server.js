
const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname, '../.env') });

const basicRoutes = require('./routes/Api');

const app = express();
app.use(cors());

const port = 8080;

app.listen(port, () => { 
    console.log(`Server started at post ${port}`) 
});

app.use('/api', basicRoutes);
app.use('/images', express.static(path.join(__dirname,'../assets/albums/')));

app.get('/', function(req, res) {
    res.send('Root route');
});
