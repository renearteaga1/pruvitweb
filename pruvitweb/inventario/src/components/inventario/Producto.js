import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductos,
  addProducto,
  updateProducto,
  filterProductos,
} from "../../actions/productos";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Producto = (props) => {
  const productos = useSelector((state) => state.productos.productos);
  const dispatch = useDispatch();

  const [precio, setPrecio] = React.useState({
    precio: [],
  });

  const [producto, setProducto] = React.useState({
    id: "",
    nombre: "",
    codigo: "",
    observacion: "",
    precio: [
      {
        precio: "",
        iva: "",
      },
    ],
    cantidad: [
      {
        cantidad: "",
      },
    ],
  });

  const handleChange = (e) => {
    if (e.target.name == "precio") {
      setProducto({ ...producto, precio: [{ precio: e.target.value }] });
    } else if (e.target.name == "cantidad") {
      setProducto({ ...producto, cantidad: [{ cantidad: e.target.value }] });
    } else {
      setProducto({ ...producto, [e.target.name]: e.target.value });
    }
  };

  const [update, setUpdate] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    update
      ? dispatch(updateProducto(producto))
      : dispatch(addProducto(producto));
    // dispatch(addProducto(producto));
    console.log("producto", producto);
    setPrecio({ precio: [] });
    setProducto({
      id: "",
      nombre: "",
      codigo: "",
      observacion: "",
      precio: [
        {
          precio: "",
        },
      ],
      cantidad: [
        {
          cantidad: "",
        },
      ],
    });
    // console.log(producto);
  };

  const [codigos, setCodigos] = React.useState([]);

  const handleChangeAuto = (e) => {
    // dispatch(getProductos());
    // console.log("produc", productos);
    // console.log(JSON.stringify(productos));
    // setCodigos([JSON.stringify(productos)]);
    if (e.target.value.length > 0) {
      dispatch(filterProductos(e.target.value));
    } else {
      setUpdate(false);
      setCodigos([]);
      setProducto({
        id: "",
        nombre: "",
        codigo: "",
        observacion: "",
        precio: [
          {
            precio: "",
            iva: "",
          },
        ],
        cantidad: [
          {
            cantidad: "",
          },
        ],
      });
    }
  };

  // React.useEffect(() => {
  //   console.log("mmm");
  //   dispatch(getProductos());
  // }, []);

  React.useEffect(() => {
    let data = [];
    productos.map((prod, index) => {
      console.log(prod);
      // setCodigos([{ 'label': prod.codigo, 'id': prod.id }])
      data.push({
        label: prod.codigo,
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precio.slice(-1)[0],
        cantidad: prod.cantidad.slice(-1)[0],
      });
    });
    setCodigos(data);

    // setCodigos([JSON.stringify(productos)])
  }, [productos]);

  // React.useEffect(() => {
  //   console.log("codigos", codigos);
  // }, [codigos]);

  const [productoSelected, setProductoSelected] = React.useState("");

  const autoFill = (produ) => {
    setUpdate(true);
    setProducto({
      id: produ.id,
      nombre: produ.nombre,
      codigo: produ.label,
      observacion: "",
      precio: [
        {
          precio: produ.precio == undefined ? "" : produ.precio.precio,
        },
      ],
      cantidad: [
        {
          cantidad: produ.cantidad == undefined ? "" : produ.cantidad.cantidad,
        },
      ],
    });
  };

  //   const [rowNum, setRowNum] = React.useState(1);

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
        onChange={(event, newValue) => {
          newValue == null ? setProductoSelected("") : autoFill(newValue);
        }}
        // className="form-control"
        onInputChange={handleChangeAuto}
        // renderInput={(params) => <TextField {...params} label="Codigo" />}

        renderInput={(params) => (
          <div ref={params.InputProps.ref}>
            <label>Codigo</label>
            <input
              type="text"
              // name="codigo"
              {...params.inputProps}
              className="form-control"
            />
          </div>
        )}
      />
      {/* {codigos.map(cod => <div>{cod.id}</div>)} */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <Autocomplete
              disablePortal
              // value={value}
              id="codigo-row-0"
              options={codigos}
              sx={{ width: 300 }}
              clearOnEscape={true}
              freeSolo={true}
              autoHighlight={true}
              onChange={(event, newValue) => {
                newValue == null ? setProductoSelected("") : autoFill(newValue);
              }}
              // className="form-control"
              onInputChange={handleChangeAuto}
              // renderInput={(params) => <TextField {...params} label="Codigo" />}

              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <label>Codigo</label>
                  <input
                    type="text"
                    // name="codigo"
                    {...params.inputProps}
                    className="form-control"
                  />
                </div>
              )}
            />
          </div>
          <div className="col">
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
          </div>
          <div className="col">
            <div className="form-group">
              <label>Costo</label>
              <input
                className="form-control"
                type="number"
                name="costo"
                onChange={handleChange}
                value={producto.costo}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Cantidad</label>
              <input
                className="form-control"
                type="number"
                name="cantidad"
                onChange={handleChange}
                value={producto.cantidad.slice(-1)[0].cantidad}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Precio</label>
              <input
                className="form-control"
                type="number"
                name="precio"
                onChange={handleChange}
                value={producto.precio.slice(-1)[0].precio}
              />
            </div>
          </div>
          <div className="col">
            <div className="col-md-4 m-2 p-1 border rounded">
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
            </div>
          </div>
        </div>

        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Producto;
