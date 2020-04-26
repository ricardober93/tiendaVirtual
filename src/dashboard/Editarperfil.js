import React, { Fragment } from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
import '../style/CrearUsuario.css';
function Editarperfil() {
   return (
      <Fragment>
         <div className="dashboard">
            <Nav />
            <section>
               <div className="header">
                  <Link to="usuarios"><img src="./flecha.svg" alt="regresar" /></Link>
                  <h1 className="titulo-d">Perfil</h1>
               </div>
               <div className="perfil-container">
                  <div className="foto-perfil">
                     <div className="foto">
                        <img src="./img-zapatos.png" alt="" />
                        <div className="roles-perfil" >
                           <h3>Rol</h3>
                           <select name="Rol" id="">
                              <option value="asesordeventas">Asesor de Ventas</option>
                           </select>
                        </div>
                     </div>
                     <div className="permisos">
                        <div className="check">
                           <input type="checkbox" name="" id="" />
                           <label htmlFor="">permiso 1</label>
                        </div>
                        <div className="check">
                           <input type="checkbox" name="" id="" />
                           <label htmlFor="">permiso 1</label>
                        </div>
                        <div className="check">
                           <input type="checkbox" name="" id="" />
                           <label htmlFor="">permiso 1</label>
                        </div>
                        <div className="check">
                           <input type="checkbox" name="" id="" />
                           <label htmlFor="">permiso 1</label>
                        </div>
                         <div className="check">
                           <input type="checkbox" name="" id="" />
                           <label htmlFor="">permiso 1</label>
                        </div>
                     </div>
                  </div>
                  <div className="datos">
                     <div className="inputs">
                        <label htmlFor="">Nombre</label>
                        <input type="text" />
                     </div>
                     <div className="inputs">
                        <label htmlFor="">Apellido</label>
                        <input type="text" />
                     </div>
                     <div className="inputs">
                        <label htmlFor="">Correo</label>
                        <input type="text" />
                     </div>
                     <div className="inputs">
                        <button>Guardar datos</button>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </Fragment>
   )
}

export default Editarperfil
