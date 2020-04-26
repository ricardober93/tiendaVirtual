import React, { Fragment, useState } from 'react';
import Axios from 'axios'
import { useHistory } from "react-router-dom";

function Login() {

    let history = useHistory();

    let ingresarInicial = {
        email:'',
        password:'',
    }
    

    const [ingresarUsuario, guardarIngresarUsuario] = useState(ingresarInicial);
    const [token, setToken] = useState('');


    const handleTabs = (e) => {

        let tabs = document.querySelectorAll('.tab_item')
        let tabsArr = Array.prototype.slice.call(tabs);
        let paneles = document.querySelectorAll('.panel_item');
        let panelesArr = Array.prototype.slice.call(paneles);

        if (e.target.classList[0] === 'tab_item') {
            let i = tabsArr.indexOf(e.target);
            tabsArr.map(tab => tab.classList.remove('active_tab_item'));
            tabsArr[i].classList.add('active_tab_item')
            panelesArr.map(panel => panel.classList.remove('active_item'));
            panelesArr[i].classList.add('active_item')
        }

    }

    const DatosEntrar = (e) => {
        guardarIngresarUsuario({
            ...ingresarUsuario,
            [e.target.name]:e.target.value
        })
    };

    const guardarToken = token => {
        localStorage.setItem('token', token)
    }

    const SubmitEntrar = async (e) =>{
        e.preventDefault();

        const res = await Axios.post('http://192.168.1.3:4000/iniciarsesion',{
            email : ingresarUsuario.email,
            password : ingresarUsuario.password
        });      
        setToken(res.data.token);
        if(token) {
            guardarToken(token);
            history.push("/");
        }
           
    }

    return (
        <Fragment>
            <section className="login">
                <div className="middle-30">
                    <div className="brand">
                        <h2>Tienda Logo</h2>
                    </div>
                    <div className="simple-tabs" id="simpleTab" >
                        <ul className="tabs" id="simpleTab">
                            <li
                                className="tab_item active_tab_item"
                                onClick={handleTabs}
                            >
                                Entrar
                           </li>
                            <li className="tab_item"
                                onClick={handleTabs}
                            >
                                Registrarse
                           </li>
                        </ul>
                        <div className="paneles">
                            <div className="panel_item active_item">
                                <form onSubmit={SubmitEntrar}>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Correo@correo.com"
                                        value={ingresarUsuario.email}
                                        onChange={DatosEntrar}
                                        required />
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        value={ingresarUsuario.password}
                                        onChange={DatosEntrar}
                                        required />
                                    <input
                                        className="btn "
                                        value="Entrar"
                                        type="submit"
                                        placeholder="password"
                                        required />
                                </form>
                            </div>
                            <div className="panel_item">
                                <form>
                                    <input
                                        name="nombre"
                                        type="text"
                                        placeholder="Joe Doe"
                                        required />
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Correo@correo.com"
                                        required />
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        required />
                                    <input
                                        name="password_confirmar"
                                        type="password"
                                        placeholder="confirmar password"
                                        required />
                                    <input
                                        className="btn "
                                        value="Registrarse"
                                        type="submit"
                                        placeholder="password"
                                        required />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="middle-70">
                    <img src="./login.svg" alt="login" />
                </div>
            </section>
        </Fragment>
    )
}

export default Login
