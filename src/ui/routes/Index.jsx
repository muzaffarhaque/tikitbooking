import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    createHashRouter
  } from "react-router-dom";
import {Home, Move} from '../pages';
  
const router = createHashRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "/move",
      element: (
        <Move/>
      ),
    },
  ]);
  
export default function Router() {
  return (
    <div>
          <RouterProvider router={router} />
    </div>
  )
}
