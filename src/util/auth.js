import firebase from 'firebase'

export default class Auth {
   
    static login(email, password){
        console.log(' ------------------- Auth login');
        return new Promise((resolve, reject) => {
            var result;
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                resolve(true)
            })
            .catch((error) => {
                resolve(error)
                }
            );    
        })
    }

    static signup(email, password, password2){
        console.log(' ------------------- Auth signup');
        return new Promise((resolve, reject) => {
            if(password != password2){
                resolve('Passwoard mismatch!')
            }
            var result;
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                resolve(true)
            })
            .catch((error) => {
                resolve(error)
                }
            );    
        })
    }

}
