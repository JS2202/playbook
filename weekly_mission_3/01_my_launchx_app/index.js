const MissionComander = require('./app/missionCommander');

const spiderman = new MissionComander('Peter');
const superman = new MissionComander('Clark');
const ironman = new MissionComander('Tony');

console.log(spiderman.name);
console.log(superman.name);
console.log(ironman.name);