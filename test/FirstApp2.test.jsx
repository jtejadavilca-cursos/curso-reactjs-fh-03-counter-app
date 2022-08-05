import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruyebas de <FirstApp />', () => {

    const title = 'Hola, soy Goku';
    const subTitle = 'soy un subtítulo';

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={title}/>);
        expect( container ).toMatchSnapshot();

    });

    test('debe de mostrar elmensaje "Hola, soy Goku"', () => {
        render(<FirstApp title={title}/>);
        expect(screen.getByText( title )).toBeTruthy();
    });

    test('debe de mostrar el titulo en un H1', () => {
        render(<FirstApp title={title}/>);
        
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain( title );
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        render(<FirstApp title={title} subTitle={subTitle}/>);
        
        expect( screen.getAllByText(subTitle).length ).toBe( 2 );
    });
});