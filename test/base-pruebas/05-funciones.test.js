import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( testUser ).toEqual( user );
    });

    test('getUserActivo debe de retornar un objeto', () => {
        const nombre = 'José';
        const testUser = {
            uid: 'ABC567',
            username: nombre
        };

        const user = getUsuarioActivo('José');

        expect( testUser ).toEqual( user );
    });
});