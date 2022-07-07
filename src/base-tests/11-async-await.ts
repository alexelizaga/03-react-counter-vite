
import { giphyApi } from '../apis';
import { GiphyResponse } from '../interfaces/giphyResponse';

export const getImagen = async(): Promise<string> => {

    try {
        const { data } = await giphyApi.get<GiphyResponse>('/gifs/random');
        const { url } = data.data.images.original;

        return url;
    } catch (error) {
        console.error(error)
        return 'Image not found';
    }  
    
}
