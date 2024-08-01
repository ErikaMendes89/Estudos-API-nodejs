const express = require('express');
const app = express();
const port= 3000;

app.get('/products', (req, res) => {
    const products = [
        {id:1, name:'Hammer'},
        {id:2, name:'Screwdriver'},
        {id:3, name: 'Wrench'},
    ];

    res.json(products);

});
app.listen(port, ()=> console.log(`Example app listening on port ${port}! http://localhost:${port}/`));