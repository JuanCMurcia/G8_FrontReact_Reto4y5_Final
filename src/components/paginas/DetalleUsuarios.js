import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Sidebar from '../ui/Sidebar';


const DetalleUsuarios = () => {

    // validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            id: '',
            identificacion: '',
            nombre: '',
            cumpleaños: '',
            mes: '',
            direccion: '',
            celular: '',
            email: '',
            password: '',
            zona: '',
            tipo: '',
        },
        validationSchema: Yup.object({
            id: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('El id es obligatorio'),
            identificacion: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('la identificacion es obligatoria'),
            nombre: Yup.string()
                .min(3, 'Debes agregar un nombre')
                .required('elo nombre es obligatorio'),

        }),
        onSubmit: datos => {

            console.log(datos);

        }
    });




    return (
        <>
            <div className="md:flex min-h-screen" >
                <Sidebar />
                <div className="md:w-2/5 xl:w-4/5 p-6">
                    <h1 className="text-3xl font-light mb-4 text-center">Agregar Usuarios</h1>

                    <div className="flex justify-center mt-10">
                        <div className="w-full max-w-3xl">
                            <form
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="id"
                                        type="number"
                                        placeholder="id "
                                        value={formik.values.id}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.id && formik.errors.id ? (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                        <p className="font-bold">Hubo un error:</p>
                                        <p>{formik.errors.id} </p>
                                    </div>
                                ) : null}



                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="identificacion"
                                        type="number"
                                        placeholder="identificacion "
                                        value={formik.values.identificacion}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                </div>
                                {formik.touched.identificacion && formik.errors.identificacion ? (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                        <p className="font-bold">Hubo un error:</p>
                                        <p>{formik.errors.identificacion} </p>
                                    </div>
                                ) : null}

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="nombre"
                                        type="text"
                                        placeholder="Nombre "
                                        value={formik.values.nombre}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}

                                    />
                                </div>
                                {formik.touched.nombre && formik.errors.nombre ? (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                        <p className="font-bold">Hubo un error:</p>
                                        <p>{formik.errors.nombre} </p>
                                    </div>
                                ) : null}


                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="cumpleaños"
                                        type="date"
                                        placeholder=""
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="mes"
                                        type="number"
                                        placeholder="mes de cumpleaños"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="direccion"
                                        type="text"
                                        placeholder="direccion"

                                    />
                                </div>

                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Celular</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="celular"
                                    type="number"
                                    placeholder="Telefono Celular"
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="text"
                                    placeholder="Correo Electrónico"
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="text"
                                    placeholder="Contraseña"
                                />
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                                <select
                                    className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
                                    id="zona"
                                    type="text"
                                    placeholder="Zona"
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
                                    id="tipo"
                                    type="text"
                                    placeholder="Tipo Usuario"
                                >
                                    <option value="">Seleccione un Tipo Usuario</option>
                                    <option value="ADM">ADM</option>
                                    <option value="COORS">COORS</option>
                                    <option value="ASE">ASE</option>

                                </select>

                                <input
                                    type="submit"
                                    className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Agregar usuario"
                                />
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}

export default DetalleUsuarios;