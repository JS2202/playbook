const User = require('../models/user');

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio");
    }

    static getInfo(user) {
        return [user.id, user.username, user.name, user.bio];
    }

    static updateUserUserName(user, username){
        user.setUsername = username;
    }

    static getAllUsernames(users){
        return users.map(user => user.getUsername);
    }
}

module.exports = UserService;