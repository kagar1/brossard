import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyDxdHtKcYVumCY3Ql39wNh7wnRb0n-Jc2A",
    authDomain: "bromanager-9fc75.firebaseapp.com",
    databaseURL: "https://bromanager-9fc75.firebaseio.com",
    projectId: "bromanager-9fc75",
    storageBucket: "bromanager-9fc75.appspot.com",
    messagingSenderId: "533070802127"
};

let app = Firebase.initializeApp(config);
export const db = app.database();