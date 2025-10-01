import { createContext, useContext } from "react";
import { auth, db } from "../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getuserinFirestore } from "../utilsfunc";
const AuthContext = createContext({
  user: null,
  allUsers: [],
  allUsers: () => {},
  signupUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
});

export const AuthProvider = ({ children }) => {
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

  return (
    <AuthContext.Provider
      value={{ user, allUsers, signupUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
