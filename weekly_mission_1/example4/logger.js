class Logger {
    constructor(name) {
      // this es una variable para referenciar el valor del contexto local de esta clase
      this.name = name // Estás variables se le conocen como atributos
    }

    //javascript solo permite tener un constructor por clase
    /*constructor(name, level) {
        this.name = name
        this.level = level
    }*/
  
    // método
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
    info (message) {
      console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }
  
    // método
    verbose (message) {
      console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }

    // método
    /*otro(message){
        console.log(`[Objeto con nombre: ${this.name}] [Nivel: ${this.level}] otro: ${message}`)
    }*/

  }
  
  // Esta clase se exporta en este módulo
  module.exports = Logger