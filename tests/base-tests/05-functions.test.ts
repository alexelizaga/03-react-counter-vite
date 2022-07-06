import { User, getUser, getActiveUser } from '../../src/base-tests/05-functions';

describe('Test 05-functions', () => {
    
    test('getUser should return an object', () => {

        const testUser: User = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user: User = getUser();

        expect(user).toEqual(testUser);

    });

    test('getActiveUser should return an object', () => {

        const name: string = 'Alex';

        const user: User = getActiveUser(name);

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: name
        })

    });

});