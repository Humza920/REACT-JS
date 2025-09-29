import { useState } from "react"
import { useTheme } from "../Context/themecontext"

const buttonToggler = () => {
    const {theme , themeToggler} = useTheme()
    
  return (
    <button
    onClick={themeToggler}
    >THEME</button>
  )
}

export default buttonToggler