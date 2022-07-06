import { getGreeting } from '../../src/base-tests/02-template-string';

describe('Tests 02-template-string', () => {
    
    test('should return "Hello Alex"', () => {
        const name: string = 'Alex';

        const message: string = getGreeting(name);

        expect(message).toBe(`Hello ${name}`);
    });

});