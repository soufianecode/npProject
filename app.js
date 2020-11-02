// creation de serv

const express = require('express');
const mongoose = require('mongoose');

const app = express();


// rendu du css en public

app.use(express.static('public'));

// lecture de fichier ejs

app.set('view engine' , 'ejs');

//database connection

const dbURI = 'mongodb+srv://test:test1234@cluster0.yhezf.mongodb.net/NpProject-database?retryWrites=true&w=majority';


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));



//routes

app.get('/', (req,res) => res.render('index'));
app.get('/log-in', (req,res) => res.render('log-in'));
app.get('/register', (req,res) => res.render('register'));