//importo il module express
const express = require('express');
//creo un'istanza dell'app express
const app = express();
//definisco la porta su cui il server sarà in ascolto
const port = 3001;
//inserisco il middleware per i file statici
app.use(express.static('public'));


//Creo una rotta Get per ottenere un testo
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

//creo array dei post
   const posts = [
  {
    titolo: "Il mio primo post",
    contenuto: "Ciao a tutti! Questo è il mio primo post sul blog.",
    immagine: "/img/first-post-v0-arm1qbj34wfe1.webp",
    tags: ["introduzione", "personale"]
  },
  {
    titolo: "Una giornata al parco",
    contenuto: "Oggi ho passato una bellissima giornata al parco con gli amici.",
    immagine: "/img/parco.png",
    tags: ["tempo libero", "natura"]
  },
  {
    titolo: "Ricetta facile: pasta al pomodoro",
    contenuto: "Ecco come preparare una semplice pasta al pomodoro in 10 minuti.",
    immagine: "/img/pasta.avif",
    tags: ["cucina", "ricetta"]
  },
  {
    titolo: "I miei libri preferiti",
    contenuto: "Una lista di libri che mi hanno ispirato e che consiglio a tutti.",
    immagine: "/img/libri.jpg",
    tags: ["libri", "consigli"]
  },
  {
    titolo: "Viaggio a Roma",
    contenuto: "Qualche foto e racconto del mio recente viaggio a Roma.",
    immagine: "/img/roma.avif",
    tags: ["viaggi", "Italia"]
  }
];

//creo rotta /bacheca
app.get('/bacheca', (req, res) => {
    //restituisco oggetto json
    res.json({posts});
});



//avvio il server in ascolto sulla porta 3001
app.listen(port, () => {
    console.log(`Server attivo su http://localhost:${port}`)
});