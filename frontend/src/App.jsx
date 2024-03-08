import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// layouts
import AppLayout from './layouts/AppLayout'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* <Route path="about" element={<About />} /> */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
