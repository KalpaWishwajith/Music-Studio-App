// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCxaDBzG7Yl8S-63zMBj24gD0x6JNbws4",
  authDomain: "music-studio-login.firebaseapp.com",
  projectId: "music-studio-login",
  storageBucket: "music-studio-login.firebasestorage.app",
  messagingSenderId: "736797202521",
  appId: "1:736797202521:web:fa80980370c0aec776f948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
