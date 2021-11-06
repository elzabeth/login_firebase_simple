import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9eDffgbCqaYTwgifVF2qtQRKEJ2mp9b4",
    authDomain: "react-auth-simple-4ed2a.firebaseapp.com",
    projectId: "react-auth-simple-4ed2a",
    storageBucket: "react-auth-simple-4ed2a.appspot.com",
    messagingSenderId: "311047760275",
    appId: "1:311047760275:web:3fd9c3a88a1bfb8026a066"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;