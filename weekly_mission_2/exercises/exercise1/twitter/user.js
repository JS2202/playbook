const user = {
    user: 'Jose Armando Lopez Alvarez',
    username: '@JS2202',
    bio: 'Developer',
    age: 26,
    dataCreated: 'July 2020',
    following: "56",
    followers: 5,
    getUserNames: function(){ 
          return `User ${this.user} a.k.a ${this.username}`
    },
    get getFgAndFw2(){ 
          return `have ${this.followers} and follow ${this.following} users`
    }
}

console.log('Twitter:')
console.log(`${user.getUserNames()} ${user.getFgAndFw2}. Join us in ${user.dataCreated}`)