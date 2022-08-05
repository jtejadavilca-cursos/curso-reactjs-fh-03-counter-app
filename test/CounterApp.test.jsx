// Tarea
// Pruebas en el <CounterApp />

import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

// test: debe de hacer match con el snapshot
// test: debe de mostrar el valor inicial de 100 <CounterApp value={100} />
describe('Pruebas en el <CounterApp />', () => {

    test('debe de hacer match con el snapshot', () => {
        const value = 10;
        const { container } = render(<CounterApp value={value} />);

        expect( container ).toMatchSnapshot();
        expect( screen.getByText(value) ).toBeTruthy();
    });

    test('debe de mostrar el valor inicial de 100 <CounterApp value={100}', () => {
        const value = 100;
        const { container } = render(<CounterApp value={value} />);

        expect( screen.getAllByRole('heading', {level: 1})[1].innerHTML.trim() ).toContain( `${value}` );
        expect( screen.getAllByText(`${value}`).length ).toBe(1);
    });

    test('debe de incrementar con el botón +1', () => {
        const value = 10;
        render(<CounterApp value={value} />);

        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('debe de derementar con el botón -1', () => {
        const value = 10;
        render(<CounterApp value={value} />);

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('debe de reseteaer con el botón Reset', () => {
        const value = 10;
        render(<CounterApp value={value} />);


        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByText('12') ).toBeTruthy();
        fireEvent.click( screen.getByText('Reset') );

        expect( screen.getByText('10') ).toBeTruthy();
    });
});