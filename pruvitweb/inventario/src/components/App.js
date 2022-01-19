import React, { Fragment } from "react";
import ReactDom from "react-dom";

const App = () => {
  return (

    <div className="container">
      <Dashboard />
    </div>

  );
};

ReactDom.render(<App />, document.getElementById("inventario"));
