// creation de serv

const express = require('express');
const app = express();

// ecoute sur le port 3000

app.listen(3000, function () {
    console.log('listening on 3000')
})

// lecture de fichier ejs

// app.set('view engine', 'ejs');

// rendu du css en public

app.use(express.static('/Frontend/public'));

// affichage de fichier

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Frontend/index.html')

})