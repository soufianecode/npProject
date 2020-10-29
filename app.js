// creation de serv

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// ecoute sur le port 3000

app.listen(3000, function () {
    console.log('listening on 3000')
})

// rendu du css en public

app.use(express.static('/public'));

// lecture de fichier ejs

app.set('view engine' , 'ejs');

//database connection

const dbURI = '';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
.then((result) => app.listen(3000))
.catch((err) => console.log(err));

//routes

app.get('/', (req,res) => res.render('index'));
app.get('/log-in', (req,res) => res.render('log-in'));