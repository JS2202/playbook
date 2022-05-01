const pullRequest = {
    title: "Agregue mi blog",
    branchName: "Main",
    status: "Private",
    author: "JS2202",
    repositoryNameAssociated: "my_launchx_blog",
    getStatus: function(){
          return `Status: ${this.status}` 
    },
    getTitleAndAuthor: function(){
          return `Title: ${this.title} | Author: ${this.author}` 
    }
}

console.log("Nombre y autor del Pull requests:" + pullRequest.getTitleAndAuthor())
console.log(pullRequest.getStatus())