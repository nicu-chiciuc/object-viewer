import React, { Component } from "react";

import PropertyViewer from "./PropertyViewer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rootObject: this.props.rootObject,
      extended: this.props.extended
    };
  }

  handleClicks = comp => {
    const fullPath = comp.props.fullPath;
    console.log("clicked", fullPath);

    const ind = this.state.extended.indexOf(fullPath);
    if (ind === -1) {
      this.state.extended.push(fullPath);
    } else {
      this.state.extended.splice(ind, 1);
    }
    this.setState({ extended: this.state.extended });
  };

  render() {
    return (
      <PropertyViewer
        global={this.state}
        fullPath={"rootObject"}
        name={"rootObject"}
        value={this.state.rootObject}
        callClick={this.handleClicks}
        indent={0}
      />
    );
  }
}
