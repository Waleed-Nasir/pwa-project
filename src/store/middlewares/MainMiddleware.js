import { Actions ,AuthActions} from '../actions';
import firebase, { database } from '../../config'

export default class MaunMiddleware {

    static Addpost(payload) {
        return async (dispatch) => {
            dispatch(Actions.AddpostCall())
            await  firebase.database().ref(`adds/${payload.user.uid}`).push(payload).then(()=>{
            dispatch(Actions.AddpostSuccess({ message: 'Post Added' }));
            dispatch(AuthActions.ShowMassgaeCall());
            dispatch(AuthActions.ShowMassgaeSuccess({ message: 'Post Created Successfully'}))}
            ).catch(error => {
                dispatch(Actions.AddpostFailed(error));
                dispatch(AuthActions.ShowMassgaeCall());
                dispatch(AuthActions.ShowMassgaeSuccess(error))}
            )
        }
    }
    static GetAdds() {
        return (dispatch) => {
            dispatch(Actions.GetpostCall())
          firebase.database().ref(`adds/`).on('value', (adds) =>
            {
                var getsAdd = adds.val()
                dispatch(Actions.GetpostSuccess(getsAdd))
            })
    }
}
}