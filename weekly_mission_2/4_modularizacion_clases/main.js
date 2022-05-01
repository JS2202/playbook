import Viajero from './viajero.js'
import Explorer from './explorer.js'

/*
Este es un ejemplo de como modularizar clases y usarlas mediante módulos.
*/

      const explorer1 = new Explorer("Carlo", "LaunchX", "Node JS", "Abril 2022")
      console.log(explorer1)
      console.log(`Metodo Padre: ${explorer1.getNameAndUsername()}`) // Método de la clase padre
      //console.log(explorer1.getGeneralInfo()) // Método de la clase hija

      const viajero1 = new Viajero("Armando", "LaunchX", "Node JS", "Febrero 2022")
      console.log(viajero1)
      console.log("Metodo padre: " + viajero1.getNameAndUsername()) // Método de la clase padre
      console.log(`Metodo hijo:  ${viajero1.getGeneralInfo()}`) // Método de la clase hija