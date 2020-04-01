(function() {
  function activar(quien:string, //Obligatorio
                   momento?:string, //Opcional              
                   objeto:string='batiseñal'){ //Por defecto
    if(momento){
      console.log(`${quien} activó la ${objeto} en la ${momento}`);  
    }else{
      console.log(`${quien} activó la ${objeto}.`);  
    }
                    
  }
  activar('Gordon', 'tarde');
})();
