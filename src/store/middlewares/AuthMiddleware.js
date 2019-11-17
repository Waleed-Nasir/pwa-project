import { AuthActions, Actions } from '../actions';
import firebase, { database } from '../../config'

export default class AuthMiddleware {

    static SignUp(payload) {
        const { email, Name, password } = payload
        return async (dispatch)  => {
            dispatch(AuthActions.SignUpCall())
            await  firebase.auth().createUserWithEmailAndPassword(email, password).then(async (getDTA)  => {
                var user = await getDTA
                localStorage.setItem('UID',user.user.uid)
                localStorage.setItem('isAuthenticated',true)
                firebase.database().ref('/users/').child(user.user.uid).set({
                    Name,
                    email,
                    password,
                    uid:user.user.uid,
                    active:true
                })
                localStorage.setItem('user',JSON.stringify({ email, Name,uid:user.user.uid}))
                dispatch(AuthActions.SignUpSuccess({message:'SignUp Success full'}))
            }
            ).catch(error => {
                    dispatch(AuthActions.SignUpFailed(error))
                })
        }
    }
    static SignIn(payload) {
        const { email, password } = payload
        return async (dispatch) => {
            dispatch(AuthActions.SignInCall())
            await  firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
                localStorage.setItem('UID',user.user.uid)
                firebase.database().ref('/users/').child(user.user.uid).set({active:true })
                firebase.database().ref(`users/${user.user.uid}`).on('value',async (usern) => {
                    let data = await usern.val()
                    // data = Object.values(data)
                    localStorage.setItem('user',JSON.stringify(data))
                    localStorage.setItem('isAuthenticated',true)
                    dispatch(AuthActions.SignInSuccess({data,message:'Sigin Success full'}))
                })
            }
            )
                .catch(error => {
                    dispatch(AuthActions.SignInFailed(error))
                })
        }
    }
    static CheckCurrentUser() {
        return  (dispatch) => {
            dispatch(AuthActions.CheckUser())
              firebase.auth().onAuthStateChanged(user=>{
                if(user && localStorage.getItem('UID')){
                    // var users = firebase.auth().currentUser;
                    firebase.database().ref(`users/${user.uid}`).on('value', (usern) => {
                        var data = usern.val()
                        localStorage.setItem('user',JSON.stringify(data))
                        data[`uid`] = user.uid
                        dispatch(AuthActions.CheckUserSuccess(data))
                    })
                }
                else{
                    dispatch(AuthActions.CheckUserFail())
                }
                })
        }
    }
    static ShowMessage(data) {
        return  (dispatch) => {
            dispatch(AuthActions.ShowMassgaeCall())
                    dispatch(AuthActions.ShowMassgaeSuccess(data))
        }
    }
    static SignOut(user) {
        return  (dispatch) => {
            dispatch(AuthActions.LogoutCall())
            firebase.auth().signOut().then((SC)=>{
                firebase.database().ref('/users/').child(user.uid).set({active:false })
                localStorage.setItem('user','{}')
                localStorage.setItem('isAuthenticated',false)
            dispatch(AuthActions.LogoutSuccess())
            }
            ).catch((err)=>{
            dispatch(AuthActions.LogoutFailed({message:err}))
                dispatch(AuthActions.ShowMassgaeCall());
                 dispatch(AuthActions.ShowMassgaeSuccess({message:err}))})
        }
    }
    static UploadUserPic(file,i) {
        return (dispatch) => {
            dispatch(Actions.AddUserCall())
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
}