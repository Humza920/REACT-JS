import { createContext, useContext } from "react";
import { auth } from "../firebaseconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  gettingAllUsers,
  getUser,
  getuserinFirestore,
  loginwithFirestore,
  logoutFunction,
} from "../utilsfunc";
import { useState, useEffect } from "react";
const AuthContext = createContext({
  user: null,
  userRole: null,
  loading: true,
  allUsers:null,
  signupUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
});

export const AuthProvider = ({ children }) => {
  const [allUsers , setallUsers] = useState(null)
  const [user, setuser] = useState(null);
  const [userRole, setuserRole] = useState(null);
  const [loading, setloading] = useState(true);



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
    const onAuth = onAuthStateChanged(auth, async (connecteduser) => {
      setloading(true);
      console.log(connecteduser);
      
      if (connecteduser) {
        try {
          const getRole = await getUser(connecteduser.uid);
          setuserRole(getRole.role);
          setuser(connecteduser);
          // console.log(connecteduser);
        } catch (error) {
          console.log(error);
          setuserRole(null);
        }
      } else {
        setuserRole(null);
        setuser(null);
      }
      setloading(false);

      const get = await gettingAllUsers()
      console.log(get);
      
      setallUsers(get)      
    });


    return () => onAuth();
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
    <AuthContext.Provider
      value={{ signupUser, loginUser, logoutUser, user, userRole, loading, allUsers }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
