import firebase from "firebase"



const firebaseConfig = {
  apiKey: "AIzaSyAivanX5iamgE7cvYZgDdM77rsxJKtEbRQ",
  authDomain: "slack-clone-fb7db.firebaseapp.com",
  projectId: "slack-clone-fb7db",
  storageBucket: "slack-clone-fb7db.appspot.com",
  messagingSenderId: "183642795162",
  appId: "1:183642795162:web:6c7cc89019fc6bfb180323"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()



export {auth, provider};
export default db;