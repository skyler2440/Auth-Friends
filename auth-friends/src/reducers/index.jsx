import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions'

export const initialState = {
    token:'',
    user: null,
    isAuth: false,
    isLoading: false,
    errors: null,
    isSuccess: false

}

export const reducer = (state=initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case LOGIN_START:
            return{
                ...state,
                isLoading: true,
                errors: null,
                isAuth: false,
                isSuccess: false
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading: false,
                isAuth: true,
                token: payload.payload,
                user: payload.user,
                isSuccess: true
            }
        case LOGIN_FAIL:
            return{
                ...state,
                errors: payload,
                isLoading: false
            }
    }
}