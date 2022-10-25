import { useState } from 'react';
import { AddCategoria,GifGrid } from './components';



export const GifExpertApp = () => {

    const [categorias,setCategoria] = useState([]);

    const onAddCategoria = (newCateria)=>{

        //Si ya existe el valor en el arreglo, que no lo agregue
        if(categorias.includes(newCateria)) return;

        setCategoria([newCateria,...categorias]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategoria 
                    /* Opcion 1
                    Se envia la funcion setCategoria() como parametro
                    setCategoria= {setCategoria}*/
                    onNewCategoria={(value) => onAddCategoria(value)}
            />
                {
                    categorias.map(categoria =>(
                            <GifGrid 
                                key={categoria} 
                                categoria = {categoria}
                            />
                    ))
                }
        </>
    )
}