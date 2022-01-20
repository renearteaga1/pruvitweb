import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductos } from "../../actions/productos";

const Inventario = () => {
  const productos = useSelector((state) => state.productos.productos);
  const dispatch = useDispatch();

  return (
    <div className="container my-4">
      <h2>Inventario</h2>
      <div>
        {productos.map((prod) => (
          <div key={prod.id}>
            <p>Nombre: {prod.nombre}</p>
            <p>Codigo: {prod.codigo}</p>
            <p>Obs: {prod.observacion}</p>
            <hr />
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(getProductos())}>Saluda Producto</button>
    </div>
  );
};

export default Inventario;
