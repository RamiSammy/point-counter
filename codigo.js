




const puntoJugador1 = document.querySelector(".foto-jugador1");

let contador = 0;


function primera2Letras (frase) {
    return frase[0]+frase[1];
}

function ultimas2Letras (frase){
    return frase[frase.length-2]+frase[frase.length-1]
}

//Variables que vamos a tener que usar para todo el contador
let valorTieBreak = false;
let setActual = 1;
let gameJugador1 = 0;
let gameJugador2 = 0;

let tieBreakJugador1 = 0;
let tieBreakJugador2 = 0;
let saqueTieBreak = 1;
let sacaJugador1 = true;
let  quienArrancoTieBreak = sacaJugador1;

function cambioDeSaque (){
    if (sacaJugador1){
        sacaJugador1 = false;
        saqueJugador2();

    }else {
        sacaJugador1 = true;
        saqueJugador1();
    }
}

//Cuando tocan la foto del jugador 1 aumenta el contador 
puntoJugador1.onclick = function(){
    const puntaje = document.querySelector(".resultado"); // Accede a lo que esta escrito en el cuadro de resultado y lo guarda en la variable puntaje
    const actualizar = primera2Letras(puntaje.textContent); // Hice una funcion aparte para que me diga las primeras 2 letras de un texto y llamo a puntaje
    const igual = ultimas2Letras(puntaje.textContent); // Lo mismo pero con las ultimas 2 letras
if(valorTieBreak == false){
    switch (actualizar) {     //Separo en 2, 1 cuando estamos en tieBreak y otra en la situacion normal
        case "0 ":
            puntaje.textContent = `15 - ${igual}`; //Cambia el resultado
            break;
        case "15":
            puntaje.textContent = `30 - ${igual}`;
            break;
        case "30":
            puntaje.textContent = `40 - ${igual}`;
            break;
        case "40" :
                if(igual != 40 && igual != "Ad"){ //Caso en donde gana sin llegar a Ad
                    puntaje.textContent = `0 - 0`;
                    cambioContador(1); //Funcion creada para sumar el game o el set dependiendo el caso particular
                    cambioDeSaque();

                    break;
                } else if (igual == "40"){ // Caso en donde van 40-40, entonces tendria que cambiarse a Ad-40
                    puntaje.textContent = `Ad - ${igual}`; 
                     break;
                } else {
                    puntaje.textContent = `40 - 40`;  //Y por ultimo queda en el caso en que iban 30-40 y llega a 40-40
                     break;
                }   
        case "Ad" :
            puntaje.textContent = `0 - 0`;
            cambioContador(1);
            cambioDeSaque();
            break;
    }
}else{ // Aca es donde empieza el tiebreak
    tieBreakJugador1++; // Dentro de la suma de puntos del jugador 1 se le suma 1
    if(tieBreakJugador1 > 6 && (tieBreakJugador1-tieBreakJugador2 > 1)){ // Verificacion de si se tiene que seguir el tieBreak
        puntaje.textContent = `0 - 0`;
        cambioContador(1);
     }else{
        puntaje.textContent = `${tieBreakJugador1} - ${tieBreakJugador2}`; // cambia el resultado en el puntaje
        document.querySelector(".contador").rows[1].cells[setActual].textContent = `6 (${tieBreakJugador1})`; //Cambia el resultado en el contador
        tieBreakPelota ();
    }
}

};

//Cuando tocan la foto del jugador 2 aumenta el contador 
//El comportamiento es muy similar al anterior, fijarse 
const puntoJugador2 = document.querySelector(".foto-jugador2");
puntoJugador2.onclick = function(){
    const puntaje = document.querySelector(".resultado");
    const actualizar = ultimas2Letras(puntaje.textContent);
    const igual = primera2Letras(puntaje.textContent);
    if( valorTieBreak == false){
    switch (actualizar) {
        case " 0":
            puntaje.textContent = `${igual} - 15`;
            break;
        case "15":
            puntaje.textContent = `${igual} - 30`;
            break;
        case "30":
            puntaje.textContent = `${igual} - 40`;
            break;
        case "40" :
            if(igual != 40 && igual != "Ad"){
                 puntaje.textContent = `0 - 0`;
                 cambioContador(2);
                 cambioDeSaque();
                    break;
            } else if (igual == "40"){
                 puntaje.textContent = `${igual} - Ad`;
                 break;
            } else {
                puntaje.textContent = `40 - 40`;
                    break;
            }   
        case "Ad" :
            puntaje.textContent = `0 - 0`;
            cambioContador(2);
            cambioDeSaque();
            break;
    }
}else{ 
    tieBreakJugador2++;
    if(tieBreakJugador2 > 6 && (tieBreakJugador2-tieBreakJugador1 > 1)){
        puntaje.textContent = `0 - 0`;
        cambioContador(2);
     }else{
        puntaje.textContent = `${tieBreakJugador1} - ${tieBreakJugador2}`;
        document.querySelector(".contador").rows[2].cells[setActual].textContent = `6 (${tieBreakJugador2})`;
        tieBreakPelota ();
     }

    
}
};


