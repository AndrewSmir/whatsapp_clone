import {auth, provider} from "../firebase";

const SET_USER = '@@authReducer/SET_USER'

const initialState = {
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.userData
            }

        default:
            return state
    }
}

export default authReducer

//Actions
const setUser = (userData) => ({type: SET_USER, userData})

//Thunks

export const getUserAuthData = () => async dispatch => {
    const userData = await auth.signInWithPopup(provider)
    dispatch(setUser(userData))
}