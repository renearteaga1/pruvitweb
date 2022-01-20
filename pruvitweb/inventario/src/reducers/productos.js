import { GET_PRODUCTOS, ADD_PRODUCTO } from "../actions/types";

const initialState = {
  productos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };

    case ADD_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, actios.payload],
      };
    default:
      return state;
  }
}
