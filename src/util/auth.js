import firebase from 'firebase'

export default class Auth {

    constructor(){
        firebase.initializeApp({
            apiKey: "AIzaSyCtRqoLcxKx6WIxhQ-edfaO1WqqjLwXkjw",
            authDomain: "adtree-bc7dc.firebaseapp.com",
            databaseURL: "https://adtree-bc7dc.firebaseio.com/",
            storageBucket: "adtree-bc7dc.appspot.com",
            });
            firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            } else {
                this.setState({ loggedIn: false })
            }
        })

    }
    
    static login(email, password){
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

}
