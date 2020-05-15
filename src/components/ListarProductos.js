import React from 'react'

export const ListarProductos = ({producto}) => {
    return (
        <div className="card">
            <img src="../img-zapatos.png" alt="" />
            <h3 className="titulo">{producto.nombre}</h3>
            <div className="category">
                <p>  $ {producto.precio}</p>
            </div>
            <div className="description">
                <p> {producto.descripcion} </p>
                <button> Agregar al carrito </button>
            </div>
        </div>
    )
}
