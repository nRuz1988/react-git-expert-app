import { fireEvent, render,screen } from "@testing-library/react";
import {AddCategoria} from '../../src/components/AddCategoria';

describe('Test Component AddCategoria ', ()=>{

    const inputValue = 'BUBIS';
    test('test  function Validar el valor de input text', () =>{

        render(<AddCategoria  onNewCategoria= {()=>{}}/>);
        /*
            - Simula un campo de texto
            -Como existe solo un input text se puede usar getByRole
        */
        const input = screen.getByRole('textbox');
        /*
            fireEvent => Sirve para simular eventos, este caso esta usando input
            que es como si el usuario escribira en el input text, 
        */
        fireEvent.input(input,{target:{value:inputValue}});
        //screen.debug(); //Sirve para ver el codigo html del componente
        //compra el valor del input text
        expect(input.value).toBe(inputValue); 
    });

    test('test  function Validar el evento submit del formulario con valor', () =>{
            
        /*
            jest.fn => Es una funcion mock es decir es una funcion de simulacion
        */
        const onNewCategoria = jest.fn();

        render(<AddCategoria  onNewCategoria= {onNewCategoria}/>);
        const input = screen.getByRole('textbox');
        //El formulario debe tener un aria-label para que se pueda inicialziar
        const form = screen.getByRole('form');
        fireEvent.input(input,{target:{value:inputValue}});
        //Simula el submit del formulario
        fireEvent.submit(form);
        //Se compara con el valor vacio ya que el submit lo limpia
        expect(input.value).toBe('');

        //esto Valida si la funcion se esta llamando dentro del componete
        expect(onNewCategoria).toHaveBeenCalled();
        //Valida cuanta veces se debe llamar la funcion dentro del componete
        expect(onNewCategoria).toHaveBeenCalledTimes(1);
        //Valida que funcion se llame con el valor del inputValue 
        expect(onNewCategoria).toHaveBeenCalledWith(inputValue);
     
    });
    
    test('test  function Validar el evento submit del formulario sin valor', () =>{
        const onNewCategoria = jest.fn();

        render(<AddCategoria  onNewCategoria= {onNewCategoria}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(onNewCategoria).toHaveBeenCalledTimes(0);
        //esto Valida si la funcion no a sido llamando dentro del componete
        expect(onNewCategoria).not.toHaveBeenCalled();
        
    });    
});