const express = require('express')
const app = express()
const { products } = require('../data.js')

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

// Using single route for single product
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((products) => products.id === 1)
//     res.json(singleProduct);
// })

// Using route params
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);

    const { productID } = req.params;
    const singleProduct = products.find((products) => products.id === Number(productID));

    // in case of single product does not exist
    if (!singleProduct) {
        return res.status(404).json('PRODUCT NOT FOUND!')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('Hello There')
})

// Using query string
app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    let sortedProducts = products;
    if (search) {
        sortedProducts = products.filter((products) => {
            return products.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
    if (sortedProducts.length < 1) {
        res.status(200).json({ success: 'true', data: [] });
    }
    res.json(sortedProducts);
})

app.listen(5000, (req, res) => {
    console.log(`Server is listening on port 5000`);
})