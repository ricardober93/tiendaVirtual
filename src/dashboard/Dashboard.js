import React, { Component, Fragment } from 'react'
import Nav from '../components/Nav'
import Highcharts from 'highcharts'

import '../style/dashboard.css';


const chartJS = () => {
   Highcharts.chart('container', {
      chart: {
         type: 'bar'
      },
      title: {
         text: 'Resumen de ventas'
      },
      xAxis: {
         categories: ['Juan', 'Marcela', 'Sofia']
      },
      yAxis: {
         title: {
            text: 'Ventas por asesor'
         }
      },
      series: [{
         name: 'Vendores',
         data: [17, 12, 8]
      }]
   });
}




export default class Dashboard extends Component {

   componentDidMount() {
      chartJS()
   };
   render() {
      return (
         <Fragment >
            <div className="dashboard">

               <Nav />
               <section >
                  <h1 className="titulo-d">Dashboard</h1>
                  <div>
                     <h3>Productos más vendidos</h3>
                     <div className="ultimos-pedidos">
                        <div className="card-D">
                           <img className="ultimo-img" src="./img-zapatos.png" alt="" />
                           <div className="body-c">
                              <h4>Nombre del producto</h4>
                              <p> <strong>Cliente</strong> Victor Bermudez </p>
                              <button className="btn-ultimo">$70.000</button>
                           </div>
                        </div>
                        {/* card final */}
                        <div className="card-D">
                           <img className="ultimo-img" src="./img-zapatos.png" alt="" />
                           <div className="body-c">
                              <h4>Nombre del producto</h4>
                              <p> <strong>Cliente</strong> Victor Bermudez </p>
                              <button className="btn-ultimo">$70.000</button>
                           </div>
                        </div>
                        {/* card final */}
                        <div className="card-D">
                           <img className="ultimo-img" src="./img-zapatos.png" alt="" />
                           <div className="body-c">
                              <h4>Nombre del producto</h4>
                              <p> <strong>Cliente</strong> Victor Bermudez </p>
                              <button className="btn-ultimo">$70.000</button>
                           </div>
                        </div>
                        {/* card final */}
                     </div>
                  </div>
                  <div id="container" ></div>
               </section>
            </div>
         </Fragment>
      )
   }
}
