import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import './App.css'

// layouts
import AppLayout from './layouts/AppLayout'
import MonederoLayout from './layouts/MonederoLayout';

// routes
import GastosIngresos from "./routes/GastosIngresos";
import Fijos from "./routes/Fijos";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="monedero" > 
        <Route index element={<Navigate to="gastos" />} />
        <Route path="gastos" element={<GastosIngresos title="Gasto" />} />
        <Route path="ingresos" element={<GastosIngresos title="Ingreso" />} />
        <Route path="fijos" element={<Fijos />} />


        {/* <Route path="resumen" element={<Resumen />} />
        <Route path="ingresos" element={<Ingresos />} />
        <Route path="deudas" element={<Deudas />} />
        <Route path="ahorro" element={<Ahorro />} /> */}
      </Route>
      {/* <Route path="inicio" element={<Inicio />} />
      <Route path="perfil" element={<Perfil />} />
      <Route path="entrar" element={<Entrar />} />
      <Route path="registro" element={<Registro />} />  */}

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
