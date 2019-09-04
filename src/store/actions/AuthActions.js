import {
    SIGNUP_CALL,SIGNUP_FAIL,SIGNUP_SUCCESS,SIGN_FAIL,SIGN_SUCCESS,SIGN_CALL
} from '../constants'


export default class AuthActions {

    static SignInCall() {
        return {
            type: SIGN_CALL,
        }
    }
    static SignInSuccess(data) {
        return {
            type: SIGN_SUCCESS,
            payload: data
        }
    }
    static SignInFailed(data) {
        return {
            type: SIGN_FAIL,
            payload: data
        }
    }
    static SignUpCall(data) {
        return {
            type: SIGNUP_CALL,
            payload: data
        }
    }
    static SignUpSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }
    static SignUpFailed(data) {
        return {
            type: SIGNUP_FAIL,
            payload: data
        }
    }
}