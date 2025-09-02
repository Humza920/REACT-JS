import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './components/layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Github from './components/Github/Github'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
