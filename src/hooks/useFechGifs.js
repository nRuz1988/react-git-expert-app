import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs';

export const useFechGifs = (categoria) => {

    const [imagen,setImagen] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImagen = async() =>{
        const newImagen = await getGifs(categoria);
        setImagen(newImagen);
        setIsLoading(false);
    };
    /*
    useEffect => Es un hook de React que sirve para ejecutar efecto secundarios, es 
    decir se ejecuta algun proceso cuando algo sucede dentro del componente 
    useEffect(funcion,lista de dependecia?)
    dependecia => [] Si esta vacia solo se ejecuta una vez al moneto de crear el componente
    */ 
    useEffect(()=>{
        getImagen()//Funcion
    },[]);
  
    return{
        imagenes : imagen,
        isLoading
    }
}
