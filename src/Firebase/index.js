import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

export const InitializeFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBVEM3dfCYeE9_Ts_PD3v3_tBrUtf-gftY",
        authDomain: "my-milk-dairy-14b69.firebaseapp.com",
        databaseURL: "https://my-milk-dairy-14b69-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "my-milk-dairy-14b69",
        storageBucket: "my-milk-dairy-14b69.appspot.com",
        messagingSenderId: "493660926122",
        appId: "1:493660926122:web:fb325ac95cd2662ecca0d3",
        measurementId: "G-WW7DXP70V7"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
}