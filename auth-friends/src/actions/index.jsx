import {axiosWithAuth} from '../utils/axiosWithAuth'
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const signIn = credentials => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
    .post('/login', credentials)
    .then(
        res => {
            console.log('login res',res.data.payload)
            localStorage.setItem('token', (res.data.payload))
            dispatch({type: LOGIN_SUCCESS, payload: res.data})
        }
    )
    .catch(
        err => {
            console.log('error response login', err.response)
        }    
    )
}