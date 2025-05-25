import React, { createContext, useState } from "react"

export const CarritoContext = createContext()


export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])
  const costoDomicilio = 10000
  const [mensajeVisible, setMensajeVisible] = useState(false)


  const agregarAlCarrito = (producto) => {
  setCarrito([...carrito, producto])
  setMensajeVisible(true)
  setTimeout(() => setMensajeVisible(false), 2000)

  }

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito]
    nuevoCarrito.splice(index, 1)
    setCarrito(nuevoCarrito)
  }

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio, 0)
  }
  

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarAlCarrito,
      eliminarDelCarrito,
      calcularTotal,
      costoDomicilio,
      mensajeVisible
    }}>
      {children}
    </CarritoContext.Provider>
  )
}