// Una vez ya sabido quien gano el juego se va a aumentar dependiendo el caso 
//Funcion de cambioContador

function cambioContador (numeroJugador) {//numeroJugador es 1 o 2 , el 1 representa al jugador1 y el 2 para el jugador2
    if(numeroJugador == 1){ // Verifico quien gano el game y le aumento 1
        gameJugador1 ++;
    }else{
        gameJugador2 ++;
    }
    
    const resultado   = document.querySelector(".contador").rows[numeroJugador].cells[setActual]; //Accede al dato que esta ubicado en el contador

    if(gameJugador1 == 6 && gameJugador2 == 6){ // Separo en 2, tiebreak y normal, aca acceden si estan en tiebreak, el valorTieBreak es true y se cambia el contador
        valorTieBreak = true;
        quienArrancoTieBreak = sacaJugador1; //Si quienArrancoTieBreak es true significa que arranco jugador 1, si es false arranco jugador 2
        document.querySelector(".contador").rows[1].cells[setActual].textContent = `6 (${tieBreakJugador1})`;
        document.querySelector(".contador").rows[2].cells[setActual].textContent = `6 (${tieBreakJugador2})`;

        
} else {
    if(numeroJugador == 1){ // Aca simplemente se remplaza el numero del contador por el nuevo 
        resultado.textContent = gameJugador1;
    }else{
        resultado.textContent = gameJugador2;
    }
}

    if ((gameJugador1 == 6 && gameJugador2 < 5) | (gameJugador2 == 6 && gameJugador1 < 5) ){ //Caso en que ganan sin llegar a diferencia/tiebreak
        setActual ++;
        gameJugador1 = 0;
        gameJugador2 = 0;
    }

    if ((gameJugador1 == 7 && gameJugador2 == 5) | (gameJugador2 == 7 && gameJugador1 == 5)){//Caso de diferencia
        setActual ++;
        gameJugador1 = 0;
        gameJugador2 = 0;
    }
    if((gameJugador1 == 7 && gameJugador2 == 6) | (gameJugador2 == 7 && gameJugador1 == 6)){//Caso de tiebreak
        setActual++;
        gameJugador1 = 0;
        gameJugador2 = 0;
        tieBreakJugador1 = 0;
        tieBreakJugador2 = 0;
        valorTieBreak = false;


    }
   
}




///Posicion del saque
//Ocultar 1ra pelota y desocultar 2da pelota

function saqueJugador2() {
    var pelota = document.querySelector(".saque1");
    pelota.style.opacity = 0 +"%";
    var pelota1 = document.querySelector(".saque2");
    pelota1.style.opacity = 100 +"%"; 
    sacaJugador1 = false;
};

//Ocultar 2da pelota y desocultar 1ra pelota
function saqueJugador1() {
    var pelota = document.querySelector(".saque2");
    pelota.style.opacity = 0 +"%";
    var pelota1 = document.querySelector(".saque1");
    pelota1.style.opacity = 100 +"%";   
    sacaJugador1 = true;
};

// function pelotaSaque() {
//  if(valorTieBreak==true){
//      tieBreakPelota();

//  }else {
//     if((gameJugador1+gameJugador2) % 2 == 0){
//         saqueJugador1();
//     }else {
//         saqueJugador2();
//     }
//  }


    
// }

function tieBreakPelota () {
    console.log(saqueTieBreak);
    saqueTieBreak++;
    if(saqueTieBreak == 2){
        if(sacaJugador1==true){
            console.log("llegue");
            saqueJugador2();
            saqueTieBreak = 0;
        }else {
            saqueJugador1();
            saqueTieBreak = 0;
        }
    // }else{
    //     saqueTieBreak++;
    //     // console.log(saqueTieBreak);
     }
}
