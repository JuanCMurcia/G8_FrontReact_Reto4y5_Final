import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';

import DetalleOrdenes from './DetalleOrdenes';

export default class Ordenes extends Component {
            state = {
                data: [],
                show: true,
                url: "http://localhost:8080/api/order/"
            };

            getOrders = async () => {
                const res = await axios.get(this.state.url + "all");
                this.setState({ data: res.data });
            }

            /* async componentDidMount() {
                this.getOrders()
            } */
  
            btnChangeState = () => {
                this.setState({show : !this.state.show})
            }

            delete = async (id) => {
                swal({
                title: "¿Desea eliminar esta orden?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                })
                .then((willDelete) => {
                if (willDelete) {
                    axios.delete(this.state.url + id)
                    .then(
                    swal("Orden eliminada!", {
                        icon: "success",
                    }),
                    this.getOrders()
                    )
                }
                }); 
            }
  
  render() {
    if (this.state.show) {
      return (
        <div className="md:flex min-h-screen">
            <Sidebar />
          <div className="container-fluid">
          <div><span></span></div>
            <br>
            </br>
            <h1 className="text-3xl font-light mb-4 text-center">Lista de Ordenes</h1>
              <table class="table-auto">
                <thead>
                  <tr>
                    <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Fecha de registro</th>
                    <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Estado</th>
                    <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Asesor</th>
                    <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Productos</th>
                    <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Cantidades</th>
                    <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map(e => 
                    <tr key={e.id}>
                     <td class="border border-gray-400 px-4 py-2">{e.registerDay}</td>
                     <td class="border border-gray-400 px-4 py-2">{e.status}</td>
                     <td class="border border-gray-400 px-4 py-2">{e.salesMan}</td>

                     <td>
                     <Link to={`/actualizar-usuario/${e.id}`} className="  bg-gray-700 hover:bg-blue-700, py-1 px-1 rounded text-white font-bold">
                                Editar            
                        </Link>
                        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded">Editar</button>
                        <span></span>
                        <button className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded" onClick={() => this.delete(e.id)}>Eliminar</button>
                     </td>
                    </tr>
                  )}
                </tbody>
              </table>
            
          </div>
        </div>
      );
    } else {
      return <DetalleOrdenes></DetalleOrdenes>
    }
  }
}
