const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

//parse incoming string or array data 
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data 
app.use(express.json());
// middleware to connect static files css and js to index.html
app.use(express.static('public'))
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

