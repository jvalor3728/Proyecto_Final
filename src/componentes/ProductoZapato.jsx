import React from "react"

const ProductoZapato = ({ producto, onSeleccionar }) => {
  return (
    <div className="producto-card">
      <img src={producto.imagen} alt={producto.nombre} width="150" />
      <h4>{producto.nombre}</h4>
      <p><strong>Marca:</strong> {producto.marca}</p>
      <p><strong>Talla:</strong> {producto.talla}</p>
      <p><strong>Precio:</strong> ${producto.precio.toLocaleString()}</p>
      <button onClick={() => onSeleccionar(producto)}>Ver Detalle</button>
    </div>
  )
}

export default ProductoZapato
