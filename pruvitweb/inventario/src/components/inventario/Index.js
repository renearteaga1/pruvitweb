import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductos } from "../../actions/productos";
import Button from "@mui/material/Button";

const Inventario = () => {
  const productos = useSelector((state) => state.productos.productos);
  const dispatch = useDispatch();

  const [showProd, setShowProd] = useState(false);

  return (
    <div className="container my-4">
      <h2>Inventario</h2>
      <div>
        {showProd &&
          productos.map((prod, index) => (
            <div key={prod.id}>
              <p>Nombre: {prod.nombre}</p>
              <p>Codigo: {prod.codigo}</p>
              <p>Obs: {prod.observacion}</p>
              {prod.precio.length > 0
                ? prod.precio.map((prec) => <p>Precio: $ {prec.precio}</p>)
                : "Precio: $ 0.00"}
              <hr />
            </div>
          ))}
      </div>
      {/* <Button variant="contained" onClick={() => dispatch(getProductos())}>Saluda Producto</Button> */}
      <Button
        variant="contained"
        onClick={() => {
          setShowProd((value) => !value);
          dispatch(getProductos());
        }}
      >
        Show Productos
      </Button>
    </div>
  );
};

export default Inventario;
