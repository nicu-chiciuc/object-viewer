import React from "react";
import ReactDOM from "react-dom";

import PropertyViewer from "./PropertyViewer";

var sampleObject = {
  degrees: 67,
  name: "Some name",
  something: {
    nothing: true,
    everything: false
  }
};

sampleObject.something.oooo = sampleObject;

ReactDOM.render(
  <PropertyViewer name={"sampleObject"} value={sampleObject} indent={0} />,
  document.querySelector(".container")
);
