import axios from 'axios';
import { enviroment } from '../../enviroment';


export const authenticationAPI = axios.create({
    baseURL: `${enviroment.API_URL_AUTHENTICATION}`,
})

