const User = require('../../app/models/user');

describe("Unit Test Twitter", () => {
    test("Case 1 Create User", () => {
        const user = new User(1, 'garguijc', 'Julio García', 'Ing. en Electrónica');

        expect(user.id).toBe(1);
        expect(user.username).toBe('garguijc');
        expect(user.name).toBe('Julio García');
        expect(user.bio).toBe('Ing. en Electrónica');
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();

    });

    test("Case 2 Test getters", () => {
        const user = new User(1, 'garguijc', 'Julio García', 'Ing. en Electrónica');

        expect(user.getUsername).toBe('garguijc');
        expect(user.getBio).toBe('Ing. en Electrónica');
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();

    });

    test("Case 3 Test setters", () => {
        const user = new User(1, 'garguijc', 'Julio García', 'Ing. en Electrónica');

        user.setUsername = 'garguidev';
        user.setBio = 'Bio';

        expect(user.getUsername).toBe('garguidev');
        expect(user.getBio).toBe('Bio');

    });
});