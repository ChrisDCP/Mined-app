import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc0L5QBycdcSDW0ilSeB8DKCwnPgy4azE",
  authDomain: "biblioteca-virtual-e2e8f.firebaseapp.com",
  projectId: "biblioteca-virtual-e2e8f",
  storageBucket: "biblioteca-virtual-e2e8f.firebasestorage.app",
  messagingSenderId: "432024090744",
  appId: "1:432024090744:web:2e4902989d87c3dc32558d"
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const db = getFirestore(app);
