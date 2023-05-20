const express = require('express');
const app = express();
const logger = require('../logger.js')

app.use('/api', logger); // here, /api is the path for which middleware will be invoked.
// req -> middleware -> res
app.get('/', (req, res) => {
    res.send('Home page');
})

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/api/products', (req, res) => {
    res.send('Products');
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})

app.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
})