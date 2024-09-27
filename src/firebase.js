
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3kmn-XOijHstFTUiIt0p0_an9iHugFck",
  authDomain: "pjboer-c7c74.firebaseapp.com",
  projectId: "pjboer-c7c74",
  storageBucket: "pjboer-c7c74.appspot.com",
  messagingSenderId: "804580798783",
  appId: "1:804580798783:web:7590a325e6ea1096ba238a"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}

