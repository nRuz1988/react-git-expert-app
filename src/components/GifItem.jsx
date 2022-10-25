
import React from 'react'
import propTypes from 'prop-types';

export const GifItem = ({id,titulo,url}) => {
  return (
    <div className='card'>
        <p>{titulo}</p>
        <img 
            src ={url}
            alt={titulo}
        />
    </div>
  )
}


/*Si desde el archivo padre(main) no envia el Props titulo  este sentecia se lo 
asigna por defauld*/
GifItem.defaultProps = {
  titulo : 'No existe titulo',
  url    : '',
}

//Sirve para validar el tipo y valor del campos (prototype)
GifItem.propTypes ={
  id     : propTypes.string,
  titulo  : propTypes.string.isRequired,
  url     : propTypes.string.isRequired,
}