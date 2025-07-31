//importo il module express
const express = require('express');
//creo un'istanza dell'app express
const app = express();
//definisco la porta su cui il server sarà in ascolto
const port = 3000;
//inserisco il middleware per i file statici
app.use(express.static('public'));


//
