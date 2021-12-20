import React, { Component } from "react";
import axios from "axios";
import Sidebar from '../ui/Sidebar';
import Ordenes from "./Ordenes";

export class Alert extends Component {
  render() {
    return (
      <div className="alert alert-success alert-dismissible fade show" style={{ display: this.props.estilo }} role="alert">
        <strong>Exito!</strong> Orden agregada correctamente
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  }
}

export default class DetalleOrdenes extends Component {
  state = {
    show: true,
    form: {
      registerDay: '',
      status: '',
      salesMan: '',
      products: '',
      quantities: ''
    },
    url: "http://localhost/api/order/new ",
    //url: "http://localhost:8080/api/order/new",
    estilo: 'none'
  };

  btnChangeState = () => {
    this.setState({ show: !this.state.show });
  };

  onChangeForm = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(this.state.url, this.state.form)
      .then(res => {
        if (res.status === 201) {
          this.setState({
            form: {
              registerDay: '',
              status: '',
              salesMan: '',
              products: '',
              quantities: ''
            },
            estilo: 'block'
          })
          setInterval(() => {
            this.setState({ estilo: 'none' })
          }, 2000)
        }
      })
  }

  render() {
    if (this.state.show) {
      return (
        <div className="container">
          <Sidebar />
          <button class="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={this.btnChangeState}>
            Regresar
          </button>
          <h5 className="text-base text-center">Agregar producto</h5>
          <form class="w-full max-w-lg" onSubmit={this.onSubmit}>
            <div class="md:flex md:items-center mb-6">
              <div class="w-full px-3">
                <input
                  type="date"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Fecha de registro" name="registerDay" value={this.state.form.registerDay} onChange={this.onChangeForm}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="w-full px-3">
                <input
                  type="text"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Estado" name="status" value={this.state.form.status} onChange={this.onChangeForm}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="w-full px-3">
                <input
                  type="text"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Asesor" name="salesMan" value={this.state.form.salesMan} onChange={this.onChangeForm}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="w-full px-3">
                <input
                  type="text"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Productos" name="products" value={this.state.form.products} onChange={this.onChangeForm}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="w-full px-3">
                <input
                  type="text"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-700"
                  placeholder="Cantidades" name="quantities" value={this.state.form.quantities} onChange={this.onChangeForm}
                />
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-1/3"></div>
              <div class="md:w-2/3">
                <button type="submit" class="shadow bg-gray-700 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Agregar</button>
              </div>
            </div>
          </form>
          <Alert estilo={this.state.estilo}></Alert>
        </div>
      );
    } else {
      return <Ordenes></Ordenes>;
    }
  }
}