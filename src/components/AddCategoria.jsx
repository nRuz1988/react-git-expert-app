
import { useState } from 'react';

/*Opcion 1
{setCategoria} => Se hace la desestructuración de la funcion setCategoria()
export const AddCategoria = ({setCategoria}) => {*/
export const AddCategoria = ({onNewCategoria}) => {

    const [inputValue,setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();

        //Valida que en input digite mas de 1 caracter
        if(inputValue.trim().length <= 1) return;
        /*Opcion 1
        categorias => Es un callback  de UseState 
        setCategoria(categorias => [inputValue,...categorias]);*/

        onNewCategoria(inputValue.trim().toUpperCase());

        //setea la campo
        setInputValue('');
    }


    return (
        <form onSubmit={event => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar"
                value = {inputValue}
                onChange={event => onInputChange(event)}
            />
        </form>
    )
}