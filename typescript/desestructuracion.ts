//Desestructuración de objetos y arreglos
(() => {
  const avenger = {
    nombre: "Steve",
    clave: "Capitán América",
    poder: "Droga"
  };

  /*
  const {nombre, clave, poder}=avenger;

  console.log(avenger.nombre);
  console.log(avenger.clave);
  console.log(avenger.poder);
  */

  /*const extraer=(avenger:any)=>{
    //const {nombre, clave, poder}=avenger;

    console.log(avenger.nombre);
    console.log(avenger.poder);
  }*/

  //La desestructuración ocurre como argumento
  //const extraer=({nombre, poder}:any)=>{
  //const {nombre, clave, poder}=avenger;
  /*
    console.log(nombre);
    console.log(poder);
  }

  extraer(avenger);*/
  /********************************* */
  //La desestructuración como arreglo
  const avengers: string[] = ["Thor", "Ironman", "Spiderman"];
  //Desestruración
  const [, , arana] = avengers;
  /*console.log(arana);
  //En lugar de poner todo esto
  console.log(avengers[0]);
  console.log(avengers[1]);
  console.log(avengers[2]);*/

  //console.log(loki);
  //console.log(hombre);
  //console.log(arana);
  /********************************************** */
  const extraerArr = ([thor, ironman, spiderman]: string[]) => {
    console.log(thor);
    console.log(ironman);
    console.log(spiderman);
  };
  extraerArr(avengers);
})();
