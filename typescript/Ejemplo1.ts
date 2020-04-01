(function(){ //Función autoinvocada
    function saludar(nombre:String) {
        console.table('Hola ' + nombre); // Hola Logan
    } 
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    saludar(wolverine.nombre);    
})();
