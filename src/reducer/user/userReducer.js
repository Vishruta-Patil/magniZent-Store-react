import {USER_LOADING, LOGIN_STATUS, GET_TOKEN} from "./userConstants"

export const userReducer = (state,action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                userLoading: !state.userLoading
            }
        case LOGIN_STATUS:
            return {
                ...state,
                // loginStatus: localStorage.getItem("token") !== null
                loginStatus: !state.loginStatus
            }
        case GET_TOKEN: 
        return {
            ...state,
            tokenAuth: action.payload
        }
    }
}