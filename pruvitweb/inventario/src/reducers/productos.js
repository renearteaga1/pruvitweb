import {
  GET_PRODUCTOS,
  ADD_PRODUCTO,
  UPDATE_PRODUCTO,
  FILTER_PRODUCTOS,
} from "../actions/types";

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
        productos: [...state.productos, action.payload],
      };

    case UPDATE_PRODUCTO:
      return {
        ...state,
        productos: [...state.productos, action.payload],
      };

    case FILTER_PRODUCTOS:
      return {
        ...state,
        productos: action.payload,
      };
    default:
      return state;
  }
}
