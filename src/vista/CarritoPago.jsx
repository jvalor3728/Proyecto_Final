import React from "react"
import { useNavigate } from "react-router-dom"
import Carrito from "../componentes/Carrito"

const CarritoPago = () => {
  const navegar = useNavigate()

  const volverAProductos = () => {
    navegar("/productos")
  }

  const cancelarCompra = () => {
    navegar("/")
  }

  return (
    <div className="carrito-pago">
      <h2>Resumen de la Compra</h2>

      <Carrito />

      <div className="botones-navegacion">
        <button onClick={volverAProductos}>Seguir Comprando</button>
        <button onClick={cancelarCompra}>Cancelar Compra</button>
      </div>
    </div>
  )
}

export default CarritoPago
