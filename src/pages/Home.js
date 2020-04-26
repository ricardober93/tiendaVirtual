import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'

import { Link } from 'react-router-dom';
import { ListarProductos } from '../components/ListarProductos';
import Axios from 'axios';


function Home(){

  const [productos, setProductos] = useState([])

  const obtenerProductos = async() =>{
    const res = await Axios.get('http://192.168.1.3:4000/productos');
    setProductos(res.data)
    }

  useEffect(() => {
    obtenerProductos()
  }, [])

    return (
    <div>
      <div className="search">
        <input className="search" type="search" name="busqueda" id="" placeholder="¿Qué estas Buscando?" />
        <input className="enviar" type="submit" value="Buscar" />
      </div>
      <section className="feed">
        
        {
          productos ? productos.map(producto => (
            <Link to={"/producto/" + producto._id} key={producto._id} >
            <ListarProductos  producto={producto} /> </Link>
          )) : 'Cargando'
        }

      </section>

      {/*       <div className="MostrarMas">
        <button className="Mostrar" >Mostrar Más</button>
      </div> */}

      <Footer />

    </div>
  )
}

export default Home;
