"use strict";
(() => {
    //La primera letra de la clase siempre tiene que ir en mayuscula
    class Avenger {
    }
    /*No es necesario poner Avenger porque al
    inicializarlo ya entiende que está hablando de Avenger
    const antman: Avenger = new Avenger();*/
    const antman = new Avenger();
    /*antman.equipo = 'Ironman'; Para actualizar el valor de equipo*/
    console.log(antman);
})();
