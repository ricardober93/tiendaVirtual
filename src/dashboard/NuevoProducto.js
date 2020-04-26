import React, { Fragment } from "react";
import Nav from "../components/Nav";

import "../style/CrearUsuario.css";
import { Link } from "react-router-dom";

export default function NuevoProducto() {
  return (
    <Fragment>
      <div className="dashboard">
        <Nav />

        <section>
          <div className="header">
            <Link to="tienda">
              <img src="./flecha.svg" alt="regresar" />
            </Link>
            <h1 className="titulo-d">Crear nuevo producto</h1>
          </div>
          <div className="nuevo-usuario">
            <div className="form-nuevo-producto">
              <div className="grid-1">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nombre del producto"
                />
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <div className="grid-2">
                <input type="text" name="" id="" placeholder="stock" />
                <input type="text" name="" id="" placeholder="categoria" />
                <input type="text" name="" id="" placeholder="precio" />
                <input type="file" name="" id="" placeholder="imagen" />
                <button>Guardar usuario</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
