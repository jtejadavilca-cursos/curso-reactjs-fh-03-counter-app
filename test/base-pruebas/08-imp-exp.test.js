import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe retornar un héroe por ID', () => {

        const testHeroe = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        const id = 1;
        const heroe = getHeroeById(id);

        expect( testHeroe ).toEqual( heroe );
    });
    test('getHeroesByOwner debe retornar una lista de héroes por OWNER', () => {

        const testHeroesMarvel = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
        ];

        const testHeroesDC = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ];

        const ownerMarvel = 'Marvel';
        const heroesMarvel = getHeroesByOwner(ownerMarvel);

        const ownerDC = 'DC';
        const heroesDC = getHeroesByOwner(ownerDC);

        expect( testHeroesMarvel ).toEqual( heroesMarvel );
        expect( testHeroesDC ).toEqual( heroesDC );
    });

    test('getHeroeById debe retornar un undefine si el ID no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);

        expect( heroe ).toBeUndefined()
    });

    test('getHeroesByOwner debe retornar un arreglo vacío si el OWNER no existe', () => {
        const owner = 'Other';
        const heroes = getHeroesByOwner(owner);

        expect( heroes ).not.toBeFalsy();
        expect( heroes ).toHaveLength(0);
    });
});