import { Actions ,AuthActions} from '../actions';
import firebase, { database } from '../../config'

export default class MaunMiddleware {

    static Addpost(payload,files) {
        return async (dispatch) => {
            dispatch(Actions.AddpostCall())
            await  firebase.database().ref(`adds/`).push(payload).then((da)=>{
                firebase.database().ref(`users/${payload.user.uid}/myadds`).push(da.key)
                firebase.database().ref(`adds/${da.key}`).child('key').set(da.key)
                        for (var i = 0; i < files.length; i++) {
                                    var imageFile = files[i];
                                    dispatch(this.UploadDoc(imageFile,da.key,i+1))
                             }
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
    static UploadDoc(file,key,i) {
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
                firebase.database().ref(`adds/${key}/`).child('images').push(url)
                dispatch(AuthActions.ShowMassgaeSuccess({ message: `Content Uploaded ${i}`})) 
            })
            .catch(console.error);
}
}
}


