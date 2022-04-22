/*
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).
****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
*/

// costante che assegno al contenitore html
const container = document.querySelector(".rb-container");

const BOMBS_AMOUNT = 16;
let generatedBombs = [];

// array
const arrayValue = [100, 81, 49];

const element = document.getElementById("start");
element.addEventListener("click", inizio);

// creo function di iniziazione
function inizio() {
  let num = document.querySelector("select").value;
  let numeroQuadratini = arrayValue[num];
  // inizializzo il contenitore con stringa vuota
  container.innerHTML = "";
  // creo ciclo for per creazione quadratini *num
  for (let i = 1; i <= numeroQuadratini; i++) {
    // assegno costante a funzione che genra quadratino
    generateSquare(container, numeroQuadratini, i);
    //  usando addeventlistener e con una funzione vado a slezionare un solo quadratino usando this e aggiungendo una classe
  }
  generatedBombs = createBombs(numeroQuadratini);
  console.log(generatedBombs);
}

// funzione per mostrare quadratino non bomba e anche la bomba
function firstClick() {
  this.classList.add("clicked");
  
  if (generatedBombs.includes(parseInt(this.innerText))) {
    this.classList.add("bomb");
    console.log("bomba");
  }
 console.log(generatedBombs, this.innerText);
}


// creo funzione per creare div quadratino 
function generateSquare(target, numeroQuadratini, i) {
  const  quadratino = document.createElement("div");
  // modifico nome classe necessario concatenando i nomi classe precedenti aggiungendo num.
  quadratino.className = "square square" + numeroQuadratini;
  quadratino.innerHTML = `<span>${i}</span>`;
  quadratino.addEventListener("click", firstClick);
  target.append(quadratino);
}


// genero numero casuale

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  
}


function createBombs(numeroQuadratini) {
  
  while (generatedBombs.length < BOMBS_AMOUNT) {
    const bomba = getRandomNumber(1, numeroQuadratini);
    if (!generatedBombs.includes(bomba)) {
      generatedBombs.push(bomba);
    }
  }
  return generatedBombs;
}




function handleQuadratiniClick(arrayBombe) {

}

