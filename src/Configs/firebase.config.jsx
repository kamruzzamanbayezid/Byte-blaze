import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyCzPfce2J4KM93LkfmS0HGm3Z4ZilVVmjc",
      authDomain: "bite-blaze.firebaseapp.com",
      projectId: "bite-blaze",
      storageBucket: "bite-blaze.appspot.com",
      messagingSenderId: "882077059974",
      appId: "1:882077059974:web:28c3b1dd4d5bf8bf163a07"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;