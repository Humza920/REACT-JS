import { createContext, useContext } from "react";
import { auth } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getuserinFirestore,
  loginwithFirestore,
  logoutFunction,
} from "../utilsfunc";
import { useState , useEffect } from "react";
const AuthContext = createContext({
  user: null,
  signupUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const signupUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return getuserinFirestore(userCredential, email, name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    const onAuth = onAuthStateChanged(auth, (connecteduser) => {
      setuser(connecteduser);
      console.log(connecteduser.uid);
    });
    return ()=>onAuth()
  }, []);

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return loginwithFirestore(userCredential);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const logoutUser = () => {
    signOut(auth)
      .then(() => logoutFunction())
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <AuthContext.Provider value={{ signupUser, loginUser, logoutUser , user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
