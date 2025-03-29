import {$authHost , $host} from './index';
import {jwtDecode} from 'jwt-decode';

export const login = async (email, password)=>{
    const {data} = await $host.post('api/user/', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async ()=>{
    const {data} = await $authHost.post('api/user/')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}