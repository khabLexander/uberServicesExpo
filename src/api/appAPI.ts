import axios from 'axios';
import { enviroment } from '../../enviroment';

export const appAPI = axios.create({
    baseURL: `${enviroment.API_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
})

