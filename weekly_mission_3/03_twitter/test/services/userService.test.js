const UserService = require('./../../app/services/userService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "Jose Armando Lopez Alvarez", "Jose");
        expect(user.username).toBe("Jose Armando Lopez Alvarez");
        expect(user.name).toBe("Jose");
        expect(user.id).toBe(1);
        expect(user.bio).toBe('Sin bio');
    });

    test("2. Get all users data in a list", () => {
        const user = UserService.create(1, "js2202", "Jose");
        console.log(user);
        const userInfoList = UserService.getInfo(user);

        expect(userInfoList[0]).toBe(1);
        expect(userInfoList[1]).toBe('js2202');
        expect(userInfoList[2]).toBe('Jose');
        expect(userInfoList[3]).toBe('Sin bio');

    });

    test("3. Update username", () => {
        const user = UserService.create(1, "js2202", "Jose");
        UserService.updateUserUserName(user, "Joseg");

        expect(user.username).toBe('Joseg');

    });

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1, "js22021", "Jose");
        const user2 = UserService.create(2, "js22022", "Jose");
        const user3 = UserService.create(3, "js22023", "Jose");
        
        const usernames = UserService.getAllUsernames([user1, user2, user3]);

        expect(usernames).toContain('js22021');
        expect(usernames).toContain('js22022');
        expect(usernames).toContain('js22023');

    });
});