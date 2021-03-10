




const puntoJugador1 = document.querySelector(".foto-jugador1");

let contador = 0;


function primera2Letras (frase) {
    return frase[0]+frase[1];
}

function ultimas2Letras (frase){
    return frase[frase.length-2]+frase[frase.length-1]
}





//Cuando tocan la foto del jugador 1 aumenta el contador 
puntoJugador1.onclick = function(){
    const puntaje = document.querySelector(".resultado");
    const actualizar = primera2Letras(puntaje.textContent);
    const igual = ultimas2Letras(puntaje.textContent);

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
                    cambioContador();
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
            cambioContador();
            break;
    }
};

//Cuando tocan la foto del jugador 2 aumenta el contador 
const puntoJugador2 = document.querySelector(".foto-jugador2");
puntoJugador2.onclick = function(){
    const puntaje = document.querySelector(".resultado");
    const actualizar = ultimas2Letras(puntaje.textContent);
    const igual = primera2Letras(puntaje.textContent);
  
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
            break;
    }
};


// Practicando accediendo a la tabla
let setActual = 1;
let gameJugador1 = 0;
let gameJugador2 = 0;

function cambioContador () {
    gameJugador1 ++;
    const resultado   = document.querySelector(".contador").rows[1].cells[setActual];
    resultado.textContent = gameJugador1;
    if (gameJugador1 == 6){
        setActual ++;
        gameJugador1 = 0;
    }
}


