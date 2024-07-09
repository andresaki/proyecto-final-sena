import React, { useMemo } from "react";

// Router dom
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

// componentes
import Home from "../Module/Home/Home";
import Inventario from "../Module/Inventario/Inventario";
import Clientes from "../Module/Clientes/Clientes";
import Pedidos from "../Module/Pedidos/Pedidos";
import Proveedores from "../Module/Proveedores/Proveedores";
import Contabilidad from "../Module/Contabilidad/Contabilidad";
import Ingresos from "../Module/Contabilidad/Ingresos/Ingresos";
import Egresos from "../Module/Contabilidad/Gastos/Egresos";
import { FullScreen } from "../Componentes Generales/FullWindow/FullScreen";
import Header from "../Componentes Generales/Header/Header";
import MiCuenta from "../Module/Configuracion/MiCuenta/MiCuenta";
import NavConfiguracion from "../Module/Configuracion/NavConfiguracion";
import { Login } from "../Module/user/Login";
import { Admin } from "../Module/Admin/Admin";
import { NewUsuario } from "../Module/Admin/NewUsuario";
import { HeaderAdmin } from "../Module/Admin/HeaderAdmin";
import { EditUsuario } from "../Module/Admin/EditUsuario";
import ProtectedRoute from "./ProtectedRoute";
import { LogOutAtajo } from "../Componentes Generales/FullWindow/LogOutAtajo";
import EditarUsuario from "../Module/Configuracion/MiCuenta/EditarUsuario";
import { EditarEmpresa } from "../Module/Configuracion/MiCuenta/EditarEmpresa";
import { OlvidarContraseña } from "../Module/user/OlvidarContraseña";
import { NuevaContrasena } from "../Module/user/NuevaContrasena";

function AppRoutes() {
    const location = useLocation();
    const showHeader =   !location.pathname.startsWith("/configuracion") && location.pathname !== "/login" &&   !location.pathname.startsWith("/Admin") && location.pathname !== "/contrasenaOlvidada" && location.pathname !== "/nuevaContrasena";

    const atajologOut = location.pathname !== "/login"  && location.pathname !== "/contrasenaOlvidada" && location.pathname !== "/nuevaContrasena";

console.log("Atajo Log Out:", atajologOut);

    return (
        <>
            {showHeader && <Header />}
            {atajologOut && <LogOutAtajo/>}
            <Routes >

                {/* Rutas sin protencion */}
                <Route path="/login" element={<Login/>} />
                <Route path="/contrasenaOlvidada" element={<OlvidarContraseña/>} />
                <Route path="/nuevaContrasena" element={<NuevaContrasena/>} />


                {/* Rutas para usuario */}
                <Route path="/" element={<ProtectedRoute > <Home/> </ProtectedRoute>} />
                <Route path="Inventario"  element={ <ProtectedRoute > <Inventario /> </ProtectedRoute>    }  />
                <Route path="Clientes" element={<ProtectedRoute> <Clientes/> </ProtectedRoute>} />
                <Route path="Pedidos" element={<ProtectedRoute> <Pedidos/> </ProtectedRoute>} />
                <Route path="Contabilidad" element={<ProtectedRoute> <Contabilidad/> </ProtectedRoute>} />
                <Route path="Contabilidad/Ingresos" element={<ProtectedRoute> <Ingresos/> </ProtectedRoute>} />
                <Route path="Contabilidad/Egresos" element={<ProtectedRoute> <Egresos/> </ProtectedRoute>} />


                <Route path="configuracion/MiCuenta" element={ <MiCuenta/> } />
                <Route path="configuracion/MiCuenta/EditarPerfil" element={ <EditarUsuario/> } />
                <Route path="configuracion/MiCuenta/EditarEmpresa" element={ <EditarEmpresa/> } />



                {/* Rutas protegidas , para admin */}
                <Route path="/Admin"  element={  <ProtectedRoute isAdmin={true}> <Admin />  </ProtectedRoute>   } />
                <Route path="/Admin/NewUsuario"  element={ <ProtectedRoute isAdmin={true}>  <NewUsuario />   </ProtectedRoute>   } />
                <Route path="/Admin/Edit"  element={ <ProtectedRoute isAdmin={true}>  <EditUsuario />  </ProtectedRoute>   }  />


            </Routes>
            <FullScreen />
        </>
    );
}

export default AppRoutes;
