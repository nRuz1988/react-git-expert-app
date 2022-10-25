import { renderHook,waitFor } from "@testing-library/react";
import {useFechGifs} from '../../src/hooks/useFechGifs';

describe('Test hoooks usefechGif ', ()=>{

    const categoria = 'bubis';
    test('Test  Estado inicial ', () =>{

        
        //renderHook => Sirve para ejecutar un hook
        const {result} = renderHook(()=> useFechGifs(categoria));
        //console.log('resul',result);//resul { current: { imagenes: [], isLoading: true } }
        const {imagenes,isLoading} = result.current;
        expect(imagenes.length).toBe(0);
        expect(isLoading).toBeTruthy();
            
    });

    test('Test  Validar que arroje un resultado ', async() =>{

        
        const {result} = renderHook(()=> useFechGifs(categoria));
        /*
        waitFor => Es una promesa que indica que debe esperar un resultado de una funcion que
        tiene una condicion se deba cumplir */
        await waitFor(
            //Esta condicion indica que las imagenes sea mayor a cerp
            ()=> expect(result.current.imagenes.length).toBeGreaterThan(0)
        );

        const {imagenes,isLoading} = result.current;
        expect(imagenes.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });
    
});