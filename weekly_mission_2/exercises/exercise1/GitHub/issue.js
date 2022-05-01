const issue = {
    title: "☘️ 06 Live 3 Semana 2 [Jueves 14 de Abril]",
    repositoryNameAssociated: "MissionNodeJS",
    status: "Open",
    numberOfComments: 40,
    labels: ['Finalizado', 'Live 3', 'Semana-2'],
    author: "carlogilmar",
    dateCreated: '14-04-2022',
    lastUpdated: '18-04-2022',
    getTitleAndAuthor: function(){
          return `Title: ${this.title} Author: ${this.author}` 
    },
    getGeneralInfo: function(){
          return `Status: ${this.status} Labels: ${this.labels}`
    }
}

console.log("Nombre y autor del issue:" + issue.getTitleAndAuthor())
console.log("Información general: " + issue.getGeneralInfo())