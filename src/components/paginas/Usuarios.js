import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';

const Usuarios = () => {
    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl  font-light mb-4 text-center">Usuarios</h1>
                    <Link to="/nuevo-usuario" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                        Agregar Usuario
                    </Link>
                    <div></div>
                    <Link to="/listar-usuarios" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                        Listar Usuarios
                    </Link>

                </div>
            </div>

        </>
    );
}

export default Usuarios;