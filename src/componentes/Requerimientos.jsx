import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const Requerimientos = ({ setRequerimientos }) => {
  const [nombre, setNombre] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [direccion, setDireccion] = useState("")
  const [entrega, setEntrega] = useState("")
  const [error, setError] = useState("")

  const navegar = useNavigate()

  const manejarIniciarCompra = () => {
    if (!nombre || !presupuesto || !direccion || !entrega) {
      setError("Todos los campos son obligatorios")
      return
    }

    if (nombre.length > 30) {
      setError("Nombre del cliente")
      return
    }

    if (isNaN(presupuesto)) {
      setError("El presupuesto debe ser un número valido")
      return
    }

    setRequerimientos({ nombre, presupuesto: Number(presupuesto), direccion, entrega })
    navegar("/productos")
  }

  const limpiarCampos = () => {
    setNombre("")
    setPresupuesto("")
    setDireccion("")
    setEntrega("")
    setError("")
  }

  return (
    <div className="formulario-requerimientos">
      <h2>Requerimientos de Compra</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Presupuesto Máximo"
        value={presupuesto}
        onChange={(e) => setPresupuesto(e.target.value)}
      />

      <input
        type="text"
        placeholder="Dirección"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />

      <div className="opciones-entrega">
        <label>
          <input
            type="radio"
            name="entrega"
            value="domicilio"
            checked={entrega === "domicilio"}
            onChange={(e) => setEntrega(e.target.value)}
          />
          Domicilio
        </label>
        <label>
          <input
            type="radio"
            name="entrega"
            value="recoger"
            checked={entrega === "recoger"}
            onChange={(e) => setEntrega(e.target.value)}
          />
          Recoger en tienda
        </label>
      </div>


      <div className="botones">
        <button onClick={manejarIniciarCompra}>Iniciar Compra</button>
        <button onClick={limpiarCampos}>Limpiar</button>
      </div>
    </div>
  )
}

export default Requerimientos
