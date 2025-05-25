import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import TarjetaPago from "./TarjetaPago";

const Carrito = () => {
  const {
    carrito,
    eliminarDelCarrito,
    calcularTotal,
    costoDomicilio
  } = useContext(CarritoContext);

  const totalCompra = calcularTotal();
  const totalConDomicilio = totalCompra + (carrito.length > 0 ? costoDomicilio : 0);

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Marca</th>
              <th>Talla</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((producto, index) => (
              <tr key={index}>
                <td>{producto.nombre}</td>
                <td>{producto.marca}</td>
                <td>{producto.talla}</td>
                <td>${producto.precio.toLocaleString()}</td>
                <td>
                  <button onClick={() => eliminarDelCarrito(index)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {carrito.length > 0 && (
        <>
          <div className="resumen-compra">
            <p>Total productos: {carrito.length}</p>
            <p>Costo productos: ${totalCompra.toLocaleString()}</p>
            <p>Domicilio: ${costoDomicilio.toLocaleString()}</p>
            <p><strong>Total: ${totalConDomicilio.toLocaleString()}</strong></p>
          </div>

          <TarjetaPago total={totalConDomicilio} />
        </>
      )}
    </div>
  );
};

export default Carrito;
