
import {GifItem} from './GifItem';
import {useFechGifs} from '../hooks/useFechGifs';

export const GifGrid = ({categoria}) => {

      /*Hooks => No es mas que una funcion que regresa algo,ya sea personlizada 
      o de nativas de react */ 
     const {imagenes, isLoading} = useFechGifs(categoria);   

    //<> => fragmento, sirve para  cologar mas de un objeto html 
    return (
       <>
            <h3>{categoria}</h3> 
            {
                /*
                    && => Es un and logico, es decir si isLoading es true cumple la condicion
                    y se muestra el h2 de lo contrario no hace nada 
                */
                isLoading && (<h2>Cargando....</h2>)
            }

            <div className='card-grid'>
                {
                    /*{...img} --> Esto Sirve para esparcir todas las 
                    propiedades, cuando son muchas*/ 
                    imagenes.map(( img ) =>(
                        <GifItem 
                            {...img}
                        />
                    ))
                }
            </div>
       </> 
    )

}