import { getImagen } from '../../src/base-tests/11-async-await';

describe('Test 11-async-await', () => {
    
    test('getImage should return a URL image', async() => {
        const url = await getImagen();
        expect( typeof url).toBe('string');
    });

});