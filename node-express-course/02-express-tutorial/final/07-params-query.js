const express = require('express');
const app = express();
const { products } = require('./data');


app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image }
  })
  res.json(newProducts);
})


//route parameter

app.get('/api/products/:productId', (req, res) => {
  // console.log(req);
  // console.log(req.params)
  const { productId } = req.params
  const singleProducts = products.find((product) => product.id === Number(productId))

  if (!singleProducts) {
    return res.status(404).send(("Product not found...!"))
  }
  res.json(singleProducts);
})

app.get('/api/products/:productId/name/:productName', (req, res) => {
  console.log(req.params);
  res.send("Hello World")
})

//query Parameter..
app.get('/api/vi/query', (req, res) => {
  console.log(req.query)

  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] })
  }

  res.json(sortedProducts)

})


app.get('/apps/query', (req, res) => {
  console.log(req.query)

  const { limit } = req.query
  let newPro = [...products]
  newPro = newPro.slice(0, Number(limit));

  if (newPro.length < 1) {
    return res.status(404).send("Data Not found")
  }
  res.json(newPro);
})


app.listen(5000, () => {
  console.log("Starting the server.....")
})