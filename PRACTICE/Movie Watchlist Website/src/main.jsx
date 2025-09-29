import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Form from './Components/Form.jsx'
import App from './App.jsx'
import { ThemeProvider } from './Context/themecontext.jsx'
import { MovieProvider } from './Context/moviecontext.jsx'

createRoot(document.getElementById('root')).render(
<ThemeProvider>
    <MovieProvider>
    <App/>
    </MovieProvider>
</ThemeProvider>
  
)
