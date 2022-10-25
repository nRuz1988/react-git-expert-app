import { render,screen } from "@testing-library/react";
import {GifGrid} from '../../src/components/GifGrid';
import {useFechGifs} from '../../src/hooks/useFechGifs';


jest.mock('../../src/hooks/useFechGifs');

describe('Test Component GifGrid ', ()=>{

    const categoria = 'bubis';

    test('Test  validando carga inicial y loading', () =>{

        useFechGifs.mockReturnValue({
            imagenes  : [],
            isLoading : true
        });

        render(<GifGrid categoria={categoria} />);
        expect(screen.getByText(categoria));
        expect(screen.getByText('Cargando....'));
        
    });

    test('Test visualizar item cuando se carga las imagenes - function useFechGifs', () =>{

        const gifs = [{
            id : 'abc123',
            title : 'bubis',
            url : 'http://localhost/bubis.jpg'
        }];

        useFechGifs.mockReturnValue({
            imagenes  : gifs,
            isLoading : false
        });
        render(<GifGrid categoria={categoria} />);
        expect(screen.getAllByRole('img').length).toBe(1);
    });    
});

