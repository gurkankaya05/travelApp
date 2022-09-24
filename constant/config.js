import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import  'firebase/compat/firestore'
import  'firebase/compat/storage'

const  firebaseConfig={
    apiKey: "AIzaSyBk3D9URWNt0haZsaGG4cVMh0OW4LSBOA8",
    authDomain: "travelapp-fa9ea.firebaseapp.com",
    projectId: "travelapp-fa9ea",
    storageBucket: "travelapp-fa9ea.appspot.com",
    messagingSenderId: "547490487547",
    appId: "1:547490487547:web:fde5435ce76693bbd9645e"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};