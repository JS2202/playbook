const UserService = require('./../../app/services/userService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Julio García", "Julio");
        expect(user.username).toBe("Julio García");
        expect(user.name).toBe("Julio");
        expect(user.id).toBe(1);
        expect(user.bio).toBe('Sin bio');
    });

    test("2. Get all users data in a list", () => {
        const user = UserService.create(1, "juliogarcia", "Julio");
        console.log(user);
        const userInfoList = UserService.getInfo(user);

        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe('juliogarcia');
        expect(userInfoList[2]).toBe('Julio');
        expect(userInfoList[3]).toBe('Sin bio');

    });

    test("3. Update username", () => {
        const user = UserService.create(1, "juliogarcia", "Julio");
        UserService.updateUserUserName(user, "juliog");

        expect(user.username).toBe('juliog');

    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "juliogarcia1", "Julio");
        const user2 = UserService.create(2, "juliogarcia2", "Julio");
        const user3 = UserService.create(3, "juliogarcia3", "Julio");
        
        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain('juliogarcia1');
        expect(usernames).toContain('juliogarcia2');
        expect(usernames).toContain('juliogarcia3');

    });
});