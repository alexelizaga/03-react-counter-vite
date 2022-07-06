import heroes from '../data/heroes';

export interface Hero {
    id: number;
    name: string;
    owner: string;
}

export const getHeroById = ( id: number ): Hero | undefined => heroes.find( (hero) => hero.id === id );

export const getHeroesByOwner = ( owner: string ): Hero[] => heroes.filter( (hero) => hero.owner === owner );
