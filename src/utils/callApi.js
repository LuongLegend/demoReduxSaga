
import { API_HOST } from '../constants/config'
import axios from 'axios'

//call-api
export default async function callApi(endpoint, method = 'GET', body, config) {
    try {
        let dataQuery = { data: body }
        if (method === 'GET') {
            dataQuery = { params: body }
        }
        
        const response = await axios({
            method: method,
            url: `${endpoint}`,
            baseURL: API_HOST,
            ...dataQuery,
            ...config
        })
        return response.data
    } catch (err) {
        console.log('err api', err);
    }
}