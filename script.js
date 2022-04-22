/*

**Consegna**
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


*/

// costante che assegno al contenitore html
const container = document.querySelector(".container");
console.log(container);

// creo function di iniziazione
function inizio(num) {
  // inizializzo il contenitore con stringa vuota
  container.innerHTML = "";
  // creo ciclo for per creazione quadratini *num
  for (let i = 1; i <= num; i++) {
    console.log(i);
    // assegno costante a funzione che genra quadratino
    const quadratino = generateSquare(container, num);
    quadratino.innerHTML = `<span>${i}</span>`;
    //  usando addeventlistener e con una funzione vado a slezionare un solo quadratino usando this e aggiungendo una classe
    quadratino.addEventListener("click", function(){
      this.classList.add("clicked")
    });
    console.log(quadratino);
  }
}

// creo funzione per creare div quadratino 

function generateSquare(target, num) {
  const  quadratino = document.createElement("div");
  // modifico nome classe necessario concatenando i nomi classe precedenti aggiungendo num.
  quadratino.className = "square square" + num;
  target.append(quadratino);
  return quadratino;
}

