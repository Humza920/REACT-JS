export const themeTogglerFunc = (theme , setTheme) => {
    if (theme === "dark") {
        setTheme("light");
    } else {
        setTheme("dark");
    }
};