import React, { Fragment } from 'react'
import '../style/pagos.css'

function MediosPagos() {
    return (
        <Fragment>
            <section className="grid-pagos">
                <div className="silde" id="silde1">
                    <div className="titulo">
                        Envio
                    </div>
                    <div className="formulario-envio">
                        <form>
                            <div className="grupos-campos">
                                <input type="text" placeholder="Nombre Completo" />
                                <input type="text" placeholder="Ciudad" />
                            </div>
                            <div className="grupos-campos">
                                <input type="text" placeholder="Telefono" />
                                <input type="text" placeholder="Dirección" />
                            </div>
                            <button className="btn-envio" >Siguiente</button>
                        </form>
                    </div>
                </div>
                <div className="silde" id="silde2">
                    <div className="titulo">
                        Pagos
                    </div>
                    <div className="formulario-pagos">
                        <form>
                            <div className="checks-pagos">
                                <div>
                                    <input className="checkmark" type="radio" id="card" name="card" value="card" />
                                    <label >Card</label>
                                </div>
                               <div>
                                <input className="checkmark" type="radio" id="paypal" name="paypal" value="paypal" />
                                    <label>Paypal</label>
                               </div>
                                <div>
                                    <input className="checkmark" type="radio" id="offline" name="offline" value="offline" />
                                    <label>Offline</label>
                                </div>
                            </div>
                            <div className="grupos-campos">
                                <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                <input type="text" placeholder="24-05-2025" />
                            </div>
                            <div className="campos">
                                <input type="text" placeholder="CVC" />
                            </div>
                        </form>
                    </div>
                </div>
                <div>3</div>
            </section>
        </Fragment>
    )
}

export default MediosPagos
