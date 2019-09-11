import {
    ADD_POST_CALL, ADD_POST_SUCCESS,ADD_POST_FAIL,GET_POST_SUCCESS,GET_POST_CALL,ADD_USER_UPDATE_CALL, ADD_USER_UPDATE_SUCCESS,ADD_USER_UPDATE_FAIL
} from '../constants'


export default class Actions {

    static AddpostCall(data) {
        return {
            type: ADD_POST_CALL,
            payload: data
        }
    }
    static AddpostSuccess(data) {
        return {
            type: ADD_POST_SUCCESS,
            payload: data
        }
    }
    static AddpostFail(data) {
        return {
            type: ADD_POST_FAIL,
            payload: data
        }
    }
    static GetpostCall() {
        return {
            type: GET_POST_CALL,
        }
    }
    static GetpostSuccess(data) {
        return {
            type: GET_POST_SUCCESS,
            payload: data
        }
    }
    static AddUserCall(data) {
        return {
            type: ADD_USER_UPDATE_CALL,
        }
    }
    static AddUserSuccess(data) {
        return {
            type: ADD_USER_UPDATE_SUCCESS,
            payload: data
        }
    }
    static AddUserFail(data) {
        return {
            type: ADD_USER_UPDATE_FAIL,
            payload: data
        }
    }
}