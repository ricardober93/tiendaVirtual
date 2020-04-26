import React, { Fragment } from 'react'
import Nav from '../components/Nav'

import '../style/dashboard.css';
import { Link } from 'react-router-dom';



let usuariosDB = [
   {
      id: 1,
      nombre: "Mario Casas",
      rol: "Asesor de ventas"
   },
   {
      id: 2,
      nombre: "Shakira Pique",
      rol: "Supervisora"
   }
];


const ListaUser = usuariosDB.map((user) =>
   <tr key={user.id}>
      <td>{user.nombre}</td>
      <td>{user.rol}</td>
      <td>
         <Link className="btn-editar" to="editarperfil" >Editar</Link>
         <Link className="btn-eliminar" >Eliminar</Link>
      </td>
   </tr>
);



function Usuarios() {
   return (
      <Fragment>
         <div className="dashboard">

            <Nav />

            <section>
               <h1 className="titulo-d">Usuarios</h1>
               <div>
                  <div className="butones-usuarios">
                     <Link className="btn-usuario" to="usuarios-crear">Crear nuevo Usuario</Link>
                     <Link className="btn-usuario" to="usuario-crear-rol">Crear nuevo Rol</Link>
                  </div>
                  <div className="table">
                     <table cellspacing="0">
                        <thead>
                           <tr>
                              <th>Nombre</th>
                              <th>Rol</th>
                              <th>Acciones</th>
                           </tr>
                        </thead>
                        <tbody>
                           {ListaUser}
                        </tbody>
                     </table>
                  </div>
               </div>
            </section>
         </div>

      </Fragment>
   )
}

export default Usuarios
