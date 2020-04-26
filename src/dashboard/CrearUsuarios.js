import React, { Fragment } from 'react'
import Nav from '../components/Nav'


import '../style/CrearUsuario.css';
import { Link } from 'react-router-dom';

export default function CrearUsuarios() {
   return (
      <Fragment>
         <div className="dashboard">

            <Nav />

            <section>
               <div className="header">
                  <Link to="usuarios"><img src="./flecha.svg" alt="regresar" /></Link>
                  <h1 className="titulo-d">Crear nuevo usuarios</h1>
               </div>
               <div className="nuevo-usuario">
                  <div>
                     <h4>Datos del usuario nuevo</h4>
                     <p><small>La contraseña sera enviada automaticamente</small></p>
                  </div>

                  <div className="form-nuevo-usuario">
                     <input type="text" name="" id="" placeholder="Nombre de usuario" />
                     <input type="password" name="" id="" placeholder="Correo electronico" />

                     <button>Guardar usuario</button>
                  </div>
               </div>
            </section>
         </div>

      </Fragment>
   )
}
