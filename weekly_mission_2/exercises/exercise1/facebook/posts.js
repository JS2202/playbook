const post = {
    userName: 'Cristian Flores',
    title:'Mis gustos no cambian, evolucionan.',
    dayCreated: 16,
    currentDate: new Date(),
    typePost: 'shared',
    get postInfo(){
          return `User ${this.userName} ${this.typePost} a post ${this.currentDate.getDate() - this.dayCreated} days ago`
    }
}

console.log(post.postInfo)