import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import '../style/carrito.css'


function CarritoCompra() {


    const [carrito, setCarrito] = useState({
        Loading: false,
        List:[]
    })

    const [precio, setprecios] = useState(0)
    const [envio] = useState(16000)
    const [total, setTotal] = useState(0)

    


    const totalPedido = (list) => {
        const precios = [];

        list.forEach( item => {
            precios.push(item.precio)
        })

        let suma = 0;
        precios.forEach ((precio) => {
            suma += precio;
        });
        setprecios(suma)
    }


    useEffect(() => {

        const obtenerCarrito = () => {

            if (localStorage.getItem("carrito")  !== null) {
                const list = JSON.parse(localStorage.getItem("carrito"))
                setCarrito({
                    Loading: false,
                    List:list
                })
    
                totalPedido(list)
            }else{
                setCarrito({Loading: true})
            }
            
        }

        obtenerCarrito()


        const totalEnvio = (precio, envio) => {
           if (precio !== null) {
            setTotal(precio + envio )
           }
        }


        totalEnvio(precio, envio)
    }, [precio, envio])

    return (
        <Fragment>
            
            <div className="grid">
                <div className="columna">
                    <div className="titulo-carrito">
                        <h3>Articulo del Carrito Compra</h3>
                    </div>
                    <div className="card-grid">
                        
                    {
                        carrito.List ? carrito.List.map( producto => (
                            <div className="card" key={producto._id}>
                            <div><img src="./img-zapatos.png" alt=""/></div>
                            <div className="texto-carrito">
                            <h3>{producto.nombre}</h3>
                            <p> {producto.descripcion} </p>
                            <div className="content-select">
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <button>Quitar</button>
                            </div>
                            </div>
                            <div>
                                <h3> {producto.precio} </h3>
                            </div>
                        </div>
                        ))
                        : 'Cargando...'
                    }


                    </div>
                </div>
                <div className="columna">
                    <div className="resumen">
                        Resumen del Pedido
                    </div>
                    <div className="card-grid">
                        <div className="form-cupon">
                            <form >
                                <input className="cupon" type="text" placeholder="Cupon"/>
                            </form> 
                        </div>
                        <div className="lista-pedidos">
                            <p> Total de la Compra: <span> $ {precio} </span> </p>
                            <p> Envio: <span> $ {envio} </span> </p>
                            <p> Total del pedido: <span> $ {total} </span> </p>
                        </div>
                        <button className="btn-carrito" >Finalizar Compra</button>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>
    )
}

export default CarritoCompra
