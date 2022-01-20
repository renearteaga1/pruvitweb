import axios from "axios";
import { GET_PRODUCTOS, ADD_PRODUCTO } from "./types";

// Get Productos
export const getProductos = () => (dispatch) => {
  axios
    .get("/inventario/api/producto/")
    .then((res) => {
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
