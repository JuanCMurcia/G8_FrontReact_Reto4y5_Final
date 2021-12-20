import React, {useState, useEffect} from 'react';
import { useFormik } from 'formik';
import { Link, useParams,useNavigate  } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import Swal from 'sweetalert2'; 


const ActualizarUsuario = () => {

      // Hook para redireccionar
      const navigate = useNavigate();

    const {id} = useParams();
  

    const [ usuariosActualizar, guardarUsuariosActualizar] = useState([]);

    fetch(`http://localhost:8080/api/user/${id}`)
    .then((res) => res.json())
    .then((data) => {
       
        guardarUsuariosActualizar(data);
    });
    
    const { identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type } = usuariosActualizar;

    // validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            id: '',
            identification: '',
            name: '',
            birthtDay: '',
            monthBirthtDay: '',
            address: '',
            cellPhone: '',
            email: '',
            password: '',
            zone: '',
            type: '',
        },
      
        onSubmit: datos => {

            Swal.fire({
                title: 'Quieres actualizar el usuario?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Update it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    try{ console.log(datos);
                        fetch(`http://localhost:8080/api/user/update`, {
                            method: "PUT",
                            body: JSON.stringify(datos),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                            })
                              .then((res) => res.json())
                              .then((data) => {
                                //console.log(data);             
                        });
                       
                  Swal.fire(
                    'Actualizado!',
                    'Se actualizo correctamente.',
                    'success'
                    
                    
                  );
                  navigate('/Usuarios');
                } catch (error) {
                    console.log(error)
                }
                
            }
          })

        }
    });




    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl font-light mb-4 text-center">Actualizar Usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                

                                <div className="mb-4">
                                <p className="font-bold text-2xl text-yellow-600 mb-4">{"ID : "+id} </p>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">IDENTIFICACION :</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identification"
                                        type="number"
                                        placeholder="identification "
                                        value={formik.values.identification || identification}
                                        onChange={formik.handleChange}
                                        
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="name"
                                        value={formik.values.name || name}
                                        onChange={formik.handleChange}
                                      
                                    />
                                </div>
                                
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="birthtDay"
                                        type="date"
                                        placeholder=""
                                        value={formik.values.birthtDay || birthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="monthBirthtDay"
                                        type="number"
                                        placeholder="mes de cumpleaños"
                                        value={formik.values.monthBirthtDay || monthBirthtDay}
                                        onChange={formik.handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="address"
                                        type="text"
                                        placeholder="address"
                                        value={formik.values.address || address}
                                        onChange={formik.handleChange}

                                    />
                                </div>

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cellPhone"
                                    type="number"
                                    placeholder="Telefono cellPhone"
                                    value={formik.values.cellPhone || cellPhone}
                                        onChange={formik.handleChange}
                                />

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="text"
                                    placeholder="Correo Electrónico"
                                    value={formik.values.email || email}
                                        onChange={formik.handleChange}
                                />

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="text"
                                    placeholder="Contraseña"
                                    value={formik.values.password || password}
                                        onChange={formik.handleChange}
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                                <select
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                    id="zone"
                                    type="text"
                                    placeholder="zone"
                                    value={formik.values.zone || zone}
                                        onChange={formik.handleChange}
                                >
                                    <option value="">Seleccione una Zona</option>
                                    <option value="COMUNA_1_NORTE">COMUNA 1 NORTE</option>
                                    <option value="COMUNA_2_NORTORIENTAL">COMUNA 2 NORTORIENTAL</option>
                                    <option value="COMUNA_3_SAN_FRANCISCO">COMUNA 3 SAN FRANCISCO</option>
                                    <option value="COMUNA_4_OCCIDENTAL">COMUNA 4 OCCIDENTAL</option>
                                    <option value="COMUNA_5_GARCIA_ROVIRA">COMUNA 5 GARCIA ROVIRA</option>
                                    <option value="COMUNA_6_LA_CONCORDIA">COMUNA 6 LA CONCORDIA</option>
                                    <option value="COMUNA_7_LA_CIUDADELA">COMUNA 7 LA CIUDADELA</option>
                                    <option value="COMUNA_8_SUR_OCCIDENTE">COMUNA 8 SUR OCCIDENTE</option>
                                    <option value="COMUNA_9_LA_PEDREGOSA">COMUNA 9 LA PEDREGOSA</option>
                                    <option value="COMUNA_10_PROVENZA">COMUNA 10 PROVENZA</option>
                                    <option value="COMUNA_11_SUR">COMUNA 11 SUR</option>
                                    <option value="COMUNA_12_CABECERA_DEL_LLANO">COMUNA 12 CABECERA DEL LLANO</option>
                                    <option value="COMUNA_13_ORIENTAL">COMUNA 13 ORIENTAL</option>
                                    <option value="COMUNA_14_MORRORICO">COMUNA 14 MORRORICO</option>
                                    <option value="COMUNA_15_CENTRO">COMUNA 15 CENTRO</option>
                                    <option value="COMUNA_16_LAGOS_DEL_CACIQUE">COMUNA 16 LAGOS DEL CACIQUE</option>
                                    <option value="COMUNA_17_MUTIS">COMUNA 17 MUTIS</option>
                                </select>
                         

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo Usuario</label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="type"
                                    type="text"
                                    placeholder="Tipo Usuario"
                                    value={formik.values.type || type}
                                        onChange={formik.handleChange}
                                >
                                    <option value="">Seleccione un Tipo Usuario</option>
                                    <option value="ADM">ADM</option>
                                    <option value="COORS">COORS</option>
                                    <option value="ASE">ASE</option>

                                </select>

                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Actualizar usuario"
                                />
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default ActualizarUsuario;