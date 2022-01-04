import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAkyi5a-tsWftCyVCFbHg-xyKrpoxvGer0",
    authDomain: "project-manager-planner.firebaseapp.com",
    projectId: "project-manager-planner",
    storageBucket: "project-manager-planner.appspot.com",
    messagingSenderId: "508791099742",
    appId: "1:508791099742:web:a8d4549f4b543d5a317fcf",
    measurementId: "G-9YN3DXYG5B"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  firebase.firestore().settings({ timestampsInSnapshots: true });


  export default firebase;