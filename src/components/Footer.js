import React, { Fragment } from 'react'

function Footer() {
   return (
      <Fragment>
         <div className="footer">
            <div className="grid">
               <div className="form-footer">
                  <h3>Mantente en contacto con nosotros</h3>
                  <div className="sub">
                     <input className="text" type="text" />
                     <input className="button" type="submit" value="Enviar" />
                  </div>
               </div>
               <div className="cate-footer">
                  <div>
                     <h3>Categorias</h3>
                     <ul>
                        <li>Zapatos</li>
                        <li>Zapatos</li>
                        <li>Zapatos</li>
                     </ul>
                  </div>
               </div>
               <div className="contact">
                  <h3>Servicio al Cliente</h3>
                  <p>3145063381</p>
                  <p>Correo@correo.com</p>
               </div>

            </div>
            <div className="by">
               By Dilunio.com
         </div>

         </div>
      </Fragment>
   )
}

export default Footer
