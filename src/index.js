import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

var rootObject = {
  degrees: 67,
  name: "Some name",
  nothing: null,
  completely: undefined,
  someArray: [1, 2, 3, 4, 5],
  something: {
    nothing: true,
    everything: false
  },
  someFunction: () => console.log("yes")
};

rootObject.something.repeat = rootObject;

ReactDOM.render(
  <App rootObject={rootObject} extended={["rootObject"]} />,
  document.querySelector(".container")
);
