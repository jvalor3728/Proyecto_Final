import React, { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

const DetalleProducto = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CarritoContext)

  if (!producto) {
    return <div className="detalle-vacio">Selecciona un producto para ver los detalles</div>
  }

  return (
    <div className="detalle-producto">
      <h3>{producto.nombre}</h3>
      <img src={producto.imagen} alt={producto.nombre} width="150" />
      <p><strong>Marca:</strong> {producto.marca}</p>
      <p><strong>Talla:</strong> {producto.talla}</p>
      <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
      <p><strong>Descripción:</strong> {producto.descripcion}</p>
      <button onClick={() => {
  console.log("Agregado:", producto)
  agregarAlCarrito(producto)
}}>
  Agregar al carrito
</button>
    </div>
  )
}

export default DetalleProducto
