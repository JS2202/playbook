const UserView = require('./../../app/views/userView');

describe('Tests for UserView', () => {
    test('Return an error object when try to create a new user with an null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload no existe/);
    });

    test('Return an error object when try to create a new user with invalid properties', () => {
        const payload = { username: null, name: 12, id: "id" };
        // const payload = { username: 'js2202', name: 'Jose Armando Lopez Alvarez', id: 1 };
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un valor valido/);
    });

    test('Return an error object when try to create a new user with missing properties', () => {
        const payload = { username: 'username' };
        // const payload = { username: 'js2202', name: 'Jose Armando Lopez Alvarez', id: 1 };
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/propiedades faltantes/);
    });

    test('Return an error object when try to create a new user with invalid properties', () => {
        const payload = { username: 'js2202', name: 'Jose Armando Lopez Alvarez', id: 1 };
        const result = UserView.createUser(payload);

        expect(result.username).toBe('js2202');
        expect(result.name).toBe('Jose Armando Lopez Alvarez');
        expect(result.id).toBe(1);
    });
});