(function() {
    function getEdad(){
        return 100+100+300;
    }    
  //Función autoinvocada
  const nombre = "Fernando";
  const apellido = "Herrera";
  const edad = 33;

  //const salida = nombre + apellido + edad;
  //const salida = nombre + " " + apellido + "(" + edad + ")";
  const salida = `${nombre} \n${apellido} \n(${getEdad()})`;
  //Fernando Herrera (Edad:33)
  console.log(salida);
})();
