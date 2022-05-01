const user = {
    username: 'Cristian Flores',
    age: 24,
    friends: 136,
    location: 'CDMX',
    status: 'single',
    occupation: 'student',
    getActualSituation: function(situation){
          return `${this.username} from ${this.location} is a ${this.occupation} currently ${situation}`
    }
}

console.log('Facebook:')
console.log(user.getActualSituation('looking for a job as a frontend developer'))