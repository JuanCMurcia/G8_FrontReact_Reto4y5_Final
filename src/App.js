import React from "react";
import { Routes, Route } from 'react-router';

import Ordenes from './components/paginas/Ordenes';
import Usuarios from './components/paginas/Usuarios';
import Productos from './components/paginas/Productos';
import Login from './components/paginas/Login';

import DetalleOrdenes from "./components/paginas/DetalleOrdenes";
import DetalleUsuarios from "./components/paginas/DetalleUsuarios";
import DetalleProductos from "./components/paginas/DetalleProductos";
import DetalleListarUsuario from "./components/paginas/DetalleListarUsuario";

import ActualizarProducto from "./components/paginas/ActualizarProducto";


import Index from "./components/paginas/Index";
import ActualizarUsuario from "./components/paginas/ActualizarUsuario";

function App() {
  return (
      
    <>
 
    <Routes>
              <Route path="/" element={<Index />  } />
              <Route path="/login" element={<Login />  } />
              <Route path="/ordenes" element={<Ordenes />  } />
                <Route path="/usuarios" element={<Usuarios />  } />
                <Route path="/productos" element={<Productos />  } />
                <Route path="/nueva-orden" element={<DetalleOrdenes/> }/>
                <Route path="/nuevo-producto" element={<DetalleProductos/> }/>
                <Route path="/nuevo-usuario" element={<DetalleUsuarios/> }/>
                <Route path="/listar-usuarios" element={<DetalleListarUsuario/> }/>
                <Route path="/actualizar-producto/:reference" element={< ActualizarProducto/>} />
                <Route path="/actualizar-usuario/:id" element={< ActualizarUsuario/>} />
                
    </Routes>
    </>
   
   
      
  );
}

export default App;
