import { render,screen } from "@testing-library/react";
import {GifItem}  from '../../src/components'

describe('Test Component GifItem ', ()=>{

    const id     = '123';
    const titulo  = 'test';
    const url     = 'http://test.com/img.jpg';
        
    test('test  function GifItem Snapshot', () =>{

        const {container} = render(<GifItem 
            id={id}
            titulo={titulo}
            url={url}
        />);
        //Modificar el Snapshot -> npm test -- -u
        expect(container).toMatchSnapshot();
    });

    test('test  function GifItem Validando url y titulo de la img', () =>{

        render(<GifItem id={id}titulo={titulo}url={url}/>);
        /*Esto es como console log que muestra todo contenido del render
        screen.debug();*/

        /*Opcion 1
            expect(screen.getByRole('img').src).toBe(url);*/

        //opcion 2
        const {url,alt} = screen.getByRole('img');
        expect(url).toBe(url);
        expect(alt).toBe(titulo);

    });
    test('test  function GifItem Exita titulo en el componente', () =>{   
        render(<GifItem id={id}titulo={titulo}url={url}/>);
        expect(screen.getByText(titulo)).toBeTruthy();
    }); 
});