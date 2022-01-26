import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducto } from "../../actions/productos";

const Form = (props) => {
  const dispatch = useDispatch();

  const [precio, setPrecio] = React.useState({
    precio: [],
  })

  const [producto, setProducto] = React.useState({
    nombre: "",
    codigo: "",
    observacion: "",
    precio: []
  });

  const handleChange = (e) => {

    if (e.target.name == 'precio') {
      setProducto({ ...producto, precio: [{ precio: e.target.value }] })
    } else {
      setProducto({ ...producto, [e.target.name]: e.target.value })
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addProducto(producto));
    setPrecio({ precio: [] });
    setProducto({
      nombre: "",
      codigo: "",
      observacion: "",
      precio: [{
        precio: ""
      }],
    });
    // console.log(producto);
  };
  return (
    <div className="card card-body mt-4 mb-4">
      <h1>Add Producto Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleChange}
            value={producto.name}
          />
        </div>

        <div className="form-group">
          <label>Codigo</label>
          <input
            className="form-control"
            type="text"
            name="codigo"
            onChange={handleChange}
            value={producto.email}
          />
        </div>

        <div className="form-group">
          <label>Observacion</label>
          <input
            className="form-control"
            type="text"
            name="observacion"
            onChange={handleChange}
            value={producto.message}
          />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            className="form-control"
            type="number"
            name="precio"
            onChange={handleChange}
            value={producto.precio.precio}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
        <div>{producto.nombre}</div>
      </form>
    </div>
  );
};

export default Form;
