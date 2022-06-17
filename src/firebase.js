import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ref, uploadBytes, getStorage } from "firebase/storage";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const storage = getStorage(app);
const auth = app.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { auth, googleAuthProvider };

export async function upload(file, currentUser, setLoading) {
  if (currentUser === null) {
    currentUser = Math.random();
  }
  const fileRef = ref(storage, currentUser.uid + ".png");
  setLoading(true);
  const snapshot = await uploadBytes(fileRef, file);
  setLoading(false);
  alert("uploaded file");
}
