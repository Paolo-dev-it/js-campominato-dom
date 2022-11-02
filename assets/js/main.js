// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

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

