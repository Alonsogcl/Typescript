export class Xmen{ //Para que yo pueda usar esta clase fuera de este archivo hay que exportar la clase
    constructor(
        public nombre:string,
        public clave:string
    ){}
    //Aquí puedo implementar métodos
    imprimir(){//Impresión en consola de las propiedades
    console.log(`${this.nombre}-${this.clave}`);
}
}
//Al colocar export esta clase va a poder ser utilizada en otros archivos mediante una importación
//Si no se quiere sea utilizada fuera de este archivo, se quita la palabra export y se usa de manera privada en este archivo.

