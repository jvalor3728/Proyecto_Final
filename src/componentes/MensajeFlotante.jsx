import React, { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

const MensajeFlotante = () => {
  const { mensajeVisible } = useContext(CarritoContext)

  if (!mensajeVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        backgroundColor: "#27ae60",
        color: "white",
        padding: "12px 18px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        zIndex: 1000
      }}
    >
      ✅ Producto agregado al carrito
    </div>
  )
}

export default MensajeFlotante
