import { usContext, Person } from '../../src/base-tests/06-deses-obj';

describe('Test 06-deses-obj', () => {

    test('should return a object', () => {

        const result: Person = {
            codeName: 'CODE',
            age: 123,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }

        };
        
        const testPerson: Person = usContext({
            code: 'CODE',
            name: 'NAME',
            age: 123,
            position: 'Captain'
        });

        expect(testPerson).toEqual(result);

    });

});