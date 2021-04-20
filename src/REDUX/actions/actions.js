import * as types from './types'
import {reducers} from '../reducers'

export function getChatLogsRequest(payload){
    return{
        type:types.GET_CHAT_CONTENT,
        payload
    }
}

export function logInRequest(token){
    return{
        type:types.LOGIN_REQUEST,
        payload:token
    }
}

export function logInFailed(error){
    return{
        type:types.LOGIN_FAILED,
        payload:error
    }
}

export function logOutRequest(goodbye){
    return{
        type:types.LOGOUT,
        payload:goodbye
    }
}

export function loadUserInfoRequest(userInfo){
    return{
        type:types.GET_PROFILE,
        payload:userInfo
    }
}
export function loadUserInfoFailed(error){
    return{
        type:types.GET_PROFILE_FAILED,
        payload:error
    }
}


export function login(userData){
    return dispatch=>{
        try {
            reducers.loginStore.userData.map((loginData)=>{
                if (userData.username === loginData.name && userData.password === loginData.password) {
                    dispatch(logInRequest({ userName:loginData.name,
                    token:loginData.token}))
                    
                } 
            })
        } catch (error) {
            dispatch(logInFailed(error))
        }
    }
}