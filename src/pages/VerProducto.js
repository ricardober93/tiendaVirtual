import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import { Link, useParams, useHistory } from 'react-router-dom';
import { ListarProductos } from '../components/ListarProductos';
import Axios from 'axios';


let productosTienda = [
    {
        id: 1,
        nombre: 'New Balance',
        precio: '25.000',
        descripcion: 'Tenis Running Azul-Amarillo New Balance Taril Running Course En Sentier',
    },
    {
        id: 2,
        nombre: 'adidas Performance',
        precio: '35.000',
        descripcion: 'Tenis Lifestyle Blanco-Multicolor adidas Performance Advantage',
    },
    {
        id: 3,
        nombre: 'Skechers',
        precio: '36.000',
        descripcion: 'Tenis Running Negro Skechers',
    },
]


const productoMap = productosTienda.map((producto) => <Link key={producto.id} to={"/producto/" + producto.id} ><ListarProductos producto={producto} /> </Link>)



const VerProducto = () => {

    let history = useHistory();


    let current = document.querySelector('#seleccionado');
    const thumbs = document.querySelectorAll('.miniaturas img');
    const opacity = 0.5;
    
    const imgActivate = (e) => {
        thumbs[0].style.opacity = opacity;
        //reseteo la opacidad
        thumbs.forEach( img => (img.style.opacity = 1));
    
        current.src = e.target.src;
        current.classList.add('fade-in');
    
        setTimeout( ()=> current.classList.remove('fade-in'),500);
    
        e.target.style.opacity = opacity;
    }

    let { id } = useParams();

    const [producto, setProducto] = useState([])
// Cuando tengamos que cambiar el estado a reduc y guardar el carrito en una lista
    // const [ListProductos, setListProductos] = useState([])


    const compraProducto = () => {
        history.push('/mediospagos')
    };

   

    const agregarCarrito = (producto) => {

        const productoNuevo = {
            _id: producto._id,
            nombre:producto.nombre,
            descripcion:producto.descripcion,
            precio:producto.precio
        }

        if (producto) {
            if (localStorage.getItem("carrito")  == null) {
                const list = [];
                list.push(productoNuevo)
                localStorage.setItem("carrito", JSON.stringify(list))
            } else {
                const list = JSON.parse(localStorage.getItem("carrito"))
                list.push(productoNuevo)
                localStorage.setItem("carrito", JSON.stringify(list))
            }
        }

      
    }


    
    useEffect(() => {
        const obtenerProducto = async () => {
            const res = await Axios.get('http://localhost:4000/producto/' + id)
            setProducto(res.data)
        }
        obtenerProducto()
    }, [id]);



    return (
        <div>
            <section className="detalle-producto-grid">
                <div className="imagen">
                    <div className="gird-detalleImagen">
                        <div className="miniaturas">
                            <img src="../1.jpg" alt="" onClick={imgActivate}  />
                            <img src="../2.jpg" alt="" onClick={imgActivate}  />
                            <img src="../3.jpg" alt="" onClick={imgActivate}  />
                            <img src="../img-zapatos.png" alt="" onClick={imgActivate} />
                        </div>
                        <div className="imagen-grande">
                            <img src="../img-zapatos.png" alt="" id="seleccionado" />
                        </div>
                    </div>
                </div>
                <div className="informacion">
                    <h1> {producto.nombre} - {producto.marca} </h1>
                    <div className="categoria"> {producto.estado} </div>
                    <p> {producto.descripcion} </p>
                    <p className="precio"> $ {producto.precio} </p>
                    <button onClick={()=>{agregarCarrito(producto)}} > Agregar a Carrito </button>
                    <button onClick={compraProducto} > Comprar ahora </button>
                </div>
            </section>
            <section className="recomendados">
                <h2>Recomendados</h2>
                <div className="grid-recomendados">
                    {productoMap}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default VerProducto
