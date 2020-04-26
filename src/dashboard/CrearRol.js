import React, { Fragment } from 'react'
import Nav from '../components/Nav'


import '../style/CrearUsuario.css';
import { Link } from 'react-router-dom';


export default function CrearRol() {
   return (
      <Fragment>
         <div className="dashboard">
            <Nav />
            <section>
               <div className="header">
                  <Link to="usuarios"><img src="./flecha.svg" alt="regresar" /></Link>
                  <h1 className="titulo-d">Crear nuevo rol</h1>
               </div>
               <div className="nuevo-usuario">
                  <div>
                     <h4>Nombre del Rol</h4>
                     <p><small>El rol será asignado para utilizarlo más adelante</small></p>
                  </div>
                  <div className="form-nuevo-usuario">
                     <input type="text" name="" id="" placeholder="Nombre del rol" />
                     <button>Guardar rol</button>
                  </div>
               </div>
            </section>
         </div>
      </Fragment>
   )
}
