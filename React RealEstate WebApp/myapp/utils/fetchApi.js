import axios from 'axios';

export const baseUrl = "https://bayut.p.rapidapi.com";




export const fetchApi = async (url) => {
    const response = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e2d7fe412dmshe519a26ab324d8ep1cf56cjsna2d70bfe3f66'
          }
    })
    return response.data;
}