import React, { Fragment } from "react";
import ReactDom from "react-dom";

import Header from "../../../frontend/src/components/layout/Header";
import Index from "./inventario/Index";
import Form from "./inventario/Form";

import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <div className="container">
        <Index />
      </div>
      <div className="container">
        <Form />
      </div>
    </Provider>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
