(() => {
  //Tipado de un retorno de una función
  const sumar = (a: number, b: number): number => a + b;
  const nombre = (): string => "Hola Fernando";
  const obtenerSalario = (): Promise<string> => {
    //Para definir el tipo de la promesa que es lo que va a retornar y se pone despues de los argumentos, y entre<> se va a especificar el tipo de respuesta. La promesa la va a resolver un string.
    return new Promise((resolve, reject) => {
      resolve("Fernando");
    });
  };

  obtenerSalario().then((a) => console.log(a.toUpperCase())); //Recibe un argumento a
})();
