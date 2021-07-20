const express = require('express');
const app = express();

const productRoute = require('./routes/Products.js');
const userRoute = require('./routes/User.js');

const PORT =  2021;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/products', productRoute);

app.use('/user', userRoute);


app.listen(PORT, ()=>{
    console.log(`Server running on http://127.0.0.1:${PORT}`)
});