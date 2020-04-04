(() => {
  //Para comprobar el usuario
  //La primera letra de la clase siempre tiene que ir en mayuscula
  // class Avenger {
  /*Para no tener que inicializar se crea un constructor
        nombre:string = 'Sin nombre';
        equipo:string = 'Capi';*/
  // nombre: string;
  //equipo: string;
  //  nombreReal?: string; //Propiedad opcional puede existir o no

  //  puedePelear: boolean;
  //  peleasGanadas: number;

  /*El contructor se ejecuta cuando se crea una nueva 
    instancia de su clase y aqui se establecen las inicializaciones*/
  //  constructor(nombre: string, equipo: string) {
  //    this.nombre = nombre; //=nombre hace referencia a El nombre que se recibe como argumento
  //    this.equipo = equipo;
  //  }
  //}

  class Avenger {
    //nombre: string;
    //equipo: string;
    //nombreReal?: string; //Propiedad opcional puede existir o no

    //puedePelear: boolean;
    //peleasGanadas: number;

    constructor(
      public nombre: string,
      public equipo: string,
      public nombreReal?: string,
      public puedePelear: boolean = true,
      public peleasGanadas: number = 0
    ) {
      //Aqui se establecen las propiedad de arriba
      //Al ponerle public typescript va a crear la propiedad nombre dentro de la clase y
      //a su vez se va a inicializar con el nombre o valor que se le envie al constructor
      //al poner const antman = new Avenger("Antman");
      //Al ponerle public se puede acceder a la propiedad desde la clase o afuera de ella
    }
  }
  const antman = new Avenger("Antman", "Capi");
  /*No es necesario poner Avenger porque al 
    inicializarlo ya entiende que está hablando de Avenger
    const antman: Avenger = new Avenger();*/
  //const antman = new Avenger("Antman", "Capi");
  /*antman.equipo = 'Ironman'; Para actualizar el valor de equipo*/
  console.log(antman);
})();
