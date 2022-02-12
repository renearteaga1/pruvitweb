import axios from "axios";
import {
  GET_PRODUCTOS,
  ADD_PRODUCTO,
  FILTER_PRODUCTOS,
  UPDATE_PRODUCTO,
} from "./types";

// Get Productos
export const getProductos = () => (dispatch) => {
  axios
    .get("/inventario/api/producto/")
    .then((res) => {
      // console.log(res.data)
      dispatch({
        type: GET_PRODUCTOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
  //   return {
  //     type: GET_PRODUCTOS,
  //     payload: "from actions Producto",
  //   };
};

// Add Producto
export const addProducto = (producto) => (dispatch) => {
  axios
    .post("/inventario/api/producto/", producto)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCTO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Filter Productos for Autocomplete
export const filterProductos = (codigo) => (dispatch) => {
  axios
    .get(`/inventario/api/buscar-producto?codigo=${codigo}`)
    .then((res) => {
      dispatch({
        type: FILTER_PRODUCTOS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//Update Producto
export const updateProducto = (producto) => (dispatch) => {
  axios
    .put(`/inventario/api/producto/${producto.id}/`, producto)
    .then((res) => {
      dispatch({
        type: UPDATE_PRODUCTO,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.response.data));
};
