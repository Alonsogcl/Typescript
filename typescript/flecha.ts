(function() {
  const miFuncion = function(a: string) {
    return a.toUpperCase();
  };

  const miFuncionF = (a: string) => a.toUpperCase();

  const sumarN = function(a: number, b: number) {
    return a + b;
  };

  const sumarF = (a: number, b: number) => a + b;

  console.log(sumarN(5, 6));
  console.log(sumarN(10, 10));

  const hulk = {
    nombre: "Hulk",
    smash() {
      setTimeout(() => {
        console.log(`${this.nombre} smash!!!`);
      }, 1000);
    }
  }
    hulk.smash();

})();
