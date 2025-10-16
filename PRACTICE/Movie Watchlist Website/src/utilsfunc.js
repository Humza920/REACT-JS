import { setDoc, doc, addDoc, collection, getDocs, getDoc, updateDoc } from "firebase/firestore";
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
            role: "User"
        })

        console.log("DOCUMENT ADDED SUCCESSFULLY");

    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

// For After Login
export const loginwithFirestore = (userCredential) => {
    const user = userCredential
    console.log(`Welcome`);
}

// For Logout
export const logoutFunction = () => {
    console.log("LOGOUT SUCCESSFULLY");
}

// For Adding New Collection 

export const addInCollection = async (user_uid, collectionName, obj) => {
    try {
        const draftRef = collection(db, "users", user_uid, collectionName)
        const draftDoc = await addDoc(draftRef, obj)
        console.log("MOVIE SUCCESSFULLY POSTED");

        await updateDoc(doc(draftRef, draftDoc.id), {
            draftDoc_id: draftDoc.id,
        });

    } catch (error) {
        console.log(error);
    }
}

// For Taking Data
export const getMoviesData = async () => {
    try {
        const draftRef = collection(db, "users")
        const takeUsers = await getDocs(draftRef)

        for (const document of takeUsers.docs) {
            const doc_id = document.id
            const doc_data = document.data()
            if (doc_data.role === "Admin") {
                return await get("Movies", doc_id)
            }
        }
    } catch (error) {
        console.log(error);
    }
}

// GETTING THEIR INTERNAL DATA FROM USERS 

const get = async (param, doc_id) => {
    try {
        let arr = []
        const draftRef = collection(db, "users", doc_id, param)
        const getData = await getDocs(draftRef)
        getData.forEach((doc) => {
            arr.push(doc.data())
        })
        return arr
    } catch (error) {
        console.log(error);
    }
}

// GETTING SINGLE USER

export const getUser = async (uid) => {
    try {
        const docRef = doc(db, "users", uid)
        const gettingUserForRole = await getDoc(docRef)
        // console.log(gettingUserForRole.data());
        return gettingUserForRole.data()
    } catch (error) {
        console.log(error);
    }
}



// FOR IMG
export const uploadImageToImgbb = async (file) => {
    if (file) {
        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await fetch(
                `https://api.imgbb.com/1/upload?key=42545073d62eda10c2762262e4e45856`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();
            return data.data.url;
        } catch (error) {
            console.log(error);
        }

    } else {
        console.log("PLZ SELECT A FILE");
    }
};

// GETTING ALL THE USERS
export const gettingAllUsers = async () => {
    let usersArr = []
    try {
        const draftRef = collection(db, "users")
        const get = await getDocs(draftRef)
        get.docs.forEach((x)=>{
            usersArr.push(x.data())
        })
        return usersArr
    } catch (error) {
        console.log(error);
    }
}


