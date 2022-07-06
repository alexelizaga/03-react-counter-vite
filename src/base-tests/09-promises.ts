import { getHeroById, Hero } from './08-imp-exp';


export const getHeroByIdAsync = ( id: number ): Promise<Hero> => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1: Hero | undefined = getHeroById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( `Hero ${id} could not be found` );
            }
        }, 1000 );
    
    });


}
