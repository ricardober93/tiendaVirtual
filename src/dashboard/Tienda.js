import React, { Fragment } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom';

import '../style/dashboard.css';
import '../style/CrearUsuario.css';



let productosDB = [
    {
        id: 1,
        nombre: "Zapatos Nike",
        categoria: "Zapatos deportivos",
        cantidad: 20,
        precio: 45.000,
    },
    {
        id: 2,
        nombre: "Zapatos Tommy",
        categoria: "Zapatos formales",
        cantidad: 10,
        precio: 85.000,
    }
];


const ListaProdcutos = productosDB.map((producto) =>
    <tr key={producto.id}>
        <td>{producto.nombre}</td>
        <td>{producto.categoria}</td>
        <td>{producto.cantidad}</td>
        <td>{producto.precio}</td>
        <td>
            <button className="btn-editar" >Editar</button>
            <button className="btn-eliminar" >Eliminar</button>
        </td>
    </tr>
);

function Tienda() {
    return (
        <Fragment>
            <div className="dashboard">

                <Nav />

                <section>
                    <h1 className="titulo-d">Ventas</h1>
                    <div>
                        <div className="buton-tienda">
                            <Link className="btn-usuario" to="nuevo-producto">Crear nuevo producto</Link>
                        </div>
                        <div className="table">
                            <table cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Categoria</th>
                                        <th>Cantidad</th>
                                        <th>Precio</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ListaProdcutos}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

        </Fragment>
    )
}

export default Tienda
