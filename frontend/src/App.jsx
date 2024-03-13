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
import MonederoSimpleCRUD from "./routes/MonederoSimpleCRUD";
import MonederoFijos from "./routes/MonederoFijos";
import MonederoResumen from "./routes/MonederoResumen";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import Login from "./routes/Login";
import PasswordForgotten from "./routes/PasswordForgotten";
import ChangePassword from "./routes/ChangePassword";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />

      <Route path="monedero" > 
        <Route index element={<Navigate to="gastos" />} />
        <Route path="gastos" element={<MonederoSimpleCRUD title="Gasto"/>} /> 
        <Route path="ingresos" element={<MonederoSimpleCRUD title="Ingreso" />} />
        <Route path="deudas" element={<MonederoSimpleCRUD title="Deuda" />} />
        <Route path="ahorros" element={<MonederoSimpleCRUD title="Ahorro" />} />
        
        <Route path="fijos" element={<MonederoFijos />} />
        <Route path="resumen" element={<MonederoResumen />} />



      </Route>

      <Route path="profile" >
        <Route index element={<Profile />} />
        <Route path="change-password" element={<ChangePassword />} />

      </Route>
      <Route path="register" element={<Register />} /> 
      <Route path="login" element={<Login />} /> 
      <Route path="password-forgotten" element={<PasswordForgotten />} /> 


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
