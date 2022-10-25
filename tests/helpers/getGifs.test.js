import {getGifs} from '../../src/helpers/getGifs';

describe('Test helpers GifItem ', ()=>{

    test('test  function getGifs', async() =>{

        const gits = await getGifs('bubis');
        //valida que el arreglo tenga mas de 1 objeto
        expect (gits.length).toBeGreaterThan(0);
        //Valida el objeto que tiene el arreglo
        expect(gits[0]).toEqual({
            id : expect.any(String),
            title : expect.any(String),
            url : expect.any(String),
        })
    
    });        
});