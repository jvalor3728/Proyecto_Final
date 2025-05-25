import React, { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { useNavigate } from "react-router-dom"

const CarritoIcono = () => {
  const { carrito } = useContext(CarritoContext)
  const navegar = useNavigate()

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "10px 15px",
        borderRadius: "8px",
        cursor: "pointer",
        zIndex: 1000
      }}
      onClick={() => navegar("/carrito")}
    >
     🛒Carrito ({carrito.length})
    </div>
  )
}

export default CarritoIcono
