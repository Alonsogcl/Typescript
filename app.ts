(() => {
  //La primera letra de la clase siempre tiene que ir en mayuscula
  class Avenger {
    /*Para no tener que iniciarlizar se crea un constructor
        nombre:string = 'Sin nombre';
        equipo:string = 'Capi';*/
    ombre: string;
    equipo: string;
    nombreReal: string;

    puedePelear: boolean;
    peleasGanadas: number;

    //El contructor se ejecuta cuando se crea una nueva instancia de su clase
  }
  /*No es necesario poner Avenger porque al 
    inicializarlo ya entiende que está hablando de Avenger
    const antman: Avenger = new Avenger();*/
  const antman = new Avenger();
  /*antman.equipo = 'Ironman'; Para actualizar el valor de equipo*/
  console.log(antman);
})();
