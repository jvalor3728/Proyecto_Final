import React, { useState, useEffect } from 'react'
import CarritoIcono from "./componentes/CarritoIcono"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CarritoProvider } from './context/CarritoContext'
import MensajeFlotante from "./componentes/MensajeFlotante"


import Inicio from "./vista/Inicio"
import Productos from "./vista/Productos"
import CarritoPago from "./vista/CarritoPago"

import zapatosData from "./assets/zapatos.json"
import "./Estilos/main.css"

const App = () => {
  const [requerimientos, setRequerimientos] = useState(null)
  const [zapatos, setZapatos] = useState([])

  useEffect(() => {
    setZapatos(zapatosData)
  }, [])

  return (
    <CarritoProvider>
      <Router>
        <CarritoIcono />
        <MensajeFlotante />
        <Routes>
          <Route
            path="/"
            element={<Inicio setRequerimientos={setRequerimientos} />}
          />
          <Route
            path="/productos"
            element={<Productos data={zapatos} />}
          />
          <Route
            path="/carrito"
            element={<CarritoPago />}
          />
        </Routes>
      </Router>
    </CarritoProvider>
  )
}

export default App
