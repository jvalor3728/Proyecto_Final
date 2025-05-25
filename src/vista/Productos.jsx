import React, { useState, useEffect } from "react"
import ProductoZapato from "../componentes/ProductoZapato"
import DetalleProducto from "../componentes/DetalleProducto"
import Filtros from "../componentes/Filtros"
import { useNavigate } from "react-router-dom"

const Productos = ({ data }) => {
  const [productos, setProductos] = useState([])
  const [productoSeleccionado, setProductoSeleccionado] = useState(null)
  const [filtro, setFiltro] = useState({})
  const [contador, setContador] = useState(15)
  const navegar = useNavigate()

  useEffect(() => {
    if (data && data.length > 0) {
      setProductos(data.slice(0, 15))
    }
  }, [data])

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 2 &&
      contador < data.length
    ) {
      const nuevos = data.slice(0, contador + 15)
      setProductos(nuevos)
      setContador(contador + 15)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [contador, data])

  const manejarFiltro = ({ marca, talla }) => {
    const filtrados = data.filter((producto) => {
      return (
        (marca ? producto.marca === marca : true) &&
        (talla ? producto.talla.toString() === talla.toString() : true)
      )
    })
    setProductos(filtrados.slice(0, 15))
    setContador(15)
  }

  const limpiarFiltro = () => {
    setProductos(data.slice(0, 15))
    setFiltro({})
    setContador(15)
  }

  const cancelarCompra = () => {
    navegar("/")
  }

  const irACarrito = () => {
    navegar("/carrito")
  }

  return (
    <div className="vista-productos">
      <h2>Lista de Zapatos</h2>

      <div className="barra-navegacion">
        <button onClick={cancelarCompra}>Cancelar Compra</button>
        <button onClick={irACarrito}>Completar Compra</button>
      </div>

      <Filtros onFiltrar={manejarFiltro} onLimpiar={limpiarFiltro} />

      <div className="seccion-productos">
        <div className="lista-productos">
          {productos.map((producto) => (
            <ProductoZapato
              key={producto.id}
              producto={producto}
              onSeleccionar={setProductoSeleccionado}
            />
          ))}
          {contador >= data.length && <p>No hay más productos por cargar</p>}
        </div>

        <div className="detalle-derecha">
          <DetalleProducto producto={productoSeleccionado} />
        </div>
      </div>
    </div>
  )
}

export default Productos
