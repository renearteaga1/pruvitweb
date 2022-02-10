import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProducto, getProductos } from "../../actions/productos";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Form = (props) => {
  const productos = useSelector((state) => state.productos.productos);
  const dispatch = useDispatch();

  const [precio, setPrecio] = React.useState({
    precio: [],
  })

  const [producto, setProducto] = React.useState({
    nombre: "",
    codigo: "",
    observacion: "",
    precio: [{
      precio: ""
    }]
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
    dispatch(addProducto(producto));
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

  const [codigos, setCodigos] = React.useState([]);

  const handleChangeAuto = (e) => {
    dispatch(getProductos())
    console.log('produc', productos)
    console.log(JSON.stringify(productos))
    setCodigos([JSON.stringify(productos)])
  };

  React.useEffect(() => {
    console.log('mmm')
    dispatch(getProductos())
  }, []);

  React.useEffect(() => {
    let data = [];
    productos.map((prod, index) => {
      console.log(prod)
      // setCodigos([{ 'label': prod.codigo, 'id': prod.id }])
      data.push({ label: prod.codigo, id: prod.id, nombre: prod.nombre, precio: prod.precio[0] })
    })
    setCodigos(data)

    // setCodigos([JSON.stringify(productos)])
  }, [productos]);

  React.useEffect(() => {
    console.log('codigos', codigos);
  }, [codigos])

  const [productoSelected, setProductoSelected] = React.useState('')

  const autoFill = (produ) => {

    //   console.log('precioo', precio)
    let precio
    if (produ.precio == undefined) { precio = '' } else { precio = produ.precio.precio }
    console.log('precio', precio)
    setProducto({
      nombre: produ.nombre,
      codigo: produ.label,
      observacion: "",
      precio: [{
        precio: precio
      }],
    });
  }

  return (
    <div className="card card-body mt-4 mb-4">
      <h1>Add Producto Form</h1>

      <Autocomplete
        disablePortal
        // value={value}
        id="combo-box-demo"
        options={codigos}
        sx={{ width: 300 }}
        clearOnEscape={true}
        freeSolo={true}
        autoHighlight={true}
        onChange={(event, newValue) => { newValue == null ? setProductoSelected('') : autoFill(newValue) }}
        // onInputChange={handleChangeAuto}
        renderInput={(params) => <TextField {...params} label="Codigo" />}
      />
      {/* {codigos.map(cod => <div>{cod.id}</div>)} */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            onChange={handleChange}
            value={producto.nombre}
          />
        </div>

        <div className="form-group">
          <label>Codigo</label>
          <input
            className="form-control"
            type="text"
            name="codigo"
            onChange={handleChange}
            value={producto.codigo}
          />
        </div>

        <div className="form-group">
          <label>Observacion</label>
          <input
            className="form-control"
            type="text"
            name="observacion"
            onChange={handleChange}
            value={producto.observacion}
          />
        </div>

        <div className="form-group">
          <label>Precio Anterior</label>
          <input
            disabled
            className="form-control"
            type="number"
            name="precio"
            onChange={handleChange}
            value={producto.precio[0].precio}
          />
        </div>

        <div className="form-group">
          <label>Precio</label>
          <input
            className="form-control"
            type="number"
            name="precio"
            onChange={handleChange}
            value={producto.precio[0].precio}
          />
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
