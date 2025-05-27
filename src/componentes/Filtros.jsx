import React, { useState } from "react"

const Filtros = ({ onFiltrar, onLimpiar }) => {
  const [marca, setMarca] = useState("")
  const [talla, setTalla] = useState("")

  const manejarFiltrar = () => {
    onFiltrar({ marca, talla })
  }

  const manejarLimpiar = () => {
    setMarca("")
    setTalla("")
    onLimpiar()
  }

  return (
    <div className="filtros">
      <h3>Filtros</h3>

      <label>Marca:</label>
      <select value={marca} onChange={(e) => setMarca(e.target.value)}>
        <option value="">Todas</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Brahma">Brahma</option>
        <option value="Reebok">Reebok</option>
        <option value="Timberland">Timberland</option>
      </select>

      <label>Talla:</label>
      <input
        type="number"
        value={talla}
        onChange={(e) => setTalla(e.target.value)}
        placeholder="Talla"
      />

      <div className="botones-filtro">
        <button onClick={manejarFiltrar}>Filtrar</button>
        <button onClick={manejarLimpiar}>Limpiar Filtros</button>
      </div>
    </div>
  )
}

export default Filtros
