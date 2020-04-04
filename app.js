"use strict";
(() => {
    //Tipado de un retorno de una función
    const sumar = (a, b) => a + b;
    const nombre = () => 'Hola Fernando';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Fernando');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase)); //Recibe un argumento a
})();
