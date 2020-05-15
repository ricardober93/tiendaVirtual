import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Dashboard from './dashboard/Dashboard'
import Usuarios from './dashboard/Usuarios';
import Tienda from './dashboard/Tienda';
import CrearUsuarios from './dashboard/CrearUsuarios';
import CrearRol from './dashboard/CrearRol';
import Editarperfil from './dashboard/Editarperfil';
import NuevoProducto from './dashboard/NuevoProducto';
import VerProducto  from './pages/VerProducto';
import Login from './pages/Login';
import CarritoCompra from './pages/CarritoCompra';
import MediosPagos from './pages/MediosPagos';


function App() {
  return (
    <Router>
      <div className="App" >
        < Navbar titulo="Tienda App" />
      </div>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/producto/:id">
          <VerProducto />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/usuarios">
          <Usuarios />
        </Route>
        <Route path="/editarperfil">
          <Editarperfil />
        </Route>
        <Route path="/usuarios-crear">
          <CrearUsuarios />
        </Route>
        <Route path="/usuario-crear-rol">
          <CrearRol />
        </Route>
        <Route path="/tienda">
          <Tienda />
        </Route>
        <Route path="/nuevo-producto">
          <NuevoProducto />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/carrito">
          <CarritoCompra />
        </Route>
        <Route path="/mediospagos">
          <MediosPagos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;