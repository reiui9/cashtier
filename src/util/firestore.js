// // const firebase = require("firebase/app");
// // require("firebase/firestore");

// // const admin = require('firebase-admin');

// // import firebase from 'firebase'

// // const db = firebase.firestore();

// const firebase = require("firebase");
// // Required for side-effects
require("firebase/firestore");


export default class Firestore {

//     constructor(){
//         console.log(' ------------------- Firebase Constructed');
//         db = firebase.initializeApp({
//             apiKey: "AIzaSyCtRqoLcxKx6WIxhQ-edfaO1WqqjLwXkjw",
//             authDomain: "adtree-bc7dc.firebaseapp.com",
//             databaseURL: "https://adtree-bc7dc.firebaseio.com/",
//             storageBucket: "adtree-bc7dc.appspot.com",
//         }).database();
//         // admin.initializeApp({
//         //     credential: admin.credential.applicationDefault()
//         // });
//         // db = admin.firestore();
//     }

//     static initUserInfo(email){
//         console.log('------------------------ initUserInfo : ' + email);
//         // make new user info
//         var docRef = firebase.firestore().collection('cashtierDb').doc(email);
//         if(getUserInfo(email)){
//             var setAda = docRef.set({
//                 userId: email,
//                 tier: 'A1',
//                 coin: 0,
//                 sincerity: 5,
//                 visit_date: Date.now(),
//             });
//         }
//         else{
//             console.log("user data Already exist")
//         }
//     }

//     static getUserInfo(email){
//         console.log('getUserInfo : ' + email);
//         // fetch user info
//         var docRef = db.collection('cashtierDb').doc(email);
//         console.log(docRef.email, '=>', docRef.data());
//         return true;
//         // var queryRef = docRef.where('email', '==', email);

//         // db.collection('cashtierDb').get()
//         //     .then((snapshot) => {
//         //         snapshot.forEach((doc) => {
//         //             console.log(doc.id, '=>', doc.data());
//         //         });
//         //     })
//         //     .catch((err) => {
//         //     console.log('Error getting documents', err);
//         // });
 

//     }

    



}