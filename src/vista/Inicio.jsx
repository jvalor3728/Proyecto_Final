import React, { useState } from "react"
import Requerimientos from "../componentes/Requerimientos"

const Inicio = ({ setRequerimientos }) => {
  return (
    <div className="vista-inicio">
      <Requerimientos setRequerimientos={setRequerimientos} />
    </div>
  )
}

export default Inicio
