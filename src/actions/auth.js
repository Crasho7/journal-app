import Swal from 'sweetalert2';
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types';
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => async dispatch => {
    dispatch(startLoading());
    try {

        const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);

        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());

    } catch (error) {
        console.log(error);
        dispatch(finishLoading());
        Swal.fire('error', error.message, 'error');
    }

}

export const startRegisterWithEmailAndPasswordAndName = (email, password, name) => async dispatch => {

    try {

        const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);

        await user.updateProfile({ displayName: name })

        dispatch(login(user.uid, user.displayName));
    } catch (error) {
        console.log(error);
        Swal.fire('error', error.message, 'error');
    }
}

export const startGoogleLogin = () => async dispatch => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);

    dispatch(login(user.uid, user.displayName));
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => async dispatch => {
    try {
        await firebase.auth().signOut()

        dispatch(logout());
        dispatch(noteLogout());
    } catch (error) {
        console.log(error);
    }
}

const logout = () => ({
    type: types.logout
})