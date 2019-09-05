import { AuthActions } from '../actions';
import firebase, { database } from '../../config'

export default class AuthMiddleware {

    static SignUp(payload) {
        const { email, Name, password } = payload
        return async (dispatch)  => {
            dispatch(AuthActions.SignUpCall())
            await  firebase.auth().createUserWithEmailAndPassword(email, password).then(async (getDTA)  => {
                var user = await getDTA
                localStorage.setItem('UID',user.user.uid)
                firebase.database().ref('/users/').child(user.user.uid).set({
                    Name,
                    email,
                    password,
                })
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
                firebase.database().ref(`users/${user.user.uid}`).on('value',async (usern) => {
                    let data = await usern.val()
                    // data = Object.values(data)
                    localStorage.setItem('user',data)
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
                        localStorage.setItem('user',usern.val())
                        dispatch(AuthActions.CheckUserSuccess(usern.val()))
                    })
                }
                else{
                    dispatch(AuthActions.CheckUserFail())
                }
                })
        }
    }
}