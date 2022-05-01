const explorers = [
    {
          name: "John",
          exercises_completed: 117,
          rate: 343,
          city: "CDMX",
          stack: [
                "js",
                "c#"
          ],
          missions: {
          onboarding: {
                isFinished: true,
                exercisesFinished: true
          },
          frontend: {
                isFinished: true,
                exercisesFinished: true
          }
          }
    },
    {
          name: "Cortana aka el arma",
          exercises_completed: 9,
          city: "Veracruz",
          rate: 50,
          stack: [
                "js"
          ],
          missions: {
          onboarding: {
                isFinished: false,
                exercisesFinished: false
          },
          frontend: {
                isFinished: false,
                exercisesFinished: false
          }
          }
    },
    {
          name: "Fernando Esparza",
          exercises_completed: 4,
          city: "Sonora",
          rate: 100,
          stack: [
                "elixir"
          ],
          missions: {
          onboarding: {
                isFinished: true,
                exercisesFinished: true
          },
          frontend: {
                isFinished: false,
                exercisesFinished: true
          }
          }
    },
    {
          name: "Cristian Flores",
          exercises_completed: 12,
          city: "CDMX",
          rate: 100,
          stack: [
                "js",
                "html",
                "css",
                "python",
          ],
          missions: {
          onboarding: {
                isFinished: true,
                exercisesFinished: true,
          },
          frontend: {
                isFinished: true,
                exercisesFinished: true,
          }
          }
    }
]

console.log('1.Nombre de cada explorer en la lista:')
explorers.forEach((element) => console.log(element.name))

console.log('2.Stack de cada explorer:')
explorers.forEach((explorer) => console.log(explorer.stack))

console.log('3.Nueva lista con las stacks de cada explorer:')
const stackExplorer = explorers.map((explorer) =>  {return explorer.stack} )
console.log (stackExplorer)

console.log('4.Lista de explorers que tengan en su stack "js":')
const stackJs = explorers.filter((explorer) => explorer.stack.includes('js'))
console.log(stackJs)

console.log('5.Primer explorer que sea de la CDMX:')
const explorerCDMX = explorers.find((explorer) => explorer.city = 'CDMX')
console.log(explorerCDMX)

console.log('6.Suma de todos los exercises_completed:')
const totalExercises = explorers.reduce((explorerM, explorerN) => explorerM + explorerN.exercises_completed, 0)
console.log(totalExercises)

console.log('7.Validación - Al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true:')
const frontExFin = explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true) //*? <- Funciona igual con "==" dado que si pongo" exercisesFinished: 'true' " lo toma como false
console.log(frontExFin)

console.log('8.Validación - Todos los explorers tienen la propiedad isFinished del onboarding como true:')
const allOnbordFin = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true) //*? <- Funciona igual con "==" dado que si pongo" isFinished: 'true' " lo toma como false
console.log(allOnbordFin)