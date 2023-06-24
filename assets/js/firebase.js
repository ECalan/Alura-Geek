import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuJ9NOe3TgJ9FNE6wcFDnJ1dzYw7akG1E",
  authDomain: "data-e-commerce.firebaseapp.com",
  projectId: "data-e-commerce",
  storageBucket: "data-e-commerce.appspot.com",
  messagingSenderId: "860964962021",
  appId: "1:860964962021:web:f3e964d03171dfa1c0de0c"
};

export const app = initializeApp(firebaseConfig);

// mensaje 
export const db = getFirestore(app);

//Admin autenticación y registro
export const auth = getAuth(app);

//Admin subida de archivos
export const database = getDatabase(app);

