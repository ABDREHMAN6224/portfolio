import React from 'react'
import Navbar from './components/Navbar'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './components/Register'
import Main from './components/Main'
import Checkout from './components/Checkout'
import Landing from './components/Landing'
import Projects from './components/Projects'

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Main/>,
      children:[
        {
          index:true,
          element:<Landing/>
        },
        {
          path:"/contact",
          element:<Register/>
        },
        {
          path:"/projects",
          element:<Projects/>
        },

      ]
    },

  ])
  return (
    <>
    <ToastContainer position='top-right' autoClose={3000} closeOnClick theme='dark' pauseOnHover/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App