import React from "react";
import { Link } from 'react-router-dom';

const Index = () => {
   return (
      <>

         <div className="bg-blue-800 min-h-screen flex flex-col justify-center" >
            <h1 className="text-center text-5xl text-white font-light ">DE ALTO TURMEQUE LTDA</h1>
            <div className="p-6">
            </div>
            <h2 className="text-center text-2xl text-white font-light">BIENVENIDOS</h2>
            <br></br>
            <br></br>
            <h2 className="text-center text-2xl text-white font-light">GRUPO : G8</h2>
            <br></br>
            <h3 className="text-center text-2xl text-white font-light">Nilton Alexander Rodriguez</h3>
            <h3 className="text-center text-2xl text-white font-light">Fredy Martinez</h3>
            <h3 className="text-center text-2xl text-white font-light">Juan Carlos Murcia</h3>
            <br></br>
            
            <hr></hr>
            <br></br>
            <br></br>

            <Link to="/login" className="  bg-green-700 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold text-center">
               Agregar Producto
            </Link>
         </div>

      </>
   );
}

export default Index;