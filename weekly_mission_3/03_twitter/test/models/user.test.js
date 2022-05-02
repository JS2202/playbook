const User = require('../../app/models/user');

describe("Unit Test Twitter", () => {
    test("Case 1 Create User", () => {
        const user = new User(1, 'js2202', 'Jose Armando Lopez Alvarez', 'Ing. de Software');

        expect(user.id).toBe(1);
        expect(user.username).toBe('js2202');
        expect(user.name).toBe('Jose Armando Lopez Alvarez');
        expect(user.bio).toBe('Ing. de Software');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();

    });

    test("Case 2 Test getters", () => {
        const user = new User(1, 'js2202', 'Jose Armando Lopez Alvarez', 'Ing. de  Software');

        expect(user.getUsername).toBe('js2202');
        expect(user.getBio).toBe('Ing. de  Software');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();

    });

    test("Case 3 Test setters", () => {
        const user = new User(1, 'js2202', 'Jose Armando Lopez Alvarez', 'Ing. de  Software');

        user.setUsername = 'js220296';
        user.setBio = 'Bio Mia';

        expect(user.getUsername).toBe('js220296');
        expect(user.getBio).toBe('Bio Mia');

    });
});