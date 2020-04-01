//Interfaces
(() => {
    /*Clase que no tiene constructores, son las reglas que 
    queremos cumpla el objeto, un tipo de dato. No tiene equivalencia
    en JavaScript. Poner reglas para asegurarme voy a cumplirlas que un objeto del tipo de la interfaz lo cumpla
    Se usa para indicar que tipado tienen ciertas cosas.
    En lugar de poner {nombre:string} en la linea
     const enviarMision=(xmen:{nombre:string})=>{   queda de la sig. manera*/
    interface Xmen{
        nombre:string;
        edad:number;
        poder?:string; //Opcional
    }
                        /*xmen:Interfaz */
    const enviarMision=(xmen:Xmen)=>{
        /*const enviarMision=(xmen:any)=>{ */
        /*En lugar de any hay que poner el tipado*/
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

    const regresarAlCuartel=(xmen:Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }

        const wolverine:Xmen={
            nombre:'Logan',
            edad:60
        }
        
        enviarMision(wolverine);
        regresarAlCuartel(wolverine);
})();
