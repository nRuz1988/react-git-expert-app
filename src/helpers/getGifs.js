export const getGifs = async(categoria) => {
        
    const key = 'bpCnXs59iP4l92hBLwHKwNS52sJPEt1V';
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=';

    const response = await fetch(`${url}${key}&q=${categoria}`);
    const {data} = await response.json();
    const gifs = data.map(img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url

    }));
    return  gifs;
}