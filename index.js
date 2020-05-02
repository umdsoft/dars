const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Salom");
})

const books = [
    {id: 1, name: 'Napaleon Xill'},
    {id: 2, name: 'Elon Mask'}
];

app.get('/books',(req,res)=>{
    res.send(books);
})

app.get('/books/:id',(req,res)=>{

    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book){
        res.status(404).send("Bunday kitob topilmadi");
    }
    res.send(book);
})

const port = 3000;

app.listen(3000);
