
// const nuevo_puntaje = "15 - 0";
// const puntaje = document.querySelector(".resultado");
// puntaje.textContent = nuevo_puntaje;



const puntoJugador1 = document.querySelector(".foto-jugador1");

let contador = 0;
// console.log(puntoJugador1.innerHTML);

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
    // console.log(actualizar);
    // console.log(actualizar == "0 " );
    // console.log("15 - " + igual);
    // console.log(typeof actualizar);
    // console.log(typeof 12 );
    // console.log(ultimas2Letras("30"));
    // console.log(ultimas2Letras("30 - 15"));
    // console.log(ultimas2Letras("0 - 0"));
    // console.log(ultimas2Letras("0 - 40"));
    switch (actualizar) {
        case "0 ":
            puntaje.textContent = `15 - ${igual}`;
            console.log("llegue");
            break;
        case "15":
            puntaje.textContent = `30 - ${igual}`;
            break;
        case "30":
            puntaje.textContent = `40 - ${igual}`;
            break;
        case "40":
            puntaje.textContent = `0 - ${igual}`;
            break;
    }
};

//Cuando tocan la foto del jugador 2 aumenta el contador 
const puntoJugador2 = document.querySelector(".foto-jugador2");
puntoJugador2.onclick = function(){
    const puntaje = document.querySelector(".resultado");
    const actualizar = ultimas2Letras(puntaje.textContent);
    const igual = primera2Letras(puntaje.textContent);
    console.log("llegue");
    console.log(actualizar == " 0");
  
    switch (actualizar) {
        case " 0":
            puntaje.textContent = `${igual} - 15`;
            console.log("llegue");
            break;
        case "15":
            puntaje.textContent = `${igual} - 30`;
            break;
        case "30":
            puntaje.textContent = `${igual} - 40`;
            break;
        case "40":
            puntaje.textContent = `${igual} - 0`;
            break;
    }
};