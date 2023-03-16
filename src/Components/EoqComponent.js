import '../assets/styles/EoqStyles.css'
export default function EoqComponent(){

    return(
        <div className="Container Eoq-container">
            <div className="container-formulario-eoq">
                <label>
                    Demanda actual:
                </label>
                <input className="mb-2 form-control"></input>

                <label>
                    Costo del pedido:
                </label>
                <input className="mb-2 form-control"></input>

                <label>
                    Costo del mantenimiento:
                </label>
                <input className="mb-2 form-control"></input>
                <button type="button" className="btn btn-success">Calcular cantidad optima</button>
            </div>
        </div>
    )
}