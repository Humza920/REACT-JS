import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./Components/Form"
import Admin from "./Layouts/Admin";
import AdminRoute from "./Routes/AdminRoute"
import AdminUserManage from "./Pages/AdminUserManage";
import AdminMovieManage from "./Pages/AdminMovieManage";
import AdminAddMovie from "./Pages/AdminAddMovie";
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Form />
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
  return  <RouterProvider router={router}/>
}

export default App;
