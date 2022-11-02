// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

function startPlay() {

    let chooseDifficult = document.getElementById("Difficult").value; //Collego sezione "select" dall'html per la selezione della difficoltà
    
    const griglia = document.getElementById("griglia"); //Collego il mio div dall'html
    console.log(griglia);

    griglia.innerHTML ="";

    function creatingSquare(){ //Creo la funzione per creare un div all'interno del mio div contenitore

        const item = document.createElement("div"); //Creato il tag div

        if (chooseDifficult == 100){
            item.classList.add("square"); //Aggiunta la classe square al div appena creato

        } else if (chooseDifficult == 81){
            item.classList.add("squareNormal"); //Aggiunta la classe squareNormal al div così al cambio della difficoltà i quadrati si sistemano correttamente

        } else {
            item.classList.add("squareHard"); //Aggiunta la classe squareHard al div così al cambio della difficoltà i quadrati si sistemano correttamente

        }

        return item;
    }
        console.log( creatingSquare() );

        let arrayBomb = []; //Creo array vuoto
        console.log(arrayBomb);

        for (let n = 1; n <= 16; n++) { //Aggiungo grazie al ciclo 16 numeri random
            let numberRandom = Math.floor(Math.random(1) * chooseDifficult)
            arrayBomb.push(numberRandom);
        }
    

    for ( let i = 0; i < chooseDifficult; i++ ) { //Inizializzo ciclo

        let elementCurrent = creatingSquare(); //Richiamo la funzione e gli do un nome
        // console.log(elementCurrent);

        elementCurrent.addEventListener('click', function(){ //Evento al click che mi permette di aggiungere una classe e grazie al "this" seleziono solo un elemento
            console.log(this);
            this.classList.toggle('active');
            
        })

         elementCurrent.innerText = i + 1;

         console.log( elementCurrent )


        griglia.append ( elementCurrent ); //Aggiungo al div griglia la funzione con l'evento al click
        
    }
}

