import React from 'react';
import '../style/nav.css';
import { Link } from 'react-router-dom';

function Nav() {
   return (
      <div>
         <nav className="nav_la">
            {/*   <div className="burger-2">
               <span className="linea"></span>
               <span className="linea"></span>
               <span className="linea"></span>
            </div> */}
            <div className="nav_pag">
               <ul className="lista_nav">
                  <Link to="dashboard">
                     <li>
                        <img
                           src="./home.svg"
                           alt="Home"
                           height="30px"
                           width="30px" />
                     </li>
                  </Link>
                  <Link to="usuarios">
                     <li>
                        <img
                           src="./perfil.svg"
                           alt="perfil"
                           height="30px"
                           width="20px" />
                     </li>
                  </Link>
                  <Link to="tienda">
                     <li>
                        <img
                           src="./Tienda.svg"
                           alt="Tienda"
                           height="30px"
                           width="30px" />
                     </li>
                  </Link>
               </ul>
            </div>
            <div className="nav_confi">
               <ul className="lista_conf">
                  <li>
                     <img
                        src="./configuración.svg"
                        alt="configuración"
                        height="30px"
                        width="30px" />
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   )
}

export default Nav
