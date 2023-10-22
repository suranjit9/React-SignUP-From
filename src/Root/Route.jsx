import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Home from "../Leout/Home/Home";
import SingIn from "../Leout/SingIn/SingIn";
import SingUP from "../Leout/SingUp/SingUP";
import Forget from "../Leout/SingUp/ForgetIDPass/Forget";
const router = createBrowserRouter([
    {
    path:'/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element: <Home></Home>,
        },
        {
            path:'/singin',
            element: <SingIn></SingIn>,
        },
        {
            path:'/singup',
            element: <SingUP></SingUP>,
        },
        {
            path:'/forget',
            element:<Forget></Forget>,
        }
    ]
    }
])

export default router;