import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas de <FirstApp />', () => {
    // test('Debe hacer match con el snapshot', () => {
    //     const title = 'Hooolaaa soy Goku!';
    //     const {container, getByText} = render(<FirstApp title={title} />);

    //     expect(container).toMatchSnapshot();
    //     expect( getByText(title) ).toBeTruthy();
    // });

    test('debe de mostrar el título en un H1', () => {
        const title = 'Hola, so Goku';
        const { container, getByText, getByTestId } = render(<FirstApp title={title}/>);

        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector("h1");
        // expect( h1.innerHTML ).toContain( title );

        expect( getByTestId("test-title").innerHTML ).toContain( title );
    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );

        expect( getAllByText(subTitle) ).toBeTruthy();
    });
});