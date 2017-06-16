import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

var rootObject = {
  degrees: 67,
  name: "Some name",
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
