// creation de serv

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const cookieParser = require('cookie-Parser');

const app = express();


// middleware

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// lecture de fichier ejs

app.set('view engine' , 'ejs');

//database connection

const dbURI = 'mongodb+srv://test:test1234@cluster0.yhezf.mongodb.net/NpProject-database';


mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));



//routes

app.get('/', (req,res) => res.render('index'));
app.get('/login', (req,res) => res.render('login'));
app.get('/register', (req,res) => res.render('register'));
app.get('/content', (req,res) => res.render('content'));
app.use(authRoutes);

