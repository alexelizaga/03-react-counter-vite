import axios from 'axios';

const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1',
    params: {
        api_key: 'AMjENDiMI2gHR27DoMtM8C33ucA3Ao0X'
    }
})

export default giphyApi;