export const themeTogglerFunc = (theme, setTheme) => {
    if (theme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
};

export const getuserinFirestore = async (userCredential, email, name) => {
    const user = userCredential.user
    console.log(user);
    try {
        await setDoc(doc(db, "users", user.uid), {
            name,
            email,
            userId: user.uid,
            createdAt: Date.now()
        })

        console.log("DOCUMENT ADDED SUCCESSFULLY");
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}