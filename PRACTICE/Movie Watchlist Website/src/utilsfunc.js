import { setDoc , doc , addDoc , collection , getDocs} from "firebase/firestore";
import { db } from "./firebaseconfig";



// For Light and Dark Theme
export const themeTogglerFunc = (theme, setTheme) => {
setTheme(theme === "dark" ? "light" : "dark")
};

// For Get user in Firestore after sign up
export const getuserinFirestore = async (userCredential, email, name) => {
    const user = userCredential.user
    console.log(user);
    try {
        let docRef = doc(db, "users", user.uid)
        await setDoc(docRef, {
            name,
            email,
            userId: user.uid,
            createdAt: Date.now(),
            role:"Admin"
        })

        console.log("DOCUMENT ADDED SUCCESSFULLY");
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

// For After Login
export const loginwithFirestore = (userCredential)=>{
    const user =  userCredential
    console.log(`Welcome`);
}

// For Logout
export const logoutFunction = ()=>{
    console.log("LOGOUT SUCCESSFULLY");    
}

// For Adding New Collection 

export const addInCollection = async (user_uid , collectionName , obj) => {
    try {
     const draftRef = collection(db , "users" , user_uid , collectionName )
    const draftDoc = await addDoc(draftRef , obj)
    
    } catch (error) {
        console.log(error);
    }
}

// For Taking Data
export const getMoviesData = async () => {
    try {
    const draftRef = collection(db , "users")
    const takeUsers = await getDocs(draftRef)
    console.log(takeUsers);
        
    } catch (error) {
        console.log(error);
    }
}
