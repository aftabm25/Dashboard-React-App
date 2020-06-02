import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCXdAms-eKqGf9JNgcSkziVPTOZBHsB3F8",
    authDomain: "aftab-planner-app.firebaseapp.com",
    databaseURL: "https://aftab-planner-app.firebaseio.com",
    projectId: "aftab-planner-app",
    storageBucket: "aftab-planner-app.appspot.com",
    messagingSenderId: "379058628857",
    appId: "1:379058628857:web:c2e539d23b1066ee889a28",
    measurementId: "G-NMGTCF6TM3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  firebase.firestore().settings( {timestampsInSnapshots : true})
  export default firebase
