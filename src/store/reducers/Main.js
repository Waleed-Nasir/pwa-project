import {
    GET_POST_SUCCESS,GET_POST_CALL
} from '../constants';

const initialState = {
   addpost:[]
}

export default function Main(state = initialState, action) {
    switch (action.type) {
        case GET_POST_CALL:
            state = {
                ...state,
            }
            break;
        case GET_POST_SUCCESS:
                state = {
                    ...state,
                    addpost:action.payload
                }
                break;
        default:
            break;
    }
    return state;
}