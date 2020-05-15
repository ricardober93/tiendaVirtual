import React, { Fragment , useState, useEffect} from 'react'
import {
  Link, useHistory
} from "react-router-dom";
// import Axios from 'axios';


const Navbar = ({ titulo }) => {

  let history = useHistory();

  const [logged, setlogged] = useState(false);

  //verificar si esta logeado
  const verifiAuto = () => {
    let token = localStorage.getItem('token')
    if (token == null) {
      return setlogged(false);
    }else{
     return setlogged(true)
    }
  }


  useEffect(() => {
     verifiAuto()
  }, [logged])
  


  //animacion del navbar vertical
  const navSildes = () => {
    const nav = document.querySelector('#nav1');
    const nav_link = document.querySelectorAll('.nav_links li')
    nav.classList.add('nav_active')
    nav_link.forEach((link) => {
      if (link) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinksFrame 0.5s ease forwards ${0.001}s`;
      }
    })
  }

  const navClose = () => {
    const nav = document.querySelector('#nav1');
    nav.classList.remove('nav_active')
  }

  const CerrarSesion =  e => {
    e.preventDefault();
  //  const res = await Axios.get('http://192.168.1.3:4000/cerrarsesion');
  localStorage.removeItem('token')

  history.push('login')

  }

  return (
    <Fragment>
      <header>
        <div className="burger" onClick={navSildes} >
          <span className="bar" ></span>
          <span className="bar" ></span>
          <span className="bar" ></span>
        </div>
        <nav id="nav1">
          <div className="cerrar" onClick={navClose} >
            <span className="linea1"></span>
            <span className="linea2"></span>
          </div>
          <div className="avatar-sesion" >
            <div className="avatar" ></div>
            <h2>Maria de los Angeles  </h2>
          </div>
          <ul className="nav_links">
            <li>Perfil</li>
            <li>Favoritos</li>
            <li>Historial de Compra</li>
            <li>Configuración</li>
            <li>Cerrar Sesión</li>
          </ul>
        </nav>
        <nav id="nav2">
          <ul className="nav_bar" >
            <li>
              <Link to="/">{titulo}</Link>
            </li>
            {
              logged 
              ?  <div>
              <Link onClick={CerrarSesion}>Cerrar Sesión</Link>
              </div>
               : <div>
              <Link to="/login">Login</Link>
              </div>
            }
            
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar
