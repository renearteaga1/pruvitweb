import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducto } from "../../actions/productos";

const Form = (props) => {
  const dispatch = useDispatch();

  const [producto, setProducto] = React.useState({
    nombre: "",
    codigo: "",
    observacion: "",
    precio: "",
  });

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProducto(producto));
    setProducto({
      nombre: "",
      codigo: "",
      observacion: "",
      precio: "",
    });
    console.log(producto);
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
            value={producto.precio}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
