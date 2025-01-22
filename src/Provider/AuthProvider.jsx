import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import {createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)



const AuthProvider = ({ children}) => {
const auth = getAuth(app);

const [loading , setLoading] = useState(true)

const [user , setUser] = useState()

const provider = new GoogleAuthProvider();

const creatUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email , password)
}

const signInWithGoogle = () => {
    return signInWithPopup(auth , provider)
}

const logInUser = (email , password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth , email , password)
}

const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
},[])

 const authInfo = {
       creatUser,
       logInUser,
       signOutUser,
       signInWithGoogle,
       loading,
       user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;