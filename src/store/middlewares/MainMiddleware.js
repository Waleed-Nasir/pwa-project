import { Actions ,AuthActions} from '../actions';
import firebase, { database } from '../../config'

export default class MaunMiddleware {

    static Addpost(payload) {
        return async (dispatch) => {
            dispatch(Actions.AddpostCall())
            await  firebase.database().ref(`adds/`).push(payload).then((da)=>{
                firebase.database().ref(`users/${payload.user.uid}/myadds`).push(da.key)
                firebase.database().ref(`adds/${da.key}`).child('key').set(da.key)
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
    static GetPeoples() {
        return (dispatch) => {
            dispatch(Actions.GetPeopleCall())
          firebase.database().ref(`users/`).on('value', (adds) =>
            {
                var getUser = adds.val()
                dispatch(Actions.GetPeopleSuccess(getUser))
            })
    }
    }
    static UploadDoc(file,i) {
        return (dispatch) => {
            const ref = firebase.storage().ref();
            const name = (+new Date()) + '-' + file.name;
            const metadata = {
                contentType: file.type
            };
            const task = ref.child(name).put(file, metadata);
            task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then((url) => {
                firebase.database().ref(`content/`).push(url)
                // dispatch(AuthActions.ShowMassgaeSuccess({ message: `Content Uploaded`})) 
                dispatch(AuthActions.Uploaded(url))
            })
            .catch((err)=> dispatch(AuthActions.ShowMassgaeSuccess({ message: err})) );
}
}
/////////////////////////user////////////////////////////////////
static userUpdate(payload) {
    return async (dispatch) => {
        dispatch(Actions.AddUserCall())
        await  firebase.database().ref(`users/${payload.uid}`).set(payload).then((da)=>{
            localStorage.setItem('user',JSON.stringify(payload))
        dispatch(Actions.AddUserSuccess(payload));
        dispatch(AuthActions.ShowMassgaeCall());
        dispatch(AuthActions.ShowMassgaeSuccess({ message: 'Update Successfully'}))}
        ).catch(error => {
            dispatch(Actions.AddUserFail(error));
            dispatch(AuthActions.ShowMassgaeCall());
            dispatch(AuthActions.ShowMassgaeSuccess(error))}
        )
    }
}
}


