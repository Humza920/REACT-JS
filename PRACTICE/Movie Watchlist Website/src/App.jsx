import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Components/Form"
import Admin from "./Layouts/Admin";
import AdminRoute from "./Routes/AdminRoute"
import AdminUserManage from "./Pages/AdminUserManage";
import AdminMovieManage from "./Pages/AdminMovieManage";
import AdminAddMovie from "./Pages/AdminAddMovie";
import ModalRoute from "./Routes/ModalRoute";
import Main from "./Layouts/Main"
import Home from "./Pages/Home"
// import Navbar from "./Components/Navbar";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main />,
      children:[
        {path:"" , element:<Home />}
      ]
    },
    {
      path:"/admin",
      element:(
        <AdminRoute>
        <Admin />
      </AdminRoute>
      ),
      children:[
        {path:"/admin/usermanage" , element:<AdminUserManage />},
        {path:"/admin/moviemanage" , element:<AdminMovieManage />},
        {path:"/admin/addmovie" , element:<AdminAddMovie />}
      ]
    }
  ])
  return  (<>
  <RouterProvider router={router}/>
  <ModalRoute />
  </>)
}

export default App;
