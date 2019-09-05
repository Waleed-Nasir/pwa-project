import {
    SIGNUP_CALL, SIGNUP_FAIL, SIGNUP_SUCCESS, SIGN_FAIL, SIGN_SUCCESS, SIGN_CALL,CHECK_USER_CALL,CHECK_USER_SUCCESS,CHECK_USER_FAIL
} from '../constants';

const initialState = {
   loader:false,
   isAuthenticated:false,
   message:'',
   error:false,
   user:{}
}

export default function Auth(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_CALL:
            state = {
                ...state,
                loader: true,
                message:'',
                error:false
            }
            break;
        case SIGNUP_SUCCESS:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:true,
                error:false
            }
            break;
        case SIGNUP_FAIL:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:false,
                error:true

            }
            break;
        case SIGN_CALL:
            state = {
                ...state,
                loader: true,
                message:'',
                error:false
            }
            break;
        case SIGN_SUCCESS:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:true,
                error:false
            }
            break;
        case SIGN_FAIL:
            state = {
                ...state,
                loader: false,
                message: action.payload.message,
                isAuthenticated:false,
                error:true

            }
            break;
            case CHECK_USER_CALL:
                state = {
                    ...state,
                    isAuthenticated:false
                }
                break;
                case CHECK_USER_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                isAuthenticated:true,

            }
            break;
            case CHECK_USER_FAIL:
            state = {
                ...state,
                user: {},
                isAuthenticated:false,

            }
            break;
        default:
            break;
    }
    return state;
}