const UserView = require('./../../app/views/userView');

describe('Tests for UserView', () => {
    test('Return an error object when try to create a new user with an null payload', () => {
        const payload = null;
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/payload no existe/);
    });

    test('Return an error object when try to create a new user with invalid properties', () => {
        const payload = { username: null, name: 12, id: "id" };
        // const payload = { username: 'juliog', name: 'Julio Garcia', id: 1 };
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/necesitan tener un valor valido/);
    });

    test('Return an error object when try to create a new user with missing properties', () => {
        const payload = { username: 'username' };
        // const payload = { username: 'juliog', name: 'Julio Garcia', id: 1 };
        const result = UserView.createUser(payload);

        expect(result.error).toMatch(/propiedades faltantes/);
    });

    test('Return an error object when try to create a new user with invalid properties', () => {
        const payload = { username: 'juliog', name: 'Julio Garcia', id: 1 };
        const result = UserView.createUser(payload);

        expect(result.username).toBe('juliog');
        expect(result.name).toBe('Julio Garcia');
        expect(result.id).toBe(1);
    });
});