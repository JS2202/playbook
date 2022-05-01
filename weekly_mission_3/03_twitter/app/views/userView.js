const UserService = require("../services/UserService");

class UserView {

    static createUser(payload){
        if(!payload){
            return {
                error: 'payload no existe'
            };
        }else{
            
            if(payload.username === undefined || payload.name === undefined || payload.id === undefined){
                return {
                    error: 'propiedades faltantes'
                };
            }

            if(typeof payload.username !== 'string' && typeof payload.name !== 'string' && typeof payload.id !== 'number'){
                return {
                    error: 'necesitan tener un valor valido'
                };
            }else{
                const user = UserService.create(payload.id, payload.username, payload.name);

                return {
                    username: user.username,
                    name: user.name,
                    id: user.id
                }
            }

            
        }
    }
}

module.exports = UserView;