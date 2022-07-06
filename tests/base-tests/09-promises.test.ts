import { getHeroByIdAsync } from '../../src/base-tests/09-promises';

describe('Test 09-promesas', () => {

    test('getHeroByIdAsync should return a hero', (done) => {
        
        const id: number = 1;

        getHeroByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
    
    });

    test('getHeroByIdAsync should return a error if hero do not exist', (done) => {
        
        const id: number = 100;

        getHeroByIdAsync(id)
            .then( hero => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch( error => {
                expect(error).toBe(`Hero ${id} could not be found`);
                done();
            });
    
    });

});