import axios from 'axios';

const KEY = 'AIzaSyDstTlsl8wiGTewuIU52EyaSGXDzgln3SM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});