import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const TarjetaPago = ({ total }) => {
  const [numero, setNumero] = useState("")
  const [expiracion, setExpiracion] = useState("")
  const [codigo, setCodigo] = useState("")
  const [verCodigo, setVerCodigo] = useState(false)
  const [titular, setTitular] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [confirmado, setConfirmado] = useState(false)

  const navegar = useNavigate()

  const validarCompra = () => {
    if (!numero || !expiracion || !codigo || !titular) {
      setMensaje("Todos los campos son obligatorios")
      return
    }

    if (numero.length < 12 || isNaN(numero)) {
      setMensaje("Número de tarjeta inválido")
      return
    }

    if (codigo.length !== 3 || isNaN(codigo)) {
      setMensaje("Código de seguridad inválido")
      return
    }

    setConfirmado(true)
    setMensaje("¡Compra realizada con éxito!")

    setTimeout(() => {
      navegar("/")
    }, 3000)
  }

  const limpiarCampos = () => {
    setNumero("")
    setExpiracion("")
    setCodigo("")
    setTitular("")
    setMensaje("")
  }

  return (
    <div className="tarjeta-pago">
      <h3>Datos de la Tarjeta</h3>

      {mensaje && <p className={confirmado ? "success" : "error"}>{mensaje}</p>}

      <input
        type="text"
        placeholder="Número de tarjeta"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        disabled={confirmado}
      />

      <input
        type="text"
        placeholder="Expiración (MM/AA)"
        value={expiracion}
        onChange={(e) => setExpiracion(e.target.value)}
        disabled={confirmado}
      />

      <div className="codigo-seguridad">
        <input
          type={verCodigo ? "text" : "password"}
          placeholder="Código de seguridad"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          disabled={confirmado}
        />
        <button onClick={() => setVerCodigo(!verCodigo)}>
          {verCodigo ? "Ocultar" : "Ver"}
        </button>
      </div>

      <input
        type="text"
        placeholder="Nombre del titular"
        value={titular}
        onChange={(e) => setTitular(e.target.value)}
        disabled={confirmado}
      />

      <div className="botones">
        <button onClick={validarCompra} disabled={confirmado}>Confirmar Compra</button>
        <button onClick={limpiarCampos} disabled={confirmado}>Limpiar</button>
      </div>

      <p><strong>Total a pagar:</strong> ${total.toLocaleString()}</p>
    </div>
  )
}

export default TarjetaPago
