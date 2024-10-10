const express = require('express');

const app = express();
const port = 3010;

function addQunatity(cart, productId, quantity){
  for(let i = 0 ; i < cart.length , i++){
    if(cart[i].productId === productId) 
    cart[i].quantity = quantity
  }
  return cart
}

function deletProduct(ele , productId){
  return else.productId !== productId
}

app.get('/cart', (req, res) => {
  res.json({ cart });
});

function calTotalQunatity(cart){
let totalQuantity = 0;
for(let i = 0 ; i < cart.length ; i++ ) 
totalQuantity = totalQuantity + cart[i].quantity
return totalQuantity ;
}

function calTotalPrice(cart){
  let totalPrice = 0;
  for(let i = 0 ; i < cart.length ; i++ ) 
  totalPrice = totalPrice + cart[i].price
  return totalPrice;
  }




app.get('/cart/add', (req, res) => {
  let productId = parseInt(req.query.productId);
  let name = req.query.name;
  let price = parseInt(req.query.price);
  let quantity = parseInt(req.query.quantity);
  let product = { productId, name, price, quantity };
  cart.push(product);
  res.json({ cart });
});



app.get('/cart/edit', (req, res) => {
  let productId = parseInt(req.query.productId);
  let quantity = parseInt(req.query.quantity);
  let result = addQunatity(cart, productId, quantity);
  res.json({ result });
});


app.get('/cart/delete', (req, res) => {
  let productId = parseInt(req.query.productId);
  let result = cart.filter(ele => deletProduct(ele ,productId ))
  cart = result
  res.json({ cart });
});


app.get('/cart/total-quantity', (req, res) => {
  let result = calTotalQunatity(cart)
  res.json({ totalQuantity : result });
});

app.get('/cart/total-price', (req, res) => {
  let result = calTotalPrice(cart)
  res.json({ totalPrice : result });
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
