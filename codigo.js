




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



//Cuando tocan la foto del jugador 1 aumenta el contador 
puntoJugador1.onclick = function(){
    const puntaje = document.querySelector(".resultado");
    const actualizar = primera2Letras(puntaje.textContent);
    const igual = ultimas2Letras(puntaje.textContent);
if(valorTieBreak == false){
    switch (actualizar) {
        case "0 ":
            puntaje.textContent = `15 - ${igual}`;
            break;
        case "15":
            puntaje.textContent = `30 - ${igual}`;
            break;
        case "30":
            puntaje.textContent = `40 - ${igual}`;
            break;
        case "40" :
                if(igual != 40 && igual != "Ad"){
                    puntaje.textContent = `0 - 0`;
                    cambioContador(1);
                     break;
                } else if (igual == "40"){
                    puntaje.textContent = `Ad - ${igual}`;
                     break;
                } else {
                    puntaje.textContent = `40 - 40`;
                     break;
                }   
        case "Ad" :
            puntaje.textContent = `0 - 0`;
            cambioContador(1);
            break;
    }
}else{
    tieBreakJugador1++;
    if(tieBreakJugador1 > 6 && (tieBreakJugador1-tieBreakJugador2 > 1)){
        puntaje.textContent = `0 - 0`;
        cambioContador(1);
     }else{
        puntaje.textContent = `${tieBreakJugador1} - ${tieBreakJugador2}`;
        document.querySelector(".contador").rows[1].cells[setActual].textContent = `6 (${tieBreakJugador1})`;
        
     }
}

};

//Cuando tocan la foto del jugador 2 aumenta el contador 

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
     }

    
}
};


// Una vez ya sabido quien gano el juego se va a aumentar dependiendo el caso 


function cambioContador (numeroJugador) {
    if(numeroJugador == 1){
        gameJugador1 ++;
    }else{
        gameJugador2 ++;
    }
    
    const resultado   = document.querySelector(".contador").rows[numeroJugador].cells[setActual];

    if(gameJugador1 == 6 && gameJugador2 == 6){
        valorTieBreak = true;
        document.querySelector(".contador").rows[1].cells[setActual].textContent = `6 (${tieBreakJugador1})`;
        document.querySelector(".contador").rows[2].cells[setActual].textContent = `6 (${tieBreakJugador2})`;
        
} else {
    if(numeroJugador == 1){
        resultado.textContent = gameJugador1;
    }else{
        resultado.textContent = gameJugador2;
    }
}

    if ((gameJugador1 == 6 && gameJugador2 < 5) | (gameJugador2 == 6 && gameJugador1 < 5) ){
        setActual ++;
        gameJugador1 = 0;
        gameJugador2 = 0;
    }

    if ((gameJugador1 == 7 && gameJugador2 == 5) | (gameJugador2 == 7 && gameJugador1 == 5)){
        setActual ++;
        gameJugador1 = 0;
        gameJugador2 = 0;
    }
    if((gameJugador1 == 7 && gameJugador2 == 6) | (gameJugador2 == 7 && gameJugador1 == 6)){
        setActual++;
        gameJugador1 = 0;
        gameJugador2 = 0;
        tieBreakJugador1 = 0;
        tieBreakJugador2 = 0;
        valorTieBreak = false;


    }
   
}

