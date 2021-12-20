import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert2';
import Sidebar from '../ui/Sidebar';


import DetalleUsuarios from "./DetalleUsuarios";

export default class Users extends Component {
  state = {
    data: [],
    show: true,
    url: "http://localhost:8080/api/user/"
  };

  getUsers = async () => {
    const res = await axios.get(this.state.url + "all");
    this.setState({ data: res.data });
  }
  async componentDidMount() {
    this.getUsers()
  }

  btnChangeState = () => {
    this.setState({ show: !this.state.show })
  }

  delete = async (id) => {
    swal({
      title: "¿Desea eliminar este usuario?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(this.state.url + id)
            .then(
              swal("Usuario eliminado!", {
                icon: "success",
              }),
              this.getUsers()
            )
        }
      });
  }

  render() {

    if (this.state.show) {

      return (

        <div className="md:flex min-h-screen" >
          <Sidebar />
          <div className="container-fluid">
            <div><span></span></div>
            <br>
            </br>
            <h1 className="text-3xl font-light mb-4 text-center">Lista de Usuarios</h1>

            <table class="table-auto">
              <thead>
                <tr>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Identificación</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Nombre</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Fecha Cumpleaños</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Mes Cumpleaños</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Dirección</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Celular</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Email</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Contraseña</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Zona</th>
                  <th class="border border-gray-400 px-4 py-2 text-gray-900 text-center">Tipo de usuario</th>

                </tr>
              </thead>
              <tbody>
                {this.state.data.map(e =>
                  <tr key={e.id}>
                    <td class="border border-gray-400 px-4 py-2">{e.identification}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.name}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.birthtDay}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.monthBirthtDay}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.address}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.cellPhone}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.email}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.password}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.zone}</td>
                    <td class="border border-gray-400 px-4 py-2">{e.type}</td>
                    <td>

                      <Link to={`/actualizar-usuario/${e.id}`} className="  bg-gray-700 hover:bg-blue-700, py-1 px-1 rounded text-white font-bold">
                        Editar
                      </Link>
                    </td>
                    <td>
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
      return <DetalleUsuarios></DetalleUsuarios>
    }
  }
}