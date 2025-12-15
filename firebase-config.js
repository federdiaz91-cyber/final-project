// firebase-config.js
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD5TVtZAi2JoJIamPrjPAaY3q7vXxK2Cfs",
    authDomain: "final-project-20cc8.firebaseapp.com",
    projectId: "final-project-20cc8",
    storageBucket: "final-project-20cc8.firebasestorage.app",
    messagingSenderId: "13409945852",
    appId: "1:13409945852:web:d3cecb9d9fe8aa21872f79"
};

// Initialize Firebase
// This only needs to run once.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global variable for the Firestore database connection
// We define 'db' here so it is available to all files that load this script.
const db = firebase.firestore();

// Note on error: 
// The check 'if (!firebase.apps.length)' prevents the common error:
// "Firebase: Firebase App named '[DEFAULT]' already exists."