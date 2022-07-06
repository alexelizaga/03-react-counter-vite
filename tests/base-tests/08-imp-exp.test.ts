import { getHeroById, Hero, getHeroesByOwner } from '../../src/base-tests/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Test 08-imp-exp', () => {
    
    test('getHeroeById should return a hero by ID', () => {
        
        const id: number = 1;
        const hero: Hero | undefined = getHeroById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById should return undefined if the hero do not exist', () => {
        
        const id: number = 100;
        const hero: Hero | undefined = getHeroById(id);

        expect(hero).toBeFalsy(); // null, undefined, NaN, 0, '', false, []

    });

    test('getHeroesByOwner should return DC heroes', () => {
        
        const owner: string = 'DC';
    
        const dcHeroes: Hero[] = getHeroesByOwner(owner);

        expect(dcHeroes.length).toBe(3);
        expect( dcHeroes ).toEqual( heroes.filter( (hero) => hero.owner === owner ) )

    });

    test('getHeroesByOwner should return Marvel heroes', () => {
    
        const owner: string = 'Marvel';

        const marvelHeroes: Hero[] = getHeroesByOwner(owner);

        expect(marvelHeroes.length).toBe(2);
        expect( marvelHeroes ).toEqual( heroes.filter( (hero) => hero.owner === owner ) )

    });

});