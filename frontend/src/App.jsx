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
      {/* <Route path="monedero" element={<MonederoLayout />}>
        <Route path="resumen" element={<Resumen />} />
        <Route path="gastos" element={<Gastos />} />
        <Route path="ingresos" element={<Ingresos />} />
        <Route path="deudas" element={<Deudas />} />
        <Route path="ahorro" element={<Ahorro />} />
      </Route>
      <Route path="inicio" element={<Inicio />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="entrar" element={<Entrar />} />
      <Route path="registro" element={<Registro />} /> */}

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
